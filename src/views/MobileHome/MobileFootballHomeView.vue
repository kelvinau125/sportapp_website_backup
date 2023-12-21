<template>
  <Carousel :items-to-show="1.5" :wrap-around="true">
    <Slide v-for="(livedata, index) in liveData.slice(0, 5)" :key="index">
      <div @click="showLoginModal()" class="carousel__item ">
        <div class="card-body relative">
          <img class="rounded-lg h-full" :src="require(`@/assets/live/${livedata.image}.png`)" alt="Image" />
          <div class=" w-full flex absolute bottom-0 p-1 pb-2 pl-2">
            <img class="w-[30px] h-[30px] pr-1" :src="require(`@/assets/live/${livedata.streamerIcon}.png`)"
              alt="Image" />

            <div class="flex flex-col pl-1 z-10 items-start w-[210px]">
              <div class="text-start text-white font-medium text-sm w-[200px] multiline-ellipsis">
                <span>{{ livedata.liveTitle }}</span>
              </div>
              <div class="text-start text-10px  font-medium text-white opacity-60 w-[200px] multiline-ellipsis">
                {{ livedata.streamerName }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  </Carousel>
  <div @click="downloadApp()" class="flex justify-center ">
    <img class="w-[343px] h-[58px]" src="@/assets/main/advertisment.png">
  </div>

  <div class="flex justify-between my-5  max-w-[450px] w-[100%] h-[46px] date-slider">
    <div class="flex justify-center mt-1.5" style="
              height: 32px;
              width: 17px;
              background-color: #808f7e;
              border-radius: 8px;
            ">
      <button @click="prevWeek">
        <img src="@/assets/toLeft.png" alt="Previous Week" class="" />
      </button>
    </div>
    <div @click="selectDate(day)" v-for="day in week" :key="day" class="px-0.5 rounded-lg"
      style="width: 40px; height: 35px">
      <div :class="{ 'active-date': isActiveDate(day) }"
        class="flex flex-col hover:bg-hoverGreen items-center rounded-lg   w-[42px]">
        <div class="font-medium text-sm pt-1">{{ formatDay(day) }}</div>
        <div class="day-of-week font-medium text-xs text-grayText">
          {{ $t(formatDayOfWeek(day)) }}
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-1.5" style="
              height: 32px;
              width: 17px;
              background-color: #808f7e;
              border-radius: 8px;
            ">
      <button @click="nextWeek">
        <img class="" src="@/assets/toRight.png" alt="Next Week" />
      </button>
    </div>
  </div>
  <div class="schedule_detail max-w-[892px] w-[100%]">
          <div class="schedule_detail_box">
            <ul class="h-[120px]" v-for="match in matchDetails" :key="match.matchDetails">
              <li
                @click="
                  toAllMatchPage(
                    match.linkAddress,
                    match.matchType,
                    match.date,
                    match.time,
                    match.statusStr,
                    match.homeTeamName,
                    match.homeTeamScore,
                    match.homeTeamIcon,
                    match.awayTeamName,
                    match.awayTeamScore,
                    match.awayTeamIcon
                  )
                "
                class="max-w-full bg-white"
              >
                <div class="h-[120px] p-5">
                  <div class="flex justify-between">
                    <div class="flex items-center justify-start w-[350px]">
                      <div class="w-6 h-6">
                        <img src="@/assets/favourite/footIcon.png" />
                      </div>
                      <div class="px-3 flex justify-center ml-2 MatchTypeBorder">
                        <span class="text-xs font-medium" style="color: #666666">{{
                          match.matchType
                        }}</span>
                      </div>
                    </div>
                    <button @click.stop="toUnfavourite(match, match.linkAddress)">
                      <img
                        v-if="match.favourite"
                        src="@/assets/content/Unfavourite.png"
                        alt="Unfavourite"
                      />
                      <img v-else src="@/assets/content/Favourite.png" alt="Favourite" />
                    </button>
                  </div>

                  <div class="flex justify-start">
                    <div class="flex items-end">
                      <div class="pr-2 font-medium text-xs text-grayText">
                        <span>{{ match.date }}</span>
                      </div>
                      <div class="font-semibold text-xs" style="color: #333333">
                        <span>{{ match.time }}</span>
                      </div>
                    </div>
                    <div class="flex" style="width: 570px">
                      <div class="flex justify-end items-center w-full">
                        <div class="w-[160px] overflow-hidden">
                          <span
                            class="text-lg font-semibold pr-2 whitespace-nowrap overflow-ellipsis"
                            >{{ match.homeTeamName }}</span
                          >
                        </div>
                        <div>
                          <img
                            :src="match.homeTeamIcon"
                            style="width: 40px; height: 40px; border-radius: 20px"
                          />
                        </div>
                      </div>
                      <div class="flex flex-col items-center w-[60%]">
                        <div class="font-semibold text-2xl">
                          <span>{{ match.homeTeamScore }}</span>
                          <span class="px-2">-</span>
                          <span>{{ match.awayTeamScore }}</span>
                        </div>
                      </div>
                      <div class="flex items-center justify-start w-full">
                        <div>
                          <img
                            :src="match.awayTeamIcon"
                            style="width: 40px; height: 40px; border-radius: 20px"
                          />
                        </div>
                        <div class="pl-3 w-[160px] overflow-hidden">
                          <span
                            class="text-lg font-semibold whitespace-nowrap overflow-ellipsis"
                            >{{ match.awayTeamName }}</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="relative pt-2">
                      <span
                        class="absolute bottom-0 -right-[130px]"
                        :class="{
                          'bg-transparent': match.statusStr === ' ',
                          statusBorder: match.statusStr !== '',
                        }"
                      >
                        {{ match.statusStr }}</span
                      >
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
</template>

