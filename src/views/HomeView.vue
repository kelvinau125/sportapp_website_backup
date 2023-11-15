<template>
  <div class="h-screen">
    <div class="w-full flex flex-col">
    <div class="backgroundImg">
      <div class="live-container">
        <div class="live-window ">
          <div>直播窗口内容</div>
        </div>
      </div>
      <div class="live-container">
        <div class="epic grid grid-cols-5 gap-3">
          <img src="../assets/main/moment5.png" alt="" class="rounded-lg col-span-1">
          <img src="../assets/main/moment5.png" alt="" class="rounded-lg col-span-1">
          <img src="../assets/main/moment5.png" alt="" class="rounded-lg col-span-1">
          <img src="../assets/main/moment5.png" alt="" class="rounded-lg col-span-1">
          <img src="../assets/main/moment5.png" alt="" class="rounded-lg col-span-1">
        </div>
      </div>

    </div>
    
  </div>
  <div class="content ">
    <div class="live-container">
      <img class="banner mt-5 pb-4" src="../assets/main/advertisment.png" alt="Banner" />
    </div>
  </div>
  <!-- Live PopularMatch Components -->
  <div class="flex-col content">
    <PopularMatch/>
    <h2 class="text-2xl pr-5 pt-5 font-semibold">热门主播榜</h2>
    <div class="pb-10 pt-5 flex">
      <img class="w-64" src="../assets/content/champion.png" />
      <div class="md:mx-4 w-52 flex flex-col items-center py-3" v-for="link in streamer" :key ="link.link">
        <div class="">
          <img :src="require(`../assets/topNav/${link.image}.png`)" alt="Link Image" class="" style="width: 50px; height: 50px;" />
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

  
</template>

<script setup>
// import { ref } from 'vue'
import PopularMatch from '../components/PopularMatch.vue'
// import FooterBar from '@/components/FooterPage.vue'

const streamer = [
  { name: '主播名称', image: 'defaultProfile', no: '1234' },
  { name: '主播名称', image: 'defaultProfile', no: '1234' },
  { name: '主播名称', image: 'defaultProfile', no: '1234' },
  { name: '主播名称', image: 'defaultProfile', no: '1234' },
  { name: '主播名称', image: 'defaultProfile', no: '1234' },
  { name: '主播名称', image: 'defaultProfile', no: '520' }
]

</script>

<style>
.container {
  /* background-image: url('../assets/main/footballCourt.png'); */
  margin-left: 260px;
  /* background-size: cover;
  background-position: center; */
  /* height: 50vh; */

}

.headerContainer{
  background-color: white;
  border-radius: 30px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.backgroundImg {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url('../assets/main/background_2.png');
  background-size:cover ;
  background-position: center;
  width: 100%;
  height: 650px;
}
.live-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 5px;
}
.live-window {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  /* margin-inline-start: 25%; */
  /* margin-inline-end: 25%; */
  /* width: 50% ; */
  width: 50vw;
  height: 50vh;
  margin-top: 20px;
  height: 450px;
  /* 添加其他样式以定义直播窗口的外观 */
}

.epic {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 10px;
  width: 50%;
  /* margin-inline-start: 15%;
  margin-inline-end: 15%; */
  height: 113px;
}

.advertisement{
  background-image: url('../assets/main/advertisment.png');
  background-size:cover ;
  background-position: center center;
  height: 100px;
  width: 71%;
  margin: auto;
}

.content{
  width: 50%;
  height: 100px;
  margin: auto;
}

.content .banner{
  width: 100%;
  height: 100px;

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
  display: block;
}

/* .matchInfoList .all_match_btn[data-v-2fa142d2] {
    display: block;
    width: 50px;
    height: 156px;
    position: absolute;
    right: 0px;
    top: 10px;
    background: url(https://88zb.hhtlkp.cn/webImgs/changeSkin/kqzb-theme/public/all_match.png) 50% center / 100% 100% no-repeat;
}  */

</style>
