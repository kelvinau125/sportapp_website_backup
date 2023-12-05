<template>
    <div class="max-w-sm m-auto p-5 border-solid">
      <h2 class="text-xl font-bold">注册使用</h2>

      <div class="form-group">
        <input placeholder="请输入用户名" type="text" v-model="userData.username" />
      </div>

      <div class="form-group flex">
        <!-- Country Code Dropdown -->
        <select v-model="userData.countryCode" class="mr-2">
          <option value="+86">+86</option>
          <option value="+60">+60</option>
          <!-- Add more country codes as needed -->
        </select>
        <input placeholder="请输入手机号码" type="text" v-model="userData.phone" />
      </div>

      <div class="form-group">
        <div class="password-container">
          <input placeholder="请输入密码" type="password" v-model="userData.password" />
          <button class="button mr-1.5">
            <img class="" src="@/assets/hide.png" />
          </button>
        </div>
      </div>

      <div class="form-group">
        <div class="password-container">
          <input placeholder="请再次输入密码" type="password" id="confirm-password" v-model="confirmPassword" />
          <button class="button mr-1.5">
            <img class="" src="@/assets/hide.png" />
          </button>
        </div>
      </div>

      <!-- <button class="bg-green-500 hover:bg-green-500" @click="register">注册</button> -->
      <ButtonCom class="w-screen">注册</ButtonCom>
      <div class="flex justify-center">
        <p>已经有账号？ <router-link to = "/login" class="text-green-500">现在登录</router-link></p>
      </div>
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
        countryCode: '+86', // Default country code
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
        // 示例：axios.post("/api/register", this.userData).then(response => { @. });
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

  </style>
