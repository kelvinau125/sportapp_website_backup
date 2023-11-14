<template>
  <div class="w-full flex flex-col">
    <div class="backgroundImg">
      <div class="live-container">
        <div class="live-window ">
        <div>直播窗口内容</div>
      </div>
      </div>
      <div class="live-container">
        <div class="epic grid grid-cols-5 gap-3">
          <div class="rounded-xl">Image 1</div>
          <div class="rounded-xl">Image 2</div>
          <div class="rounded-xl">Image 3</div>
          <div class="rounded-xl">Image 4</div>
          <div class="rounded-xl">Image 5</div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex-col content">
    <div class="live-container">
      <img class="banner my-7" src="../assets/main/advertisment.png" alt="Banner" />
    </div>

    <h2 class="text-2xl pr-5 py-5 font-semibold">热门赛程</h2>
    <!-- 热门赛程 1 Row 5 Column -->
    <div class="grid grid-rows-1 grid-cols-9 gap-2 px-5">
      <!-- Take 8 Column for the contents -->
      <div class="col-span-3">
        <div>
        <!-- 热门赛程 Header -->
          <div class="grid grid-rows-1 grid-cols-3 justify-around py-2 rounded-md" style="background-color: #D6F1DD;">
            <div class="" style="border: 1px solid red;">
              欧冠
            </div>
            <div>
              12:00
            </div>
            <div>
              收藏
            </div>
          </div>
          <!-- 热门赛程 Contents -->
          <div class="grid grid-rows-3 grid-cols-3">
            <div>
              2
            </div>
            <div>
              开
            </div>
            <div>
              1
            </div>
            <div>
              Logo
            </div>
            <div>
              VS
            </div>
            <div>
              Logo
            </div>
            <div>
              Team Name
            </div>
            <div></div>
            <div>
              Team Name
            </div>
          </div>
       </div>
      </div>

      <div class="col-span-1 w-3/5 bg-slate-500">
        <!-- <img src="../assets/content/TeamMenu.png" /> -->
        <ButtonCom class="h-full">
          <div class="button">
            <img src="../assets/content/TeamMenu.png" />
          </div>
          <div>
            <p>全部赛程</p>
          </div>
        </ButtonCom>
      </div>
    </div>
    <h2 class="text-2xl pr-5 py-5 font-semibold">热门主播榜</h2>
    <div class="py-10 flex">
      <img class="w-64" src="../assets/content/champion.png" />
      <div class="md:mx-4 w-52 flex flex-col items-center py-3" v-for="link in streamer" :key ="link.link">
        <div class="">
          <!-- <img :src="require(`../assets/main/${link.image}.png`)" alt="Link Image" class="w-20 h-20" /> -->
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
    <!-- <div class="flex-col items h-52 items-center">
      <div>HALLO WORLD</div>
      <div>YOU ARE IDIOT</div>
    </div> -->
  </div>

  <!-- <div class="container bg-gray-900 text-white py3.5 px-6 shadow md:flex justify-between items-center ">
    <div class="player-photo">
      <img src="../assets/main/Messi.png" alt="Player 1" />
    </div>

    <div class="">
      <img src="../assets/main/lebron.png" alt="Player 2" />
    </div>
  </div>
  <div class="home">
    Big Container
    <div>
      广告
      看全球比赛 上熊猫体育 精彩赛事
    </div>
    <div>

      asd
    </div>
  </div> -->

</template>

<script setup>
// import { ref } from 'vue'
import ButtonCom from '../components/ButtonPress.vue'

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
  margin-top: 20px;
  height: 150px;
  /* 添加其他样式以定义直播窗口的外观 */
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
}

.player-photo {
  border-radius: 50%;
  /* 圆形边框 */
  margin: 10px;
  /* 添加外边距来调整布局 */
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
  /* border: 1px solid black; */
  display: block;
}

.matchInfoList .all_match_btn[data-v-2fa142d2] {
    display: block;
    width: 50px;
    height: 156px;
    position: absolute;
    right: 0px;
    top: 10px;
    background: url(https://88zb.hhtlkp.cn/webImgs/changeSkin/kqzb-theme/public/all_match.png) 50% center / 100% 100% no-repeat;
}

</style>
