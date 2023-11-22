<template>
<div class="login-modal" v-show="showModal">
    <div class="modal-content">

    <!-- close button -->
    <CloseButton @click="closeModal"> </CloseButton>

    <!-- login -->
    <form @submit.prevent="">
        <h2 class="text-xl font-bold" style="padding: 20px">{{ $t("Welcome Back, Please Login") }}</h2>
        <div class="form-group flex">
            <!-- https://vuejsexamples.com/international-telephone-input-with-vue/ -->
            <!-- API website for future modify -->
            <!-- <vue-tel-input v-model="countryCode" v-bind="bindPropsUserInfo" :inputOptions="{ showDialCode: true, tabindex: 0 }" class="mr-2" style="width: 70px; background: white;"/> -->
            <vue-tel-input v-model="countryCode" v-bind="bindPropsUserInfo" style="width: 100%; background: white; padding: 5px"/>
            <!-- <input placeholder="请输入手机号码"  type="text" id="phone"  v-model="phoneNumber" required /> -->
        </div>

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

        <!-- Warning message -->
        <div v-if="warningMessage" class="warning-message">
            {{ warningMessage }}
        </div>

        <div class="flex justify-end"><button class="text-black font-bold" @click="showForgotPasswordModal">{{ $t("Forgot Password?") }}</button></div>

        <div class="pt-12">
            <ButtonCom @click="login" class="w-screen">{{ $t("Login") }}</ButtonCom>
            <div class="flex justify-center" style="padding: 20px">
                <p>{{ $t("Already Have An Account? ") }} <button class="text-green-500" @click="showRegisterModal">{{ $t("Register Now") }}</button></p>
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

    // import to run the login function
    import { loginUser } from '@/service/apiProvider.js';

    export default {
    components:{
        VueTelInput,
        ButtonCom,
        CloseButton,
    },

    props: {
        showModal: Boolean,
        closeModal: Function,
        showRegisterModal: Function,
        showForgotPasswordModal: Function,
    },

    data() {
        return {
        username: '',
        password: '',
        countryCode: '',
        bindPropsUserInfo: {
            inputOptions: { showDialCode: true, tabindex: 0 },
            validCharactersOnly: true
        },
        warningMessage: '',
        passwordVisibility: false,
        };
    },

    computed: {
        passwordFieldType() {
        return this.passwordVisibility ? 'text' : 'password';
        },
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

        if ( (
        this.password === null || this.password === undefined || this.password.trim() === ''
        )) {
            this.warningMessage = this.$t("Password cannot be empty");
            return;
        }


        const countryCode = this.countryCode; // Set your countryCode here
        const password = this.password; // Set your password here

        const result = await loginUser(countryCode, password);

        if (result) {
            // close the modal and refresh the page
            this.closeModal();
            window.location.reload();
        } else {
            this.warningMessage = this.$t("Please Enter Correct Password");
        }

        },

        togglePasswordVisibility() {
            this.passwordVisibility = !this.passwordVisibility;
        },
    
    },
    };
</script>
      
<style scoped>
    .login-modal {
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
      