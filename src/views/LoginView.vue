<template>
    <div>
        <img alt="Vue logo" src="../assets/logo.png">
        <LoginPage/>
    </div>
</template>

<script>
import LoginPage from '@/components/LogIn.vue'
export default {
  name: 'LoginForm',
  components: {
    LoginPage
  }
}

</script>
