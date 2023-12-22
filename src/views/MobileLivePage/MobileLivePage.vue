<template>
  <div class="flex justify-between p-5">
    <span class="text-lg font-medium" style="color: rgba(51, 51, 51, 1);">我收藏的直播</span>
    <span class="text-sm font-medium" style="rgba(102, 102, 102, 1)">展示所有</span>
  </div>
  <div class="h-[200px] border-2">
    我收藏的直播.....
  </div>

  <div class="flex justify-between items-center p-5">
    <span class="text-lg font-medium" style="color: rgba(51, 51, 51, 1);">正在直播</span>
    <span class="text-sm font-medium" style="rgba(102, 102, 102, 1)">展示所有</span>
  </div>
  
  <main class="wrapper pb-12">
    <div class="card-container flex justify-start w-full">
      <div class="card h-44 py-2 px-1 relative md:w-1/2 lg: w-1/3 xl:w-1/4" v-for="livedata in liveData"
        :key="livedata.liveData">
        <div @click="toLiveStream(livedata.liveID, livedata.streamerID)" class="card-body relative">
          <div class="w-full h-full">
            <img class="w-full h-full" :src="livedata.image" alt="Image" />
          </div>
          <div class="gradient_bottom w-full flex titleBox relative bottom-[50px] items-center p-1 pb-2">
            <div class="pr-1 pl-1 z-10 w-full contentImage hidden md:pb-1.5">
              <img id="circle" class="rounded-full" :src="livedata.streamerIcon" alt="Image" />
            </div>
            <div class="flex flex-col pl-1 items-start w-[220px] z-10">
              <div class="text-start font-normal text-sm text-white w-[210px] multiline-ellipsis">
                <span> {{ livedata.liveTitle }}</span>
              </div>
              <div class="text-10px text-white font-bold opacity-60 w-[210px] text-start multiline-ellipsis">
                {{ livedata.streamerName }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <LoginModal :showModal="isLoginModalVisible" :closeModal="closeLoginModal" />
</template>
<script>
import { ref } from "vue";
import VueCookies from "vue-cookies";

import { getAllStreamDetails, getAllPopularStreamDetails } from "@/service/apiStreamProvider.js";

import LoginModal from "@/views/Authentication/LoginModal.vue";

export default {
  components: {
    LoginModal,
  },
  data() {
    return {
      currentChannel: ref(localStorage.getItem("currentChannel") === "football" ? 0 : 1),
      isLoginModalVisible: ref(false),

      liveData: [],
    };
  },
  mounted() {
    this.generateLiveList();
  },

  methods: {
    showLoginModal() {
      this.isLoginModalVisible = true;
    },
    closeLoginModal() {
      this.isLoginModalVisible = false;
    },

    toLiveStream(liveID, streamerID) {
      // Push to the Live Page
      const userToken = VueCookies.get("userToken");

      if (!userToken) {
        this.showLoginModal();
      } else {
        localStorage.setItem("stream", streamerID);

        const routeData = this.$router.resolve({
          name: "LiveStream",
          query: {
            LiveID: liveID,
          },
        });

        window.open(routeData.href, "_blank");
      }
    },

    async generateLiveList() {
      this.liveData = [];

      this.getPopularLiveList = await getAllPopularStreamDetails();

      for (let i = 0; i < this.getPopularLiveList.length; i++) {
        // Check if sportType is 0 (football)
        if (this.getPopularLiveList[i]["sportType"] == this.currentChannel) {
          this.liveData.push({
            liveID: this.getPopularLiveList[i]["id"],
            image: this.getPopularLiveList[i]["cover"],
            liveTitle: this.getPopularLiveList[i]["title"],
            streamerName: this.getPopularLiveList[i]["nickName"],
            streamerIcon: this.getPopularLiveList[i]["avatar"],
            streamerID: this.getPopularLiveList[i]["userId"],
          });
        }
      }

      this.getLiveList = await getAllStreamDetails();

      for (let i = 0; i < this.getLiveList.length; i++) {
        // Check if sportType is 0 (football)
        if (this.getLiveList[i]["sportType"] == this.currentChannel) {
          this.liveData.push({
            liveID: this.getLiveList[i]["id"],
            image: this.getLiveList[i]["cover"],
            liveTitle: this.getLiveList[i]["title"],
            streamerName: this.getLiveList[i]["nickName"],
            streamerIcon: this.getLiveList[i]["avatar"],
            streamerID: this.getLiveList[i]["userId"],
          });
        }
      }
    },
  },
};
</script>

<style scoped>
@media (min-width: 300px) {
  .card {
    display: inline-block;
    width: 175px;
    height: 162px;
  }

  .titleBox {
    position: absolute;
    bottom: 0;
  }

  .contentImage {
    display: block;
    width: 30px;
  }

  .gradient_bottom::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    z-index: 1;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    background-size: cover;
    /* border-radius: 8px; */
  }
}

@media (min-width: 500px) {
  .card {
    display: inline-block;
    width: 230px;
    height: 162px;
  }

  .titleBox {
    position: absolute;
    bottom: 0;
  }

  .contentImage {
    display: block;
    width: 35px;
  }

  .gradient_bottom::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 1;
    z-index: 1;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    background-size: cover;
    border-radius: 8px;
  }
}

@media (min-width: 640px) {
  .card {
    display: inline-block;
    width: 287px;
    height: 162px;
  }

  .titleBox {
    position: absolute;
    bottom: 0;
  }

  .contentImage {
    display: block;
    width: 38px;
  }

  .gradient_bottom::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    z-index: 1;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
    background-size: cover;
    border-radius: 8px;
  }
}

.wrapper {
  width: 100%;
  max-width: 360px;
  margin: 0px auto;
  border: 1px solid red;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  row-gap: 15px;
  border: 10px solid gren;
}

.card-body {
  text-align: center;
  height: 142px;
  width: 100%;
  cursor: pointer;
  position: relative;
}

.card-body img {
  width: 100%;
  border-radius: 8px;
}

#circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.gradient_bottom::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: 1;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  background-size: cover;
}

.multiline-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.multiline-ellipsis::after {
  content: "...";
}
</style>
