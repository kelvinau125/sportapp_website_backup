<template>
    <div class="flex justify-center w-full">
  
      <div class="w-20" style="">
        <button @click="prev" class="h-full" style="height: 142px;">
          <img src="@/assets/tournament/toLeft_.png" />
        </button>
      </div>
  
      <div class="" style="width: 90%; ">
  
        <Carousel v-bind="settings" :breakpoints="breakpoints" ref="carousel" v-model="currentSlide">
          <Slide class="" v-for="livedata in liveData" :key="livedata.liveData">
            <main class="live_wrapper">
              <div class="card_container pl-3">
                <router-link :to="livedata.addressLink">
                  <div class="card_" style="height: 142px; border: 1px solid red;">
                    <div @click="test" class="">
                      <img :src="require(`@/assets/tournament/${livedata.image}.png`)" alt="Image" style="height: 92px;" />
                    </div>
                    <div class="bg-white flex items-center" style="height: 50px;">
                      <div class="pr-1 pl-1 w-10">
                        <img :src="require(`@/assets/live/${livedata.streamerIcon}.png`)" alt="Image" />
                      </div>
                      <div class="flex flex-col pl-1 items-start">
                        <div class="text-black text-sm font-medium">{{ livedata.liveTitle }}</div>
                        <div class="font-medium text-grayText" style="font-size: 10px;">{{ livedata.streamerName }}</div>
                      </div>
                    </div>
                  </div>
                </router-link>
  
  
              </div>
            </main>
          </Slide>
        </Carousel>
      </div>
  
      <div class="w-20">
        <button @click="next" class="h-full" style="height: 142px;">
          <img src="@/assets/tournament/toRight_.png" />
        </button>
      </div>
  
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
  
  <!-- <style scoped>
  .carousel-container {
    position: relative;
  }
  
  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  
  .carousel-button:first-child {
    left: 0;
  }
  
  .carousel-button:last-child {
    right: 0;
  }
  </style> -->
  
  <style>
  .live_wrapper {
    width: 100%;
    margin: 0px auto;
  }
  
  .card_container {
    display: flex;
  }
  
  .card_ {
    display: inline-block;
    width: 100%;
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
  </style>
  