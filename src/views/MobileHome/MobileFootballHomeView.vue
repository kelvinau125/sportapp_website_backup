<template>
  <LoginModal :showModal="isLoginModalVisible" :closeModal="closeLoginModal" />

  <DownloadAPP :showDownloadAPPModal="isDownloadAPPModalVisible" :closeDownloadAPPModal="closeDownloadAPPModal" />

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
                          <div
                              class="text-start text-10px  font-medium text-white opacity-60 w-[200px] multiline-ellipsis">
                              {{ livedata.streamerName }}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </Slide>
  </Carousel>
  <div @click="downloadApp()" class="flex justify-center ">
      <img class="w-[95%] h-[58px] mt-2" src="@/assets/main/advertisment.png">
  </div>

  <div class="pt-4 px-3">
      <span class="font-medium text-lg">{{ $t('Event') }}</span>
  </div>

  <div class="flex justify-between mt-5 ml-4 w-[93%] h-[46px]">
      <div class="flex justify-center mt-0.5" style="
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
          <div :class="{ 'active-date': isActiveDate(day, week) }"
              class="flex flex-col hover:bg-hoverGreen items-center rounded-lg w-[42px]">
              <div class="font-medium text-10px pt-1">{{ formatDay(day) }}</div>
              <div class="day-of-week w-full text-center font-medium text-8px text-grayText">
                  {{ $t(formatDayOfWeek(day)) }}
              </div>

          </div>
      </div>
      <div class="flex justify-center mt-0.5" style="
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
  <div class="schedule_detail pl-4 pr-4 pb-16 w-[100%] ">
      <div class="schedule_detail_box">
          <ul class="h-[90px]" v-for="match in matchDetails" :key="match.matchDetails">
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
                              <div class="px-3 flex justify-center overflow-clip  MatchTypeBorder">
                                  <span class="text-xs font-medium whitespace-nowrap overflow-hidden text-ellipsis"
                                      style="color: rgba(102, 102, 102, 1)">{{
                                          match.matchType
                                      }}</span>
                              </div>
                              <div class="flex items-end ml-10">
                                  <div class="font-normal text-xs" style="color: #333333">
                                      <span>{{ match.time }}</span>
                                  </div>
                              </div>
                          </div>
                          <div class="flex justify-between w-[80px]">
                              <div>
                                  <span class="text-xs font-normal" :class="{
                                      'bg-transparent': match.statusStr === ' ',
                                      statusBorder: match.statusStr !== '',
                                  }">
                                      {{ match.statusStr }}</span>
                              </div>
                              <button @click.stop="toggleFavorite(match, match.linkAddress)"
                                  :class="{ fav: match.favorite }">
                                  <img v-if="!match.favorite" src="@/assets/content/Unfavourite.png" alt="Unfavourite" />
                                  <img v-else src="@/assets/content/Favourite.png" alt="Favourite" />
                              </button>

                          </div>
                      </div>

                      <div class="pl-2 pr-2 pt-2 flex justify-start">
                          <div class="flex w-full">
                              <div class="flex justify-between items-center w-[40%] ">
                                  <div class="w-[100px] overflow-hidden">
                                      <span class="text-sm font-normal pr-2 whitespace-nowrap overflow-ellipsis">{{
                                          match.homeTeamName
                                      }}</span>
                                  </div>
                                  <img :src="match.homeTeamIcon" style="width: 24px; height: 24px; border-radius: 20px" />
                              </div>
                              <div class="flex flex-col items-center  w-[20%]">
                                  <div class="font-semibold text-base">
                                      <span>{{ match.homeTeamScore }}</span>
                                      <span class="px-2">-</span>
                                      <span>{{ match.awayTeamScore }}</span>
                                  </div>
                              </div>
                              <div class=" flex text-end w-[40%]">
                                  <img :src="match.awayTeamIcon" style="width: 24px; height: 24px; border-radius: 20px" />
                                  <div class=" w-[150px] overflow-hidden">
                                      <span class="text-sm font-normal whitespace-nowrap overflow-ellipsis">{{
                                          match.awayTeamName
                                      }}</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </li>
          </ul>
      </div>
      <div class="py-3">
          <ButtonPress @click="handleScroll()" class="w-full bg-grey-300"
              style="width: 100%; height: 40px; border-radius: 8px">
              <p class="text-base font-normal" style="color: #ffffff">
                  {{ $t("Show More") }}
              </p>
          </ButtonPress>
      </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import LoginModal from "@/views/Authentication/LoginModal.vue";
