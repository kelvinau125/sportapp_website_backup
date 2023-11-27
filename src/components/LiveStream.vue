
<template>
    <div class="flex flex-col contain-er " style="border: 1px solid red">
        <div class="flex justify-evenly">
            <div class="live-stream bg-slate-200" style="width: 1037px; height: 587px;">
                <div class="flex items-center pt-2.5">
                    <div class="pl-4 pr-2">
                        <img src="@/assets/live/defaultStreamerIcon.png" />
                    </div>
                    <div class="flex flex-col">
                        <span class="text-sm font-medium text-green-500">直播标题</span>
                        <span class="font-mediu text-grayText" style="font-size: 10px;">主播昵称</span>
                    </div>
                </div>
            </div>
            <div class="live-chat rounded-lg border-green-600" style="width: 463px; height: 587px; border-radius: 8px; border-color: green;">
                聊天框
            </div>
        </div>

        <span class="text-lg font-semibold pl-20 pt-5" >其他直播推荐</span>
        <main class="live_wrapper">
            <div class="card-container flex justify-start pl-12 pb-12">
                <div class="card h-44 py-2 px-1 relative md:w-1/2 lg: w-1/3 xl:w-1/4" v-for="(livedata, index) in liveData.slice(0, 10)"
                    :key="index">

                    <div @click="toLiveStream" class="card-body relative">
                        <img :src="require(`@/assets/live/${livedata.image}.png`)" alt="Image" />
                        <!-- <img src="@/assets/live/LiveImage.png" class="" /> -->
                        <div class="flex absolute bottom-0 items-center p-1 pb-2">
                            <div class="pr-1 pl-1 z-10 w-10">
                                <img :src="require(`@/assets/live/${livedata.streamerIcon}.png`)" alt="Image" />
                                <!-- <img src="@/assets/live/defaultStreamerIcon.png" /> -->
                            </div>
                            <div class="flex flex-col pl-1 z-10 items-start">
                                <div class="text-white text-sm">{{ livedata.liveTitle }}</div>
                                <div class="text-xs font-bold">{{ livedata.streamerName }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'


const router = useRouter();

const toLiveStream = () => {
  //Navigating
  //Push to the Live Page
  router.push({ name: 'LiveStream' })
}

const liveData = [
    { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon' },
    { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon' },
    { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon' },
    { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon' },
    { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'CX', streamerIcon: 'defaultStreamerIcon' },
    { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'CX', streamerIcon: 'defaultStreamerIcon' },
    { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'CX', streamerIcon: 'defaultStreamerIcon' },
    { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'CX', streamerIcon: 'defaultStreamerIcon' },
]

</script>

<style scoped>
.contain-er {
    margin-left: 150px;
    width: 1600px;
    margin-right: 150px;
    max-width: 1600px;

}

.live_wrapper {
    width: 100%;
    /* max-width: 1600px; */
    margin: 0px auto;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    row-gap: 35px;
}

.card {
    display: inline-block;
    width: 287px;
    margin-bottom: -35px;

}

.card-body {
    text-align: center;
    height: 161px;
    width: 100%;
    cursor: pointer;

}

.card-body img {
    width: 100%;
}

.live-stream {
    border-radius: 8px;
    /* height: 50vh; */
    margin-top: 10px;
    /* margin-left: 150px; */
}

.live-chat {
    border-radius: 8px;
    background-color: #FFFFFF;
    border: 1px solid ;
    /* height: 50vh; */
    margin-top: 10px;
    /* margin-right: 150px; */
}
</style>