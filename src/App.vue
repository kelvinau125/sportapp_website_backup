<template>

    <router-view/>
     <!-- HOMEVIEW FOR LIVE (BANNER) 
     热门赛程
     热门主播榜 -->
    <!-- <FooterPage/> -->
    <div class="go-up">
      <img @click="scrollToTop" src="./assets/goUp.png" />
    </div>
    <!-- <div class="bg-navColor"> -->
    <div class="sticky-navbar">
    <Navbar />
  </div>

</template>

<script>
import Navbar from './components/MobileNavBar.vue';

export default {
  components: {
    Navbar
  },
  methods: {
    scrollToTop() {
      const appElement = document.getElementById('app');
      if (appElement) {
        appElement.scrollTo({ top: 0, behavior: 'smooth' });
        console.log(appElement);
      }
    }
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

.sticky-navbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

</style>
