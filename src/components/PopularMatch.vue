<template>
  <!-- Overflow Setting -->
  <div class="flex gap-1 flex-wrap">
    <div class="" v-for="match in matchDetails" :key="match.matchDetails">
      <div @click="navigateTo(
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
      )" class="border cursor-pointer" style="width: 204px; height: 136px; border-radius: 8px;">
        <!-- 热门赛程 Header -->
        <div class="py-1.5 flex justify-start items-center rounded-t-lg" style="background-color: #D6F1DD; height: 30px;">
          <div class="headerContainer pl-2.5 overflow-clip ">
            <div class="headerBorder text-xs font-medium flex justify-center text-start pl-1.5 pt-0.5">
              <span class="whitespace-nowrap overflow-hidden text-ellipsis" style="color: #666666;">{{ match.matchType
              }}</span>
            </div>
          </div>
          <div class="text-xs font- w-[35px] pl-2">
            {{ match.time }}
          </div>
          <button class="pl-[54px]" @click.stop="toggleFavorite(match, match.linkAddress)"
            :class="{ fav: match.favourite }">
            <img v-if="!match.favourite" src="@/assets/content/Unfavourite.png" alt="Unfavourite" />
            <img v-else src="@/assets/content/Favourite.png" alt="Favourite" />
          </button>
        </div>
        <!-- 热门赛程 Contents -->
        <div class="flex justify-between rounded-b-lg bg-white w-full" style=" height: 106px; ">
          <div class="flex flex-col justify-center items-center pb-3 h-full" style="width: 100px; ">
            <div class="text-base font-semibold h-1/3 pt-2"> {{ match.homeTeamScore }}</div>
            <div class="pt-2 h-1/2">
              <img class="" style="width: 24px; height: 24px;" :src="match.homeTeamIcon" />
            </div>
            <div class="nameBorder flex justify-center text-center text-xs font-normal text-grayText">
              <span class=" whitspace-nowrap overflow-hidden text-elleipsis">{{ match.homeTeamName }}</span>
            </div>
          </div>
          <div class="flex relative flex-col justify-start items-center py-2 ">
            <div v-show="isCN" class="w-[80px] h-1/2 absolute font-medium text-sm pt-3 flex items-center justify-center"
              :class="{ 'statusStartBorder': match.status === '开', 'statusEndBorder': match.status === '终' }">{{
                match.status }}</div>

            <div v-show="!isCN" class="w-[80px] h-1/2 absolute font-medium text-sm pt-3 flex items-center justify-center"
              :class="{ 'statusStartBorder': match.status === ('Started' || 'Start'), 'statusEndBorder': match.status === match.status && match.status !== '' }">
              <span class="whitspace-normal overflow-hidden text-ellipsis">{{match.status}}</span>
            </div>
            <div class="h-1/2 mt-8">
              <span class="pt-2 text-base font-semibold">VS</span>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center  pb-3 " style="width: 100px; ">
            <div class="text-base font-semibold h-1/3 pt-2">{{ match.awayTeamScore }}</div>
            <div class="pt-2 h-1/2">
              <img class="" style="width: 24px; height: 24px;" :src="match.awayTeamIcon" />
            </div>
            <div class="nameBorder flex justify-center text-center text-xs font-normal text-grayText">
              <span class="whitspace-nowrap overflow-hidden text-elleipsis">{{
                match.awayTeamName }}</span>

            </div>

          </div>
        </div>
      </div>

    </div>

    <div @click="toAllMatchPage"
      class="max-w-[42px] h-[136px] flex flex-col justify-start items-center rounded-lg cursor-pointer px-5 pt-8"
      style=" background-color: #808F7E;">
      <div class="" style="width: 24px; height: 24px;">
        <img src="@/assets/menu.png" alt="全部赛程" />
      </div>
      <div class="flex justify-center" style="width: 31px; height: 36px; ">
        <span class="pt-4 text-center text-xs font-medium text-white">{{ $t("All fixtures") }}</span>
      </div>
    </div>

   
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { format } from 'date-fns';

import { getMatchTodaybyCompName } from '@/service/apiFootBallMatchProvider.js';
import { getMatchByDate } from '@/service/apiFootBallMatchProvider.js';
import { getLiveStreamBookmark, liveStreamSaveBookmark, deleteStreamSaveBookmark } from '@/service/apiBookmarkProvider.js';


