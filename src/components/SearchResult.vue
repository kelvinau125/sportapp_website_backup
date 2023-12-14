<template>
  <BackgroundImage>
    <div class="scroll-container">
      <div class="flex justify-center pt-9 pb-6">
        <div class="searchContainer flex">
          <input class="searchInput pl-4 w-full h-full text-xs font-normal text-grayText" v-model="searchQuery"
            @keyup.enter="search" type="text" placeholder="搜索赛事/球队" maxlength="20" />
          <button @click="search" class="searchButton w-full h-full flex justify-center items-center pl-1">
            <img src="@/assets/topNav/search.png" alt="Search Icon" class="" />
            <span class="text-white font-normal text-xs pb-0.5 pr-2">{{ $t("Search") }}</span>
          </button>
        </div>
      </div>
      <div class="inner-container">
        <div class=" schedule_detail max-w-[892px] w-[100%]">
          <div class=" schedule_detail_box">
            <!-- <ul class="h-[120px]" v-if="loading">
              <li class="max-w-full bg-white">
                Loading...
              </li>
            </ul> --> 
            <div class="h-[450px] flex items-center justify-center "  v-if="loading">
              <span class="font-medium text-2xl text-white"> Loading...</span>
              <img class="pl-5" src="@/assets/pandaLoading.gif" alt="panda loading" style="width:108px;height:108px;">

            </div>
            <!-- <ul class="h-[120px] border-2" v-else-if="filterSearchResult.length === 0">
              <li class="max-w-full bg-white">
                No data found.
              </li>
            </ul> -->
            <div class="h-[450px] flex items-center justify-center " v-else-if="filterSearchResult.length === 0">
              <span class="font-medium text-2xl text-white"> Data not found...</span>
              <img class="pl-5" src="@/assets/pandaNotFound.gif" alt="panda loading" style="width:108px;height:108px;">

            </div>


            <ul class=" h-[120px]" v-else v-for="match in filterSearchResult" :key="match.searchLiveTeamResult">
              <li @click="toAllMatchPage(
                match.linkAddress,
                match.competitionName,
                match.matchDate,
                match.matchTimeStr,
                match.statusStr,
                match.homeTeamName,
                match.homeTeamScore,
                match.homeTeamLogo,
                match.awayTeamName,
                match.awayTeamScore,
                match.awayTeamLogo
              )" class="max-w-full bg-white">
                <div class="h-[120px] p-5 ">
                  <div class="flex justify-between ">
                    <div class="flex items-center justify-start " style="width: 350px;">
                      <div class="w-6 h-6">
                        <img style="" src="@/assets/favourite/footIcon.png" />
                      </div>
                      <div class="px-3 flex justify-center ml-2 MatchTypeBorder ">
                        <span class="text-xs font-medium" style="color: #666666;">{{ match.competitionName }}</span>
                      </div>
                    </div>
                    <div>
                      <button @click.stop="toggleFavorite(match, match.linkAddress)" :class="{ fav: match.favorite }">
                        <img v-if="!match.favorite" src="@/assets/content/Unfavourite.png" alt="Unfavourite" />
                        <img v-else src="@/assets/content/Favourite.png" alt="Favourite" />
                      </button>
                    </div>
                  </div>
                  <div class="flex justify-start ">
                    <div class="flex items-end pr-5">
                      <div class="pr-2 font-medium text-xs text-grayText">
                        <span>{{ match.matchDate }}</span>
                      </div>
                      <div class="font-semibold text-xs " style="color: #333333;">
                        <span>{{ match.matchTimeStr }}</span>
                      </div>
                    </div>
                    <div class="flex" style="width: 570px; ">
                      <div class="flex justify-end items-center w-full ">
                        <div class="w-[160px]  overflow-hidden">
                          <span class="text-lg font-semibold pr-2 whitespace-nowrap overflow-ellipsis">{{
                            match.homeTeamName
                          }}</span>
                        </div>
                        <div class="">
                          <img :src=match.homeTeamLogo style="width: 40px; height: 40px; border-radius: 20px;" />
                        </div>
                      </div>
                      <div class="flex flex-col  items-center w-[60%]">
                        <div class="font-semibold text-2xl ">
                          <span>{{ match.homeTeamScore }}</span>
                          <span class="px-2">-</span>
                          <span>{{ match.awayTeamScore }}</span>
                        </div>
                      </div>
                      <div class="flex items-center justify-start w-full ">
                        <div>
                          <img :src=match.awayTeamLogo style="width: 40px; height: 40px; border-radius: 20px;" />
                        </div>
                        <div class="pl-3 w-[160px] overflow-hidden">
                          <span class="text-lg font-semibold whitespace-nowrap overflow-ellipsis">{{ match.awayTeamName
                          }}</span>
                        </div>
                      </div>
                    </div>

                    <div class="relative pt-2">
                      <span class="absolute bottom-0 -right-[130px]"
                        :class="{ 'bg-transparent': match.statusStr === ' ', 'statusBorder': match.statusStr !== '' }">{{
                          match.statusStr }}</span>
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
import { ref } from 'vue';
import { searchLiveTeamStream, searchLiveCompetitionStream } from '@/service/searchLiveStreamProvider.js'
import BackgroundImage from '@/components/BackGround.vue'

import { getLiveStreamBookmark, liveStreamSaveBookmark, deleteStreamSaveBookmark } from '@/service/apiBookmarkProvider.js';

