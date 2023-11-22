<template>
    <div class="edit-password-modal" v-show="showEditPasswordModal">
        <div class="modal-content">
    
        <!-- close button -->
        <CloseButton @click="closeForgotPasswordModal"> </CloseButton>
    
        <!-- login -->
        <form @submit.prevent="">
            <h2 class="text-xl font-bold" style="padding: 20px">创建新密码</h2>
            <div class="form-group">
                <div class="password-container">
                <input
                :placeholder="$t('Please Enter Password')"
                :type="passwordFieldType"
                id="password"
                v-model="password"
                required
                />
                <div class="button mr-1.5">
                    <!-- <img :src="passwordVisibility ? '@/assets/hide.png' : '@/assets/hide.png'" /> -->
                    <img v-if="passwordVisibility" src="@/assets/unhide.png" alt="UnHide Password" @click="togglePasswordVisibility" />
                    <img v-else src="@/assets/hide.png" alt="Hide Password" @click="togglePasswordVisibility" />
                </div>
                </div>
            </div>

            <div class="form-group">
                <div class="password-container">
                <input
                :placeholder="$t('Please Enter Password Again')"
                :type="passwordFieldType2nd"
                id="password2nd"
                v-model="password2nd"
                required
                />
                <div class="button mr-1.5">
                    <!-- <img :src="passwordVisibility ? '@/assets/hide.png' : '@/assets/hide.png'" /> -->
                    <img v-if="passwordVisibility2nd" src="@/assets/unhide.png" alt="UnHide Password" @click="togglePasswordVisibility2nd" />
                    <img v-else src="@/assets/hide.png" alt="Hide Password" @click="togglePasswordVisibility2nd" />
                </div>
                </div>
            </div>

            <!-- Warning message -->
            <div v-if="warningMessage" class="warning-message">
                {{ warningMessage }}
            </div>

            <p class="mb-20">新的密码需要与旧的密码不相同</p>

    
            <div class="pt-12">
                <ButtonCom @click="login" class="w-screen">发送验证码</ButtonCom>
                <div class="flex justify-center" style="padding: 20px">
                    <p>还记得密码吗？ <button class="text-green-500" @click="showLoginModal">{{ $t("Login Now") }}</button></p>
                </div>
            </div>
        </form>
        </div>
    </div>
</template>
          
<script>
    // component
    import ButtonCom from '@/components/ButtonPress.vue';
    import CloseButton from '@/components/CloseButton.vue';

    // import to run the get otp function
    import { getOTP } from '@/service/apiProvider.js';

    export default {
    components:{
        ButtonCom,
        CloseButton,
    },

    props: {
        showEditPasswordModal: Boolean,
        closeEditPasswordModal: Function,
    },

    data() {
        return {
        countryCode: '',
        bindPropsUserInfo: {
            inputOptions: { showDialCode: true, tabindex: 0 },
            validCharactersOnly: true
        },
        warningMessage: '',
        };
    },

    methods: {
        async login() {
        // validation of phone number
        if (this.countryCode.startsWith('+60') || this.countryCode.startsWith('+86')){
            if(this.countryCode.trim().length < 12){
                this.warningMessage = this.$t("Please enter the correct phone number");
                return;
            }
        } else{
            if(this.countryCode.trim().length < 8){
                this.warningMessage = this.$t("Please enter the correct phone number");
                return;
            }
        }

        // validate empty value
        if ( (
        this.countryCode === null || this.countryCode === undefined || this.countryCode.trim() === ''
        )) {
            this.warningMessage = this.$t("Phone Number cannot be empty");
            return;
        }

        const countryCode = this.countryCode 

        // send OTP to user phone
        const result = await getOTP(countryCode, "3");

        if (result === true) {
            // pass value to OTPVerficaition.vue
            // this.$store.dispatch('register', { nickName: nickname, phoneNumber: countryCode, password: password, userId: 1 })

            // // close the modal
            // this.closeRegModal();
            // // show verify otp page
            // this.showOTPModal();
            
        } else if (result === false) {
            this.warningMessage = "Please check your network";
        } else {
            this.warningMessage = result;
        }

        },

        togglePasswordVisibility() {
            this.passwordVisibility = !this.passwordVisibility;
        },

        togglePasswordVisibility2nd() {
            this.passwordVisibility2nd = !this.passwordVisibility2nd;
        },
    
    },
    };
</script>
        
<style scoped>
    .edit-password-modal {
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

    .password-container {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    width: 100%;
    position: relative;
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


</style>
          