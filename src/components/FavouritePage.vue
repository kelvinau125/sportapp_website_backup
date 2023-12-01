<template>
  <BackgroundImage>
    <div class="schedule_list">
      <div class="flex justify-between my-5 py-1 date-slider" style="width: 892px; height: 46px;">
        <div class=" flex justify-center"
          style="height: 32px; width: 17px; background-color: #808F7E; border-radius: 8px;">
          <button @click="prevWeek">
            <img src="@/assets/toLeft.png" alt="Previous Week" class="" />
          </button>
        </div>
        <div @click="selectDate(day)" v-for="day in week" :key="day"
          class="date-item hover:bg-hoverGreen px-0.5 rounded-lg" style="width: 119px; height: 35px;">
          <div class="flex flex-col items-center rounded-lg">
            <div class="font-medium text-sm">{{ formatDay(day) }}</div>
            <div class="day-of-week font-medium text-xs text-grayText">{{ $t(formatDayOfWeek(day)) }}</div>

          </div>
        </div>
        <div class="flex justify-center" style="height: 32px; width: 17px; background-color: #808F7E;border-radius: 8px;">
          <button @click="nextWeek">
            <img class="" src="@/assets/toRight.png" alt="Next Week" />
          </button>
        </div>
      </div>
      <div v-if="selectedDate">
        <!-- <h2>Content for {{ formatDay(selectedDate) }}</h2>
        <p>Day of the week: {{ formatDayOfWeek(selectedDate) }}</p> -->
        <!-- Display content specific to the selected date here -->
      </div>

      <!-- ListView -->
      <div class="schedule_detail" style="width: 892px; height: 108px;">
        <div class="schedule_detail_box">
          <ul v-for="match in matchDetails" :key="match.matchDetails">
            <li @click="toAllMatchPage(match.linkAddress)" class="max-w-full h-52 bg-white">
              <div class="conten_box">
                <div class="flex justify-between">
                  <div class="flex items-center justify-start w-[350px]">
                    <div class="w-6 h-6">
                      <img src="@/assets/favourite/footIcon.png" />
                    </div>
                    <div class="px-3 flex justify-center ml-2 MatchTypeBorder">
                      <span class="text-xs font-medium" style="color: #666666;">{{match.matchType}}</span>
                    </div>
                  </div>
                  <button @click.stop="toUnfavourite(match, match.linkAddress)">
                      <img v-if="match.favourite" src="@/assets/content/Unfavourite.png" alt="Unfavourite" />
                      <img v-else src="@/assets/content/Favourite.png" alt="Favourite" />
                  </button>
                </div>

                <div class="flex justify-start">
                  <div class="flex items-end pr-5">
                    <div class="pr-2 font-medium text-xs text-grayText ">
                      <span>{{ match.date }}</span>
                    </div>
                    <div class="font-semibold text-xs" style="color: #333333;">
                      <span>{{ match.time }}</span>
                    </div>
                  </div>
                  <div class="flex" style="width: 570px; ">
                    <div class="flex justify-end items-center w-full">
                      <div class="">
                        <span class="text-lg font-semibold pr-2">{{ match.homeTeamName }}</span>
                      </div>
                      <div>
                        <img :src=match.homeTeamIcon style="width: 40px; height: 40px; border-radius: 20px;" />
                      </div>
                    </div>
                    <div class="flex flex-col  items-center  w-1/3">
                      <div class="font-semibold text-2xl">
                        <span>{{ match.homeTeamScore }}</span>
                        <span class="px-2">-</span>
                        <span>{{ match.awayTeamScore }}</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-start w-full">
                      <div>
                        <img :src=match.awayTeamIcon style="width: 40px; height: 40px; border-radius: 20px;" />
                      </div>
                      <div class="pl-3">
                        <span class="text-lg font-semibold">{{ match.awayTeamName }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="pt-2 pl-24 ">
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

import { getLiveStreamBookmark, liveStreamSaveBookmark, deleteStreamSaveBookmark } from '@/service/apiBookmarkProvider.js';

export default {
  components: {
    BackgroundImage
  },
  async mounted() {
    // ------------------------------------------------------------------- Translation Part ------------------------------------------ Remember Change It ----------------------------
    this.isCN = ((this.$i18n.locale === 'ZH') ? true : false)
    // this.isCN = false;

    // this.generateMatchDetailsList(format(this.currentDate, 'yyyyMMdd')); 
    // handle when come inside favorite is empty
    this.generateMatchDetailsList("showall");
  },
  data() {
    return {
      isCN: Boolean,

      currentDate: ref(new Date()),
      daysToShow: ref(7),
      selectedDate: ref(null),

      matchDetails: [],
      // matchDetails: [
      //   { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite:true },
      //   { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite:true },
      //   { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite:true },
      //   { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite:false },
      //   { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite:true },
      //   { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite:false },
      //   { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite:true },
      //   { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite:true },
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
      console.log(this.selectedDate);
      this.generateMatchDetailsList(format(this.selectedDate, 'yyyyMMdd'));
    },
    toAllMatchPage(linkAddress) {
      // Push to the Live Page
      const routeData = this.$router.resolve({ name: 'TournamentDetails', query: { TournamentID: linkAddress } });
      window.open(routeData.href, '_blank');
    },
    async toUnfavourite(match, matchID) {
      match.favourite = !match.favourite;

      if (!match.favourite) {
        await liveStreamSaveBookmark(matchID, 0, this.isCN);
      } else {
        await deleteStreamSaveBookmark(matchID, this.isCN);
      }
    },

    async generateMatchDetailsList(matchdate) {
      this.matchDetails = [];
      this.getfootballMatchList = await getLiveStreamBookmark(this.isCN);

      for (let i = 0; i < this.getfootballMatchList.length; i++) {
        if ((this.getfootballMatchList[i]["matchDate"]).replace(/-/g, '') === matchdate || matchdate === "showall") {
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
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.MatchTypeBorder {
  background-color: #F5F5F5;
  border: 1px solid rgba(156, 163, 175, 0.5);
  border-radius: 49px;
}


.schedule_list {
  width: 50%;
  /* height: calc(100% - 40px); */
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


.date-slider {
  background-color: #F5F5F5;
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 10px;
  overflow: auto;
}
</style>
