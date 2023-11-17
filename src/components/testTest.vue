<template>
  <vue-tel-input v-model="countryCode"  v-bind="bindPropsUserInfo" :inputOptions="{ showDialCode: true, tabindex: 0 }"/>
  <br>
  <p v-if="isLoggedIn">Hello, {{ getUsername }}!</p>
  <br>
  <button @click="login">Login</button>
  <br>
  <button @click="logout">logout</button>
<div style="height: 150rem" />


</template>

<script>
import { VueTelInput } from 'vue-tel-input'
import 'vue-tel-input/vue-tel-input.css';
import VueCookies from 'vue-cookies'
import { mapActions } from 'vuex'

export default {
  components: {
    VueTelInput,
  },
  
  data() {
    return {
      countryCode: '',
    };
  },

  computed: {
    // ...mapGetters(['isLoggedIn', 'username']),
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    getUsername() {
      return this.$store.getters.username
    },
  },
  
  methods: {
    ...mapActions(['login', 'logout']),

    login() {
      // Implement your login logic here
      console.log('Logging in...');
      console.log('Selected Country Code:', this.countryCode);
    },
    logout() {
      VueCookies.remove('userToken');
      VueCookies.remove('phoneNumber');
      VueCookies.remove('token');
    },
  },
}
</script>
