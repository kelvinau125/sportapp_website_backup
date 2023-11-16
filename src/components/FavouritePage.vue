<template>
    <FavouritePage>
      <div class="live-container">
        <div class="live-window ">
          <div>直播窗口内容</div>
        </div>
      </div>
      <div class="live-container">
        <div class="epic grid grid-cols-5 gap-3">
          <img src="../assets/main/moment5.png" alt="" class="rounded-lg col-span-1">
          <img src="../assets/main/moment5.png" alt="" class="rounded-lg col-span-1">
          <img src="../assets/main/moment5.png" alt="" class="rounded-lg col-span-1">
          <img src="../assets/main/moment5.png" alt="" class="rounded-lg col-span-1">
          <img src="../assets/main/moment5.png" alt="" class="rounded-lg col-span-1">
        </div>
      </div>
    </FavouritePage>
  
</template>

<script>
import FavouritePage from '@/components/BackGround.vue'

export default {
  components: {
    FavouritePage
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
