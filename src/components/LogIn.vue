<template>
    <h1>THIS IS LOGIN PAGE</h1>
    <h1>玩转Router App</h1>
    <div class="register-form">
      <h2>用户注册</h2>

      <div class="form-group">
        <label for="username">用户名</label>
        <input type="text" id="username" v-model="userData.username" />
      </div>

      <div class="form-group">
        <label for="phone">电话号码</label>
        <input type="text" id="phone" v-model="userData.phone" />
      </div>

      <div class="form-group">
        <label for="password">密码</label>
        <input type="password" id="password" v-model="userData.password" />
      </div>

      <div class="form-group">
        <label for="confirm-password">确认密码</label>
        <input type="password" id="confirm-password" v-model="confirmPassword" />
      </div>

      <button @click="register">注册</button>
    </div>
  </template>

<script>
export default {
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

  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  button:hover {
    background-color: #0056b3;
  }
  </style>
