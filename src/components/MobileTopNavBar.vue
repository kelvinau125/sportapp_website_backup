<template>
    <div class="bg-mobilenavcolor text-white py-2 px-10 shadow flex justify-center items-center">
      <div class="flex items-center">
        <div class="flex relative">
          <div @click="search" class="">
            <img
              src="@/assets/topNav/search.png"
              alt="Search Icon"
              class="absolute left-0.5 w-6 h-6 m-2"
            />
          </div>
          <div class="">
            <input
              v-model="searchQuery"
              @keyup.enter="search"
              type="text"
              :placeholder="$t('Search event/team')"
              maxlength="20"
              class="pl-10 w-72 h-10 rounded-3xl border-gray-300 text-xs font-normal bg-opacity-30 text-white placeholder:text-white bg-slate-50"
            />
          </div>
        </div>
        <button
            class="pt-0 flex cursor-pointer text-xl mr-2.5 items-center pl-3"
            @click="toggleDropdown"
          >
            <img
              :src="img"
              class="max-w-[24px] hover:bg-blue-950"
              alt="defaultFootBall Image"
            />
            <img
              class="pl-1.5 py-1"
              src="@/assets/topNav/arrowDown.png"
              alt="Arrow Down"
            />
            <!-- <p>{{ this.currentChannel }}</p> -->
          </button>

          <div
            style="z-index: 1000"
            class="dropdown-content right-10 top-11"
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
</template>
  
<script>
  import { ref } from "vue";
  import VueCookies from "vue-cookies";
  
  // import the remove cookie function
  import { removeCookie } from "@/service/cookie";
  
  // vuex
  import { mapState, mapActions } from "vuex";
  
  export default {
    components: {
    },
  
    computed: {
      ...mapState(["currentChannel"]),
      currentChannelComponent() {
        return this.currentChannel == localStorage.getItem('currentChannel') || "basketball";
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
  