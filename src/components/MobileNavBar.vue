<template>
  <!-- <div class="bg-white text-white py-1 px-10 shadow md:flex justify-center items-center">
    <div class="md:pt-1 pt-2 flex items-center cursor-pointer">
      <div class="relative w-[300px]">
        <ul
          style="z-index: 1000"
          class=" items-center md:pr-0 pr-2 md:pl-5 pl-5 md:w-auto w-auto md:left-0 -left-[90px] md:top-14 top-14"
        >
          <li
            class="md:inline-flex flex-col ml-4 my-2.5"
            v-for="link in Links"
            :key="link.link"
          >
            <router-link
              :to="link.link"
              @click="checkUserAndNavigate(link.link)"
              class="flex nav-button md:text-base text-sm font-normal hover:text-gray-200 text-white"
              >{{ $t(link.name) }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div> -->
  <!-- <div class="bg-white text-white py-1 px-10 shadow">
    <div class="pt-2 cursor-pointer">
      <div class="flex justify-between text-black">
        <button class="button " @click="handleButtonClick('Button 1')">
          <div class="flex flex-col items-center">
            <img 
              class="w-[24px] h-[24px]"
              src="@/assets/main/home.png"
              alt="Frame Icon">
            <span class="text">首页</span>
          </div>
        </button>

        <button class="button" @click="handleButtonClick('Button 2')">
          <div class="flex flex-col items-center">
            <img 
              class="w-[24px] h-[24px]"
              src="@/assets/main/live.png"
              alt="Frame Icon">
            <span class="text">直播</span>
          </div>
        </button>

        <button class="button" @click="handleButtonClick('Button 3')">
          <div class="flex flex-col items-center">
            <img 
              class="w-[24px] h-[24px]"
              src="@/assets/main/me.png"
              alt="Frame Icon">
            <span class="text">我的</span>
          </div>
        </button>
      </div>
    </div>
  </div> -->

  <div class="bg-white text-white py-1 px-10 shadow">
    <div class="pt-2 cursor-pointer">
      <div class="flex justify-between text-black">
        <button v-for="(button, index) in buttons" :key="index" class="button" @click="handleButtonClick(button, button.route)">
          <div class="flex flex-col items-center">
            <img 
              class="w-[24px] h-[24px]"
              :src="isButtonActive(button) ? button.clickImage : button.image"
              alt="Frame Icon">
            <span class="text">{{ $t(button.name) }}</span>
          </div>
        </button>
      </div>
    </div>
  </div>

  <div class="md:flex items-center pl-1">
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

    <StreamDetailModal
      :showStreamDetailModal="isStreamDetailModalVisible"
      :closeStreamDetailModal="closeStreamDetailModal"
      :showStreamPreviewModal="showStreamPreviewModal"
      :gobackmypage="gobackmypage"
      @stream-details-ready="handleStreamDetailsReady"
    />

    <StreamPreviewModal
      :showStreamPreviewModal="isStreamPreviewModalVisible"
      :closeStreamPreviewModal="closeStreamPreviewModal"
      :gobackStreamDetail="gobackStreamDetail"
      :streamDetailsData="streamDetailsData"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import VueCookies from "vue-cookies";

// import the remove cookie function
import { removeCookie } from "@/service/cookie";

// vuex
import { mapState, mapActions } from "vuex";

import LoginModal from "@/views/Authentication/LoginModal.vue";
import RegisterModal from "@/views/Authentication/RegisterModal.vue";
import OTPModal from "@/views/Authentication/OTPVerification.vue";
import ForgotPasswordModal from "@/views/Authentication/ForgotPassword.vue";
import EditPassword from "@/views/MyProfile/EditPassword.vue";
import MyPage from "@/views/MyProfile/MyPage.vue";
// import MyPage from "@/views/MobileMyProfile/MobileMyPage.vue";
import EditProfile from "@/views/MyProfile/EditProfile.vue";
import EditNicknameModal from "@/views/MyProfile/EditUserNickname.vue";
import StreamDetailModal from "@/views/Stream/StreamDetail.vue";
import StreamPreviewModal from "@/views/Stream/StreamPreview.vue";

export default {
  components: {
    LoginModal,
    RegisterModal,
    OTPModal,
    ForgotPasswordModal,
    EditPassword,
    MyPage,
    EditProfile,
    EditNicknameModal,
    StreamDetailModal,
    StreamPreviewModal,
  },

  computed: {
    ...mapState(["currentChannel"]),
    currentChannelComponent() {
      return this.currentChannel === "football" ? "football" : "basketball";
    },

    currentImage() {
      return this.currentButton ? this.currentButton.clickImage : '';
    },
  },

  data() {
    return {
      buttons: [
        { name: 'main', image: require('@/assets/main/home.png'), clickImage: require('@/assets/main/clickedhome.png'), route: '/' },
        { name: 'live', image: require('@/assets/main/live.png'), clickImage: require('@/assets/main/clickedlive.png'), route: '/live' },
        { name: 'me', image: require('@/assets/main/me.png'), clickImage: require('@/assets/main/clickedme.png'), route: '/mobile_my_profile' },
      ],
      currentButton: null,

      searchQuery: "",

      Links: [
        { name: 'main', link: '/', image: './assets/main/home.png', clickedImage: './assets/main/clickedhome.png' },
        { name: 'live', link: '/live', image: './assets/main/live.png', clickedImage: './assets/main/clickedlive.png' },
        { name: 'myfavouritelive', link: '/favourite', image: './assets/main/me.png', clickedImage: './assets/main/clickedme.png' },
      ],
      
      avatar: ref(""),
      img: "",
      isDropdownOpen: ref(false),
      showDropdown: ref(false),
      loggedIn: ref(false),
      isLoginModalVisible: ref(false),
      isResgitserModalVisible: ref(false),
      isOTPModalVisible: ref(false),
      isForgotPasswordModalVisible: ref(false),
      isEditPasswordModalVisible: ref(false),
      isMyPageModalVisible: ref(false),
      isEditProfileModalVisible: ref(false),
      isEditNicknameModalVisible: ref(false),
      isStreamDetailModalVisible: ref(false),
      isStreamPreviewModalVisible: ref(false),
      openNav: ref(false),
      isDropdownOpenLanguage: ref(false),
      streamDetailsData: {},
    };
  },

  methods: {
    isButtonActive(button) {
      const userToken = VueCookies.get("userToken");
      const isButtonCurrent = this.currentButton === button;
      const isRouteMatching = this.$route.path === button.route;

      return userToken && (isButtonCurrent || isRouteMatching);
    },
    
    handleButtonClick(button, route) {
    this.currentButton = button;

    const userToken = VueCookies.get("userToken");

    if (!userToken) {
      this.showLoginModal();
    } else {
      // User is logged in, navigate to the selected route
      // this.$router.push(route);
      this.$router.push(route).then(() => {
        // Reload the page after navigating to the new route
        window.location.reload();
      });
    }
  },

    checkUserAndNavigate(route) {
      const userToken = VueCookies.get("userToken");

      if (!userToken) {
        this.showLoginModal();
      } else {
        // User is logged in, navigate to the selected route
        this.$router.push(route);
      }
    },

    ...mapActions(["switchChannel"]),

    created() {
      // Dispatch the action to set the initial channel
      this.switchChannel(this.currentChannel);
    },

    basketballchoice() {
      this.selectOption(require("@/assets/topNav/basketball.png"));
      this.switchChannel("basketball");
      if (this.$route.path === "/") {
        window.location.reload();
      } else {
        this.$router.push("/");
      }
    },
    footballchoice() {
      this.selectOption(require("@/assets/topNav/football.png"));
      this.switchChannel("football");
      if (this.$route.path === "/") {
        window.location.reload();
      } else {
        this.$router.push("/");
      }
    },
    //Search Functions
    search() {
      const searchPages = "1";

      if (this.searchQuery === "") {
        console.log("Empty search");
      } else {
        this.routeData = this.$router.resolve({
          name: "ResultPage",
          query: { searchQuery: this.searchQuery, searchPages: searchPages },
        });
        window.open(this.routeData.href, "_blank");
      }
    },
    MenuOpen() {
      this.openNav = !this.openNav;
      this.isDropdownOpen = false;
      this.showDropdown = false;
      this.isDropdownOpenLanguage = false;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
      this.showDropdown = false;
      this.isDropdownOpenLanguage = false;
    },
    selectOption(image) {
      this.img = image;
      this.isDropdownOpen = false;
      this.showDropdown = false;
      this.isDropdownOpenLanguage = false;
    },
    toggleDropdownProfile() {
      this.showDropdown = !this.showDropdown;
      this.isDropdownOpen = false;
      this.isDropdownOpenLanguage = false;
    },
    logout() {
      removeCookie();
      // this.$router.push("/");
      // this.loggedIn = false;
      // window.location.reload();

      if (this.$route.path === "/") {
        this.loggedIn = false;
        window.location.reload();
      } else {
        this.loggedIn = false;
        this.$router.push("/");
      }
    },
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

    // Stream Detail Modal
    showStreamDetailModal() {
      this.isStreamDetailModalVisible = true;
      this.isMyPageModalVisible = false;
    },

    closeStreamDetailModal() {
      this.isStreamDetailModalVisible = false;
    },

    handleStreamDetailsReady(data) {
      this.streamDetailsData = data;
    },

    // Stream Preview Modal
    showStreamPreviewModal() {
      this.isStreamPreviewModalVisible = true;
      this.isStreamDetailModalVisible = false;
    },

    closeStreamPreviewModal() {
      this.isStreamPreviewModalVisible = false;
    },

    gobackStreamDetail() {
      this.isStreamPreviewModalVisible = false;
      this.isStreamDetailModalVisible = true;
    },

    toggleDropdownLanguage() {
      this.isDropdownOpenLanguage = !this.isDropdownOpenLanguage;
      this.isDropdownOpen = false;
      this.showDropdown = false;
    },

    languageChange(locale) {
      this.isDropdownOpenLanguage = false;
      this.$i18n.locale = locale;

      // Save the selected language to localStorage
      localStorage.setItem("locale", locale);
      if (this.$route.path === "/") {
        window.location.reload();
      } else {
        this.$router.push("/");
      }
    },
  },

  mounted() {
    this.searchQuery = "";
    if (VueCookies.isKey("avatar")) {
      this.avatar = VueCookies.get("avatar");
    } else {
      this.avatar =
        "https://live-stream-1321239144.cos.ap-singapore.myqcloud.com/head/bfe7302c38a8416fbe6167d18aaed47e.png";
    }
    if (VueCookies.isKey("userToken")) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

    this.currentChannel == "football"
      ? (this.img = require("@/assets/topNav/football.png"))
      : (this.img = require("@/assets/topNav/basketball.png"));
  },
};
</script>

<style scoped>
.modalProfile:hover {
  cursor: pointer;
}

.nav-button {
  width: auto;
  height: auto;
  padding-left: 13px;
  padding-right: 13px;
  padding-top: 3px;
  padding-bottom: 3px;
  background-color: #4c6b94;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
}

.dropdown-button {
  background: none;
  border: none;
  cursor: pointer;
  width: 55px;
}

.dropdown-button {
  background: none;
  border: none;
  cursor: pointer;
  width: 55px;
}

.dropdown-content {
  display: none;
  position: absolute;
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  width: 40px;
  z-index: 1px;
}

.dropdown-content .dropdown-button {
  display: block;
  padding: 8px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dropdown-content .dropdown-button {
  display: block;
  padding: 8px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dropdown-content .dropdown-button:hover {
  background-color: #ddd;
  width: 40px;
}

.show-dropdown {
  display: block !important;
}

a {
  font-weight: normal;
  color: white;
}

a.router-link-exact-active {
  /* color: #42b983; */
  background-color: #33ba53;
}

/* language switching drop down button */
.language-toggle {
  background: none;
  border: none;
  cursor: pointer;
}

.language-options {
  position: absolute;
  /* top: 100%; */
  z-index: 1000;
  display: flex;
  flex-direction: column;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
  border: 1px solid rgb(17 24 39 / var(--tw-bg-opacity));
  border-radius: 4px;
  padding: 5px;
}

.languages:hover {
  color: #33ba53;
}

.language-toggle:hover {
  color: #33ba53;
}
</style>
