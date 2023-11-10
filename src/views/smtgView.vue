<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <smtg msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import smtg from '@/components/smtg.vue'

export default {
  name: 'HomeView',
  components: {
    smtg
  }
}
</script>
