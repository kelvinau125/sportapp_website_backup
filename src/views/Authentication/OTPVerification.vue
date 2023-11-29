<template>
    <div class="otp-verification-modal" v-show="showOTPModal">
        <div class="modal-content">

         <CloseButton @click="closeOTPModalBtn"> </CloseButton>
    
        <!-- Register -->
        <form @submit.prevent="">
            <!-- starting when open the otp verfication need enter the otp number -->
            <!-- false / false  -->
            <h2 v-show="!isRegisterSuccess && !isResetPasswordSuccess" class="text-xl font-bold" style="padding: 20px">验证码验证</h2>

            <!-- done register -->
            <h2 v-show="isRegisterSuccess" class="text-xl font-bold" style="padding: 20px">注册成功</h2>

            <!-- done reset password -->
            <h2 v-show="isResetPasswordSuccess" class="text-xl font-bold" style="padding: 20px">验证码验证成功</h2>
    

            <!-- starting when open the otp verfication need enter the otp number -->
            <!-- false / false  -->
            <div v-show="!isRegisterSuccess && !isResetPasswordSuccess" v-for="(controller, index) in controllers" :key="index" class="digit-input">
                <input
                v-model="controller.value"
                @input="handleInput(index)"
                @focus="handleFocus(index)"
                @blur="handleBlur(index)"
                :class="{ 'green-border': controller.value !== '' }"
                type="text"
                maxlength="1"
                class="digit-field"
                ref="inputRefs"
                />
            </div>

            <!-- done register or done reset password -->
             <!-- true / true  -->
            <div v-show="isRegisterSuccess || isResetPasswordSuccess" class="flex justify-center my-10"><img src="@/assets/otp/Successmark.png" alt="sucessmark" style="width: 100px; height: 100px;"/></div>
    
            <!-- Warning message -->
            <!-- true / false / false  -->
            <div v-show="warningMessage && !isRegisterSuccess && !isResetPasswordSuccess" class="warning-message">
                {{ warningMessage }}
            </div>
    
            <div class="pt-12">
                <!-- starting when open the otp verfication need enter the otp number -->
                 <!-- false / false  -->
                <ButtonCom v-show="!isRegisterSuccess && !isResetPasswordSuccess" @click="verify" class="w-screen">验证</ButtonCom>

                <!-- done register -->
                <ButtonCom v-show="isRegisterSuccess" @click="gobacklogin" class="w-screen">返回登录</ButtonCom>

                <!-- starting when open the otp verfication need enter the otp number -->
                <!-- false / false  -->
                <div v-show="!isRegisterSuccess && !isResetPasswordSuccess" class="flex justify-center" style="padding: 20px">
                    <p>没有收到验证码？
                    <button class="text-green-500" v-show="!isbuttonDisabled" @click="sendAgain()">再次发送</button> 
                    <button class="text-green-500" v-show="isbuttonDisabled" disabled>{{countdownMsg}}</button>
                    </p>
                </div>
                
                <div v-show="isRegisterSuccess || isResetPasswordSuccess" class="flex justify-center" style="padding: 20px">
                </div>
            </div>
        </form>
        </div>
    </div>
</template>
          
