<template>
<div class="login-modal" v-show="showModal">
    <div class="modal-content">

     <!-- close button -->
     <button class="close-button" @click="closeModal"> 
        <img src="../assets/close.png" alt="Close" />
     </button>

    <!-- login -->
    <form @submit.prevent="login">
        <h2 class="text-xl font-bold" style="padding: 20px">{{ $t("Welcome Back, Please Login") }}</h2>
        <div class="form-group flex">
            <!-- https://vuejsexamples.com/international-telephone-input-with-vue/ -->
            <!-- API website for future modify -->
            <!-- <vue-tel-input v-model="countryCode" v-bind="bindPropsUserInfo" :inputOptions="{ showDialCode: true, tabindex: 0 }" class="mr-2" style="width: 70px; background: white;"/> -->
            <vue-tel-input v-model="countryCode" v-bind="bindPropsUserInfo" style="width: 100%; background: white; padding: 5px"/>
            <!-- <input placeholder="请输入手机号码"  type="text" id="phone"  v-model="phoneNumber" required /> -->
        </div>


        <!-- <div class="form-group">
            <div class="password-container">
            <input placeholder="请输入密码" type="password" id="password" v-model="password" required />
            <button class="button mr-1.5">
                <img class="" src="../assets/hide.png" />
            </button>
            </div>
        </div> -->
        <div class="form-group">
            <div class="password-container">
            <input
            :placeholder="$t('Please Enter Password')"
            :type="passwordFieldType"
            id="password"
            v-model="password"
            required
            />
            <button class="button mr-1.5">
                <!-- <img :src="passwordVisibility ? '@/assets/hide.png' : '@/assets/hide.png'" /> -->
                <img v-if="passwordVisibility" src="../assets/unhide.png" alt="UnHide Password" @click="togglePasswordVisibility" />
                <img v-else src="../assets/hide.png" alt="Hide Password" @click="togglePasswordVisibility" />
            </button>
            </div>
        </div>

        <!-- Warning message -->
        <div v-if="warningMessage" class="warning-message">
            {{ warningMessage }}
        </div>

        <router-link to="#" class="flex justify-end"><p class="text-black font-bold">{{ $t("Forgot Password?") }}</p></router-link>

        <div class="pt-12">
            <ButtonCom @click="login" class="w-screen">{{ $t("Login") }}</ButtonCom>
            <div class="flex justify-center" style="padding: 20px">
                <p>{{ $t("Already Have An Account? ") }} <router-link to = "/register" class="text-green-500">{{ $t("Register Now") }} </router-link></p>
            </div>
        </div>
    </form>
    </div>
</div>
</template>
      
<script>
    import ButtonCom from './ButtonPress.vue';
    import { VueTelInput } from 'vue-tel-input'
    import 'vue-tel-input/vue-tel-input.css';

    // import to run the login function
    import { loginUser } from '@/service/auth.js';

    export default {
    components:{
        VueTelInput,
        ButtonCom,
    },

    props: {
        showModal: Boolean,
        closeModal: Function,
    },

    data() {
        return {
        username: '',
        password: '',
        countryCode: '',
        bindPropsUserInfo: {
            inputOptions: { showDialCode: true, tabindex: 0 },
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
            if ( (
            this.countryCode !== null && this.countryCode !== undefined && this.countryCode.trim() !== '' &&
            this.password !== null && this.password !== undefined && this.password.trim() !== ''
            )) {
                const countryCode = this.countryCode; // Set your countryCode here
                const password = this.password; // Set your password here

                const result = await loginUser(countryCode, password);

                if (result) {
                    this.password = '';

                    // close the modal and refresh the page
                    this.closeModal();
                    window.location.reload();
                } else {
                    this.warningMessage = this.$t("Please Enter Correct Password");
                }
            } else {
                this.warningMessage = this.$t("Phone Number and Password cannot be empty");
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

    .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    }

    .close-button img {
    width: 20px;
    }

    .warning-message {
    color: red;
    margin-bottom: 10px;
    }


</style>
      