<template>
  <!-- <div style="height: 150rem" /> -->
  <div class="w-full flex flex-col">
    <BackgroundImage>
      <div class="live-container">
        <div class="liveStream">
          <div class="live-window ">
            <div>直播窗口内容</div>
          </div>
        </div>

        <div class="flex justify-center">
          <div class="epic-container" style="width: 892px; height: 92px;">
            <div class="epic grid grid-cols-5">
              <div class="w-full" v-for="epic in epicMoment" :key="epic.epicMoment">
                <img :src="require(`../assets/main/${epic.image}.png`)" alt="Epic Image" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </BackgroundImage>

  </div>
  <div class="flex justify-center">
    <div class="flex flex-col smtg">
      <div class="pb-1">
        <img class="banner mt-5" src="../assets/main/advertisment.png" alt="Banner" />
      </div>
      <div>
        <h2 class="text-2xl pr-5 py-5 font-normal">热门赛程</h2>
        <PopularMatch />
      </div>
      <div class="pb-20">
        <h2 class="text-2xl pr-5 py-5 font-normal">热门主播榜</h2>
        <div class="flex">
          <img class="w-64" src="../assets/content/champion.png" />
          <div class="md:mx-4 w-52 flex flex-col items-center py-3" v-for="link in streamer" :key="link.streamer">
            <div>
              <img :src="require(`../assets/topNav/${link.image}.png`)" alt="Link Image"
                style="width: 50px; height: 50px;" />
            </div>
            <div>
              <p class="text-base hover:text-green-500">{{ link.name }}</p>

            </div>
            <div class="flex items-center">
              <p class="text-base hover:text-green-500">{{ link.no }}</p>
              <img class="w-5 h-5" src="../assets/content/Frame.png" alt="Frame Icon">

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

<script setup>
// import { ref } from 'vue'
import PopularMatch from '../components/PopularMatch.vue'
import FooterBar from '@/components/FooterPage.vue'
import BackgroundImage from '../components/BackGround.vue'

const streamer = [
  { name: '主播名称', image: 'defaultProfile', no: '1234' },
  { name: '主播名称', image: 'defaultProfile', no: '1234' },
  { name: '主播名称', image: 'defaultProfile', no: '1234' },
  { name: '主播名称', image: 'defaultProfile', no: '1234' },
  { name: '主播名称', image: 'defaultProfile', no: '1234' },
  { name: '主播名称', image: 'defaultProfile', no: '520' }
]

const epicMoment = [
  { image: 'moment5' },
  { image: 'moment5' },
  { image: 'moment5' },
  { image: 'moment5' },
  { image: 'moment5' },
]

</script>

<style >
.smtg {
  width: 892px;
}

.live-container {
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
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
  border-radius: 10px;
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

.epic>div>img {
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
