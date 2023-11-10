<template>
  <div class="w-full flex flex-col">
    <div class="backgroundImg">
      <div class="live-window">直播窗口内容</div>
      <div class="epic">精彩回放</div>
    </div>
  </div>

  <div class="flex-col">
    <img class="banner my-7" src="../assets/main/advertisment.png" alt="Banner" />

    <div>HALO</div>
    <h2 class="text-2xl px-5">热门赛程</h2>

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

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }
</script>

<style>
.container {
  background-image: url('../assets/main/footballCourt.png');
  /* 替换为您的背景图路径 */
  margin-left: 10px;
  background-size: cover;
  background-position: center;
  /* width: 100vw; */
  height: 50vh;
  /* display: flex;
  justify-content: center;
  align-items: center; */

}
.backgroundImg {
  background-image: url('../assets/main/background_2.png');
  background-size:cover ;
  background-position: center;
  height: 650px;
}
.live-window {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  margin-inline-start: 15%;
  margin-inline-end: 15%;
  margin-top: 20px;
  height: 450px;
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
  width: 71%;
  height: 100px;
  margin: auto;
}

/* .content .banner{
  width: 71%;
  height: 100px;
  margin: auto;

} */

.banner{
  width: 71%;
  height: 100px;
  margin: auto;
}

.epic {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  margin-inline-start: 15%;
  margin-inline-end: 15%;
  margin-top: 20px;
  height: 150px;
  /* 添加其他样式以定义直播窗口的外观 */
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
  border: 1px solid black;
  display: block;
}
</style>
