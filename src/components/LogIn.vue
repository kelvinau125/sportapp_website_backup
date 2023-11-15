<template>
    <div class="login-form">
      <h2 class="text-xl font-bold">登入使用</h2>

      <div class="form-group">
        <input placeholder="请输入手机号码"  type="text" id="phone" v-model="userData.phone" />
      </div>

      <div class="form-group">
        <input placeholder="请输入密码" type="password" id="password" v-model="userData.password" />
      </div>

      <ButtonCom @click="login" class="w-screen">登入</ButtonCom>
      <!-- <button @click="register">登入</button> -->
      <router-link class="flex justify-end" to = "/login">忘记密码？</router-link>
    </div>
  </template>

<script setup>
import ButtonCom from './ButtonPress.vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const userData = ref({
  phone: '',
  password: ''
});


const login = () => {
  // if (userData.value.password !== confirmPassword.value) {
  //   alert('Passwords do not match');
  // } else {
  //   // Perform login logic here, e.g., send user data to the server
  //   // Example: axios.post("/api/login", userData.value).then(response => { ... });
  // }
};
</script>


  <style scoped>
  .login-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    display: block;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
  }

  /* button {
    width: 100%;
    padding: 10px;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  } */

  /* button:hover {
    background-color: #0056b3;
  } */
  </style>
