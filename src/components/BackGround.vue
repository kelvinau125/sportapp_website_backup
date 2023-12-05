<template>
     <div :class="{ 'backgroundImg': currentChannel, 'basketballbackgroundImg': !currentChannel }">
      <slot></slot>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
  data() {
    return{
      currentChannel: ref((localStorage.getItem('currentChannel') === "football")?true :false),
    };
  },
}
</script>

<style>
.backgroundImg {
  display: flex;
  flex-direction: column;
  width: 892px;
  height: 647px;
  align-items: center;
  background-image: url('@/assets/main/background_2.png');
  background-size:cover ;
  background-position: center;
  width: 100%;
  position: relative;
}

.basketballbackgroundImg {
  display: flex;
  flex-direction: column;
  width: 1920px;
  height: 647px;
  align-items: center;
  background-image: url('@/assets/main/basketballbackground.png');
  background-size:cover ;
  background-position: center;
  width: 100%;
  overflow: hidden;

}
</style>