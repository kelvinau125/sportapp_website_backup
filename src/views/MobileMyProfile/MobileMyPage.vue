<template>
  <!-- <EditProfile :showEditProfileModal="isEditProfileModalVisible" :closeEditProfileModal="closeEditProfileModal" /> -->

  <EditProfile
      :showEditProfileModal="isEditProfileModalVisible"
      :closeEditProfileModal="closeEditProfileModal"
      :gobackmypage="gobackmypage"
      :showOTPModal="showOTPModal"
      :showEditNicknameModal="showEditNicknameModal"
    />

    <OTPModal
      :showOTPModal="isOTPModalVisible"
      :closeOTPModal="closeOTPModal"
      :showLoginModal="showLoginModal"
      :showEditPasswordModal="showEditPasswordModal"
    />

    <EditPassword
      :showEditPasswordModal="isEditPasswordModalVisible"
      :closeEditPasswordModal="closeEditPasswordModal"
      :showLoginModal="showLoginModal"
    />

    <EditNicknameModal
      :showEditNicknameModal="isEditNicknameModalVisible"
      :closeEditNicknameModal="closeEditNicknameModal"
      :showEditProfileModal="showEditProfileModal"
    />

  <div class="w-full flex flex-col">
    <div class="page-content">
      <div class="mt-10">
        <div class="">
          <div class="flex flex-col items-center">
            <div class="relative">
              <img
                :src="avatar"
                class="rounded-full border-2 border-white"
                style="width: 114px; height: 114px; object-fit: cover"
              />

              <button
                class="absolute bottom-0 right-0 cursor-pointer"
                @click="showEditProfileModal"
              >
                <img src="@/assets/upload-icon.png" style="width: 24px; height: 24px" />
              </button>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center pt-5">
          <p class="text-lg font-semibold mt-2">{{ nickname }}</p>
          <p class="text-sm font-medium mt-2">{{ phonenumber }}</p>
        </div>
      </div>

      <div class="pt-7">
        <ButtonPress 
        v-show="this.role"
        @click="showStreamDetailModal()"
        class="w-screen relative" 
        style="height: 60px">
          {{ $t("My Favourite Live") }}
          <img class="absolute top-[10px] right-[10px] w-[40px] h-[40px]" src="@/assets/favorite.png" alt="Favorite" />
        </ButtonPress>
        
      </div>

      <div class="flex justify-between pt-3" style="width: 100%">
        <div class="w-1/3 pr-2">
          <ButtonPress
            class="w-full bg-white pl-6 pr-6"
            style="width: 100%; height: 60px; border-radius: 8px"
          >
            <p class="text-base font-normal flex justify-center whitespace-nowrap overflow-ellipsis" style="color: #333333">
              {{ $t("Notification") }}
            </p>
          </ButtonPress>
        </div>
        <div class="w-1/3 pl-2 pr-2">
          <ButtonPress
            class="w-full bg-white pl-6 pr-6"
            style="width: 100%; height: 60px; border-radius: 8px"
          >
            <p class="text-base font-normal flex justify-center overflow-ellipsis whitespace-nowrap" style="color: #333333">
              {{ $t("ContactUs") }}
            </p>
          </ButtonPress>
        </div>
        <div class="w-1/3 pl-2">
          <ButtonPress
            class="w-full bg-white pl-6 pr-6"
            style="width: 100%; height: 60px; border-radius: 8px"
            @click="languageChange(this.currentLocale)"
          >
            <p class="text-base font-normal flex justify-center" style="color: #333333">
              <!-- {{ $t("Settings") }} -->
              {{ $t( "Change Language" ) }}
            </p>
          </ButtonPress>
        </div>
      </div>


      <div class="pt-16">
        <ButtonPress
          @click="logout"
          class=" bg-white pl-6 pr-6 w-[120px] h-[40px] rounded-[50px]">
          <p class="text-base font-normal flex justify-center" style="color: #333333">
            {{ $t("Logout") }}
          </p>
          </ButtonPress>
        <div class="flex justify-center" style="padding: 20px" />
      </div>
    </div>
  </div>
</template>

<script>
import ButtonPress from "@/components/ButtonPress.vue";
import EditProfile from "@/views/MyProfile/EditProfile.vue";

// get the avatar
import VueCookies from "vue-cookies";
import { ref } from "vue";

// import the remove cookie function
import { removeCookie } from "@/service/cookie";

import EditNicknameModal from "@/views/MyProfile/EditUserNickname.vue";
import EditPassword from "@/views/MyProfile/EditPassword.vue";
import OTPModal from "@/views/Authentication/OTPVerification.vue";

export default {
  components: {
    ButtonPress,
    EditProfile,
    EditNicknameModal,
    EditPassword,
    OTPModal,
  },

  data() {
    return {
      currentLocale: localStorage.getItem('locale') || "ZH",

      nickname: VueCookies.get("username"),
      phonenumber: VueCookies.get("phoneNumber"),
      avatar: VueCookies.get("avatar"),
      role: VueCookies.get("role") == "1" ? true : false,

      isEditProfileModalVisible: ref(false),
      isEditNicknameModalVisible: ref(false),
      isOTPModalVisible: ref(false),
      isEditPasswordModalVisible: ref(false),
    };
  },

  props: {
    showMyPageModal: Boolean,
    closeMyPageModal: Function,
    // showEditProfileModal: Function,
    showStreamDetailModal: Function,
  },

  methods: {
    languageChange(currentLocale) {
      console.log(currentLocale)
      const oppositeLocale = currentLocale === 'EN' ? 'ZH' : 'EN';
      this.$i18n.locale = oppositeLocale;
      localStorage.setItem("locale", oppositeLocale);

      if (this.$route.path === "/") {
        window.location.reload();
      } else {
        this.$router.push("/");
      }
    },

    showEditProfileModal() {
      this.isEditProfileModalVisible = true;
    },
    closeEditProfileModal() {
      this.isEditProfileModalVisible = false;
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

    // Edit Nickname Modal
    showEditNicknameModal() {
      this.isEditProfileModalVisible = false;
      this.isEditNicknameModalVisible = true;
    },

    closeEditNicknameModal() {
      this.isEditNicknameModalVisible = false;
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

    logout() {
      removeCookie();
      if (this.$route.path === "/") {
        window.location.reload();
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style scoped>
.my-page-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 1000;
}

.page-content {
  background: #f4f9f4;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  color: black;
  position: relative;
}

.profileForm {
  max-width: 375px;
  max-height: 514px;
  margin: 0 auto;
  padding: 20px;
  padding-top: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f4f9f4;
}
</style>