<script>
    import ButtonCom from '@/components/ButtonPress.vue';
    import CloseButton from '@/components/CloseButton.vue';

    // import to run the register function
    import { verifyOTP, registerUser } from '@/service/apiProvider.js';

    // import to run the get otp function
    import { getOTP } from '@/service/apiProvider.js';

    // fetch data from RegisterModal.vue
    import { mapActions } from 'vuex'

    // get the user login status
    import VueCookies from 'vue-cookies';

    // import the remove cookie function
    import { removeCookie } from '@/service/cookie';

    export default {
    components:{
        ButtonCom,
        CloseButton,
    },

    // get the data passed from RegisterModal.vue (data at the store/index.js)
    computed: {
        getUserNickname() {
        return this.$store.getters.nickName
        },
        getUserPhoneNumber() {
        return this.$store.getters.phoneNumber
        },
        getUserDataPassword() {
        return this.$store.getters.password
        },
        getUserForgotPasswordStatus() {
        return this.$store.getters.status
        },
    },

    props: {
        showOTPModal: Boolean,
        closeOTPModal: Function,
        showLoginModal: Function,
        showEditPasswordModal: Function,
    },

    data() {
        return {
        warningMessage: '',

        controllers: [
            { value: '' },
            { value: '' },
            { value: '' },
            { value: '' },
        ],

        countdownMsg: "",
        isbuttonDisabled: false,

        // isChangePassword: this.$store.getters.status,
        isLogin: VueCookies.isKey('userToken'),

        isRegisterSuccess: false,
        isResetPasswordSuccess: false,

        };
    },

    created() {
        // Check for the query parameter and show the login modal if needed
        // const url = new URL(window.location.href);
        // if (url.searchParams.get('showLoginModal') === 'true') {
        //     this.showLoginModal();
        // }
    },

    methods: {
        ...mapActions(['registerDone']),

        async verify() {
            const OTPvalue = (this.controllers.map(controller => controller.value).join('')).toString();

            // reset password otp
            if(this.isLogin){
                console.log('reset password')

                const result = await verifyOTP(VueCookies.get('phoneNumber'), OTPvalue, "2");

                if (result) {
                    this.isResetPasswordSuccess = true;
                    setTimeout(() => {
                        this.showEditPasswordModal();
                        this.isResetPasswordSuccess = false;
                    }, 1500); // 1500 milliseconds = 1.5 seconds

                } else {
                    this.warningMessage = "Please check internet connection";
                }

            } 
            // forgot password
            else if (this.getUserForgotPasswordStatus){
                console.log('forgot password')

                const result = await verifyOTP(this.getUserPhoneNumber, OTPvalue, "3");

                if (result) {
                    this.isResetPasswordSuccess = true;
                    setTimeout(() => {
                        this.showEditPasswordModal();
                        this.isResetPasswordSuccess = false;
                    }, 1500); // 1500 milliseconds = 1.5 seconds

                } else {
                    this.warningMessage = "Please check internet connection";
                }
            }
            // register password otp
            else if (!this.isChangePassword && !this.isLogin){
                console.log('register')

                const result = await verifyOTP(this.getUserPhoneNumber, OTPvalue, "1");

                if (result) {
                    // run save the user data to server
                    const result = await registerUser(this.getUserNickname,this.getUserPhoneNumber,this.getUserDataPassword);

                    if (result) {
                    // the stored data in vuex
                    this.$store.dispatch('registerDone', {})

                    this.isRegisterSuccess = true;


                    } else {
                        this.warningMessage = "Please check internet connection";
                    }

                } else {
                    this.warningMessage = "Please check internet connection";
                }
            }
        },

        async sendAgain() {
            // reset password otp
            if(this.isLogin){
                console.log('reset password')
                await getOTP(VueCookies.get('phoneNumber'), "2");
                this.startCountdown();
            }
            // forgot password
            else if (this.getUserForgotPasswordStatus){
                console.log('forgot password')
                await getOTP(this.getUserPhoneNumber, "3");
                this.startCountdown();
            }  
            // register password otp
            else {
                console.log('register')
                await getOTP(this.getUserPhoneNumber, "1");
                this.startCountdown();
            }
        },

        handleInput(index) {
        let inputValue = this.controllers[index].value;

        // Check if the entered value is a digit
        if (typeof inputValue === 'string') {
            inputValue = inputValue.replace(/\D/g, ''); // Remove non-digit characters
        }

        // Check if inputValue is still a string before proceeding
        if (typeof inputValue === 'string') {
            this.controllers[index].value = inputValue;
        }

        if (this.controllers[index].value.length === 1) {
            this.focusNext(index);
        } else if (this.controllers[index].value.length === 0) {
            this.focusPrevious(index);
        }
        },
        
        handleFocus() {
        },

        handleBlur() {
        },

        focusNext(index) {
        if (index < this.controllers.length - 1) {
            const nextInput = this.$refs.inputRefs[index + 1];
            if (nextInput) {
            nextInput.focus();
            }
        } else {
            // Last input, submit or do something else
        }
        },

        focusPrevious(index) {
        if (index > 0) {
            const prevInput = this.$refs.inputRefs[index - 1];
            if (prevInput) {
            prevInput.focus();
            }
        } else {
            // First input, do something if needed
        }
        },

        startCountdown() {
            let seconds = 10; // Set your initial seconds here
            this.countdown = setInterval(() => {
                this.countdownMsg = `${seconds}秒后再发送验证码`
                this.isbuttonDisabled = true;

                if (seconds <= 0) {
                clearInterval(this.countdown);
                this.countdownMsg = "";
                this.isbuttonDisabled = false;
                }

                seconds--;
            }, 1000);
        },

        beforeDestroy() {
            clearInterval(this.countdown);
        },

        gobacklogin() {
            // Set a query parameter to indicate that login modal should be shown
            // const url = new URL(window.location.href);
            // url.searchParams.set('showLoginModal', 'true');

            // // reload the page with the modified URL after a short delay
            // window.location.href = url.toString();
            this.isRegisterSuccess = false;
            removeCookie();
            this.closeOTPModal();
            this.showLoginModal();
        },

        closeOTPModalBtn() {
            this.closeOTPModal();
        }
    },
    };
</script>
        
<style scoped>
    .otp-verification-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    z-index: 1000 ;
    }
    
    .modal-content {
    background: #F4F9F4;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    width: 400px;
    color: black;
    position: relative; 
    }

    .form-group {
    margin-bottom: 15px;
    }

    input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    }

    label {
    display: block;
    font-weight: bold;
    }
    
    .button {
    position: absolute;
    right: 5px;
    background: none;
    border: none;
    cursor: pointer;
    }

    select{
    border: 1px solid #ccc;
    border-radius: 5px;
    }

    .warning-message {
    color: red;
    margin-bottom: 10px;
    }

    .digit-input {
    display: inline-block;
    margin-right: 10px;
    margin-left: 10px; /* Adjust as needed */
    }

    .digit-field {
    height: 60px; /* Adjust as needed */
    width: 70px; /* Adjust as needed */
    text-align: center;
    font-size: 22px; /* Adjust as needed */
    border: 1px solid #ccc; /* Adjust as needed */
    border-radius: 6px; /* Adjust as needed */
    margin-bottom: 80px; /* Adjust as needed */
    }

    .green-border {
    border: 3px solid  rgb(34 197 94); /* Change to your desired color */
    }


</style>
        