import DownloadAPP from "@/components/DownloadApp.vue";
import ButtonPress from "@/components/ButtonPress.vue";

import { addDays, startOfWeek, format, isToday } from "date-fns";
import { ref } from "vue";
import VueCookies from "vue-cookies";

import { getMatchByDate } from "@/service/apiFootBallMatchProvider.js";
import { getBasketballMatchByDate } from "@/service/apiBasketBallMatchProvider.js";
import {
  getLiveStreamBookmark,
  liveStreamSaveBookmark,
  deleteStreamSaveBookmark,
} from "@/service/apiBookmarkProvider.js";

export default {
  components: {
      Carousel,
      Slide,
      LoginModal,
      ButtonPress,
      DownloadAPP,
  },

  async mounted() {
      this.loadSelectedDate = format(this.currentDate, "yyyyMMdd");
      this.isCN = this.$i18n.locale === "ZH" ? true : false;
      // this.isCN = false;
      // this.handleScroll;
      window.addEventListener("scroll", this.actionScroll);
      (this.activeDate = new Date()), // Initialize activeDate with the current date
          this.getFavoriteFromBookmark();
  },

  data() {
      return {
          liveData: [
              { image: 'LiveImage', liveTitle: '陈俐敏', streamerName: '陈俐敏', streamerIcon: 'defaultStreamerIcon' },
              { image: 'LiveImage', liveTitle: '吕子芯', streamerName: '吕子芯', streamerIcon: 'defaultStreamerIcon' },
              { image: 'LiveImage', liveTitle: '区证尧', streamerName: '区证尧', streamerIcon: 'defaultStreamerIcon' },
              { image: 'LiveImage', liveTitle: '黄良健', streamerName: '黄良健', streamerIcon: 'defaultStreamerIcon' },

          ],
          // check language and basketball and football swtich
          isCN: Boolean,
          currentChannel: ref(
              localStorage.getItem("currentChannel") === "football" ? true : false
          ),
          activeDate: null,
          page: "",
          scrolledToBottom: false,

          todayDate: new Date(),
          firstReload: true,
          count: ref(0),

          currentDate: ref(new Date()),
          daysToShow: ref(7),
          selectedDate: ref(null),

          loadSelectedDate: ref(null),

          favoriteList: [],
          matchdate: "",
          getMatchList: [],
          matchDetails: [],

          isLoginModalVisible: ref(false),
          isDownloadAPPModalVisible: ref(false),
      };
  },
  computed: {
      week() {
          const startDate = startOfWeek(this.currentDate, { weekStartsOn: 1 });
          return Array.from({ length: this.daysToShow }, (_, index) =>
              addDays(startDate, index)
          );
      },
  },
  methods: {

      actionScroll(event) {
          console.log(event);
      },
      handleScroll() {
          this.page++;
          this.loadMoreGenerateMatchDetailsList(this.loadSelectedDate, this.page);
      },

      async toggleFavorite(match, matchID) {
          const userToken = VueCookies.get("userToken");

          if (!userToken) {
              this.showLoginModal();

          } else {
              match.favorite = !match.favorite;

              console.log(matchID);
              if (match.favorite) {
                  await liveStreamSaveBookmark(matchID, this.currentChannel, this.isCN);
              } else {
                  await deleteStreamSaveBookmark(matchID, this.isCN);
              }
          }

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
          const userToken = VueCookies.get("userToken");

          if (!userToken) {
              this.showLoginModal();

          } else {
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
          }

      },
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
          this.loadSelectedDate = format(date, "yyyyMMdd");
          this.generateMatchDetailsList(format(this.selectedDate, "yyyyMMdd"), this.page);
      },
      isActiveDate(date, week) {
          this.count++;

          if (this.firstReload) {
              if (this.count >= week.length * 304) {
                  this.firstReload = false;
              }
              const dateToCompare = new Date(date);
              // Set time components to zero for accurate date comparison
              dateToCompare.setHours(0, 0, 0, 0);
              this.todayDate.setHours(0, 0, 0, 0);
              return dateToCompare.getTime() === this.todayDate.getTime();
          } else {
              return this.activeDate === date;
          }
      },

      async generateMatchDetailsList(matchdate, page) {
          this.matchDetails = [];
          this.currentChannel
              ? //football
              (this.getMatchList = await getMatchByDate(matchdate, this.isCN, page))
              : //basketball
              (this.getMatchList = await getBasketballMatchByDate(
                  matchdate,
                  this.isCN,
                  page
              ));

          for (let i = 0; i < this.getMatchList.length; i++) {
              const matchId = this.getMatchList[i]["id"];
              // Check if the match ID is in the list of favorite IDs
              const isFavorite = this.favoriteList.includes(matchId);

              this.matchDetails.push({
                  matchType: this.getMatchList[i]["competitionName"],
                  date: this.getMatchList[i]["matchDate"],
                  time: this.getMatchList[i]["matchTimeStr"],
                  homeTeamName: this.getMatchList[i]["homeTeamName"],
                  homeTeamIcon: this.getMatchList[i]["homeTeamLogo"],
                  homeTeamScore: this.getMatchList[i]["homeTeamScore"],
                  awayTeamName: this.getMatchList[i]["awayTeamName"],
                  awayTeamIcon: this.getMatchList[i]["awayTeamLogo"],
                  awayTeamScore: this.getMatchList[i]["awayTeamScore"],
                  overTime: "null",
                  favorite: isFavorite,
                  statusStr: this.getMatchList[i]["statusStr"],
                  linkAddress: this.getMatchList[i]["id"],
              });
          }
      },

      async loadMoreGenerateMatchDetailsList(matchdate, page) {
          this.currentChannel
              ? //football
              (this.getMatchList = await getMatchByDate(matchdate, this.isCN, page))
              : //basketball
              (this.getMatchList = await getBasketballMatchByDate(
                  matchdate,
                  this.isCN,
                  page
              ));

          for (let i = 0; i < this.getMatchList.length; i++) {
              const matchId = this.getMatchList[i]["id"];
              // Check if the match ID is in the list of favorite IDs
              const isFavorite = this.favoriteList.includes(matchId);

              this.matchDetails.push({
                  matchType: this.getMatchList[i]["competitionName"],
                  date: this.getMatchList[i]["matchDate"],
                  time: this.getMatchList[i]["matchTimeStr"],
                  homeTeamName: this.getMatchList[i]["homeTeamName"],
                  homeTeamIcon: this.getMatchList[i]["homeTeamLogo"],
                  homeTeamScore: this.getMatchList[i]["homeTeamScore"],
                  awayTeamName: this.getMatchList[i]["awayTeamName"],
                  awayTeamIcon: this.getMatchList[i]["awayTeamLogo"],
                  awayTeamScore: this.getMatchList[i]["awayTeamScore"],
                  overTime: "null",
                  favorite: isFavorite,
                  statusStr: this.getMatchList[i]["statusStr"],
                  linkAddress: this.getMatchList[i]["id"],
              });
          }
      },

      async getFavoriteFromBookmark() {
          this.getMatchList = await getLiveStreamBookmark(this.isCN, this.currentChannel);

          this.favoriteList = this.getMatchList.map((item) => item.id);
          this.generateMatchDetailsList(format(this.currentDate, "yyyyMMdd"), this.page);
      },

      goLogin() {
          const userToken = VueCookies.get("userToken");

          if (!userToken) {
            this.showLoginModal();
            console.log("HALO")

          } else {
            this.downloadApp()
          }

      },
      downloadApp() {
        this.showDownloadAPPModal();
      },

      showLoginModal() {
          this.isLoginModalVisible = true;
      },
      closeLoginModal() {
          this.isLoginModalVisible = false;
      },

      showDownloadAPPModal() {
          this.isDownloadAPPModalVisible = true;
      },
      closeDownloadAPPModal() {
          this.isDownloadAPPModalVisible = false;
      },


  },
};
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

.scroll-container {
  position: absolute;
  width: 100%;
  overflow-x: auto;
  overflow-y: visible;
}

.inner-container {
  max-width: 892px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  padding: 20px;
  margin: 0 auto;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

.MatchTypeBorder {
  background-color: #f5f5f5;
  border: 1px solid rgba(156, 163, 175, 0.5);
  border-radius: 49px;
}

.schedule_list {
  width: 50%;
  margin: 20px 0 0 0;
  padding-right: 0.65%;
  padding-left: 0.65%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 960px;
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
  padding: 8px;
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

.date-item {
  margin: 0 10px;
  cursor: pointer;
}

.active-date {
  background-color: #d6f1dd;
}

.date-slider {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
