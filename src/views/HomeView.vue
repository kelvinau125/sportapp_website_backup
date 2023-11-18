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
      <div class="epic-container">
        <div class="epic grid grid-cols-5 gap-3">
          <div class="w-full" v-for="epic in epicMoment" :key="epic.epicMoment">
            <img :src="require(`../assets/main/${epic.image}.png`)" alt="Epic Image"/>
          </div>
        </div>
      </div> 
      </div>

    </BackgroundImage>
    
  </div>
  <div class="flex flex-col content">  
    <img class="banner mt-5 pb-4" src="../assets/main/advertisment.png" alt="Banner" />

    <div class="">
      <h2 class="text-2xl pr-5 py-5 font-semibold">热门赛程</h2>
      <PopularMatch/>
      <div class="pb-10 pt-5">
        <h2 class="text-2xl pr-5 pt-5 font-semibold">热门主播榜</h2>
        <div class="flex">
          <img class="w-64" src="../assets/content/champion.png" />
          <div class="md:mx-4 w-52 flex flex-col items-center py-3" v-for="link in streamer" :key ="link.streamer">
            <div>
              <img :src="require(`../assets/topNav/${link.image}.png`)" alt="Link Image" style="width: 50px; height: 50px;" />
            </div>
            <div>
              <p class="text-base hover:text-green-500">{{ link.name }}</p>

            </div>
            <div class="flex items-center">
              <p class="text-base hover:text-green-500">{{ link.no }}</p>
              <img class="w-5 h-5" src="../assets/content/Frame.png" alt="Frame Icon" >

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div>
    <FooterBar/>
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
  {image: 'moment5'},
  {image: 'moment5'},
  {image: 'moment5'},
  {image: 'moment5'},
  {image: 'moment5'},
]

</script>

<style>

.live-container{
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
  width: 50vw;
  height: 50vh;
  margin-top: 10px;
  height: 505px;
}

.epic-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 5px;
}
.epic {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 10px;
  width: 50%;
  height: 120px;
  display: grid;
  grid-template-columns: repeat(5, 2fr);
  gap: 10px; 

}

.epic>div>img{
  height: 100px;
  width: 100%; 
}

.content{
  width: 50%;
  margin: auto;
}

.content .banner{
  width: 100%;
  height: 76px;

}
.button{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20px;
}

/* 热门赛程 */
.teamContainer{
  width: 100%;
  height: 180px;
  margin: auto;
}


.footer {
  background-color: black;
  color: white;
  text-align: center;
  padding: 20px;
}

.footer-content {
  max-width: 1200px;
  margin:  auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-links {
  margin-bottom: 10px;
}

.footer-links a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}

.footer-disclaimer {
  font-size: 14px;
  margin-bottom: 10px;
}

.footer-copyright {
  font-size: 14px;
}

div {
  border: 1px solid black;
  }


</style>
