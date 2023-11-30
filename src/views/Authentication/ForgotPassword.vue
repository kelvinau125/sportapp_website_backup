<template>
    <div class="forgot-password-modal" v-show="showForgotPasswordModal">
        <div class="modal-content">
    
        <!-- close button -->
        <CloseButton @click="closeForgotPasswordModal"> </CloseButton>
    
        <!-- forgot password -->
        <form @submit.prevent="">
            <h2 class="text-xl font-bold" style="padding: 20px">{{ $t("Forgot Password") }}</h2>
            <div class="form-group flex">
                <!-- https://vuejsexamples.com/international-telephone-input-with-vue/ -->
                <!-- API website for future modify -->
                <!-- <vue-tel-input v-model="countryCode" v-bind="bindPropsUserInfo" :inputOptions="{ showDialCode: true, tabindex: 0 }" class="mr-2" style="width: 70px; background: white;"/> -->
                <vue-tel-input v-model="countryCode" v-bind="bindPropsUserInfo" style="width: 100%; background: white; padding: 5px"/>
                <!-- <input placeholder="请输入手机号码"  type="text" id="phone"  v-model="phoneNumber" required /> -->
            </div>

            <!-- Warning message -->
            <div v-if="warningMessage" class="warning-message">
                {{ warningMessage }}
            </div>

            <p class="mb-20">{{ $t("No Worry! Please Enter Your Registered Phone Number") }}.</p>

    
            <div class="pt-12">
                <ButtonCom @click="forgotPassword()" class="w-screen">{{ $t("Send OTP") }}</ButtonCom>
                <div class="flex justify-center" style="padding: 20px">
                    <p>{{ $t("Remember Password?") }} <button class="text-green-500" @click="showLoginModal">{{ $t("Login Now") }}</button></p>
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

    import { VueTelInput } from 'vue-tel-input'
    import 'vue-tel-input/vue-tel-input.css';

    // import to run the get otp function
    import { getOTP } from '@/service/apiProvider.js';

    // pass value to OTPVerficaition.vue
    import { mapActions } from 'vuex'

    export default {
    components:{
        VueTelInput,
        ButtonCom,
        CloseButton,
    },

    props: {
        showForgotPasswordModal: Boolean,
        closeForgotPasswordModal: Function,
        showLoginModal: Function,
        showOTPModal: Function,
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
        ...mapActions(['forgotPassword']),

        async forgotPassword() {
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
            this.$store.dispatch('forgotPassword', { phoneNumber: countryCode, status: true, userId: 1 })

            // close the modal
            this.closeForgotPasswordModal();
            // show verify otp page
            this.showOTPModal();
            
        } else if (result === false) {
            this.warningMessage = "Please check your network";
        } else {
            this.warningMessage = result;
        }

        },
    
    },
    };
</script>
        
<style scoped>
    .forgot-password-modal {
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
          