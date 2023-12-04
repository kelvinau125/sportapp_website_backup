<template>
  <BackgroundImage>
    <div class="schedule_list">
      <div class="flex justify-between my-5 date-slider" style="width: 892px; height: 46px;">
        <div class=" flex justify-center mt-1"
          style="height: 32px; width: 17px; background-color: #808F7E; border-radius: 8px;">
          <button @click="prevWeek">
            <img src="@/assets/toLeft.png" alt="Previous Week" class="" />
          </button>
        </div>
        <div @click="selectDate(day)" v-for="day in week" :key="day" class="date-item  px-0.5 rounded-lg"
          style="width: 119px; height: 35px;">
          <div :class="{ 'active-date': isActiveDate(day) }"
            class="flex flex-col hover:bg-hoverGreen items-center rounded-lg h-[45px]">
            <div class="font-medium text-sm pt-1">{{ formatDay(day) }}</div>
            <div class="day-of-week font-medium text-xs text-grayText">{{ $t(formatDayOfWeek(day)) }}</div>
          </div>
        </div>
        <div class="flex justify-center mt-1"
          style="height: 32px; width: 17px; background-color: #808F7E;border-radius: 8px;">
          <button @click="nextWeek">
            <img class="" src="@/assets/toRight.png" alt="Next Week" />
          </button>
        </div>
      </div>
      <div v-if="selectedDate">
      </div>
      <div class="schedule_detail" style="width: 892px; height: 108px;">
        <div class="schedule_detail_box">
          <ul v-for="match in matchDetails" :key="match.matchDetails">
            <li @click="toAllMatchPage(
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
              )" class="max-w-full h-52 bg-white">
              <div class="conten_box">
                <div class="flex justify-between">
                  <div class="flex items-center justify-start w-[350px]">
                    <div class="w-6 h-6">
                      <img src="@/assets/favourite/footIcon.png" />
                    </div>
                    <div class="px-3 flex justify-center ml-2 MatchTypeBorder">
                      <span class="text-xs font-medium" style="color: #666666;"> {{ match.matchType }} </span>
                    </div>
                  </div>
                  <div>
                    <button @click.stop="toggleFavorite(match, match.linkAddress)" :class="{ fav: match.favorite }">
                      <img v-if="!match.favorite" src="@/assets/content/Unfavourite.png" alt="Unfavourite" />
                      <img v-else src="@/assets/content/Favourite.png" alt="Favourite" />
                    </button>

                    <!-- <img src="@/assets/content/Unfavourite.png" /> -->
                  </div>
                </div>
                <div class="flex justify-start">
                  <div class="flex items-end pr-5">
                    <div class="pr-2 font-medium text-xs text-grayText">
                      <span>{{ match.date }}</span>
                    </div>
                    <div class="font-semibold text-xs " style="color: #333333;">
                      <span>{{ match.time }}</span>
                    </div>
                  </div>
                  <div class="flex" style="width: 570px; ">
                    <div class="flex justify-end items-center w-full">
                      <div class="">
                        <span class="text-lg font-semibold pr-2">{{ match.homeTeamName }}</span>
                      </div>
                      <div>
                        <img :src= match.homeTeamIcon style="width: 40px; height: 40px; border-radius: 20px;" />
                      </div>
                    </div>
                    <div class="flex flex-col items-center w-1/3">
                      <div class="font-semibold text-2xl">
                        <span>{{ match.homeTeamScore }}</span>
                        <span class="px-2">-</span>
                        <span>{{ match.awayTeamScore }}</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-start w-full">
                      <div>
                        <img :src= match.awayTeamIcon style="width: 40px; height: 40px; border-radius: 20px;" />
                      </div>
                      <div class="pl-3">
                        <span class="text-lg font-semibold">{{ match.awayTeamName }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="pt-2 pl-24  ">
                    <!-- <img src="@/assets/favourite/ended.png" /> -->
                    <p :class="{'bg-transparent': match.statusStr === ' ' , 'statusBorder': match.statusStr !==''}">{{ match.statusStr }}</p>
                  </div>
                </div>
              </div>

            </li>
          </ul>
        </div>
      </div>

    </div>
  </BackgroundImage>
</template>

<script>
import BackgroundImage from '@/components/BackGround.vue'
import { addDays, startOfWeek, format, isToday } from 'date-fns';
import { ref } from 'vue'

import { getMatchByDate } from '@/service/apiFootBallMatchProvider.js';
import { getLiveStreamBookmark, liveStreamSaveBookmark, deleteStreamSaveBookmark } from '@/service/apiBookmarkProvider.js';

export default {
  components: {
    BackgroundImage
  },

  async mounted() {
    // ------------------------------------------------------------------- Translation Part ------------------------------------------ Remember Change It ----------------------------
    this.isCN = ((this.$i18n.locale === 'ZH') ? true : false)
    // this.isCN = false;

    this.getFavoriteFromBookmark();
  },

  data() {
    return {
      isCN: Boolean,
      activeDate: null,

      currentDate: ref(new Date()),
      daysToShow: ref(7),
      selectedDate: ref(null),

      favoriteList: [],
      matchdate: "",
      getfootballMatchList: [],
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
      return Array.from({ length: this.daysToShow }, (_, index) => addDays(startDate, index));
    }

  },
  methods: {
    async toggleFavorite(match, matchID) {
      match.favorite = !match.favorite;

      if (match.favorite) {
        await liveStreamSaveBookmark(matchID, 0, this.isCN);
      } else {
        await deleteStreamSaveBookmark(matchID, this.isCN);
      }
    },
    toAllMatchPage(linkAddress, competitionName, matchDate, matchTimeStr, statusStr, homeTeamName, homeTeamScore, homeTeamLogo, awayTeamName,awayTeamScore, awayTeamLogo) {
      // Push to the Live Page
      const routeData = this.$router.resolve({name: 'TournamentDetails', query: {
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
      
      }});
      window.open(routeData.href, '_blank');
    },
    formatDay(date) {
      return format(date, 'MM/dd');
    },
    formatDayOfWeek(date) {
      return isToday(date) ? 'Today' : format(date, 'EEEE');
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
      console.log(this.selectedDate);
      this.generateMatchDetailsList(format(this.selectedDate, 'yyyyMMdd'));
    },
    isActiveDate(date) {
      return this.activeDate === date;
    },

    async generateMatchDetailsList(matchdate) {
      this.matchDetails = [];
      this.getfootballMatchList = await getMatchByDate(matchdate, this.isCN);

      for (let i = 0; i < this.getfootballMatchList.length; i++) {

        const matchId = this.getfootballMatchList[i]["id"];
        // Check if the match ID is in the list of favorite IDs
        const isFavorite = this.favoriteList.includes(matchId);

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
          favorite: isFavorite,
          statusStr: this.getfootballMatchList[i]["statusStr"],
          linkAddress: this.getfootballMatchList[i]["id"],
        });
      }
    },

    async getFavoriteFromBookmark() {
      this.getfootballMatchList = await getLiveStreamBookmark(this.isCN);

      this.favoriteList = this.getfootballMatchList.map(item => item.id);
      this.generateMatchDetailsList(format(this.currentDate, 'yyyyMMdd'));
    },
  },
};
</script>

<style scoped>
.MatchTypeBorder {
  background-color: #F5F5F5;
  border: 1px solid rgba(156, 163, 175, 0.5);
  border-radius: 49px;
}

.schedule_list {
  width: 50%;
  margin: 20px 0 0 0;
  padding-right: .65%;
  padding-left: .65%;
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
  background-color: #F5F5F5;
  width: 100%;
  border: 1px solid rgba(156, 163, 175, 0.5);
  border-radius: 49px;
}

.statusBorder {
  background-color: #EEEDF4;
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
  background-color: #D6F1DD;
}

.date-slider {
  background-color: #F5F5F5;
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
