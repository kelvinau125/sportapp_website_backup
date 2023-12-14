<template>
  <BackgroundImage>
    <div class="pt-6">
      <PopularMatch />
    </div>
    <main class="wrapper pt-6 pb-12">
      <div class="card-container flex justify-start w-full">
        <div
          class="card h-44 py-2 px-1 relative md:w-1/2 lg: w-1/3 xl:w-1/4"
          v-for="livedata in liveData"
          :key="livedata.liveData"
        >
          <div
            @click="toLiveStream(livedata.liveID, livedata.streamerID)"
            class="card-body relative"
          >
            <div class="w-full h-full">
              <img class="w-full h-full" :src="livedata.image" alt="Image" />
            </div>
            <div
              class="gradient_bottom w-full flex titleBox relative bottom-[50px] items-center p-1 pb-2"
            >
              <div class="pr-1 pl-1 z-10 w-full contentImage hidden md:pb-1.5">
                <img
                  id="circle"
                  class="rounded-full"
                  :src="livedata.streamerIcon"
                  alt="Image"
                />
              </div>
              <div class="flex flex-col pl-1 items-start w-[220px] z-10">
                <div
                  class="text-start font-normal text-sm text-white w-[210px] multiline-ellipsis"
                >
                  <span> {{ livedata.liveTitle }}</span>
                </div>
                <div
                  class="text-10px text-white font-bold opacity-60 w-[210px] text-start multiline-ellipsis"
                >
                  {{ livedata.streamerName }}
                </div>
              </div>
              <!-- <div class="border-2 w-[200px] z-10">
                <span>{{ livedata.liveTitle }}</span>
              </div> -->
              <!-- <div class="border-2 w-[200px] flex flex-col pl-1 z-10 items-start md:pb-1.5">
                <div class="text-white font-medium md:text-sm text-10px  break-words ">
                  <span class="multiline-ellipsis w-[210px]">{{ livedata.liveTitle }}</span>
                </div>
                <div class="md:text-10px text-8px font-medium text-white opacity-60 break-all w-[220px]">
                  <span class="multiline-ellipsis" >{{ livedata.streamerName  }}</span>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </main>
  </BackgroundImage>
  <LoginModal :showModal="isLoginModalVisible" :closeModal="closeLoginModal" />
</template>
<script>
import { ref } from "vue";
import PopularMatch from "@/components/PopularMatch.vue";
import BackgroundImage from "@/components/BackGround.vue";
import VueCookies from "vue-cookies";

import { getAllStreamDetails } from "@/service/apiStreamProvider.js";

import LoginModal from "@/views/Authentication/LoginModal.vue";

export default {
  components: {
    PopularMatch,
    BackgroundImage,
    LoginModal,
  },
  data() {
    return {
      currentChannel: ref(localStorage.getItem("currentChannel") === "football" ? 0 : 1),
      isLoginModalVisible: ref(false),

      liveData: [],
      // liveData: [
      //   { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
      //   { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
      //   { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
      //   { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
      //   { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
      //   { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
      //   { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
      //   { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
      //   { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
      //   { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
      //   { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
      //   { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
      // ]
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
      // this.$router.push({ name: 'LiveStream' });
      const userToken = VueCookies.get("userToken");

      if (!userToken) {
        this.showLoginModal();
      } else {
        const routeData = this.$router.resolve({
          name: "LiveStream",
          query: {
            LiveID: liveID,
          },
          params: {
            streamerID: streamerID,
          },
        });
        window.open(routeData.href, "_blank");
      }
    },

    async generateLiveList() {
      this.liveData = [];

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
  max-width: 892px;
  margin: 0px auto;
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
  height: 161px;
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
  /* display: inline-block; */
}
</style>
