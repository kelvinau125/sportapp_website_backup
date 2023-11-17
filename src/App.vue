<template>
    <Navbar/>
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
// import { ref } from 'vue'
import Navbar from './components/NavBar.vue'
// import FooterPage from './components/FooterPage.vue'

const scrollToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
};

// import HomeView from './views/HomeView.vue'

// const img = ref(require('./assets/topNav/football.png'))

</script>

<style>

#app {
  width: 100%;
  background-color: #F4F9F4;
  font-family: 'Inter', sans-serif;
  /* overflow-x: hidden; */
  height: 100vh;
}

.go-up {
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
}

</style>
