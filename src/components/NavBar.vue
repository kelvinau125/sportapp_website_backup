<template>
  <div
    class="bg-navColor text-white py-1 px-10 shadow md:flex justify-center items-center"
  >
    <div class="md:pt-1 pt-2 flex items-center cursor-pointer">
      <a href="/"
        ><img class="mr-2" alt="App logo" src="@/assets/topNav/appImage.png"
      /></a>
      <div class="items-center md:block hidden">
        <a
          class="md:text-lg text-base font-semibold md:relative"
          style="color: #33ba53"
          href="/"
        >
          {{ $t("PandaSport") }}</a
        >
      </div>

      <div class="md:static relative w-[300px]">
        <ul
          style="z-index: 1000"
          :class="openNav ? 'block' : 'hidden'"
          class="md:block items-center md:pr-0 pr-2 md:pl-5 pl-5 md:static absolute bg-navColor md:w-auto w-auto md:left-0 -left-[90px] md:top-14 top-14"
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
    <div class="md:flex items-center">
      <div class="relative">
        <div
          @click="MenuOpen()"
          class="md:static absolute md:hidden md:pl-0 pl-10 md:left-0 left-[10px] md:top-0 -top-[37px]"
          style="width: 60px"
        >
          <img class="cursor-pointer" v-if="openNav" src="@/assets/topNav/x.png" />
          <img class="cursor-pointer" v-else src="@/assets/topNav/hamburger.png" />
        </div>
      </div>
      <div class="md:flex relative">
        <div @click="search" class="md:block hidden pt-2.5">
          <img
            src="@/assets/topNav/search.png"
            alt="Search Icon"
            class="absolute left-0.5 w-6 h-6 m-2"
          />
        </div>
        <div class="md:block hidden pt-2.5">
          <input
            v-model="searchQuery"
            @keyup.enter="search"
            type="text"
            :placeholder="$t('Search event/team')"
            maxlength="20"
            class="pl-10 lg:w-72 md:w-60 h-10 rounded-3xl border-gray-300 text-xs font-normal bg-opacity-10 text-white bg-slate-50"
          />
        </div>

        <div class="pr-4 md:flex items-center w-full h-1/2 m-1 justify-between pb-1.5">
          <div class="md:flex items-center">
            <div
              class="dropdown-button language-dropdown md:pt-2.5 md:pl-2.5"
              style="width: 100px"
            >
              <button
                class="language-toggle md:static absolute md:right-10 right-20 md:top-0 -top-8 pl-5"
                @click="toggleDropdownLanguage"
              >
                <div class="flex pb-2.5">
                  <span class="">{{ $t($i18n.locale) }} </span>
                  <span> &#9662;</span>
                </div>
              </button>
              <div
                v-show="isDropdownOpenLanguage"
                class="language-options md:hidden absolute md:right-[120px] right-[90px] md:top-[100%] top-0"
              >
                <button
                  v-for="locale in $i18n.availableLocales"
                  :key="locale"
                  @click="languageChange(locale)"
                  class="languages"
                >
                  {{ $t(locale) }}
                </button>
              </div>
            </div>
          </div>

          <button
            class="pt-0 md:flex cursor-pointer text-xl mr-2.5 items-center md:pl-3"
            @click="toggleDropdown"
          >
            <img
              :src="img"
              class="max-w-[24px] md:static absolute md:right-0 right-10 md:top-0 bottom-9 hover:bg-blue-950"
              alt="defaultFootBall Image"
            />
            <img
              class="md:block hidden pl-1.5 py-1"
              src="@/assets/topNav/arrowDown.png"
              alt="Arrow Down"
            />
            <!-- <p>{{ this.currentChannel }}</p> -->
          </button>

          <div
            style="z-index: 1000"
            class="dropdown-content md:hidden absolute md:right-6 right-8 md:top-10 top-0"
            :class="{ 'show-dropdown': isDropdownOpen }"
          >
            <button class="dropdown-button" @click="basketballchoice()">
              <img src="@/assets/topNav/basketball.png" alt="Basketball" />
            </button>
            <button class="dropdown-button" @click="footballchoice()">
              <img src="@/assets/topNav/football.png" alt="Football" />
            </button>
          </div>
        </div>
      </div>
      <div class="md:flex relative items-center pl-1">
        <div @click="toggleDropdownProfile" class="modalProfile">
          <img
            :src="avatar"
            class="max-w-[40px] w-[40px] h-[40px] max-h-[40px] md:static absolute md:right-0 -right-4 md:top-0 -top-[72px] rounded-full border-2 border-white"
            style="object-fit: cover"
          />
          <div
            style="z-index: 1000"
            v-show="showDropdown"
            class="md:absolute absolute md:right-0 -right-4 md:top-12 -top-6 bg-gray-900 mt-1 p-1 py-3"
          >
            <div class="pr-1 pt-1 pb-2 flex flex-col w-[80px]">
              <!-- <button to="/register" class="px-1 hover:text-green-500 text-white">注册</button>
              <button to="/login" class="px-1 hover:text-green-500 text-white">登入</button> -->
              <button v-if="!loggedIn" class="px-1" @click="showRegisterModal">
                {{ $t("Register") }}
              </button>
              <button v-if="!loggedIn" class="px-1" @click="showLoginModal">
                {{ $t("Login") }}
              </button>
              <button v-if="loggedIn" class="px-1" @click="showMyPageModal">
                {{ $t("MyPage") }}
              </button>
              <button v-if="loggedIn" @click="logout" class="block text-white">
                {{ $t("Logout") }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="md:flex items-center pl-1">
    <!-- login modal -->
    <LoginModal
      :showModal="isLoginModalVisible"
      :closeModal="closeLoginModal"
      :showRegisterModal="showRegisterModal"
      :showForgotPasswordModal="showForgotPasswordModal"
    />

    <!-- register modal -->
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
      return this.currentChannel == (localStorage.getItem('currentChannel') || "basketball");
    },
  },

  data() {
    return {
      searchQuery: "",

      Links: [
        { name: "main", link: "/" },
        { name: "live", link: "/live" },
        { name: "myfavouritelive", link: "/favourite" },
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

@media (min-width: 300px) {
  .menu-list {
    display: static;
    position: absolute;
  }
}

@media (min-width: 500px) {
  .menu-list {
    display: static;
  }
}

@media (min-width: 640px) {
  .menu-list {
    display: block;
    position: absolute;
  }
}

@media (min-width: 760px) {
  .menu-list {
    display: block;
    position: static;
  }
}

@media (min-width: 1024px) {
  .menu-list {
    display: static;
  }
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
