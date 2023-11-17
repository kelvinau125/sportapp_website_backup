<template>
    <div class="bg-gray-900 text-white py-2 px-6 shadow md:flex justify-between items-center ">
        <div class="flex items-center cursor-pointer">
            <img class="mr-2" alt="App logo" src="../assets/topNav/appImage.png">
            <router-link to="/" class="text-xl hover:text-green-500">
              <span class="text-xl text-green-500"> {{ $t("PandaSport") }}</span>
            </router-link>

            <ul class="md:flex md:items-center pl-5">
            <li class="md:mx-4" v-for="link in Links" :key ="link.link">
                <router-link :to="link.link" class="text-base hover:text-green-500 text-white">{{ link.name }}</router-link>
            </li>
            </ul>
        </div>

        <div class="md:flex items-center">
            <div class="md:flex relative">
                <div class="">
                    <img src="../assets/topNav/search.png" alt="Search Icon" class="absolute left-2.5 w-6 h-6 pr-1 m-1.5"/>
                </div>
                <div>
                    <input v-model="searchText" type="text" placeholder="搜索赛事/ 球队" class="pl-10 w-52 h-10 rounded-2xl border-gray-300 text-xs bg-opacity-10 text-white bg-slate-50" />
                </div>
            <!-- <button v-if="searchText" @click="clearSearch" class="clear-button">
                <i class="material-icons">clear</i>
            </button> -->
                <div class="pr-4 md:flex items-center w-full h-1/2 m-1 justify-between">
                    <button class="md:flex cursor-pointer text-xl mr-2.5 items-center" @click="toggleDropdown">
                    <img :src="img" alt="defaultFootBall Image" />
                    <img  class="pl-1.5 py-1" src="../assets/topNav/arrowDown.png" alt="Arrow Down">
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
              <div @click="toggleDropdownProfile" >
                <img src="../assets/topNav/defaultProfile.png" alt="Profile Picture" />
                <div v-show="showDropdown" class="absolute bg-gray-900 mt-1 p-1 py-3">
                  <div class="pr-1 pt-1 pb-2 ">
                <!-- 注册Button -->
                    <router-link to="/register" class="px-1 hover:text-green-500 text-white">注册</router-link>
                    <router-link to="/login" class="px-1 text-white">登入</router-link>
                  </div>
                <!-- Dropdown content, e.g., Logout link -->
                  <router-link v-if="loggedIn" @click="logout" class="block text-black">退出登入</router-link>
                </div>
              </div>
            </div>
        </div>
      </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { RouterLink } from 'vue-router'

// Navigation Bar
const Links = [
  { name: '首页', link: '/' },
  { name: '直播', link: '/live' },
  { name: '收藏', link: '/favourite' }
]

const img = ref(require('../assets/topNav/football.png'))
const isDropdownOpen = ref(false)

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const selectOption = (image) => {
  console.log(image)
  img.value = image // Update the default image when an option is selected
  isDropdownOpen.value = false // Close the dropdown
}

const searchText = ref('')


// Profile
const showDropdown = ref(false)
const loggedIn = ref(false)

const toggleDropdownProfile = () => {
  showDropdown.value = !showDropdown.value
}

const router = useRouter()
const logout = () => {
  // Perform logout logic
  // For example, redirect to the login page
  router.push('/login')
  // Update the loggedIn state accordingly
  loggedIn.value = false
}

</script>

<style>

.live-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 5px;
}
  .nav-button{
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
    top: 100%;
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

    &.router-link-exact-active {
      color: #42b983;
      /* color: white; */
    }
  }

</style>
