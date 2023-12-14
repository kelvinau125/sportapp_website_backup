<template>
  <LoginModal :showModal="isLoginModalVisible" :closeModal="closeLoginModal" />

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
            <div class=" text-base font-semibold h-1/3 pt-2"> {{ match.homeTeamScore }}</div>
            <div class="pt-2 h-1/2">
              <img class="" style="width: 24px; height: 24px;" :src="match.homeTeamIcon" />
            </div>
            <div class=" w-[60px] h-[100%] flex justify-center text-center text-xs font-normal text-grayText">
              <span class=" whitespace-nowrap overflow-hidden text-elleipsis">{{ match.homeTeamName }}</span>
            </div>
          </div>
          <div class="flex relative flex-col justify-start items-center py-2 ">
            <div v-show="isCN" class="w-[80px] h-1/2 absolute font-medium text-sm pt-3 flex items-center justify-center"
              :class="{ 'statusStartBorder': match.status === '开', 'statusEndBorder': match.status === match.status }">
              <span class="whitspace-normal overflow-hidden text-ellipsis">{{ match.status }}</span>
            </div>

            <div v-show="!isCN" class="w-[80px] h-1/2 absolute font-medium text-xs pt-3 flex items-center justify-center"
              :class="{ 'statusStartBorder': match.status === ('Started' || 'Start'), 'statusEndBorder': match.status === match.status && match.status !== '' }">
              <span class="whitspace-normal overflow-hidden text-ellipsis">{{ match.status }}</span>
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
            <div class="w-[60px] h-[100%] flex justify-center text-center text-xs font-normal text-grayText">
              <span class="multiline-ellipsis">{{
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
import { format } from 'date-fns';

import { getMatchTodaybyCompName, getMatchByDate } from '@/service/apiFootBallMatchProvider.js';
import { getBasketBallMatchTodaybyCompName, getBasketballMatchByDate } from '@/service/apiBasketBallMatchProvider.js';

import { getLiveStreamBookmark, liveStreamSaveBookmark, deleteStreamSaveBookmark } from '@/service/apiBookmarkProvider.js';

import LoginModal from '@/views/Authentication/LoginModal.vue';
import VueCookies from 'vue-cookies';

export default {
  components: {
    LoginModal
  },
  data() {
    return {
      currentDate: ref(new Date()),
      matchDetails: ref([]),
      isLoginModalVisible: ref(false),


      // check language and basketball and football swtich
      isCN: Boolean,
      currentChannel: ref((localStorage.getItem('currentChannel') === "football") ? true : false),
    }
  },


  mounted() {
    // ------------------------------------------------------------------- Translation Part ------------------------------------------ Remember Change It ----------------------------
    this.isCN = ((this.$i18n.locale === 'ZH') ? true : false)
    // this.isCN = false;

    const leaguesToFetch = [
      //football
      "Premier League",
      "UEFA Champions League",
      "Serie A",
      "Bundesliga",
      "Ligue 1",
      "La Liga",
      //basketball
      "NBA",
      "CBA",
      "EuroLeague",
      "Liga ACB",
      "NBL",
    ];

    const CNleaguesToFetch = [
      //football
      "英超",
      "欧冠",
      "意甲",
      "德甲",
      "法甲",
      "西甲",
      //basketball
      "美国",
      "中国",
      "欧洲",
      "西班牙",
      "澳大利亚",
    ];

    // this.fetchMatchDetailsForLeagues((this.isCN) ? CNleaguesToFetch : leaguesToFetch);
    this.getFavoriteFromBookmark(CNleaguesToFetch, leaguesToFetch)
  },

  methods: {
    showLoginModal() {
      this.isLoginModalVisible = true;
    },
    closeLoginModal() {
      this.isLoginModalVisible = false;
    },

    navigateTo(linkAddress, competitionName, matchDate, matchTimeStr, statusStr, homeTeamName, homeTeamScore, homeTeamLogo, awayTeamName, awayTeamScore, awayTeamLogo) {
      // Navigating to the specified page
      // router.push({ path: linkAddress });
      const userToken = VueCookies.get('userToken');

      const routeData = this.$router.resolve({
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
      if (!userToken) {
        this.showLoginModal()
      } else {
        window.open(routeData.href, '_blank');

      }

    },
    toAllMatchPage() {
      const userToken = VueCookies.get('userToken');
      if (!userToken) {
        this.showLoginModal()
      } else {
        // Navigating
        this.$router.push({ name: 'AllMatch' });

      }

    },
    async toggleFavorite(match, matchID) {
      const userToken = VueCookies.get('userToken');

      if (!userToken) {
        this.showLoginModal()
      } else {
        match.favourite = !match.favourite;

        if (match.favourite) {
          await liveStreamSaveBookmark(matchID, this.currentChannel, this.isCN);
        } else {
          await deleteStreamSaveBookmark(matchID, this.isCN);
        }
      }


    },

    async getFavoriteFromBookmark(CNleaguesToFetch, leaguesToFetch) {
      this.getfootballMatchList = await getLiveStreamBookmark(this.isCN, this.currentChannel);

      this.favoriteList = this.getfootballMatchList.map(item => item.id);

      this.fetchMatchDetailsForLeagues((this.isCN) ? CNleaguesToFetch : leaguesToFetch);
    },

    async fetchMatchDetailsForLeagues(leagues) {
      this.matchDetails = [];

      for (let i = 0; i < 4; i++) {
        const leagueName = leagues[i];
        let matches = [];

        (this.currentChannel)
          //football
          ? matches = await getMatchTodaybyCompName(leagueName, this.isCN)
          //basketball
          : matches = await getBasketBallMatchTodaybyCompName(leagueName, this.isCN);


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
      //   console.log(this.matchDetails.length)
      //   console.log("--------------------")

      if (this.matchDetails.length <= 4) {
        (this.currentChannel)
          //football
          ? this.getfootballMatchList = await getMatchByDate(format(this.currentDate, 'yyyyMMdd'), this.isCN)
          //basketball
          : this.getfootballMatchList = await getBasketballMatchByDate(format(this.currentDate, 'yyyyMMdd'), this.isCN);

        console.log(this.getfootballMatchList)

        if (this.getfootballMatchList.length !== 0) {
          for (let i = this.matchDetails.length; i < Math.min(4, this.matchDetails.length); i++) {
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

.multiline-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.multiline-ellipsis::after {
  content: '...';
  display: inline-block;
}
</style>