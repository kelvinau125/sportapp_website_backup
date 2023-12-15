<template>
  <!-- <div style="height: 150rem" /> -->
  <div class="w-full flex flex-col">
    <BackgroundImage>
      <div class="live-container">
        <div class="liveStream">
          <!-- <div class="live-window"> -->
          <!-- <div>直播窗口内容</div>
            <div>Testing</div> -->
          <div class="relative">
            <div class="video-wrapper">
              <video
                ref="videoPlayer"
                :key="selectedEpic ? selectedEpic.epicMoment : 'default'"
                id="my-player"
                class="video-js vjs-default-skin"
                controls
                preload="auto"
                width="892px"
                height="505px"
                :poster="selectedLiveStreamImage"
                style="cursor: pointer"
              >
                <source
                  :src="
                    selectedEpic
                      ? selectedEpic.videoSource
                      : 'https://vjs.zencdn.net/v/oceans.mp4'
                  "
                  type="video/mp4"
                />
                <!-- <p class="vjs-no-js"> -->
                <!-- <a href="https://vjs.zencdn.net/v/oceans.mp4">`1`ing URL</a> -->

                <!-- </p> -->
              </video>
              <!-- <div class="hover-button" @click="handleButtonClick"> -->
              <ButtonPress
                style="background-color: rgba(0, 0, 0, 1)"
                class="hover-button w-[150px] h-[46px] opacity-[0.6]"
                @click="handleButtonClick(selectedEpic.streamerID, selectedEpic.liveId)"
              >
                <span
                  class="text-base font-normal opacity-100"
                  style="color: rgba(255, 255, 255, 1)"
                  >{{ $t("Enter Room") }}</span
                >
              </ButtonPress>
              <!-- </div> -->
            </div>

            <div class="items-center absolute left-5 top-3 flex">
              <!-- <div class="pr-2 pl-1 z-10 w-[40px]"> -->
              <img
                id="circle"
                class="rounded-full w-[30px] z-10 h-[30px]"
                :src="this.StreamIcon"
                alt="Image"
              />
              <!-- </div> -->
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

          <!-- </div> -->
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
                class="md:w-[50px]"
                :src="require(`@/assets/topNav/${link.image}.png`)"
                alt="Link Image"
              />
            </div>
            <div class="pt-1">
              <p class="md:text-sm text-xs font-normal hover:text-green-500">
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
</template>

<script>
import PopularMatch from "@/components/PopularMatch.vue";
import FooterBar from "@/components/FooterPage.vue";
import BackgroundImage from "@/components/BackGround.vue";
import { defineComponent, ref } from "vue";
import { useTencentSDK } from "@/utils/tencentSDKProvder";
import VueCookies from "vue-cookies";

import { getAllStreamDetails, getStreamDetails } from "@/service/apiStreamProvider.js";

import ButtonPress from "@/components/ButtonPress.vue";

