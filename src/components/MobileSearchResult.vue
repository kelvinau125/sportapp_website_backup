<template>
  <LoginModal :showModal="isLoginModalVisible" :closeModal="closeLoginModal" />

  <div class="bg-mobilenavcolor text-white py-2 px-10 shadow flex justify-center items-center">
      <div class="flex items-center">
        <div class="flex relative">
          <div @click="search" class="">
            <img
              src="@/assets/topNav/search.png"
              alt="Search Icon"
              class="absolute left-0.5 w-6 h-6 m-2"
            />
          </div>
          <div class="">
            <input
              v-model="searchQuery"
              @keyup.enter="search"
              type="text"
              :placeholder="$t('Search event/team')"
              maxlength="20"
              class="pl-10 w-72 h-10 rounded-3xl border-gray-300 text-xs font-normal bg-opacity-30 text-white placeholder:text-white bg-slate-50"
            />
          </div>
        </div>
        <div class="px-2" @click="clearQuery()">Cancel</div>
      </div>
    </div>

    <div class="scroll-container">
      <div class="inner-container">
        <div class="schedule_detail pb-16 w-[100%]">
          <div class="schedule_detail_box  ">
            <div class="h-[450px] flex items-center justify-center" v-if="loading">
              <span class="font-medium text-2xl text-white"> {{ $t("Loading") }}</span>
              <img class="pl-5" src="@/assets/pandaLoading.gif" alt="panda loading" style="width: 108px; height: 108px" />
            </div>
            <div class="h-[450px] flex items-center justify-center" v-else-if="filterSearchResult.length === 0">
              <span class="font-medium text-2xl text-white">{{ $t('Data not found') }}</span>
              <img class="pl-5" src="@/assets/pandaNotFound.gif" alt="panda loading"
                style="width: 108px; height: 108px" />
            </div>

            <ul class="h-[90px]" v-else v-for="match in filterSearchResult" :key="match.searchLiveTeamResult">
              <li @click="
                toAllMatchPage(
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
                )
                " class="w-[350px]  bg-white">
                <div class="h-[80px] pt-2 pb-5 pr-2">
                  <div class="flex justify-between ">
                    <div class="pl-2 flex items-center justify-between w-[200px] ">
                      <div class="px-3 flex justify-center overflow-clip  MatchTypeBorder">
                        <span class="text-xs font-medium whitespace-nowrap overflow-hidden text-ellipsis"
                          style="color: rgba(102, 102, 102, 1)">{{
                            match.competitionName
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
                        <span class="text-xs font-" :class="{
                          'bg-transparent': match.statusStr === ' ',
                          statusBorder: match.statusStr !== '',
                        }">
                          {{ match.statusStr }}</span>
                      </div>
                      <button @click.stop="toggleFavorite(match, match.linkAddress)" :class="{ fav: match.favorite }">
                        <img v-if="!match.favorite" src="@/assets/content/Unfavourite.png" alt="Unfavourite" />
                        <img v-else src="@/assets/content/Favourite.png" alt="Favourite" />
                      </button>

                    </div>
                  </div>

                  <div class="pl-2 pr-2 pt-2 flex justify-start">
                    <div class="flex w-full">
                      <div class="flex justify-end items-center w-[40%] ">
                        <div class="w-[150px] overflow-hidden">
                          <span class="text-sm font-normal pr-2 whitespace-nowrap overflow-ellipsis">{{
                            match.homeTeamName
                          }}</span>
                        </div>
                        <img :src="match.homeTeamLogo" style="width: 24px; height: 24px; border-radius: 20px" />
                      </div>
                      <div class="flex flex-col items-center  w-[20%]">
                        <div class="font-semibold text-base">
                          <span>{{ match.homeTeamScore }}</span>
                          <span class="px-2">-</span>
                          <span>{{ match.awayTeamScore }}</span>
                        </div>
                      </div>
                      <div class=" flex text-end w-[40%]">
                        <img :src="match.awayTeamLogo" style="width: 24px; height: 24px; border-radius: 20px" />
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
        </div>
      </div>
    </div>
</template>

<script>
import { ref } from "vue";
import {
  searchLiveTeamStream,
  searchLiveCompetitionStream,
} from "@/service/searchLiveStreamProvider.js";

import {
  getLiveStreamBookmark,
  liveStreamSaveBookmark,
  deleteStreamSaveBookmark,
} from "@/service/apiBookmarkProvider.js";

import LoginModal from "@/views/Authentication/LoginModal.vue";
import VueCookies from "vue-cookies";

export default {
  components: {
    LoginModal,
  },
  data() {
    return {
      loading: false,

      isLoginModalVisible: ref(false),

      searchQuery: this.$route.query.searchQuery,
      searchPages: this.$route.query.searchPages,
      searchLiveTeamResult: [],
      searchLiveCompetitionResult: [],
      filterSearchResult: [],
      filterSearchResultTemp: [],

      favoriteList: [],

      // check language and basketball and football swtich
      isCN: Boolean,
      currentChannel: ref(
        localStorage.getItem("currentChannel") === "football" ? true : false
      ),
    };
  },
  mounted() {
    this.getFavoriteFromBookmark();
    // this.search();
    // ------------------------------------------------------------------- Translation Part ------------------------------------------ Remember Change It ----------------------------
    this.isCN = this.$i18n.locale === "ZH" ? true : false;
  },
  methods: {
    showLoginModal() {
      this.isLoginModalVisible = true;
    },
    closeLoginModal() {
      this.isLoginModalVisible = false;
    },
    clearQuery() {
      this.searchQuery = '';
      this.filterSearchResult = [];
    },
    async search() {
      try {
        this.loading = true; // Set loading to true
        if (this.searchQuery === "") {
          this.searchLiveTeamResult = [];
        } else {
          this.$router.push({
            name: "ResultPage",
            query: { searchQuery: this.searchQuery },
          });

          this.filterSearchResult = [];
          this.searchLiveTeamResult = await searchLiveTeamStream(
            this.searchQuery,
            this.isCN,
            this.currentChannel
          );
          this.searchLiveCompetitionResult = await searchLiveCompetitionStream(
            this.searchQuery,
            this.isCN,
            this.currentChannel
          );

          //Fillter Both Data By id
          this.filterSearchResultTemp = [
            ...this.searchLiveTeamResult.filter(
              (team) =>
                !this.searchLiveCompetitionResult.find((comp) => comp.id === team.id)
            ),
            ...this.searchLiveCompetitionResult,
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
        console.error("Error occurred during search:", error);
      } finally {
        this.loading = false; // Set loading to false whether the search succeeds or fails
      }
    },
    async toggleFavorite(match, matchID) {
      const userToken = VueCookies.get("userToken");

      if (!userToken) {
        this.showLoginModal();
      } else {
        match.favorite = !match.favorite;
        if (match.favorite) {
          await liveStreamSaveBookmark(matchID, this.currentChannel, this.isCN);
        } else {
          await deleteStreamSaveBookmark(matchID, this.isCN);
        }
      }
    },
    async getFavoriteFromBookmark() {
      this.getfootballMatchList = await getLiveStreamBookmark(
        this.isCN,
        this.currentChannel
      );

      this.favoriteList = this.getfootballMatchList.map((item) => item.id);
      this.search();
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
      if (!userToken) {
        this.showLoginModal();
      } else {
        window.open(routeData.href, "_blank");
      }
    },
  },
};
</script>

<style scoped>
.scroll-container {
  position: absolute;
  width: 100%;
  /* overflow-x: auto;
  overflow-y: visible; */
}

.inner-container {
  /* max-width: 330px; */
  width: 350px;
  box-sizing: border-box;
  /* text-align: center; */
  padding-top: 20px;
  padding-bottom: 20px;
  margin: 0 auto;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

/* @media (max-width: 892px) {
  .inner-container {
    min-width: 892px;
  }
} */

.searchContainer {
  border: 1px solid #33ba53;
  border-radius: 6px;
  width: 346px;
  height: 37px;
}

.searchButton {
  background-color: #33ba53;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border: 1px solid #33ba53;
  width: 90px;
  height: auto;
}

.searchInput {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background-color: #213f6d;
  outline: none;
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

.statusBorder {
  background-color: #eeedf4;
  border-radius: 8px;
  width: auto;
  padding: 8px;
}

.MatchTypeBorder {
  background-color: #f5f5f5;
  border: 1px solid rgba(156, 163, 175, 0.5);
  border-radius: 49px;
}

.schedule_list .schedule_detail .schedule_detail_box>ul {
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
