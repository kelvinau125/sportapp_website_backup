<template>
  <div class="home">
    <register/>
  </div>
</template>

<script>
// @ is an alias to /src
import register from '@/components/RegisterForm.vue'

export default {
  name: 'RegisterForm',
  components: {
    register
  }
}
</script>
