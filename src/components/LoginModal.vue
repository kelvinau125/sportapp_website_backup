<template>
<div class="login-modal" v-show="showModal">
    <div class="modal-content">

     <!-- close button -->
     <button class="close-button" @click="closeModal"> 
        <img src="../assets/close.png" alt="Close" />
     </button>

    <!-- login -->
    <form @submit.prevent="login">
        <h2 class="text-xl font-bold" style="padding: 20px">登入使用</h2>
        <div class="form-group flex">

            <!-- https://vuejsexamples.com/international-telephone-input-with-vue/ -->
            <!-- API website for future modify -->
            <vue-tel-input v-model="countryCode" v-bind="bindPropsUserInfo" :inputOptions="{ showDialCode: true, tabindex: 0 }" class="mr-2" style="width: 70px; background: white;"/>
            <input placeholder="请输入手机号码"  type="text" id="phone"  v-model="phoneNumber" required />
        </div>


        <div class="form-group">
            <div class="password-container">
            <input placeholder="请输入密码" type="password" id="password" v-model="password" required />
            <button class="button mr-1.5">
                <img class="" src="../assets/hide.png" />
            </button>
            </div>
        </div>

        <router-link to="#" class="flex justify-end"><p class="text-black font-bold">忘记密码 ?</p></router-link>

        <div class="pt-12">
            <ButtonCom @click="login" class="w-screen">登入</ButtonCom>
            <div class="flex justify-center" style="padding: 20px">
                <p>还没有账号？ <router-link to = "/register" class="text-green-500">现在注册</router-link></p>
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
        bindPropsUserInfo: {},
        };
    },

    methods: {
        async login() {
            if ( (
            this.countryCode !== null && this.countryCode !== undefined && this.countryCode.trim() !== '' &&
            this.phoneNumber !== null && this.phoneNumber !== undefined && this.phoneNumber.trim() !== '' &&
            this.password !== null && this.password !== undefined && this.password.trim() !== ''
            )) {

                const countryCode = this.countryCode; // Set your countryCode here
                const phoneNumber = this.phoneNumber; // Set your phoneNumber here
                const password = this.password; // Set your password here

                const result = await loginUser(countryCode, phoneNumber, password);

                if (result) {
                    console.log('Successfully logged in');
                    this.phoneNumber = '';
                    this.password = '';

                    // close the modal and refresh the page
                    this.closeModal();
                    window.location.reload();
                } else {
                    console.log('Login failed');
                }
            } else {
                console.log('Empty contant number or password');
            }
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


</style>
      