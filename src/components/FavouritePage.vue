<template>
  <BackgroundImage>
    <div class="scroll-container">
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
          <div
            @click="selectDate(day)"
            v-for="day in week"
            :key="day"
            class="date-item px-0.5 rounded-lg"
            style="width: 119px; height: 35px"
          >
            <div
              :class="{ 'active-date': isActiveDate(day) }"
              class="flex flex-col hover:bg-hoverGreen items-center rounded-lg h-[45px]"
            >
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
                  <div class="max-[892px]:flex justify-start min-[893px]:flex justify-between">
                    <div class="flex items-center justify-start ">

                      <div class="w-6 h-6">
                        <img src="@/assets/favourite/footIcon.png" />
                      </div>
                      <div class="px-3 flex justify-center ml-2 MatchTypeBorder w-24">
                        <span class="text-xs font-medium truncate" style="color: #666666">{{
                          match.matchType
                        }}</span>
                      </div>

                      <div class="flex items-center px-3 min-[893px]:hidden">
                        <div class="font-semibold text-xs px-2" style="color: #333333">
                          <span>{{ match.time }}</span>
                        </div>
                        <span v-if="match.statusStr !== ' '" 
                            class="bottom-0 -right-[130px] " 
                            :class="{ 'bg-transparent': match.statusStr === ' ', statusBorderRes: match.statusStr !== ''}">
                            {{ match.statusStr }}
                          </span>
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

                  <div class="min-[893px]:flex justify-start ">
                    <div class="flex items-end max-[893px]:hidden">
                      <div class="pr-2 font-medium text-xs text-grayText">
                        <span>{{ match.date }}</span>
                      </div>
                      <div class="font-semibold text-xs" style="color: #333333">
                        <span>{{ match.time }}</span>
                      </div>
                    </div>


                    <div class="flex min-[893px]:w-570 max-[892px]:flex justify-center py-3">
                      <div class="max-[892px]:flex justify-end items-center w-[50%] min-[893px]:flex justify-end items-center w-full ">
                        <div class="min-[893px]:w-[160px] overflow-hidden max-[892px]:w-[80px] overflow-hidden text-left truncate">
                          <span
                            class="text-lg font-medium pr-2 whitespace-nowrap overflow-ellipsis"
                            >{{ match.homeTeamName }}</span
                          >
                        </div>
                        <div>
                          <img
                            :src="match.homeTeamIcon"
                            style="width: 30px; height: 30px; border-radius: 15px"
                          />
                        </div>
                      </div>
                      <div class="max-[892px]:flex flex-col items-center w-[30%] min-[893px]:flex flex-col items-center w-[60%]">
                        <div class="font-semibold text-2xl">
                          <span>{{ match.homeTeamScore }}</span>
                          <span class="px-2">-</span>
                          <span>{{ match.awayTeamScore }}</span>
                        </div>
                      </div>
                      <div class="max-[892px]:flex items-center justify-start w-[50%] min-[893px]:flex items-center justify-start w-full">
                        <div>
                          <img
                            :src="match.awayTeamIcon"
                            style="width: 30px; height: 30px; border-radius: 15px"
                          />
                        </div>
                        <div class="pl-3 w-[80px] overflow-hidden truncate">
                          <span
                            class="text-lg font-medium whitespace-nowrap overflow-ellipsis"
                            >{{ match.awayTeamName }}</span
                          >
                        </div>
                      </div>
                    </div>
                    <div class="relative pt-2 max-[892px]:hidden">
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
      </div>
    </div>
  </BackgroundImage>
</template>

<script>
import BackgroundImage from "@/components/BackGround.vue";
import { addDays, startOfWeek, format, isToday } from "date-fns";
import { ref } from "vue";

import {
  getLiveStreamBookmark,
  liveStreamSaveBookmark,
  deleteStreamSaveBookmark,
} from "@/service/apiBookmarkProvider.js";

export default {
  components: {
    BackgroundImage,
  },
  async mounted() {
    // ------------------------------------------------------------------- Translation Part ------------------------------------------ Remember Change It ----------------------------
    this.isCN = this.$i18n.locale === "ZH" ? true : false;
    // handle when come inside favorite is empty
    this.generateMatchDetailsList("showall");
  },
  data() {
    return {
      // check language and basketball and football swtich
      isCN: Boolean,
      currentChannel: ref(
        localStorage.getItem("currentChannel") === "football" ? true : false
      ),

      activeDate: null,
      currentDate: ref(new Date()),
      daysToShow: ref(7),
      selectedDate: ref(null),

      matchDetails: [],
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (min-width: 300px) {
  .statusRes {
    position: absolute;
    right: 0px;
  }
}

@media (min-width: 500px) {
  .statusRes {
    position: absolute;
    right: 18px;
  }
}

@media (min-width: 640px) {
  .statusRes {
    position: absolute;
    right: 18px;
  }
}

@media (min-width: 768px) {
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

@media (max-width: 892px) {
  .inner-container {
    min-width: 892px;
    /* Set a minimum width to stop shrinking */
  }
}

@media (max-width: 892px) and (min-width: 320px) {
    .inner-container {
      min-width: 320px;
      max-width: 892px;
    }
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
  padding: 8px;
}

.statusBorderRes {
  background-color: #eeedf4;
  border-radius: 8px;
  width: auto;
  font-weight: 100;
  font-size: small;
  padding: 0px 8px;
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
  overflow: auto;
}
</style>
