<template>
  <BackgroundImage>
    <div class="scroll-container" @scroll="handleScroll">
      <div class="inner-container">
        <div
          class="flex justify-between my-5 max-w-[892px] w-[100%] h-[46px] date-slider"
        >
          <div
            class="flex justify-center mt-1"
            style="
              height: 32px;
              width: 17px;
              background-color: #808f7e;
              border-radius: 8px;
            "
          >
            <button @click="prevWeek">
              <img src="@/assets/toLeft.png" alt="Previous Week" class="" />
            </button>
          </div>
          
          <div @click="selectDate(day);" v-for="day in week" :key="day" class="date-item  px-0.5 rounded-lg"
            style="width: 119px; height: 35px;">
            <div :class="{ 'active-date': isActiveDate(day,week)}"
              class="flex flex-col hover:bg-hoverGreen items-center rounded-lg h-[45px]">
              <div class="font-medium text-sm pt-1">{{ formatDay(day) }}</div>
              <div class="day-of-week font-medium text-xs text-grayText">
                {{ $t(formatDayOfWeek(day)) }}
              </div>
            </div>
          </div>
          <div
            class="flex justify-center mt-1"
            style="
              height: 32px;
              width: 17px;
              background-color: #808f7e;
              border-radius: 8px;
            "
          >
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
                        <span class="text-xs font-medium" style="color: #666666">
                          {{ match.matchType }}
                        </span>
                      </div>
                    </div>
                    <div>
                      <button
                        @click.stop="toggleFavorite(match, match.linkAddress)"
                        :class="{ fav: match.favorite }"
                      >
                        <img
                          v-if="!match.favorite"
                          src="@/assets/content/Unfavourite.png"
                          alt="Unfavourite"
                        />
                        <img
                          v-else
                          src="@/assets/content/Favourite.png"
                          alt="Favourite"
                        />
                      </button>

                      <!-- <img src="@/assets/content/Unfavourite.png" /> -->
                    </div>
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
                        <div class="pl-3">
                          <span class="text-lg font-semibold">{{
                            match.awayTeamName
                          }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="relative pt-2">
                      <p
                        class="absolute bottom-0 -right-[130px]"
                        :class="{
                          'bg-transparent': match.statusStr === ' ',
                          statusBorder: match.statusStr !== '',
                        }"
                      >
                        {{ match.statusStr }}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="pt-6">
            <ButtonPress
              @click="handleScroll()"
              class="w-full bg-grey-300"
              style="width: 180px; height: 60px; border-radius: 8px"
            >
              <p class="text-base font-normal" style="color: #ffffff">
                {{ $t("Show More") }}
              </p>
            </ButtonPress>
          </div>
        </div>
      </div>
    </div>
  </BackgroundImage>
</template>

<script>
import BackgroundImage from "@/components/BackGround.vue";
import { addDays, startOfWeek, format, isToday } from "date-fns";
import { ref } from "vue";

import { getMatchByDate } from "@/service/apiFootBallMatchProvider.js";
import { getBasketballMatchByDate } from "@/service/apiBasketBallMatchProvider.js";
import {
  getLiveStreamBookmark,
  liveStreamSaveBookmark,
  deleteStreamSaveBookmark,
} from "@/service/apiBookmarkProvider.js";
import ButtonPress from "@/components/ButtonPress.vue";

export default {
  components: {
    BackgroundImage,
    ButtonPress,
  },

  async mounted() {
    this.loadSelectedDate = format(this.currentDate, "yyyyMMdd");
    this.isCN = this.$i18n.locale === "ZH" ? true : false;
    // this.isCN = false;
    // this.handleScroll;
    window.addEventListener("scroll", this.actionScroll);
    this.activeDate= new Date(), // Initialize activeDate with the current date

    this.getFavoriteFromBookmark();
  },

  data() {
    return {
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
      // matchDetails: [
      //   { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favorite: true },
      //   { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favorite: false },
      //   { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favorite: true },
      //   { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favorite: false },
      //   { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favorite: true },
      //   { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favorite: true },
      //   { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favorite: true },
      //   { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favorite: true },
      // ],
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
      const scroll = window.scrollY;
      console.log("huh", scroll);
      console.log(event);
    },
    handleScroll() {
      // const scrollContainer = this.$refs.scrollContainer;

      // const container = this.$el;
      // Detect if the user is scrolling down
      // if (scrollTop + clientHeight >= scrollHeight) {

      // window.onscroll = () => {
      //   let bottomOfWin =
      //     Math.max(
      //       window.pageYOffset,
      //       document.documentElement.scrollTop,
      //       document.body.scrollTop
      //     ) +
      //       window.innerHeight ===
      //     document.documentElement.offsetHeight;
      //   if (bottomOfWin) {
      //     this.scrolledToBottom = true;
      //     // replace it with your code
      //     this.page++;
      //     console.log("page: " + this.page);
      //     this.generateMatchDetailsList(this.selectedDate, this.page);
      //   }
      // };

      // }

      // const container = this.$el;
      // if (container.scrollHeight - container.scrollTop === container.clientHeight) {
      //   // Increment the page number and fetch more data
      //   console.log("page: " + this.page);
      //   this.page++;
      //   this.generateMatchDetailsList(this.selectedDate, this.page);
      // }
      this.page++;
      this.loadMoreGenerateMatchDetailsList(this.loadSelectedDate, this.page);
    },

    async toggleFavorite(match, matchID) {
      match.favorite = !match.favorite;

      console.log(matchID);
      if (match.favorite) {
        await liveStreamSaveBookmark(matchID, this.currentChannel, this.isCN);
      } else {
        await deleteStreamSaveBookmark(matchID, this.isCN);
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
      // console.log(this.selectedDate);
      this.generateMatchDetailsList(format(this.selectedDate, "yyyyMMdd"), this.page);
    },
    isActiveDate(date, week) {
      this.count ++;

      if(this.firstReload)
      {
        if(this.count >= (week.length*304) )
        {
          console.log("here");
          this.firstReload = false;
        }
        const dateToCompare = new Date(date);
        // Set time components to zero for accurate date comparison
        dateToCompare.setHours(0, 0, 0, 0);
        this.todayDate.setHours(0, 0, 0, 0);
        return dateToCompare.getTime() === this.todayDate.getTime();
      }
      else{
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
  },
};
</script>

<style scoped>
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

@media (max-width: 892px) {
  .inner-container {
    min-width: 892px;
  }
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

.schedule_list .schedule_detail .schedule_detail_box > ul {
  /* min-height: calc(100% + 40px); */
  display: flex;
  flex-direction: column;
  width: 100%;
}

.schedule_list .schedule_detail .schedule_detail_box > ul > li {
  width: 100%;
  margin: 0 auto;
  height: 120px;
  padding-left: 2.1%;
  cursor: pointer;
}

.schedule_list .schedule_detail .schedule_detail_box > ul > li .conten_box {
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