export default {
  data() {
    return {
      currentDate: ref(new Date()),
      isCN: Boolean,
    }
  },

  setup() {
    const router = useRouter();

    const navigateTo = (linkAddress, competitionName, matchDate, matchTimeStr, statusStr, homeTeamName, homeTeamScore, homeTeamLogo, awayTeamName, awayTeamScore, awayTeamLogo) => {
      // Navigating to the specified page
      // router.push({ path: linkAddress });
      const routeData = router.resolve({
        name: 'TournamentDetails', query: {
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
        }
      });
      window.open(routeData.href, '_blank');
    };
    const toAllMatchPage = () => {
      // Navigating
      router.push({ name: 'AllMatch' });
    };

    const matchDetails = ref([]);
    // const matchDetails = ref([
    //   { matchType: '欧冠', date: '10月08日', time: '13:14', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite: false, linkAddress: '/', status: '开' },
    //   { matchType: '欧冠', date: '10月08日', time: '13:14', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite: false, linkAddress: '/live', status: '开' },
    //   { matchType: '欧冠', date: '10月08日', time: '13:14', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite: false, linkAddress: '/', status: '开' },
    //   { matchType: '欧冠', date: '10月08日', time: '13:14', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite: false, linkAddress: '/', status: '终' },
    // ]);

    return {
      toAllMatchPage,
      matchDetails,
      navigateTo,
    };
  },

  mounted() {
    // ------------------------------------------------------------------- Translation Part ------------------------------------------ Remember Change It ----------------------------
    this.isCN = ((this.$i18n.locale === 'ZH') ? true : false)
    // this.isCN = false;

    const leaguesToFetch = [
      "Premier League",
      "UEFA Champions League",
      "Serie A",
      "Bundesliga",
      "Ligue 1",
      "La Liga",
    ];

    const CNleaguesToFetch = [
      "英超",
      "欧冠",
      "意甲",
      "德甲",
      "法甲",
      "西甲",
    ];

    // this.fetchMatchDetailsForLeagues((this.isCN) ? CNleaguesToFetch : leaguesToFetch);
    this.getFavoriteFromBookmark(CNleaguesToFetch, leaguesToFetch)
  },

  methods: {
    async toggleFavorite(match, matchID) {
      match.favourite = !match.favourite;

      if (match.favourite) {
        await liveStreamSaveBookmark(matchID, 0, this.isCN);
      } else {
        await deleteStreamSaveBookmark(matchID, this.isCN);
      }
    },

    async getFavoriteFromBookmark(CNleaguesToFetch, leaguesToFetch) {
      this.getfootballMatchList = await getLiveStreamBookmark(this.isCN);

      this.favoriteList = this.getfootballMatchList.map(item => item.id);

      this.fetchMatchDetailsForLeagues((this.isCN) ? CNleaguesToFetch : leaguesToFetch);
    },

    async fetchMatchDetailsForLeagues(leagues) {
      this.matchDetails = [];

      for (let i = 0; i < 4; i++) {
        const leagueName = leagues[i];
        const matches = await getMatchTodaybyCompName(leagueName, this.isCN);

        if (matches.length > 0) {
          for (let j = 0; j < Math.min(1, matches.length); j++) {
            const match = matches[j];

            const matchId = match["id"];
            // Check if the match ID is in the list of favorite IDs
            const isFavorite = this.favoriteList.includes(matchId);

            this.matchDetails.push({
              matchType: match["competitionName"],
              date: match["matchDate"],
              time: match["matchTimeStr"],
              homeTeamName: match["homeTeamName"],
              homeTeamIcon: match["homeTeamLogo"],
              homeTeamScore: match["homeTeamScore"],
              awayTeamName: match["awayTeamName"],
              awayTeamIcon: match["awayTeamLogo"],
              awayTeamScore: match["awayTeamScore"],
              overTime: "null",
              favourite: isFavorite,
              linkAddress: match["id"],
              status: match["statusStr"],
              // status: "开",
            });
          }
        }
      }

      // console.log("--------------------")
      //   console.log(this.matchDetails)
      //   console.log("--------------------")

      if (this.matchDetails.length <= 4) {
        this.getfootballMatchList = await getMatchByDate(format(this.currentDate, 'yyyyMMdd'), this.isCN);

        console.log(this.getfootballMatchList)

        if (this.getfootballMatchList.length !== 0) {
          for (let i = this.matchDetails.length; i < 4; i++) {
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
              favourite: isFavorite,
              linkAddress: this.getfootballMatchList[i]["id"],
              status: this.getfootballMatchList[i]["statusStr"],
              // status: "开",
            });
          }
        }
      }
    },
  }
};
</script>
<style scoped>
.border {
  /* border: 1px solid red; */
  border-radius: 8px;
}

.headerBorder {
  width: 70px;
  height: 20px;
  background-color: white;
  border-radius: 49px;
}

.nameBorder {
  width: 70px;
  height: 100%;

}

.button {
  right: 5px;
  background: none;
  border: 1px solid red;
  cursor: pointer;
}

.all_match_btn {
  /* position: relative; */
  background: url('@/assets/allMatchButton.png');
  background-position: 50%;
  background-size: 100% 100%;
  background-repeat: no-repeat;

}

.statusEndBorder {
  background-color: #F5F5F5;
  height: auto;
  border-radius: 30px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 3px;
  padding-bottom: 3px;
}

.statusStartBorder {
  background-color: #EEFBEE;
  height: auto;
  padding: 100px;
  border-radius: 30px;

}
</style>