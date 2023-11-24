<template>
  <div class="flex flex-row justify-center" style="height: 1.625rem">


  <div style="width: 17rem"></div>

  <div class="flex flex-row items-center">
    <span @mouseover="showCompanyMenu" @mouseleave="hideCompanyMenu"
      class="navLinkList textStyle font-roboto px-3 py-2 text-black">Company</span>
    <router-link :to="{ name: 'testTest' }"
      class="navLinkList textStyle font-roboto px-3 py-2 text-black">Reviews</router-link>
    <router-link :to="{ name: 'testTest' }" class="navLinkList textStyle font-roboto px-3 py-2 text-black">Career
    </router-link>
    <router-link :to="{ name: 'testTest' }" class="navLinkList textStyle font-roboto px-3 py-2 text-black">Contact Us
    </router-link>
  </div>
  </div>

  <div v-show="isCompanyVisible" class="z-200 flex flex-row items-center justify-center text-center relative"
    @mouseover="showCompanyMenu" @mouseleave="hideCompanyMenu">
    <div class="relative">
      <div class="absolute normal-case font-normal bg-white shadow-md overflow-hidden border"
        style="width: 6.5rem; height: 3rem; right:-210px; top:-1px">
        <div class="flex text-center justify-center items-center">
          <ul class="px-4">
            <li class="textStyle font-roboto py-1" @click="hideCompanyMenu">
              <router-link :to="{ name: 'testTest' }">About Us</router-link>
            </li>
            <hr class="border-t-1" style="width: 5.8rem; color: #DBDBDB">
            <li class="textStyle font-roboto py-1" @click="hideCompanyMenu">
              <router-link :to="{ name: 'testTest' }">Our Services</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isCompanyVisible: true,
    }
  },
  methods: {
    showCompanyMenu() {
      this.isCompanyVisible = true;
    },
    hideCompanyMenu() {
      this.isCompanyVisible = false;
    },
  }
}
</script>

<style scoped>
.navLinkList:hover {
  background-color: #D3E8FD;
  border-radius: 8px;
}

.navLinkList {
  cursor: pointer;
}

.border-l {
  border-left: 1px solid #6C6C76;
  /* Example color */
}

.textStyle {
  font-size: 9px;
  color: black;
}

img {
  height: 0.625rem;
  width: 0.625rem;
}</style>