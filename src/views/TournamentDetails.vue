<template>
  <div class="w-full flex flex-col">
  </div>
  <div class="w-full flex flex-col">
    <div class="tournament-container">
      <div class="tournament">
        <div class="tournament_window">
          <div class="content_s">
            <div class="flex flex-col items-center">
              <span class="font-semibold text-lg text-white">欧冠</span>
              <div class="flex flex-col items-center pt-2">
                <span style="color: #F8FEE4;" class="font-normal text-xs text-white">2023-08-03 17:30</span>
                <span style="color: #F8FEE4;" class="font-normal text-xs ">已开赛</span>
              </div>
            </div>
          </div>
          <div class="flex tournament_icon">
            <div class="" style="margin-right: 80px;">
              <div class="flex flex-col items-center">
                <img class="pb-3" src="../assets/tournament/moneyBadge.png" />
                <p class="text-white">球队名字</p>
              </div>
            </div>
            <div class="text-white flex w-24 justify-between pt-10">
              <span class="text-3xl font-semibold">0</span>
              <span class="text-3xl font-semibold">-</span>
              <span class="text-3xl font-semibold">5</span>
            </div>
            <div class="" style="margin-left: 80px;">
              <div class="flex flex-col items-center">
                <img class="pb-3" src="../assets/tournament/badge_.png" />
                <p class="text-white">球队名字</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
  <div class="flex flex-col match_status pt-4">
    <h2 class="text-headerFont font-headerWeight">赛况</h2>
    <div class="flex justify-center">
      HALo
    </div>
    <div class="flex justify-between">
      <div class="">LEFT</div>
      <div class="">RIGHT</div>
    </div>
    <div class="flex justify-between">
      <div class="">LEFT</div>
      <div class="">RIGHT</div>
    </div>

  </div>
  <div class="flex flex-col match_status pt-8">
    <h2 class="text-headerFont font-headerWeight">直播</h2>
    <div>
      <div class="flex pt-3 items-center">
        <img src="../assets//tournament/streamIcon.png" />
        <span class="pl-2 font-normal text-sm">本场主播</span>
      </div>
      <div class="py-3">
        <LiveList />
        <!-- <div>
          <main class="wrapper">
            <div class="card-container flex justify-center" style="border: 1px solid red;">
                <div class="card  py-2 px-1 md:w-1/2 lg: w-1/3 xl:w-1/4" v-for="livedata in liveData" :key="livedata.liveData" style="border: 1px solid gold;">
                  <div @click="test" class="" >
                    <img :src="require(`../assets/tournament/${livedata.image}.png`)" alt="Image" />       
                  </div>
                  <div class="bg-white flex items-center" style="border: 1px solid green;">
                    <div class="pr-1 pl-1 w-10">
                      <img :src="require(`../assets/live/${livedata.streamerIcon}.png`)" alt="Image" />
                    </div>
                    <div class="flex flex-col pl-1 items-start">
                      <div class="text-black text-sm font-medium">{{ livedata.liveTitle}}</div>
                        <div class="font-medium text-grayText" style="font-size: 10px;">{{ livedata.streamerName}}</div>
                    </div>
                  </div>
                
                </div>
            </div>
          </main>

        </div> -->
      </div>

    </div>
    <div>
      <div class="flex items-center">
        <img src="../assets//tournament/streamIcon.png" />
        <span class="pl-2 font-normal text-sm">比赛直播</span>
      </div>
      <div class="pb-10">
        <div class="flex px-2">
          <router-link :to="address.addressLink" v-for="address in liveAddress" :key="address.liveAddress">
            <div class="md:mx-4 flex items-center py-3" >
            <div class="live_border">
              <p class="px-4 py-2 font-medium text-sm">{{ address.liveAddress }}</p>
            </div>
          </div>
          </router-link>

          
        </div>
      </div>

    </div>

  </div>
  <div class="flex flex-col match_status">
    <h2 class="text-headerFont font-headerWeight">阵容</h2>
    <div style="width: 728px;">
      <img src="../assets//tournament/football_court.png" />
    </div>


  </div>
</template>

<script setup>
import LiveList from '../components/HelloWorld.vue'
// import { useRouter } from 'vue-router'


// const router = useRouter();

// const toLiveStream = () => {
//   //Navigating
//   //Push to the Live Page
//   router.push({ name: '/' })
// }
// const liveData = [
//   { image: 'liveImage_', liveTitle: 'TITLE', streamerName: 'NAME',  streamerIcon: 'defaultStreamerIcon'},
//   { image: 'liveImage_', liveTitle: 'TITLE', streamerName: 'NAME',  streamerIcon: 'defaultStreamerIcon'},
//   { image: 'liveImage_', liveTitle: 'TITLE', streamerName: 'NAME',  streamerIcon: 'defaultStreamerIcon'},
//   { image: 'liveImage_', liveTitle: 'TITLE', streamerName: 'NAME',  streamerIcon: 'defaultStreamerIcon'},
//   { image: 'liveImage_', liveTitle: 'TITLE', streamerName: 'CX',  streamerIcon: 'defaultStreamerIcon'},
// ]

const liveAddress = [
  { liveAddress: '直播地址', addressLink: "/" },
  { liveAddress: '直播地址', addressLink: "/live" },
  { liveAddress: '直播地址', addressLink: "/" },
  { liveAddress: '直播地址', addressLink: "/" },
]

</script>

<style>
.tournament-container {
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  border: 1px solid red;

}

.tournament {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 5px;
  border: 1px solid green;

}

.tournament_window {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  width: 892px;
  height: 200px;
  margin-top: 10px;
  border: 1px solid green;
  background-image: url('../assets/tournament/footballBackground.png');
  background-size: cover;
  background-position: center;
  position: relative;



}

.content_s {
  padding: 15px;
  display: flex;
  justify-content: center;
}

.match_status {
  width: 50%;
  margin: auto;

}



.tournament_icon {
  position: absolute;
  top: 75px;
  left: 252px;
  display: flex;
  align-items: center;

}


.wrapper {
  width: 100%;
  max-width: 960px;
  margin: 0px auto;
}

.card-container {
  display: flex;
}

.card {
  display: inline-block;
  width: 165px;

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

.live_border {
  background-color: white;
  border-radius: 8px;
  border: white;
  cursor: pointer;
}
</style>

