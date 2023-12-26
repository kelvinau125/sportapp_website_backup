<template>
  <div class="w-full flex flex-col">
    <BackgroundImage>
      <div class="live-container h-[650px] scroll-container ">
        <div class="liveStream inner-container">
          <!-- <div class="live-window"> -->
          <!-- <div>直播窗口内容</div>
            <div>Testing</div> -->
            
          <div class="relative">
            <div
              v-show="showWarming"
              class="video-wrapper w-[892px] h-[505px] rounded-lg bg-transparent z-10 flex justify-center items-center text-white"
            >
              <p class="font-medium text-2xl">{{ $t("No live broadcast...") }}</p>
            </div>

            <div v-show="!showWarming" class="video-wrapper">
              <video
                ref="myVideo"
                preload="auto"
                class="video-js vjs-default-skin w-[892px] h-[505px]"
                style="cursor: pointer"
              ></video>

              <ButtonPress
                style="background-color: rgba(0, 0, 0, 1)"
                class="hover-button w-[150px] h-[46px] opacity-[0.6]"
                @click="
                  handleButtonClick(
                    selectedEpic.streamerID || selectedEpic.userId,
                    selectedEpic.liveId || selectedEpic.id
                  )
                "
              >
                <span
                  class="text-base font-normal opacity-100"
                  style="color: rgba(255, 255, 255, 1)"
                  >{{ $t("Enter Room") }}</span
                >
              </ButtonPress>
            </div>

            <div v-show="!showWarming" class="items-center absolute left-5 top-3 flex">
              <img
                id="circle"
                class="rounded-full w-[30px] z-10 h-[30px]"
                :src="this.StreamIcon"
                alt="Image"
              />
              <div
                class="flex flex-col md:pl-3 pl-5 z-10 items-start w-[800px] md:pb-1.5 pb-3"
              >
                <div
                  class="text-white font-normal md:text-sm text-10px w-[790px] multiline-ellipsis"
                >
                  {{ this.LiveTitle }}
                </div>
                <div
                  class="md:text-10px text-8px font-bold text-white opacity-60 w-[790px] multiline-ellipsis"
                >
                  {{ this.StreamName }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center">
          <div class="epic-container" style="width: 892px; height: 92px">
            <div class="epic grid grid-cols-5">
              <div
                class="w-full"
                v-for="epic in epicMoment"
                :key="epic.epicMoment"
                @click="selectEpic(epic, epic.liveId)"
              >
                <img :src="epic.image" alt="Epic Image" style="cursor: pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundImage>
  </div>

  <div class="flex flex-col justify-center">
    <div class="flex justify-center">
      <img
        class="w-[520px] sm:w-[700px] md:w-[800px] lg:w-[897px] md:pl-0 mt-5"
        src="@/assets/main/advertisment.png"
        alt="Banner"
      />
    </div>
    <div class="flex justify-center">
      <div class="w-full md:w-[897px]">
        <h2 class="md:text-2xl text-xl pr-5 py-5 font-normal">
          {{ $t("Popular fixtures") }}
        </h2>
        <PopularMatch />
      </div>
    </div>
    <div class="flex justify-center">
      <div class="w-full md:w-[897px] pb-20">
        <h2 class="md:text-2xl text-xl pr-5 py-5 font-normal">
          {{ $t("Popular anchor list") }}
        </h2>
        <div class="flex gap-[5px] flex-wrap rounded-lg w-full bg-white">
          <img
            class="md:w-[142px] w-[120px] md:h-[116px] h-[94px]"
            src="@/assets/content/champion.png"
          />
          <div
            class="md:w-[120px] w-[103px] flex flex-col items-center py-3"
            v-for="link in streamer"
            :key="link.streamer"
          >
            <div>
              <img
                id="circle2"
                class="rounded-full w-[50px] z-10 h-[50px]"
                :src="link.image"
                alt="Link Image"
              />
            </div>
            <div class="pt-1">
              <p
                class="md:text-sm text-xs font-normal hover:text-green-500 whitespace-nowrap overflow-ellipsis"
              >
                {{ link.name }}
              </p>
            </div>
            <div class="flex items-center">
              <div>
                <p class="text-10px font-normal text-grayText hover:text-green-500">
                  {{ link.no }}
                </p>
              </div>
              <div>
                <img
                  class="pl-1 md:w-[18px] w-[16px]"
                  src="@/assets/content/Frame.png"
                  alt="Frame Icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <FooterBar />
  </div>
  <LoginModal :showModal="isLoginModalVisible" :closeModal="closeLoginModal" />
</template>

<script>
import PopularMatch from "@/components/PopularMatch.vue";
import FooterBar from "@/components/FooterPage.vue";
import BackgroundImage from "@/components/BackGround.vue";
import { defineComponent, ref } from "vue";
import { useTencentSDK } from "@/utils/tencentSDKProvder";
import VueCookies from "vue-cookies";

import {
  getAllPopularStreamDetails,
  getStreamDetails,
  getAllStreamDetails,
} from "@/service/apiStreamProvider.js";
import { getPopularAnchor } from "@/service/apiProvider";

import ButtonPress from "@/components/ButtonPress.vue";

import LoginModal from "@/views/Authentication/LoginModal.vue";

import videojs from "video.js";
import "video.js/dist/video-js.css";

export default defineComponent({
  components: {
    PopularMatch,
    FooterBar,
    BackgroundImage,
    ButtonPress,
    LoginModal,
  },
  data() {
    return {
      myVideo: ref(),
      tim: null,
      streamer: [],
      epicMoment: [],
      showWarming: ref(true),

      selectedEpic: null,
      currentChannel: ref(
        localStorage.getItem("currentChannel") === "football" ? true : false
      ),

      LiveTitle: "",
      StreamIcon: "",
      StreamName: "",
      liveVideoSouce: "",

      isLoginModalVisible: ref(false),
    };
  },
  computed: {
    selectedEpicVideoSource() {
      return this.myVideo.videoSource;
    },
    selectedLiveStreamImage() {
      return this.selectedEpic
        ? this.selectedEpic.imgSource
        : "https://fictionhorizon.com/wp-content/uploads/2023/09/GojoStar.jpg";
    },
  },

  mounted() {
    this.generateLiveStreamList();
    this.generatePopularAnchorList();
    if (VueCookies.isKey("phoneNumber")) {
      useTencentSDK().then((timInstance) => {
        this.tim = timInstance.timInstance._value;
      });
    }
    this.initVideoPlayer();
  },

  methods: {
    showLoginModal() {
      this.isLoginModalVisible = true;
    },
    closeLoginModal() {
      this.isLoginModalVisible = false;
    },

    initVideoPlayer() {
      // Reference to the video element
      const videoElement = this.$refs.myVideo;

      // Initialize video.js with the FLV video link
      this.player = videojs(videoElement, {
        techOrder: ["html5", "flash"],
        sources: [
          {
            type: "video/x-mpegURL",
            src: this.myVideo,
          },
        ],
        autoPlay: true,
        muted: true,
      });

      // Autoplay the video
      this.player.autoplay(true);
    },
    handleButtonClick(streamerID, liveID) {
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

        window.location.replace(routeData.href);
      }
    },
    async displayLive(liveID) {
      this.getLiveDetails = await getStreamDetails(liveID);

      this.LiveTitle = this.getLiveDetails["title"];
      this.StreamIcon = this.getLiveDetails["avatar"];
      this.StreamName = this.getLiveDetails["nickName"];
    },

    selectEpic(epic, liveId) {
      this.displayLive(liveId);
      let myVideo = epic;
      this.selectedEpic = epic;

      if (this.player) {
        this.player.src([{ type: "video/x-mpegURL", src: epic.videoSource }]);
        this.player.autoplay(true);
      }

      this.$nextTick(() => {
        this.liveVideoSouce = myVideo;
      });
    },

    async generateLiveStreamList() {
      this.epicMoment = [];

      this.getLiveList = await getAllPopularStreamDetails();

      let secondLoopCount = 0; // Counter for the second loop

      if (this.getLiveList.length > 0) {
        for (let i = 0; i < Math.min(7, this.getLiveList.length); i++  &&
            secondLoopCount <= 6-(this.epicMoment.length)) {
          if (this.getLiveList[i]["sportType"] == (this.currentChannel ? 0 : 1)) {
            this.showWarming = false;
            this.selectEpic(0, this.getLiveList[0]["id"]);
            this.selectedEpic = this.getLiveList[0];

            if (this.player) {
              this.player.src([
                {
                  type: "video/x-mpegURL",
                  src:
                    "http://play.mindark.cloud/live/" +
                    this.getLiveList[0]["pushCode"].split("?")[0] +
                    ".m3u8",
                },
              ]);
              this.player.autoplay(true);
            }

            this.epicMoment.push({
              image: this.getLiveList[i]["cover"],
              videoSource:
                "http://play.mindark.cloud/live/" +
                this.getLiveList[i]["pushCode"].split("?")[0] +
                ".m3u8",
              imgSource: this.getLiveList[i]["cover"],
              liveId: this.getLiveList[i]["id"],
              streamerID: this.getLiveList[i]["userId"],
            });
          }
        }
      }

      // console.log(this.epicMoment.length)

      if (this.epicMoment.length < 5) {
        this.getLiveList = await getAllStreamDetails();

        let secondLoopCount = 0; // Counter for the second loop

        for (let j = 0; j < this.getLiveList.length; j++) {
          if (
            this.getLiveList[j]["sportType"] == (this.currentChannel ? 0 : 1) &&
            secondLoopCount <= 6-(this.epicMoment.length)
          ) {
            this.showWarming = false;
            this.selectEpic(0, this.getLiveList[j]["id"]);
            this.selectedEpic = this.getLiveList[j];

            if (this.player) {
              this.player.src([
                {
                  type: "video/x-mpegURL",
                  src:
                    "http://play.mindark.cloud/live/" +
                    this.getLiveList[j]["pushCode"].split("?")[0] +
                    ".m3u8",
                },
              ]);
              this.player.autoplay(true);
            }

            this.epicMoment.push({
              image: this.getLiveList[j]["cover"],
              videoSource:
                "http://play.mindark.cloud/live/" +
                this.getLiveList[j]["pushCode"].split("?")[0] +
                ".m3u8",
              imgSource: this.getLiveList[j]["cover"],
              liveId: this.getLiveList[j]["id"],
              streamerID: this.getLiveList[j]["userId"],
            });

            secondLoopCount++; // Increment the counter for the second loop
          }
        }
      }
    },

    async generatePopularAnchorList() {
      this.streamer = [];

      this.getAnchorList = await getPopularAnchor();

      if (this.getAnchorList.length > 0) {
        for (let i = 0; i < Math.min(6, this.getAnchorList.length); i++) {
          this.streamer.push({
            name: this.getAnchorList[i]["nickName"],
            image: this.getAnchorList[i]["head"],
            // no: this.getAnchorList[i]["popularAnchor"],
            no: 9999 + "+",
          });
        }
      }
    },
  },
});
</script>

