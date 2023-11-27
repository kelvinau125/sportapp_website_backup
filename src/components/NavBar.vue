<template>
  <div class="bg-gray-900 text-white py3.5 px-6 shadow md:flex justify-between items-center">
    <div class="flex items-center cursor-pointer">
      <img class="mr-2" alt="App logo" src="../assets/topNav/appImage.png">
      <!-- <a href="/">asdasd</a>
            <a href="/about">ABC</a> -->
      <router-link to="/" class="text-xl hover:text-green-500">
        <span class="text-xl text-green-500"> {{ $t("PandaSport") }}</span>
      </router-link>

      <ul class="md:flex md:items-center pl-5">
        <li class="md:mx-4" v-for="link in Links" :key="link.link">
          <router-link :to="link.link" class="text-xl hover:text-green-500 text-white">{{ link.name }}</router-link>
        </li>
      </ul>
    </div>

    <div class="md:flex items-center">
      <div class="md:flex relative">
        <div class="">
          <img src="../assets/topNav/search.png" alt="Search Icon" class="absolute left-2.5 w-6 h-6 pr-1 m-1.5" />
        </div>
        <div>
          <input v-model="searchText" type="text" placeholder="搜索赛事/ 球队"
            class="pl-10 w-52 h-10 rounded-2xl border-gray-300 text-xs bg-opacity-10 text-white bg-slate-50" />
        </div>
        <!-- <button v-if="searchText" @click="clearSearch" class="clear-button">
                <i class="material-icons">clear</i>
            </button> -->
        <div class="pr-4 md:flex items-center w-full h-1/2 m-1 justify-between">
          <button class="md:flex cursor-pointer text-xl mr-2.5 items-center" @click="toggleDropdown">
            <img :src="img" alt="defaultFootBall Image" />
            <img class="pl-1.5 py-1" src="../assets/topNav/arrowDown.png" alt="Arrow Down">
          </button>

          <div class="dropdown-content" :class="{ 'show-dropdown': isDropdownOpen }">

            <button class="dropdown-button" @click="selectOption(require('../assets/topNav/basketball.png'))">
              <img src="../assets/topNav/basketball.png" alt="Basketball" />
            </button>
            <button class="dropdown-button" @click="selectOption(require('../assets/topNav/football.png'))">
              <img src="../assets/topNav/football.png" alt="Football" />
            </button>
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
          :showEditPasswordModal="showEditPasswordModal" />

        <EditPassword :showEditPasswordModal="isEditPasswordModalVisible" :closeEditPasswordModal="closeEditPasswordModal"
          :showLoginModal="showLoginModal" />

        <MyPage :showMyPageModal="isMyPageModalVisible" :closeMyPageModal="closeMyPageModal"
          :showEditProfileModal="showEditProfileModal" />

        <EditProfile :showEditProfileModal="isEditProfileModalVisible" :gobackmypage="gobackmypage"
          :showOTPModal="showOTPModal" :showEditNicknameModal="showEditNicknameModal" />

        <EditNicknameModal :showEditNicknameModal="isEditNicknameModalVisible"
          :closeEditNicknameModal="closeEditNicknameModal" :showEditProfileModal="showEditProfileModal" />

        <div @click="toggleDropdownProfile">
          <img src="../assets/topNav/defaultProfile.png" alt="Profile Picture" />
          <div v-show="showDropdown" class="absolute bg-gray-900 mt-1 p-1 py-3">
            <div class="pr-1 pt-1 pb-2 ">
              <!-- 注册Button -->
              <!-- <router-link to="/register" class="px-1 hover:text-green-500 text-white">注册</router-link> -->
              <button class="px-1" @click="showRegisterModal">注册</button>
              <br>
              <button class="px-1" @click="showLoginModal">登入</button>
              <br>
              <button v-if="loggedIn" class="px-1" @click="showMyPageModal">我的主页</button>
              <br>
              <router-link to="/test" class="px-1 text-white">登入</router-link>
            </div>
            <!-- Dropdown content, e.g., Logout link -->
            <button v-if="loggedIn" @click="logout" class="block text white">退出登入</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
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
  components:{
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
      Links: [
        { name: '首页', link: '/' },
        { name: '直播', link: '/about' },
        { name: '收藏', link: '/favourite' }
      ],
      img: ref(require('../assets/topNav/football.png')),
      isDropdownOpen: ref(false),
      searchText: ref(''),
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
    };
  },
  methods: {
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
      this.$router.push('/login');
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
    if (VueCookies.isKey('userToken')) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  },
};

</script>


<style>
.nav-button {
  width: 60px;
  background-color: #4C6B94;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  display: inline-flex
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
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  width: 40px;
  z-index: 1;
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
  font-weight: bold;
  color: #2c3e50;

}

a.router-link-exact-active {
  color: #42b983;
  /* color: white; */
}
</style>
