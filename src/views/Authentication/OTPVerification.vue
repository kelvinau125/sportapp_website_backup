<template>
    <div class="otp-verification-modal" v-show="showOTPModal">
        <div class="modal-content">

         <CloseButton @click="closeOTPModalBtn"> </CloseButton>
    
        <!-- Register -->
        <form @submit.prevent="">
            <h2 v-show="!isRegisterSuccess" class="text-xl font-bold" style="padding: 20px">验证码验证</h2>
            <h2 v-show="isRegisterSuccess" class="text-xl font-bold" style="padding: 20px">注册成功</h2>
    
            <div v-show="!isRegisterSuccess" v-for="(controller, index) in controllers" :key="index" class="digit-input">
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

            <div v-show="isRegisterSuccess" class="flex justify-center my-10"><img src="@/assets/otp/Successmark.png" alt="sucessmark" style="width: 100px; height: 100px;"/></div>
    
            <!-- Warning message -->
            <div v-show="warningMessage && !isRegisterSuccess" class="warning-message">
                {{ warningMessage }}
            </div>
    
            <div class="pt-12">
                <ButtonCom v-show="isRegisterSuccess" @click="gobacklogin" class="w-screen">返回登录</ButtonCom>
                <ButtonCom v-show="!isRegisterSuccess" @click="verify" class="w-screen">验证</ButtonCom>
                <div v-show="!isRegisterSuccess" class="flex justify-center" style="padding: 20px">
                    <p>没有收到验证码？
                    <button class="text-green-500" v-show="!isbuttonDisabled" @click="sendAgain()">再次发送</button> 
                    <button class="text-green-500" v-show="isbuttonDisabled" disabled>{{countdownMsg}}</button>
                    </p>
                </div>
                <div v-show="isRegisterSuccess" class="flex justify-center" style="padding: 20px">
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
    },

    props: {
        showOTPModal: Boolean,
        closeOTPModal: Function,
        showLoginModal: Function,
        showEditPassword: Function,
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
        isRegisterSuccess: false,

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
        },

        async sendAgain() {
            await getOTP(this.getUserPhoneNumber, "1");
            this.startCountdown();
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
        