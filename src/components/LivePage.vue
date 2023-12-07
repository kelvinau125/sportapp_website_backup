<template>
  <BackgroundImage>
    <div class="pt-6">
      <PopularMatch />
    </div>
    <main class="wrapper pt-6 pb-12">
      <div class="card-container flex justify-start w-ful">
        <div class="card h-44 py-2 px-1 relative md:w-1/2 lg: w-1/3 xl:w-1/4" v-for="livedata in liveData"
          :key="livedata.liveData">

          <div @click="toLiveStream" class="card-body relative">
            <div class="">
              <img class="" :src="require(`@/assets/live/${livedata.image}.png`)" alt="Image" />
            </div>
            <div class="gradient_bottom w-full flex titleBox items-center p-1 pb-2">
              <div class="pr-1 pl-1 z-10 contentImage pb-1.5">
                <img :src="require(`@/assets/live/${livedata.streamerIcon}.png`)" alt="Image" />
              </div>
              <div class="flex flex-col pl-1 z-10 items-start pb-1.5">
                <div class="text-white font-normal md:text-sm text-10px">{{ livedata.liveTitle }}</div>
                <div class="md:text-10px text-8px font-bold text-white opacity-60">{{ livedata.streamerName }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </BackgroundImage>
</template>
<script>
import PopularMatch from '@/components/PopularMatch.vue'
import BackgroundImage from '@/components/BackGround.vue'

export default {
  components: {
    PopularMatch,
    BackgroundImage
  },
  data() {
    return {
      liveData: [
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
    };
  },
  methods: {
    toLiveStream() {
      // Navigating
      // Push to the Live Page
      this.$router.push({ name: 'LiveStream' });
    },
    // async generateLiveList() {
    //   this.matchDetails = [];
    //   (this.currentChannel)
    //     //football
    //     ? this.getMatchList = await getMatchByDate(matchdate, this.isCN)
    //     //basketball
    //     : this.getMatchList = await getBasketballMatchByDate(matchdate, this.isCN)

    //   for (let i = 0; i < this.getMatchList.length; i++) {

    //     const matchId = this.getMatchList[i]["id"];
    //     // Check if the match ID is in the list of favorite IDs
    //     const isFavorite = this.favoriteList.includes(matchId);

    //     this.matchDetails.push({
    //       matchType: this.getMatchList[i]["competitionName"],
    //       date: this.getMatchList[i]["matchDate"],
    //       time: this.getMatchList[i]["matchTimeStr"],
    //       homeTeamName: this.getMatchList[i]["homeTeamName"],
    //       homeTeamIcon: this.getMatchList[i]["homeTeamLogo"],
    //       homeTeamScore: this.getMatchList[i]["homeTeamScore"],
    //       awayTeamName: this.getMatchList[i]["awayTeamName"],
    //       awayTeamIcon: this.getMatchList[i]["awayTeamLogo"],
    //       awayTeamScore: this.getMatchList[i]["awayTeamScore"],
    //       overTime: "null",
    //       favorite: isFavorite,
    //       statusStr: this.getMatchList[i]["statusStr"],
    //       linkAddress: this.getMatchList[i]["id"],
    //     });
    //   }
    // },
  }
}
</script>


<!-- <script setup>
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

</script> -->

<style scoped>
@media (min-width: 300px) {
  .card {
    display: inline-block;
    width: 175px;
    height: 162px;
  }

  .titleBox {
    position: absolute;
    bottom: 60px;
  }

  .contentImage{
    width: 30px;
  }
}

@media (min-width: 500px) {
  .card {
    display: inline-block;
    width: 230px;
    height: 162px;

  }

  .titleBox {
    position: absolute;
    bottom: 30px;
  }

  .contentImage{
    width: 35px;
  }
}

@media (min-width: 640px) {
  .card {
    display: inline-block;
    width: 287px;
    height: 162px;

  }

  .titleBox {
    position: absolute;
    bottom: 0;
  }
}


.wrapper {
  width: 100%;
  max-width: 892px;
  margin: 0px auto;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  row-gap: 15px;
  border: 10px solid gren;
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