<style scoped>
video:hover {
  cursor: pointer;
}

.containerWidth {
  width: 892px;
  border: 1px solid red;
}

.live-container {
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  padding: 10px;
}

.video-js {
  border-radius: 8px;
  width: 892px;
  height: 505px;
  color: whitesmoke;
  background-color: black;
}

.liveStream {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 5px;
}

.live-window {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 20px;
  width: 892px;
  margin-top: 10px;
  height: 505px;
}

.epic-container {
  display: flex;
  justify-content: center;
  width: 892px;
  margin-bottom: 5px;
}

#circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

#circle2 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.epic {
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  height: 120px;
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  gap: 10px;
}

.epic > div > img {
  height: 100px;
  width: 100%;
}

.content {
  width: 50%;
  margin: auto;
}

.banner {
  width: 892px;
  height: 76px;
}

.button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20px;
}

/* 热门赛程 */
.teamContainer {
  width: 100%;
  height: 180px;
  margin: auto;
}

div {
}

.multiline-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.multiline-ellipsis::after {
  content: "...";
  display: inline-block;
}

.video-wrapper {
  position: relative;
}

/* Button styling */
.hover-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  display: none;
  /* Hide the button by default */
}

/* Show the button on video wrapper hover */
.video-wrapper:hover .hover-button {
  display: block;
}

.scroll-container {
  position: absolute;
  width: 100%;
  overflow-x: auto;
  overflow-y: visible;

}

.inner-container {
  max-width: 892px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
}
.scroll-container::-webkit-scrollbar {
  display: none;
}
</style>
