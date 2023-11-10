<template>
    <div class="max-w-sm m-auto p-5 border-solid">
      <h2 class="text-xl font-bold">注册使用</h2>

      <div class="form-group">
        <input placeholder="请输入用户名" type="text" id="username" v-model="userData.username" />
      </div>

      <div class="form-group">
        <input placeholder="请输入手机号码" type="text" id="phone" v-model="userData.phone" />
      </div>

      <div class="form-group">
        <input placeholder="请输入密码" type="password" id="password" v-model="userData.password" />
      </div>

      <div class="form-group">
        <input placeholder="请再次输入密码" type="password" id="confirm-password" v-model="confirmPassword" />
      </div>

      <!-- <button class="bg-green-500 hover:bg-green-500" @click="register">注册</button> -->
      <ButtonCom class="w-screen">注册</ButtonCom>
      <p>已经有账号？ <router-link to = "/login">现在登入</router-link></p>
    </div>

  </template>

<script>
import ButtonCom from './ButtonPress.vue'
export default {
  components: {
    ButtonCom
  },
  data () {
    return {
      userData: {
        username: '',
        phone: '',
        password: ''
      },
      confirmPassword: ''
    }
  },
  methods: {
    register () {
      if (this.userData.password !== this.confirmPassword) {
        alert('密码与确认密码不一致')
      } else {
        // 在这里执行注册逻辑，可以将用户数据发送到服务器或进行其他处理
        // 例如，你可以使用 Axios 或 Fetch API 来发送 POST 请求
        // 示例：axios.post("/api/register", this.userData).then(response => { ... });
      }
    }
  }
}
</script>

  <style scoped>
  .register-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: center;
  }

  .form-group {
    margin-bottom: 15px;
    border: 1px solid #ccc
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

  button {
    /* width: 100%; */
    /* padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px; */
  }

  </style>
