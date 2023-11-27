<template>
  <div class="home">
    <favourite/>
  </div>
</template>

<script>
// @ is an alias to /src
import favourite from '@/components/FavouritePage.vue'

export default {
  name: 'FavouriteView',
  components: {
    favourite
  }
}
</script>
