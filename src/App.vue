<template>
  <div class="bg-navColor">
    <Navbar />
  </div>
    <router-view/>
     <!-- HOMEVIEW FOR LIVE (BANNER) 
     热门赛程
     热门主播榜 -->
    <!-- <FooterPage/> -->
    <div class="go-up">
      <img @click="scrollToTop" src="./assets/goUp.png" />
    </div>

</template>
<script setup>
import Navbar from './components/NavBar.vue'

const scrollToTop = () => {
  // 添加了overflow导致scrollToTop功能失效，
  // 因为window.scrollTo只能滚动到可滚动元素的顶部，而不是整个窗口的顶部。
  // 可以将滚动操作应用于#app元素而不是window

  const appElement = document.getElementById('app');
  if (appElement) {
    appElement.scrollTo({ top: 0,  behavior: 'smooth' });
    console.log(appElement);
  }
};


</script>

<style>

#app {
  width: 100%;
  background-color: #F4F9F4;
  font-family: 'Inter', sans-serif;
  overflow-x: auto;
  height: 100vh;
}

.go-up {
  position:fixed;
  bottom: 20%;
  right: 15%;
  cursor: pointer;
  z-index: 1000;
}

</style>
