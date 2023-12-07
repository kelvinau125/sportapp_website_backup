<template>
  <div class="flex flex-wrap justify-start items-center max-w-[892px] liveContainer  w-[300px]">
    <button @click="prev" class="w-8 h-full md:block hidden" style="height: 142px;">
      <img src="@/assets/tournament/toLeft_.png" />
    </button>
    <div class="">
      <Carousel class="liveList"  v-bind="settings" :breakpoints="breakpoints"
        ref="carousel" v-model="currentSlide">
        <Slide class="" v-for="livedata in liveData" :key="livedata.liveData">
          <div  class="card_container items-center pl-1">
              <div @click="toLiveStream(livedata.liveID)" class="card_ pr-2" style="">
                <div @click="test" class="">
                  <img class="w-full " :src= livedata.image alt="Image" style="height: 92px;" />
                </div>
                <div class="bg-white flex items-center " style="height: 30px;">
                  <div class="pr-1 pl-1 pt-1">
                    <img class="rounded-full w-[25px] h-[25px]" :src= livedata.streamerIcon alt="Image" />
                  </div>
                  <div class="flex flex-col pl-1 items-start">
                    <div class="text-black md:text-xs text-10px font-medium">{{ livedata.liveTitle }}</div>
                    <div class="font-medium text-grayText md:text-10px text-8px" >{{ livedata.streamerName }}</div>
                  </div>
                </div>
              </div>
          </div>
        </Slide>
      </Carousel>
    </div>
    <button @click="next" class="w-8 h-full md:block hidden" style="height: 142px;">
      <img src="@/assets/tournament/toRight_.png" />
    </button>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { ref } from 'vue';

// api
import { getAllStreamDetails } from '@/service/apiStreamProvider.js';

export default {
  name: 'CustomNavigation',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      currentChannel: ref((localStorage.getItem('currentChannel') === "football") ? 0 : 1),

      liveData: [],
        // { image: 'liveImage_', liveTitle: 'TITLE', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon', addressLink: '/' },
        // { image: 'liveImage_', liveTitle: 'TITLE', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon', addressLink: '/live' },
        // { image: 'liveImage_', liveTitle: 'TITLE', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon', addressLink: '/' },
        // { image: 'liveImage_', liveTitle: 'TITLE', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon', addressLink: '/' },
        // { image: 'liveImage_', liveTitle: 'TITLE', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon', addressLink: '/' },
        // { image: 'liveImage_', liveTitle: 'TITLE', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon', addressLink: '/' },
        // { image: 'liveImage_', liveTitle: 'TITLE', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon', addressLink: '/' },
        // { image: 'liveImage_', liveTitle: 'TITLE', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon', addressLink: '/' },
        // { image: 'liveImage_', liveTitle: 'TITLE', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon', addressLink: '/' },
        // ],
      currentSlide: 0,
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
      breakpoints: {
        300: {
          itemsToShow: 1.5,
          snapAlign: 'start'
        },
        500: {
          itemsToShow: 2.5,
          snapAlign: 'none'
        },
        700: {
          itemsToShow: 3.5,
          snapAlign: 'center',
        },
        1024: {
          itemsToShow: 5,
          snapAlign: 'start',
        },
      },
    };
  },

  methods: {
    next() {
      this.$refs.carousel.next()
    },

    prev() {
      this.$refs.carousel.prev()
    },

    toLiveStream(liveID) {
        // Navigating
        // Push to the Live Page
        // this.$router.push({ name: 'LiveStream' });
        const routeData = this.$router.resolve({
            name: 'LiveStream',
            query: {
                LiveID: liveID,
            }
        });
        window.location.href = routeData.href;
    },

    async generateLiveList() {
      this.liveData = [];

      this.getLiveList = await getAllStreamDetails();

      for (let i = 0; i < this.getLiveList.length; i++) {
        // Check if sportType is 0 (football)
        if (this.getLiveList[i]["sportType"] == this.currentChannel) {

          this.liveData.push({
            liveID: this.getLiveList[i]["id"],
            image: this.getLiveList[i]["cover"],
            liveTitle: this.getLiveList[i]["title"],
            streamerName: this.getLiveList[i]["nickName"],
            streamerIcon: this.getLiveList[i]["avatar"],
          });
        }
      }
    },
  },

  mounted() {
    this.generateLiveList()
  }
};
</script>
  
<style scoped>
/* .live_wrapper {
    width: 100%;
    margin: 0px auto;
  } */

.card_container {
    display: flex;
  }

@media (min-width: 300px) {

  .liveList {
    width: 270px;
  }

  .liveContainer {
    width: 492px;
  }

  .card_ {
    display: inline-block;
    width: 165px;
    height: 127px;
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

  .button {
    width: 30px;
  }
}

@media (min-width: 500px) {
  .liveList {
    width: 480px;
  }

  .liveContainer {
    width: 480px;
  }

  .card_ {
    display: inline-block;
    width: 150px;
    height: 127px;
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

  .button {
    width: 30px;
  }

}

@media (min-width: 640px) {

  .liveList {
    width: 600px;
  }

  .liveContainer {
    width: 892px;
  }

  .card_ {
    display: inline-block;
    width: 165px;
    height: 122px;
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

  .button {
    width: 36px;
  }

}

@media (min-width: 768px) {
  .liveList {
    width: 760px;
  }

  .liveContainer {
    max-width: 900px;
  }

  .card_ {
    display: inline-block;
    width: 165px;
    height: 122px;
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

  .button {
    width: 36px;
  }

}

@media (min-width: 1024px) {
  .liveList {
    width: 820px;
  }

  .liveContainer {
    max-width: 900px;
  }

  .card_ {
    display: inline-block;
    width: 165px;
    height: 122px;
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

  .button {
    width: 36px;
  }

}
</style>
  