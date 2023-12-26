<template>
  <div>
    <component v-if="!isMobileView" :is="navbarComponent" />
    <component v-if="isMobileView" :is="topnavbarComponent" />
    <router-view />
    <div class="go-up">
      <img @click="scrollToTop" src="./assets/goUp.png" />
    </div>

    <div ref="downloadApp" v-show="isVisible" class="downloadApp">
      <div class=" flex justify-end pb-2">
        <img @click="hideAndShowAfterDelay" class="w-[24px] h-[24px] cursor-pointer" src='@/assets/closeButton.png' />
      </div>
      <div class="w-[251px] h-[126px] bg-white rounded-lg flex justify-evenly items-center">
        <div class="flex flex-col items-center">
          <span class="text-10px font-normal pb-2" style="color: rgba(153, 153, 153, 1);">扫码下载最新安装包</span>
          <ButtonButton style="background-color: rgba(252, 86, 41, 1);" class="rounded-[4px] flex items-center justify-center w-[105px] h-[30px] mb-1">
            <span class="font-normal text-xs " style="color: rgba(255, 255, 255, 1);">IOS下载</span>
          </ButtonButton>
          <ButtonButton style="background-color: rgba(252, 86, 41, 1);" class="rounded-[4px] flex items-center justify-center w-[105px] h-[30px] mt-1  ">
            <span class="font-normal text-xs" style="color: rgba(255, 255, 255, 1);">Android下载</span>
          </ButtonButton>

        </div>
        <div style="background-color: rgba(217, 217, 217, 1);" class="bg-gray-500 w-[90px] h-[90px] flex items-center justify-center">
          <span class="text-base font-normal">二维码</span>
        </div>
      </div>
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
import MobileTopNavbar from './components/MobileTopNavBar.vue';
import ButtonButton from '@/components/ButtonPress.vue';
// import { ref, watch, onMounted } from 'vue';


export default {
  components: {
    Navbar,
    MobileNavbar,
    MobileTopNavbar,
    ButtonButton
  },

  data() {
    return {
      navbarComponent: null,
      topnavbarComponent: null,
      isMobileView: false,

      isVisible: false,

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
    showDownloadApp() {
      this.isVisible = true;
    },
    hideDownloadApp() {
      this.isVisible = false;
    },
    autoShowAfterDelay() {
      this.showDownloadApp();

      // Set an interval to periodically hide and show the download window
      setInterval(() => {
        this.hideAndShowAfterDelay();
      }, 10000); // Adjust the interval as needed
    },
    hideAndShowAfterDelay() {
      this.hideDownloadApp();

      // Set a timeout to show the download window again after a certain delay
      setTimeout(() => {
        this.showDownloadApp();
      }, 5000); // Adjust the delay as needed
    },


  },

  mounted() {
    this.updateNavbarComponent();
    window.addEventListener('resize', this.updateNavbarComponent);
    this.autoShowAfterDelay();

  },

  beforeUnmount() {
    window.removeEventListener('resize', this.updateNavbarComponent);
  },
  watch: {
    isVisible(newValue) {
      if (!newValue) {
        // Set a timeout to show the download window again after a certain delay
        setTimeout(() => {
          this.showDownloadApp();
        }, 8000); // Adjust the delay as needed
      }
    },
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

.downloadApp {
  position: fixed;
  bottom: 50%;
  right: 8%;
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