<script>
// import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

import { addDays, startOfWeek, format, isToday } from "date-fns";
import { ref } from "vue";

import {
  getLiveStreamBookmark,
} from "@/service/apiBookmarkProvider.js";

export default ({
  name: 'BasicComponenet',
  components: {
    Carousel,
    Slide,
  },
  async mounted() {
    // ------------------------------------------------------------------- Translation Part ------------------------------------------ Remember Change It ----------------------------
    this.isCN = this.$i18n.locale === "ZH" ? true : false;
    // handle when come inside favorite is empty
    this.generateMatchDetailsList("showall");
  },
  data() {
    return {
      liveData: [
        { image: 'LiveImage', liveTitle: '陈俐敏', streamerName: '陈俐敏', streamerIcon: 'defaultStreamerIcon' },
        { image: 'LiveImage', liveTitle: '吕子芯', streamerName: '吕子芯', streamerIcon: 'defaultStreamerIcon' },
        { image: 'LiveImage', liveTitle: '区证尧', streamerName: '区证尧', streamerIcon: 'defaultStreamerIcon' },
        { image: 'LiveImage', liveTitle: '黄良健', streamerName: '黄良健', streamerIcon: 'defaultStreamerIcon' },

      ],
      activeDate: null,
      currentDate: ref(new Date()),
      daysToShow: ref(7),
      selectedDate: ref(null),

    }
  },
  methods: {
    //
    showLoginModal() {
      console.log("Test Click");
    },
    //
    downloadApp() {
      console.log("Download App");
    },

    //Date
    formatDay(date) {
      return format(date, "MM/dd");
    },
    formatDayOfWeek(date) {
      return isToday(date) ? "Today" : format(date, "EEEE");
    },
    prevWeek() {
      this.currentDate = addDays(this.currentDate, -7);
    },
    nextWeek() {
      this.currentDate = addDays(this.currentDate, 7);
    },
    selectDate(date) {
      this.selectedDate = date;
      this.activeDate = date;
      this.generateMatchDetailsList(format(this.selectedDate, "yyyyMMdd"));
    },
    isActiveDate(date) {
      return this.activeDate === date;
    },

    async generateMatchDetailsList(matchdate) {
      this.matchDetails = [];
      this.getfootballMatchList = await getLiveStreamBookmark(
        this.isCN,
        this.currentChannel
      );

      for (let i = 0; i < this.getfootballMatchList.length; i++) {
        if (
          this.getfootballMatchList[i]["matchDate"].replace(/-/g, "") === matchdate ||
          matchdate === "showall"
        ) {
          // if(matchdate){
          this.matchDetails.push({
            matchType: this.getfootballMatchList[i]["competitionName"],
            date: this.getfootballMatchList[i]["matchDate"],
            time: this.getfootballMatchList[i]["matchTimeStr"],
            homeTeamName: this.getfootballMatchList[i]["homeTeamName"],
            homeTeamIcon: this.getfootballMatchList[i]["homeTeamLogo"],
            homeTeamScore: this.getfootballMatchList[i]["homeTeamScore"],
            awayTeamName: this.getfootballMatchList[i]["awayTeamName"],
            awayTeamIcon: this.getfootballMatchList[i]["awayTeamLogo"],
            awayTeamScore: this.getfootballMatchList[i]["awayTeamScore"],
            overTime: "null",
            favorite: false,
            statusStr: this.getfootballMatchList[i]["statusStr"],
            linkAddress: this.getfootballMatchList[i]["id"],
          });
        }
      }
    },
  },
  computed: {
    week() {
      const startDate = startOfWeek(this.currentDate, { weekStartsOn: 1 });
      return Array.from({ length: this.daysToShow }, (_, index) =>
        addDays(startDate, index)
      );
    },
  },
})





</script>

<style scoped>
.carousel__item {
  min-height: 183px;
  width: 230px;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}


.card-body {
  border: 1px solid red;
  height: 151px;
  width: 100%;
  cursor: pointer;
  position: relative;
}

.card-body img {
  width: 100%;
}

.multiline-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.multiline-ellipsis::after {
  content: "...";
  display: inline-block;
}

.date-slider {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding-left: 2px;
  padding-right: 2px;
  overflow: auto;
}
.date-item {
  margin: 0 10px;
  cursor: pointer;
}
</style>
