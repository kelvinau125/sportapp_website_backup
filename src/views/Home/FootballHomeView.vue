<template>
  <!-- <div style="height: 150rem" /> -->

  <div class="w-full flex flex-col">
    <BackgroundImage>
      <div class="live-container">
        <div class="liveStream">
          <!-- <div class="live-window"> -->
          <!-- <div>直播窗口内容</div>
            <div>Testing</div> -->
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
            <!-- <source
              :src="
                selectedEpic
                  ? selectedEpic.videoSource
                  : 'https://vjs.zencdn.net/v/oceans.mp4'
              "
              type="video/mp4"
            /> -->

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
          <!-- </div> -->
        </div>

        <div class="flex justify-center">
          <div class="epic-container" style="width: 892px; height: 92px">
            <div class="epic grid grid-cols-5">
              <div
                class="w-full"
                v-for="epic in epicMoment"
                :key="epic.epicMoment"
                @click="selectEpic(epic)"
              >
                <img
                  :src="require(`@/assets/main/${epic.image}.png`)"
                  alt="Epic Image"
                  style="cursor: pointer"
                />
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

  <!-- <div class="flex justify-center">
    <div class="flex flex-col w-[897px]">
      <div class="flex justify-center pb-1">
        <img class="w-[520px] sm:w-[700px] md:w-[800px] lg:w-full   md:pl-0 mt-5" src="@/assets/main/advertisment.png"
          alt="Banner" />
      </div>
      <div style="border: 1px solid green;" class="w-[897px]">
        <h2 class="text-2xl pr-5 py-5 font-normal">{{ $t("Popular fixtures") }} </h2>
        <PopularMatch />
      </div>
      <div class="pb-20">
        <h2 class="text-2xl pr-5 py-5 font-normal">{{ $t("Popular anchor list") }}</h2>
        <div class="flex">
          <img style="width: 142px ; height: 116px;" src="@/assets/content/champion.png" />
          <div class="md:mx-4 w-52 flex flex-col items-center py-3" v-for="link in streamer" :key="link.streamer">
            <div>
              <img :src="require(`@/assets/topNav/${link.image}.png`)" alt="Link Image"
                style="width: 50px; height: 50px;" />
            </div>
            <div class="pt-1">
              <p class="text-sm font-normal hover:text-green-500">{{ link.name }}</p>

            </div>
            <div class="flex items-center">
              <p class="text-xs font-normal text-grayText hover:text-green-500">{{ link.no }}</p>
              <img class="pl-1" src="@/assets/content/Frame.png" alt="Frame Icon">

            </div>
          </div>
        </div>
      </div>

    </div>
  </div> -->
  <div>
    <FooterBar />
  </div>
</template>

<script>
import PopularMatch from "@/components/PopularMatch.vue";
import FooterBar from "@/components/FooterPage.vue";
import BackgroundImage from "@/components/BackGround.vue";
import { ref } from "vue";

export default {
  components: {
    PopularMatch,
    FooterBar,
    BackgroundImage,
  },
  data() {
    return {
      streamer: [
        { name: "主播名称", image: "defaultProfile", no: "1234" },
        { name: "主播名称", image: "defaultProfile", no: "1234" },
        { name: "主播名称", image: "defaultProfile", no: "1234" },
        { name: "主播名称", image: "defaultProfile", no: "1234" },
        { name: "主播名称", image: "defaultProfile", no: "1234" },
        { name: "主播名称", image: "defaultProfile", no: "520" },
      ],
      epicMoment: [
        {
          image: "moment5",
          videoSource: "https://vjs.zencdn.net/v/oceans.mp4",
          imgSource:
            "https://butwhytho.net/wp-content/uploads/2023/09/Gojo-Jujutsu-Kaisen-But-Why-Tho-2.jpg",
        },
        {
          image: "moment5",
          videoSource: "https://vjs.zencdn.net/v/ocean.mp4",
          imgSource:
            "https://i.pinimg.com/736x/d0/52/3d/d0523d4bb70c40d66f7cc6b3d3af2648.jpg",
        },
        {
          image: "moment5",
          videoSource: "https://vjs.zencdn.net/v/oceans.mp4",
          imgSource:
            "https://thumb.viva.id/intipseleb/663x372/2023/08/25/64e814afeea6f-trailer-shibuya-incident-jujutsu-kaisen.jpg",
        },
        {
          image: "moment5",
          videoSource: "https://vjs.zencdn.net/v/ocean.mp4",
          imgSource: "https://fictionhorizon.com/wp-content/uploads/2023/09/GojoStar.jpg",
        },
        {
          image: "moment5",
          videoSource: "https://vjs.zencdn.net/v/oceans.mp4",
          imgSource:
            "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2023/02/gojo-satoru-cosplay.jpg",
        },
      ],
      selectedEpic: null,
      currentChannel: ref(
        localStorage.getItem("currentChannel") === "football" ? true : false
      ),
    };
  },
  computed: {
    selectedEpicVideoSource() {
      console.log("eeeeeeeeeeeeeeeeeeeeeeee");
      console.log(this.selectedEpic.videoSource);
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
  methods: {
    selectEpic(epic) {
      this.selectedEpic = epic;
      this.$refs.videoPlayer.src = "";
      this.$nextTick(() => {
        this.$refs.videoPlayer.src = this.selectedEpic
          ? this.selectedEpic.videoSource
          : "https://vjs.zencdn.net/v/oceans.mp4";
      });
    },
  },
};
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
</style>
