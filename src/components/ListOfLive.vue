<template>
  <div class="flex flex-wrap justify-start max-w-[892px] liveContainer  w-[300px]">
    <button @click="prev" class="w-8 h-full md:block hidden" style="height: 142px;">
      <img src="@/assets/tournament/toLeft_.png" />
    </button>
    <div class="">
      <Carousel class="liveList"  v-bind="settings" :breakpoints="breakpoints"
        ref="carousel" v-model="currentSlide">
        <Slide class="" v-for="livedata in liveData" :key="livedata.liveData">
          <div  class="card_container pl-1">
            <router-link :to="livedata.addressLink">
              <div class="card_ pr-2" style="">
                <div @click="test" class="">
                  <img :src="require(`@/assets/tournament/${livedata.image}.png`)" alt="Image" style="height: 92px;" />
                </div>
                <div class="bg-white flex items-center" style="height: 50px;">
                  <div class="pr-1 pl-1">
                    <img :src="require(`@/assets/live/${livedata.streamerIcon}.png`)" alt="Image" />
                  </div>
                  <div class="flex flex-col pl-1 items-start">
                    <div class="text-black md:text-sm text-xs font-medium">{{ livedata.liveTitle }}</div>
                    <div class="font-medium text-grayText text-10px" >{{ livedata.streamerName }}</div>
                  </div>
                </div>
              </div>
            </router-link>
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
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'CustomNavigation',
  components: {
    Carousel,
    Slide,

  },
  setup() {
    const liveData = ([
      { image: 'liveImage_', liveTitle: 'TITLE', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon', addressLink: '/' },
      { image: 'liveImage_', liveTitle: 'TITLE', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon', addressLink: '/live' },
      { image: 'liveImage_', liveTitle: 'TITLE', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon', addressLink: '/' },
      { image: 'liveImage_', liveTitle: 'TITLE', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon', addressLink: '/' },
      { image: 'liveImage_', liveTitle: 'TITLE', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon', addressLink: '/' },
      { image: 'liveImage_', liveTitle: 'TITLE', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon', addressLink: '/' },
      { image: 'liveImage_', liveTitle: 'TITLE', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon', addressLink: '/' },
      { image: 'liveImage_', liveTitle: 'TITLE', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon', addressLink: '/' },
      { image: 'liveImage_', liveTitle: 'TITLE', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon', addressLink: '/' },
    ]);

    return {
      liveData,
    };
  },
  data: () => ({
    currentSlide: 0,
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      300: {
        itemsToShow: 1.5,
        snapAlign: 'start'
      },
      500: {
        itemsToShow: 2.5,
        snapAlign: 'none'

      },
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
  }),
  methods: {
    next() {
      this.$refs.carousel.next()
    },
    prev() {
      this.$refs.carousel.prev()
    },
  },
})
</script>
  
<style scoped>
/* .live_wrapper {
    width: 100%;
    margin: 0px auto;
  } */

/* .card_container {
    display: flex;
  } */

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
  