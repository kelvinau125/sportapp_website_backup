<template>
    <LoginModal
      :showModal="isLoginModalVisible"
      :closeModal="closeLoginModal"
      :showRegisterModal="showRegisterModal"
      :showForgotPasswordModal="showForgotPasswordModal"
    />

    <RegisterModal
      :showRegModal="isResgitserModalVisible"
      :closeRegModal="closeRegisterModal"
      :showLoginModal="showLoginModal"
      :showOTPModal="showOTPModal"
    />

    <OTPModal
      :showOTPModal="isOTPModalVisible"
      :closeOTPModal="closeOTPModal"
      :showLoginModal="showLoginModal"
      :showEditPasswordModal="showEditPasswordModal"
    />

    <ForgotPasswordModal
      :showForgotPasswordModal="isForgotPasswordModalVisible"
      :closeForgotPasswordModal="closeForgotPasswordModal"
      :showLoginModal="showLoginModal"
      :showOTPModal="showOTPModal"
    />

    <EditPassword
      :showEditPasswordModal="isEditPasswordModalVisible"
      :closeEditPasswordModal="closeEditPasswordModal"
      :showLoginModal="showLoginModal"
    />

    <MyPage
      :showMyPageModal="isMyPageModalVisible"
      :closeMyPageModal="closeMyPageModal"
      :showEditProfileModal="showEditProfileModal"
      :showStreamDetailModal="showStreamDetailModal"
    />

    <EditProfile
      :showEditProfileModal="isEditProfileModalVisible"
      :closeEditProfileModal="closeEditProfileModal"
      :gobackmypage="gobackmypage"
      :showOTPModal="showOTPModal"
      :showEditNicknameModal="showEditNicknameModal"
    />

    <EditNicknameModal
      :showEditNicknameModal="isEditNicknameModalVisible"
      :closeEditNicknameModal="closeEditNicknameModal"
      :showEditProfileModal="showEditProfileModal"
    />

  <div>
    <component v-if="!isMobileView" :is="navbarComponent" />
    <component v-if="isMobileView" :is="topnavbarComponent" />
    <router-view />
    <div v-if="!isMobileView" class="go-up">
      <img @click="scrollToTop" src="./assets/goUp.png" />
    </div>

    <div ref="downloadApp" v-if="!isMobileView" v-show="isVisible" class="downloadApp">
      <div class=" flex justify-end pb-2">
        <img @click="hideAndShowAfterDelay" class="w-[24px] h-[24px] cursor-pointer" src='@/assets/closeButton.png' />
      </div>
      <div class="w-[251px] h-[126px] bg-white rounded-lg flex justify-evenly items-center">
        <div class="flex flex-col items-center">
          <span class="w-[100px]  text-10px font-normal text-center pb-2" style="color: rgba(153, 153, 153, 1);">{{$t("Scan the QR code to download the latest installation package")}}</span>
          <ButtonButton style="background-color: rgba(252, 86, 41, 1);" class="py-4 rounded-[4px] flex items-center justify-center w-[105px] h-[30px] mb-1">
            <a href="#" class="font-normal text-xs " style="color: rgba(255, 255, 255, 1);">IOS {{ $t("Download") }}</a>
          </ButtonButton>
          <ButtonButton style="background-color: rgba(252, 86, 41, 1);" class="py-4 rounded-[4px] flex items-center justify-center w-[105px] h-[30px] mt-1  ">
            <a href="#" class="font-normal text-xs" style="color: rgba(255, 255, 255, 1);">Android {{ $t("Download") }}</a>
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
import { ref } from "vue";

import Navbar from './components/NavBar.vue';
import MobileNavbar from './components/MobileNavBar.vue';
import MobileTopNavbar from './components/MobileTopNavBar.vue';
import ButtonButton from '@/components/ButtonPress.vue';
// import { ref, watch, onMounted } from 'vue';

import LoginModal from "@/views/Authentication/LoginModal.vue";
import RegisterModal from "@/views/Authentication/RegisterModal.vue";
import OTPModal from "@/views/Authentication/OTPVerification.vue";
import ForgotPasswordModal from "@/views/Authentication/ForgotPassword.vue";
import EditPassword from "@/views/MyProfile/EditPassword.vue";
import MyPage from "@/views/MyProfile/MyPage.vue";
import EditProfile from "@/views/MyProfile/EditProfile.vue";
import EditNicknameModal from "@/views/MyProfile/EditUserNickname.vue";
import VueCookies from "vue-cookies";


