<template>
  <div>
    <component v-if="!isMobileView" :is="navbarComponent" />
    <router-view />
      <div class="go-up">
        <img @click="scrollToTop" src="./assets/goUp.png" />
      </div>
      <div class="sticky-navbar">
      <!-- Render Navbar or MobileNavbar based on the screen width -->
      <component v-if="isMobileView" :is="navbarComponent" />
    </div>
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue';
import MobileNavbar from './components/MobileNavBar.vue';

export default {
  components: {
    Navbar,
    MobileNavbar,
  },

  data() {
    return {
      navbarComponent: null,
      isMobileView: false,
    };
  },

  methods: {
    scrollToTop() {
      const appElement = document.getElementById('app');
      if (appElement) {
        appElement.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    updateNavbarComponent() {
      this.isMobileView = window.innerWidth <= 767;
      this.navbarComponent = window.innerWidth <= 767 ? 'MobileNavbar' : 'Navbar';
    },
  },

  mounted() {
    this.updateNavbarComponent();
    window.addEventListener('resize', this.updateNavbarComponent);
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.updateNavbarComponent);
  },
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
  position: fixed;
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
