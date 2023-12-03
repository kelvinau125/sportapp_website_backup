<template>
  <div class="bg-navColor  text-white py-1 px-10 shadow md:flex justify-between items-center">
    <div class="md:pt-1 pt-2 flex items-center cursor-pointer">
      <img class="mr-2" alt="App logo" src="@/assets/topNav/appImage.png">

      <a class="md:text-lg text-base font-semibold" style="color: #33BA53; " href="/"> {{ $t("PandaSport") }}</a>
      <!-- <div class="relative">
        <div @click="MenuOpen()" class="md:static absolute md:hidden md:pl-0 pl-10 md:left-0 left-20 md:bottom-0 -bottom-[12px]"
          style="border: 1px solid red; width: 60px;">
          <img v-if="openNav" src="@/assets/topNav/x.png">
          <img v-else src="@/assets/topNav/hamburger.png">
        </div>

      </div> -->
      <div class="md:static relative">
        <ul :class="openNav ? 'block' : 'hidden'" style="z-index: 1000;"
          class="md:items-center md:pr-0 pr-0 md:pl-5 pl-5 md:static absolute bg-navColor md:w-auto w-auto md:right-0 right-20 md:top-14 top-14 ">
          <li class=" md:inline-flex flex-col ml-4 my-2.5" v-for="link in Links" :key="link.link">
            <router-link :to="link.link"
              class="nav-button md:text-base text-sm font-normal hover:text-gray-200 text-white">{{
                link.name
              }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="md:flex items-center">
      <div  class="relative">
        <div @click="MenuOpen()" class="md:static absolute md:hidden md:pl-0 pl-10 md:left-0 left-[110px] md:top-0 -top-[35px]"
          style="width: 60px;">
          <img class="cursor-pointer" v-if="openNav" src="@/assets/topNav/x.png">
          <img class="cursor-pointer" v-else src="@/assets/topNav/hamburger.png">
        </div>

      </div>
      <div class="md:flex relative">
        <div @click="search" class="md:block hidden">
          <img src="@/assets/topNav/search.png" alt="Search Icon" class="absolute left-0.5 w-6 h-6 m-2" />
        </div>
        <div class="md:block hidden">
          <input v-model="searchQuery" @keyup.enter="search" type="text" :placeholder="$t('Search event/team')"
            maxlength="20"
            class="pl-10 md:w-72 h-10 rounded-3xl border-gray-300 text-xs font-normal bg-opacity-10 text-white bg-slate-50" />
        </div>
        <div class="pr-4 md:flex items-center w-full h-1/2 m-1 justify-between ">
          <button class="md:flex cursor-pointer text-xl mr-2.5 items-center md:pl-3" @click="toggleDropdown">
            <img :src="img" class="max-w-[24px] md:static absolute md:right-0 right-10 md:top-0 bottom-9 hover:bg-blue-950"
              alt="defaultFootBall Image" />
            <img class="md:block hidden pl-1.5 py-1" src="@/assets/topNav/arrowDown.png" alt="Arrow Down">
          </button>

          <div class="dropdown-content md:hidden absolute md:right-6 right-8 md:top-10 top-0"
            :class="{ 'show-dropdown': isDropdownOpen }">
            <button class="dropdown-button" @click="selectOption(require('@/assets/topNav/basketball.png'))">
              <img src="@/assets/topNav/basketball.png" alt="Basketball" />
            </button>
            <button class="dropdown-button" @click="selectOption(require('@/assets/topNav/football.png'))">
              <img src="@/assets/topNav/football.png" alt="Football" />
            </button>
          </div>
        </div>
      </div>
      <div class=" md:flex relative items-center pl-1">
        <div @click="toggleDropdownProfile" class="">
          <img :src="avatar"
            class="max-w-[40px] md:static absolute md:right-0 -right-4 md:top-0 -top-[72px] rounded-full border-2 border-white"
            style=" object-fit: cover;" />
          <div v-show="showDropdown"
            class="md:absolute absolute md:right-0 -right-4 md:top-12 -top-6 bg-gray-900 mt-1 p-1 py-3">
            <div class="pr-1 pt-1 pb-2 flex flex-col">
              <!-- <button to="/register" class="px-1 hover:text-green-500 text-white">注册</button>
              <button to="/login" class="px-1 hover:text-green-500 text-white">登入</button> -->
              <button v-if="!loggedIn" class="px-1" @click="showRegisterModal">{{ $t("Register") }}</button>
              <button v-if="!loggedIn" class="px-1" @click="showLoginModal">{{ $t("Login") }}</button>
              <button v-if="loggedIn" class="px-1" @click="showMyPageModal">{{ $t("MyPage") }}</button>
              <button v-if="loggedIn" @click="logout" class="block text-white">{{ $t("Logout") }}</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <div class="md:flex items-center pl-1">
    <!-- login modal -->
    <LoginModal :showModal="isLoginModalVisible" :closeModal="closeLoginModal" :showRegisterModal="showRegisterModal"
      :showForgotPasswordModal="showForgotPasswordModal" />

    <!-- register modal -->
    <RegisterModal :showRegModal="isResgitserModalVisible" :closeRegModal="closeRegisterModal"
      :showLoginModal="showLoginModal" :showOTPModal="showOTPModal" />

    <OTPModal :showOTPModal="isOTPModalVisible" :closeOTPModal="closeOTPModal" :showLoginModal="showLoginModal"
      :showEditPasswordModal="showEditPasswordModal" />

    <ForgotPasswordModal :showForgotPasswordModal="isForgotPasswordModalVisible"
      :closeForgotPasswordModal="closeForgotPasswordModal" :showLoginModal="showLoginModal"
      :showOTPModal="showOTPModal" />

    <EditPassword :showEditPasswordModal="isEditPasswordModalVisible" :closeEditPasswordModal="closeEditPasswordModal"
      :showLoginModal="showLoginModal" />

    <MyPage :showMyPageModal="isMyPageModalVisible" :closeMyPageModal="closeMyPageModal"
      :showEditProfileModal="showEditProfileModal" />

    <EditProfile :showEditProfileModal="isEditProfileModalVisible" :gobackmypage="gobackmypage"
      :showOTPModal="showOTPModal" :showEditNicknameModal="showEditNicknameModal" />

    <EditNicknameModal :showEditNicknameModal="isEditNicknameModalVisible"
      :closeEditNicknameModal="closeEditNicknameModal" :showEditProfileModal="showEditProfileModal" />
  </div>
</template>

<script>
import { ref } from 'vue';
import VueCookies from 'vue-cookies';

// import the remove cookie function
import { removeCookie } from '@/service/cookie';

import LoginModal from '@/views/Authentication/LoginModal.vue';
import RegisterModal from '@/views/Authentication/RegisterModal.vue';
import OTPModal from '@/views/Authentication/OTPVerification.vue';
import ForgotPasswordModal from '@/views/Authentication/ForgotPassword.vue';
import EditPassword from '@/views/MyProfile/EditPassword.vue';
import MyPage from '@/views/MyProfile/MyPage.vue';
import EditProfile from '@/views/MyProfile/EditProfile.vue';
import EditNicknameModal from '@/views/MyProfile/EditUserNickname.vue';

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
  },
  data() {
    return {
      searchQuery: '',

      Links: [
        { name: this.$t('main'), link: '/' },
        { name: this.$t('live'), link: '/live' },
        { name: this.$t('myfavouritelive'), link: '/favourite' },
      ],
      avatar: ref(''),
      img: ref(require('@/assets/topNav/football.png')),
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
      openNav: ref(false),

    };
  },
  methods: {
    //Search Functions
    search() {
      const searchPages = "1";

      if (this.searchQuery === '') {
        console.log('Search is empty');
      } else {
        // this.$router.push({ name: 'ResultPage', query: { searchQuery: this.searchQuery, searchPages: searchPages } });
        this.routeData = this.$router.resolve({ name: 'ResultPage', query: { searchQuery: this.searchQuery, searchPages: searchPages } });
        window.open(this.routeData.href, '_blank');
      }
    },
    MenuOpen() {
      this.openNav = !this.openNav;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption(image) {
      this.img = image;
      this.isDropdownOpen = false;
    },
    toggleDropdownProfile() {
      this.showDropdown = !this.showDropdown;
    },
    logout() {
      removeCookie();
      this.$router.push('/');
      this.loggedIn = false;
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

    gobackmypage() {
      this.isMyPageModalVisible = true;
      this.isEditProfileModalVisible = false;
    },

    // Edit Nickname Modal
    showEditNicknameModal() {
      this.isEditProfileModalVisible = false;
      this.isEditNicknameModalVisible = true;
    },

    closeEditNicknameModal() {
      this.isEditNicknameModalVisible = false;
    },
  },
  mounted() {
    this.searchQuery = "";
    if (VueCookies.isKey('avatar')) {
      this.avatar = VueCookies.get('avatar');
    } else {
      this.avatar = 'https://live-stream-1321239144.cos.ap-singapore.myqcloud.com/head/bfe7302c38a8416fbe6167d18aaed47e.png';
    }
    if (VueCookies.isKey('userToken')) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  },
};

</script>


<style scoped>
.nav-container {
  width: 892px;
  height: 56px;
}

.live-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 5px;
}

.nav-button {
  width: auto;
  height: auto;
  padding-left: 13px;
  padding-right: 13px;
  padding-top: 3px;
  padding-bottom: 3px;
  background-color: #4C6B94;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
}

/* Style the dropdown trigger button */
.dropdown-button {
  background: none;
  border: none;
  cursor: pointer;
  width: 55px;
}

/* Style the dropdown trigger button */
.dropdown-button {
  background: none;
  border: none;
  cursor: pointer;
  width: 55px;
}

/* Style the dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  width: 40px;
  z-index: 1px;
}

/* Style the dropdown options */
.dropdown-content .dropdown-button {
  display: block;
  padding: 8px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Style the dropdown options */
.dropdown-content .dropdown-button {
  display: block;
  padding: 8px;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Change color on hover */
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
  background-color: #33BA53;
}
</style>