export default defineComponent({
  components: {
    PopularMatch,
    FooterBar,
    BackgroundImage,
    ButtonPress,
  },
  data() {
    return {
      tim: null,
      streamer: [
        { name: "主播名称", image: "defaultProfile", no: "1234" },
        { name: "主播名称", image: "defaultProfile", no: "1234" },
        { name: "主播名称", image: "defaultProfile", no: "1234" },
        { name: "主播名称", image: "defaultProfile", no: "1234" },
        { name: "主播名称", image: "defaultProfile", no: "1234" },
        { name: "主播名称", image: "defaultProfile", no: "520" },
      ],
      epicMoment: [],
      // {
      //   image: "moment5",
      //   videoSource: "https://vjs.zencdn.net/v/oceans.mp4",
      //   imgSource:
      //     "https://butwhytho.net/wp-content/uploads/2023/09/Gojo-Jujutsu-Kaisen-But-Why-Tho-2.jpg",
      // },
      // {
      //   image: "moment5",
      //   videoSource: "https://vjs.zencdn.net/v/ocean.mp4",
      //   imgSource:
      //     "https://i.pinimg.com/736x/d0/52/3d/d0523d4bb70c40d66f7cc6b3d3af2648.jpg",
      // },
      // {
      //   image: "moment5",
      //   videoSource: "https://vjs.zencdn.net/v/oceans.mp4",
      //   imgSource:
      //     "https://thumb.viva.id/intipseleb/663x372/2023/08/25/64e814afeea6f-trailer-shibuya-incident-jujutsu-kaisen.jpg",
      // },
      // {
      //   image: "moment5",
      //   videoSource: "https://vjs.zencdn.net/v/ocean.mp4",
      //   imgSource: "https://fictionhorizon.com/wp-content/uploads/2023/09/GojoStar.jpg",
      // },
      // {
      //   image: "moment5",
      //   videoSource: "https://vjs.zencdn.net/v/oceans.mp4",
      //   imgSource:
      //     "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2023/02/gojo-satoru-cosplay.jpg",
      // },

      selectedEpic: null,
      currentChannel: ref(
        localStorage.getItem("currentChannel") === "football" ? true : false
      ),

      LiveTitle: "",
      StreamIcon: "",
      StreamName: "",
    };
  },
  computed: {
    selectedEpicVideoSource() {
      // console.log(this.selectedEpic.videoSource);
      return this.selectedEpic
        ? this.selectedEpic.videoSource
        : "https://vjs.zencdn.net/v/oceans.mp4";
    },
    selectedLiveStreamImage() {
      return this.selectedEpic
        ? this.selectedEpic.imgSource
        : "https://fictionhorizon.com/wp-content/uploads/2023/09/GojoStar.jpg";
    },
  },

  mounted() {
    this.generateLiveStreamList();
    if (VueCookies.isKey("phoneNumber")) {
      useTencentSDK().then((timInstance) => {
        this.tim = timInstance.timInstance._value;
      });
    }
  },

  methods: {
    handleButtonClick(streamerID, liveID) {
      const userToken = VueCookies.get("userToken");
      // console.log("check bug: ", liveID, " ", streamerID);

      if (!userToken) {
        this.showLoginModal();
      } else {
        localStorage.setItem("stream", streamerID);
        // console.log("check group id: ", streamerID);

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
      // console.log("-----------------------------");
      // console.log("helllo");
      // console.log(liveID);

      this.getLiveDetails = await getStreamDetails(liveID);

      this.LiveTitle = this.getLiveDetails["title"];
      this.StreamIcon = this.getLiveDetails["avatar"];
      this.StreamName = this.getLiveDetails["nickName"];
    },

    // toSetLogLevel() {
    //   this.tim.setLogLevel(4);
    // },

    // toRegisterPlugin() {
    //   this.tim?.registerPlugin({
    //     "tim-upload-plugin": TIMUploadPlugin,
    //   });
    // },

    // toLogin() {
    //   this.tim
    //     .login({
    //       userID: this.phonenumber,
    //       userSig: new genTestUserSig(this.phonenumber).userSig,
    //     })
    //     .then((response) => {
    //       console.log("logined", response);
    //     })
    //     .catch((error) => {
    //       console.warn("error", error);
    //     });
    // },

    selectEpic(epic, liveId) {
      // console.log("what is clicking: ", epic, " and ", liveId);
      this.displayLive(liveId);
      this.selectedEpic = epic;
      this.$refs.videoPlayer.src = "";
      this.$nextTick(() => {
        this.$refs.videoPlayer.src = this.selectedEpic
          ? this.selectedEpic.videoSource
          : "https://vjs.zencdn.net/v/oceans.mp4";
      });
    },

    async generateLiveStreamList() {
      this.epicMoment = [];

      for (let i = 0; i < 6; i++) {
        this.getLiveList = await getAllStreamDetails();

        // console.log("-----------------------------");
        // console.log(this.getLiveList);
        // console.log(this.getLiveList.length);

        if (this.getLiveList.length > 0) {
          for (let j = 0; j < Math.min(1, this.getLiveList.length) - 1; j++) {
            // Check if sportType is 0 (football)

            // console.log("==========================================");
            // console.log(this.getLiveList[i]);
            if (
              this.getLiveList[i]["sportType"] == (this.currentChannel ? 0 : 1) &&
              this.getLiveList[i]["isPopular"] == 1
            ) {
              this.epicMoment.push({
                image: this.getLiveList[j]["cover"],
                videoSource:
                  "rtmp://" +
                  this.getLiveList[j]["pushHost"] +
                  "/" +
                  this.getLiveList[j]["pushCode"],
                imgSource: this.getLiveList[j]["cover"],
                liveId: this.getLiveList[j]["id"],
                streamerID: this.getLiveList[j]["userId"],
              });
            }
          }
        }
      }

      // console.log("---------------------11111-------------------------");
      // console.log(this.epicMoment);
      // console.log(this.epicMoment.length);

      if (this.epicMoment.length < 6) {
        this.getLiveList = await getAllStreamDetails();

        if (this.getLiveList.length > 0) {
          for (
            let i = this.epicMoment.length;
            i < Math.min(6, this.getLiveList.length);
            i++
          ) {
            // Check if sportType is 0 (football)
            if (
              this.getLiveList[i]["sportType"] == (this.currentChannel ? 0 : 1) &&
              this.getLiveList[i]["isPopular"] == 0
            ) {
              this.epicMoment.push({
                image: this.getLiveList[i]["cover"],
                videoSource:
                  "rtmp://" +
                  this.getLiveList[i]["pushHost"] +
                  "/" +
                  this.getLiveList[i]["pushCode"],
                imgSource: this.getLiveList[i]["cover"],
                liveId: this.getLiveList[i]["id"],
                streamerID: this.getLiveList[i]["userId"],
              });
            }
          }
        }
      }

      // console.log("----------------------------------------------")
      // console.log(this.epicMoment)
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
  /* border: 1px solid red; */
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
</style>
