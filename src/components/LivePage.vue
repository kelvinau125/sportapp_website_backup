<template>
  <BackgroundImage>
    <div class="pt-6">
      <PopularMatch />

    </div>
    <div>
      <main class="wrapper pt-6">
        <div class="card-container flex justify-start w-ful pl-10">
          <div class="card h-44 py-2 px-1 relative md:w-1/2 lg: w-1/3 xl:w-1/4" v-for="livedata in liveData"
            :key="livedata.liveData">

            <div @click="toLiveStream" class="card-body relative">
              <div class="">
                <img class="" :src="require(`@/assets/live/${livedata.image}.png`)" alt="Image" />
              </div>
              <div class="gradient_bottom w-full flex absolute bottom-0 items-center p-1 pb-2">
                <div class="pr-1 pl-1 z-10 w-10 pb-1.5">
                  <img :src="require(`@/assets/live/${livedata.streamerIcon}.png`)" alt="Image" />
                </div>
                <div class="flex flex-col pl-1 z-10 items-start pb-1.5">
                  <div class="text-white font-normal text-sm">{{ livedata.liveTitle }}</div>
                  <div class="text-10px font-bold text-white opacity-60">{{ livedata.streamerName }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </BackgroundImage>
</template>

<script setup>
import PopularMatch from '@/components/PopularMatch.vue'
import BackgroundImage from '@/components/BackGround.vue'
import { useRouter } from 'vue-router'

const liveData = [
  { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
  { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
  { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
  { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
  { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
  { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
  { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
  { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
  { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
  { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
  { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
  { image: 'LiveImage', liveTitle: '直播标题', streamerName: '主播昵称', streamerIcon: 'defaultStreamerIcon' },
]


const router = useRouter();

const toLiveStream = () => {
  //Navigating
  //Push to the Live Page
  router.push({ name: 'LiveStream' })
}

</script>

<style scoped>
.live-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 5px;
}

.content {
  width: 50%;
  max-width: 960px;
  height: 100px;
  margin: auto;
}

.wrapper {
  width: 100%;
  max-width: 960px;
  margin: 0px auto;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  row-gap: 15px;
}

.card {
  display: inline-block;
  width: 287px;
  height: 162px;

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


.gradient_bottom::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: 1;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);

  background-size: cover;
  border-radius: 8px;
}
</style>