export default {
  components: {
    Navbar,
    MobileNavbar,
    MobileTopNavbar,
    ButtonButton,
    LoginModal,
    RegisterModal,
    OTPModal,
    ForgotPasswordModal,
    EditPassword,
    MyPage,
    EditProfile,
    EditNicknameModal,
  },

  data() {
    return {
      navbarComponent: null,
      topnavbarComponent: null,
      isMobileView: false,

      isVisible: false,
      isLoginModalVisible: ref(false),
      isResgitserModalVisible: ref(false),
      isOTPModalVisible: ref(false),
      isForgotPasswordModalVisible: ref(false),
      isEditPasswordModalVisible: ref(false),
      isMyPageModalVisible: ref(false),
      isEditProfileModalVisible: ref(false),
      isEditNicknameModalVisible: ref(false),
    };
  },

  methods: {
    showLoginModal() {
      this.isEditPasswordModalVisible = false;
      this.isForgotPasswordModalVisible = false;
      this.isResgitserModalVisible = false;
      this.isLoginModalVisible = true;
    },
    closeLoginModal() {
      this.isLoginModalVisible = false;
    },

    // register
    showRegisterModal() {
      this.isLoginModalVisible = false;
      this.isResgitserModalVisible = true;
    },

    closeRegisterModal() {
      this.isResgitserModalVisible = false;
    },

    // OTP Modal
    showOTPModal() {
      this.isForgotPasswordModalVisible = false;
      this.isEditProfileModalVisible = false;
      this.isOTPModalVisible = true;
    },

    closeOTPModal() {
      this.isOTPModalVisible = false;
    },

    // Forgot Passowrd Modal
    showForgotPasswordModal() {
      this.isLoginModalVisible = false;
      this.isForgotPasswordModalVisible = true;
    },

    closeForgotPasswordModal() {
      this.isForgotPasswordModalVisible = false;
    },

    // Edit Passowrd Modal
    showEditPasswordModal() {
      this.isOTPModalVisible = false;
      this.isForgotPasswordModalVisible = false;
      this.isEditPasswordModalVisible = true;
    },

    closeEditPasswordModal() {
      this.isEditPasswordModalVisible = false;
    },

    // My Page Modal
    showMyPageModal() {
      this.isMyPageModalVisible = true;
    },

    closeMyPageModal() {
      this.isMyPageModalVisible = false;
    },

    // Edit Profile Modal
    showEditProfileModal() {
      this.isEditNicknameModalVisible = false;
      this.isMyPageModalVisible = false;
      this.isEditProfileModalVisible = true;
    },

    closeEditProfileModal() {
      this.isEditProfileModalVisible = false;
    },

    gobackmypage() {
      this.isMyPageModalVisible = true;
      this.isEditProfileModalVisible = false;
      this.isStreamDetailModalVisible = false;
    },

    // Edit Nickname Modal
    showEditNicknameModal() {
      this.isEditProfileModalVisible = false;
      this.isEditNicknameModalVisible = true;
    },

    closeEditNicknameModal() {
      this.isEditNicknameModalVisible = false;
    },

    scrollToTop() {
      const appElement = document.getElementById('app');
      if (appElement) {
        appElement.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    updateNavbarComponent() {
      this.isMobileView = window.innerWidth <= 767;
      this.navbarComponent = window.innerWidth <= 767 ? 'MobileNavbar' : 'Navbar';
      this.topnavbarComponent = window.innerWidth <= 767 ? 'MobileTopNavbar' : '';
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
      // setInterval(() => {
      //   this.hideAndShowAfterDelay();
      // }, 10000); // Adjust the interval as needed
    },
    hideAndShowAfterDelay() {
      this.hideDownloadApp();

      // Set a timeout to show the download window again after a certain delay
      setTimeout(() => {
        this.showDownloadApp();
      }, 30000); // Adjust the delay as needed
    },


  },

  mounted() {
    const userToken = VueCookies.get("userToken");

    if (!userToken) {
      this.showLoginModal();
    }

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
  bottom: 30%;
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
