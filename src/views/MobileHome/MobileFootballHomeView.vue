<template>
  <LoginModal :showModal="isLoginModalVisible" :closeModal="closeLoginModal" />

  <Carousel :items-to-show="1.5" :wrap-around="true">
    <Slide v-for="(livedata, index) in liveData.slice(0, 5)" :key="index">
      <div @click="goLogin()" class="carousel__item ">
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

  <div class="pt-4 px-3">
    <span class="font-medium text-lg">赛事</span>
  </div>

  <div class="flex justify-between mt-5 max-w-[450px] w-[100%] h-[46px] date-slider">
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
        class="flex flex-col hover:bg-hoverGreen items-center rounded-lg  w-[42px]">
        <div class="font-medium text-10px pt-1">{{ formatDay(day) }}</div>
        <div class="day-of-week w-full text-center font-medium text-8px text-grayText">
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

  <div class="schedule_detail pl-2 pr-2 w-[100%]  ">
    <div class="schedule_detail_box">
      <ul class="h-[80px]" v-for="match in matchDetails" :key="match.matchDetails">
        <li @click="
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
          " class="max-w-full bg-white">
          <div class="h-[80px] pt-2 pb-5 pr-2">
            <div class="flex justify-between ">
              <div class="pl-2 flex items-center justify-between w-[200px] ">
                <div class="px-3 flex justify-center  MatchTypeBorder">
                  <span class="text-xs font-medium" style="color: #666666">{{
                    match.matchType
                  }}</span>
                </div>
                <div class="flex items-end ml-10">
                  <div class="font-semibold text-xs" style="color: #333333">
                    <span>{{ match.time }}</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-between w-[80px]">
                <div>
                  <span class="text-xs" :class="{
                    'bg-transparent': match.statusStr === ' ',
                    statusBorder: match.statusStr !== '',
                  }">
                    {{ match.statusStr }}</span>
                </div>
                <button @click.stop="toUnfavourite(match, match.linkAddress)">
                  <img class="w-[24px] h-[24px]" v-if="match.favourite" src="@/assets/content/Unfavourite.png"
                    alt="Unfavourite" />
                  <img class="w-[24px] h-[24px]" v-else src="@/assets/content/Favourite.png" alt="Favourite" />
                </button>

              </div>
            </div>

            <div class="pl-2 pr-2 flex justify-start">
              <!-- <div class="flex items-end">
                <div class="pr-2 font-medium text-xs text-grayText">
                  <span>{{ match.date }}</span>
                </div>
              </div> -->
              <div class="flex w-full">
                <div class="flex justify-end items-center w-[40%] ">
                  <div class="w-[150px] overflow-hidden">
                    <span class="text-sm font-semibold pr-2 whitespace-nowrap overflow-ellipsis">{{ match.homeTeamName
                    }}</span>
                  </div>
                  <img :src="match.homeTeamIcon" style="width: 24px; height: 24px; border-radius: 20px" />
                </div>
                <div class="flex flex-col items-center  w-[20%]">
                  <div class="font-semibold text-sm">
                    <span>{{ match.homeTeamScore }}</span>
                    <span class="px-2">-</span>
                    <span>{{ match.awayTeamScore }}</span>
                  </div>
                </div>
                <div class=" flex text-end w-[40%]">
                  <img :src="match.awayTeamIcon" style="width: 24px; height: 24px; border-radius: 20px" />
                  <div class=" w-[150px] overflow-hidden">
                    <span class="text-sm font-semibold whitespace-nowrap overflow-ellipsis">{{ match.awayTeamName
                    }}</span>
                  </div>
                </div>
              </div>
              <!-- <div class="relative pt-2">
                <span class="absolute bottom-0 -right-[130px]" :class="{
                    'bg-transparent': match.statusStr === ' ',
                    statusBorder: match.statusStr !== '',
                  }">
                  {{ match.statusStr }}</span>
              </div> -->
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

import LoginModal from "@/views/Authentication/LoginModal.vue";
import VueCookies from "vue-cookies";


import {
  getLiveStreamBookmark,
  liveStreamSaveBookmark,
  deleteStreamSaveBookmark,

} from "@/service/apiBookmarkProvider.js";

export default ({
  name: 'BasicComponenet',
  components: {
    Carousel,
    Slide,
    LoginModal,

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

      matchDetails: [],

      isLoginModalVisible: ref(false),


    }
  },
  methods: {
    showLoginModal() {
      this.isLoginModalVisible = true;
    },
    closeLoginModal() {
      this.isLoginModalVisible = false;
    },

    goLogin() {
      const userToken = VueCookies.get("userToken");

      if (!userToken) {
        this.showLoginModal();
      } else {
        console.log("Please DOWNLOAD APP")
      }

    },

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
      console.log("Trigger");
      this.selectedDate = date;
      this.activeDate = date;
      this.generateMatchDetailsList(format(this.selectedDate, "yyyyMMdd"));
    },
    isActiveDate(date) {
      return this.activeDate === date;
    },

    toAllMatchPage(
      linkAddress,
      competitionName,
      matchDate,
      matchTimeStr,
      statusStr,
      homeTeamName,
      homeTeamScore,
      homeTeamLogo,
      awayTeamName,
      awayTeamScore,
      awayTeamLogo
    ) {
      console.log("test");
      // Push to the Live Page
      const routeData = this.$router.resolve({
        name: "TournamentDetails",
        query: {
          TournamentID: linkAddress,
          competitionName: competitionName,
          matchDate: matchDate,
          matchTimeStr: matchTimeStr,
          statusStr: statusStr,
          homeTeamName: homeTeamName,
          homeTeamScore: homeTeamScore,
          homeTeamLogo: homeTeamLogo,
          awayTeamName: awayTeamName,
          awayTeamScore: awayTeamScore,
          awayTeamLogo: awayTeamLogo,
        },
      });
      window.open(routeData.href, "_blank");
    },
    async toUnfavourite(match, matchID) {
      match.favourite = !match.favourite;

      if (!match.favourite) {
        await liveStreamSaveBookmark(matchID, this.currentChannel, this.isCN);
      } else {
        await deleteStreamSaveBookmark(matchID, this.isCN);
      }
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

.MatchTypeBorder {
  background-color: #f5f5f5;
  border: 1px solid rgba(156, 163, 175, 0.5);
  border-radius: 49px;
}

.schedule_list {
  width: 100%;
  margin: 20px 0 0 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 892px;
}

.schedule_list .schedule_detail {
  width: 100%;
  flex: 1;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
}

.schedule_list .schedule_detail .schedule_detail_box {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  position: relative;
}

.border {
  background-color: #f5f5f5;
  width: 100%;
  border: 1px solid rgba(156, 163, 175, 0.5);
  border-radius: 49px;
}

.statusBorder {
  background-color: #eeedf4;
  border-radius: 8px;
  width: auto;
  padding: 2px;
}

.schedule_list .schedule_detail .schedule_detail_box>ul {
  /* min-height: calc(100% + 40px); */
  display: flex;
  flex-direction: column;
  width: 100%;
}

.schedule_list .schedule_detail .schedule_detail_box>ul>li {
  width: 100%;
  margin: 0 auto;
  height: 120px;
  padding-left: 2.1%;
  cursor: pointer;
}

.schedule_list .schedule_detail .schedule_detail_box>ul>li .conten_box {
  padding: 2.2% 1.7% 1.4% 1.4%;
  border-bottom: 1px solid #f5f5f6;
  height: 120px;
}
</style>