export default {
  components: {
    BackgroundImage
  },
  data() {

    return {
      loading: false,

      searchQuery: this.$route.query.searchQuery,
      searchPages: this.$route.query.searchPages,
      searchLiveTeamResult: [],
      searchLiveCompetitionResult: [],
      filterSearchResult: [],
      filterSearchResultTemp: [],

      favoriteList: [],

      // check language and basketball and football swtich
      isCN: Boolean,
      currentChannel: ref((localStorage.getItem('currentChannel') === "football") ? true : false),

    };
  },
  mounted() {
    this.getFavoriteFromBookmark();
    // this.search();
    // ------------------------------------------------------------------- Translation Part ------------------------------------------ Remember Change It ----------------------------
    this.isCN = ((this.$i18n.locale === 'ZH') ? true : false)


  },
  methods: {
    // async getResult() {

    //   this.searchLiveTeamResult = await searchLiveTeamStream(this.searchQuery, this.searchPages)
    //   this.searchLiveCompetitionResult = await searchLiveCompetitionStream(this.searchQuery, this.searchPages)
    //   // console.log("NEW TEAM RESULT" + this.searchLiveTeamResult);
    //   // console.log("NEW COMP RESULT" + this.searchLiveCompetitionResult);

    //   //Fillter Both Data By id
    //   this.filterSearchResult = [
    //     ...this.searchLiveTeamResult.filter(team => !this.searchLiveCompetitionResult.find(comp => comp.id === team.id)),
    //     ...this.searchLiveCompetitionResult
    //   ];

    //   // this.filterSearchResult = [...this.searchLiveTeamResult, ...this.searchLiveCompetitionResult];
    //   // console.log("NEW HALLO" + this.filterSearchResult);

    // },
    async search() {

      try {
        this.loading = true; // Set loading to true
        if (this.searchQuery === '') {
          console.log('Search is empty');
          this.searchLiveTeamResult = [];
        } else {
          this.$router.push({ name: 'ResultPage', query: { searchQuery: this.searchQuery } });

          this.filterSearchResult = [];
          this.searchLiveTeamResult = await searchLiveTeamStream(this.searchQuery, this.isCN, this.currentChannel)
          this.searchLiveCompetitionResult = await searchLiveCompetitionStream(this.searchQuery, this.isCN, this.currentChannel)

          // console.log(' ' + this.searchQuery);
          // console.log("THE LIVE TEAM RESULT" + this.searchLiveTeamResult);
          // console.log("THE COMP TEAM RESULT" + this.searchLiveCompetitionResult);

          //Fillter Both Data By id
          this.filterSearchResultTemp = [
            ...this.searchLiveTeamResult.filter(team => !this.searchLiveCompetitionResult.find(comp => comp.id === team.id)),
            ...this.searchLiveCompetitionResult
          ];

          for (let i = 0; i < this.filterSearchResultTemp.length; i++) {

            const matchId = this.filterSearchResultTemp[i]["id"];
            // Check if the match ID is in the list of favorite IDs
            const isFavorite = this.favoriteList.includes(matchId);

            this.filterSearchResult.push({
              competitionName: this.filterSearchResultTemp[i]["competitionName"],
              matchDate: this.filterSearchResultTemp[i]["matchDate"],
              matchTimeStr: this.filterSearchResultTemp[i]["matchTimeStr"],
              homeTeamName: this.filterSearchResultTemp[i]["homeTeamName"],
              homeTeamLogo: this.filterSearchResultTemp[i]["homeTeamLogo"],
              homeTeamScore: this.filterSearchResultTemp[i]["homeTeamScore"],
              awayTeamScore: this.filterSearchResultTemp[i]["awayTeamScore"],
              awayTeamLogo: this.filterSearchResultTemp[i]["awayTeamLogo"],
              awayTeamName: this.filterSearchResultTemp[i]["awayTeamName"],
              favorite: isFavorite,
              statusStr: this.filterSearchResultTemp[i]["statusStr"],
              linkAddress: this.filterSearchResultTemp[i]["id"],
            });
          }
        }
      } catch (error) {
        console.error('Error occurred during search:', error);
      } finally {
        this.loading = false; // Set loading to false whether the search succeeds or fails
      }


    },
    async toggleFavorite(match, matchID) {
      match.favorite = !match.favorite;

      if (match.favorite) {
        await liveStreamSaveBookmark(matchID, this.currentChannel, this.isCN);
      } else {
        await deleteStreamSaveBookmark(matchID, this.isCN);
      }
    },
    async getFavoriteFromBookmark() {
      this.getfootballMatchList = await getLiveStreamBookmark(this.isCN, this.currentChannel);

      this.favoriteList = this.getfootballMatchList.map(item => item.id);
      this.search();
    },
    toAllMatchPage(linkAddress, competitionName, matchDate, matchTimeStr, statusStr, homeTeamName, homeTeamScore, homeTeamLogo, awayTeamName, awayTeamScore, awayTeamLogo) {
      // Push to the Live Page
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
      window.open(routeData.href, '_blank');
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
    /* Set a minimum width to stop shrinking */
  }
}

.searchContainer {
  border: 1px solid #33BA53;
  border-radius: 6px;
  width: 346px;
  height: 37px;
}

.searchButton {
  background-color: #33BA53;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border: 1px solid #33BA53;
  width: 90px;
  height: auto;
}

.searchInput {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background-color: #213F6D;
  outline: none;
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

.statusBorder {
  background-color: #EEEDF4;
  border-radius: 8px;
  width: auto;
  padding: 8px;

}

.MatchTypeBorder {
  background-color: #F5F5F5;
  border: 1px solid rgba(156, 163, 175, 0.5);
  border-radius: 49px;
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

