<template>
  <div class="login-form">
    <div>
      <h2 class="text-xl font-bold">登入使用</h2>
      <div class="form-group flex">
        <!-- Country Code Dropdown -->
        <select v-model="userData.countryCode" class="mr-2">
          <option value="+86">+86</option>
          <option value="+60">+60</option>
          <!-- Add more country codes as needed -->
        </select>
        <input placeholder="请输入手机号码"  type="text" id="phone" v-model="userData.phone" />
      </div>

      <div class="form-group">
        <div class="password-container">
          <input placeholder="请输入密码" type="password" id="password" v-model="userData.password" />
          <button class="button mr-1.5">
            <img class="" src="../assets/hide.png" />
          </button>
        </div>
      </div>
      <router-link to="#" class="flex justify-end"><p class="text-black font-bold">忘记密码 ?</p></router-link>
    </div>
    <div class="pt-10">
      <ButtonCom @click="login" class="w-screen">登入</ButtonCom>
      <!-- <button @click="register">登入</button> -->
      <div class="flex justify-center">
        <p>还没有账号？ <router-link to = "/register" class="text-green-500">现在注册</router-link></p>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import ButtonCom from './ButtonPress.vue';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const userData = ref({
  countryCode: '+86', // Default country code
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

select{
  border: 1px solid #ccc;
  border-radius: 5px;
}
.password-container {
display: flex;
align-items: center;
/* justify-content: space-between; */
width: 100%;
position: relative;
}
#password {
  flex: 1;
  padding-right: 30px; /* Space for the toggle button */
}
.button {
  position: absolute;
  right: 5px;
  background: none;
  border: none;
  cursor: pointer;
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
