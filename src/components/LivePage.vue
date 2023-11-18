<template>
  <BackgroundImage>
    <div class="live-container">
        <div class="content">
          <div class="pt-6 ">
            <PopularMatch/>  
          </div>
          <main class="wrapper">

            <div class="card-container flex justify-start">
                <div class="card h-44 py-2 px-1 relative md:w-1/2 lg: w-1/3 xl:w-1/4" v-for="livedata in liveData" :key="livedata.liveData">
                
                  <div @click="toLiveStream" class="card-body relative">
                    <img :src="require(`../assets/live/${livedata.image}.png`)" alt="Image" />
                    <!-- <img src="../assets/live/LiveImage.png" class="" /> -->
                      <div class="flex absolute bottom-0 items-center p-1 pb-2">
                        <div class="pr-1 pl-1 z-10 w-10">
                          <img :src="require(`../assets/live/${livedata.streamerIcon}.png`)" alt="Image" />
                          <!-- <img src="../assets/live/defaultStreamerIcon.png" /> -->
                        </div>
                        <div class="flex flex-col pl-1 z-10 items-start">
                            <div class="text-white text-sm">{{ livedata.liveTitle}}</div>
                            <div class="text-xs font-bold">{{ livedata.streamerName}}</div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
          </main>
        </div>
      </div>
      

  </BackgroundImage>
  <div class="w-1/2 flex">
    <PopularMatch/>  

  </div>


</template>

<script setup>
import PopularMatch from '../components/PopularMatch.vue'
import BackgroundImage from '@/components/BackGround.vue'
import { useRouter } from 'vue-router'


const liveData = [
  { image: 'LiveImage', liveTitle: 'TITLE', streamerName: 'NAME',  streamerIcon: 'defaultStreamerIcon'},
  { image: 'LiveImage', liveTitle: 'TITLE', streamerName: 'NAME',  streamerIcon: 'defaultStreamerIcon'},
  { image: 'LiveImage', liveTitle: 'TITLE', streamerName: 'NAME',  streamerIcon: 'defaultStreamerIcon'},
  { image: 'LiveImage', liveTitle: 'TITLE', streamerName: 'NAME',  streamerIcon: 'defaultStreamerIcon'},
  { image: 'LiveImage', liveTitle: 'TITLE', streamerName: 'CX',  streamerIcon: 'defaultStreamerIcon'},
  { image: 'LiveImage', liveTitle: 'TITLE', streamerName: 'CX',  streamerIcon: 'defaultStreamerIcon'},
  { image: 'LiveImage', liveTitle: 'TITLE', streamerName: 'CX',  streamerIcon: 'defaultStreamerIcon'},
  { image: 'LiveImage', liveTitle: 'TITLE', streamerName: 'CX',  streamerIcon: 'defaultStreamerIcon'},
  { image: 'LiveImage', liveTitle: 'TITLE', streamerName: 'CX',  streamerIcon: 'defaultStreamerIcon'},
  { image: 'LiveImage', liveTitle: 'TITLE', streamerName: 'CX',  streamerIcon: 'defaultStreamerIcon'},
  { image: 'LiveImage', liveTitle: 'TITLE', streamerName: 'CX',  streamerIcon: 'defaultStreamerIcon'},
  { image: 'LiveImage', liveTitle: 'TITLE', streamerName: 'CX',  streamerIcon: 'defaultStreamerIcon'},
  { image: 'LiveImage', liveTitle: 'TITLE', streamerName: 'CX',  streamerIcon: 'defaultStreamerIcon'},
  { image: 'LiveImage', liveTitle: 'TITLE', streamerName: 'CX',  streamerIcon: 'defaultStreamerIcon'},
  { image: 'LiveImage', liveTitle: 'TITLE', streamerName: 'CX',  streamerIcon: 'defaultStreamerIcon'},
  { image: 'LiveImage', liveTitle: 'TITLE', streamerName: 'CX',  streamerIcon: 'defaultStreamerIcon'},
  { image: 'LiveImage', liveTitle: 'TITLE', streamerName: 'CX',  streamerIcon: 'defaultStreamerIcon'},
  { image: 'LiveImage', liveTitle: 'TITLE', streamerName: 'CX',  streamerIcon: 'defaultStreamerIcon'},
  { image: 'LiveImage', liveTitle: 'TITLE', streamerName: 'CX',  streamerIcon: 'defaultStreamerIcon'},
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

.content{
  width: 50%;
  max-width: 960px;
  height: 100px;
  margin: auto;
}

.wrapper{
    width: 100%;
    max-width: 960px;
    margin: 0px auto;
    padding-top: 20px;
}

.card-container{
    display: flex;
    flex-wrap: wrap;
    gap: 35px;
    /* row-gap: 35px; */
}

.card{
    display: inline-block;
    width: 290px;
    margin-bottom: -35px; 

}

.card-body{
    text-align: center;
    height: 161px;
    width: 100%;
    cursor: pointer;
    
}

.card-body img {
    width: 100%;
}

</style>