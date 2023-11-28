// ResultPage.vue
<template>
  <div>
    <h2>Search Results</h2>
    <p>Search Query: {{ searchQuery }}</p>
    <p>Search Query: {{ searchPages }}</p>
    <!-- 其他展示搜索结果的内容 -->
  </div>

  <div class="searchInputBox">
    <div class="searchLeftBox">
      <input v-model="searchQuery" @keyup.enter="search" type="text" placeholder="搜索主播/比赛/房间名" maxlength="20" />
    </div>
    <div class="searchIconBox bg-green-500" @click="search">
      <img src="@/assets/topNav/search.png" />
      <span class="word">搜索</span>
    </div>
  </div>
  <BackgroundImage>
    <div class="schedule_list">
      <div class="schedule_detail" style="width:  ; height: 108px;">
        <div class="schedule_detail_box">
          <ul v-for="match in results" :key="match.results">
            <li @click="toAllMatchPage" class="max-w-full h-52 bg-white">
              <div class="conten_box ">
                <div class="flex justify-between ">
                  <div class="flex items-center">
                    <div class="pr-2">
                      <img src="@/assets/favourite/smtg.png" />
                    </div>
                    <div class="border flex justify-center">
                      <span class="text-xs font-medium" style="color: #666666;">{{ match.competitionName}}</span>
                    </div>
                  </div>
                  <div>
                    <button @click.stop="toggleFavorite(match)" :class="{ fav: match.favorite }">
                      <img v-if="match.favorite" src="@/assets/content/Unfavourite.png" alt="Unfavourite" />
                      <img v-else src="@/assets/content/Favourite.png" alt="Favourite" />
                    </button>
                  </div>
                </div>
                <div class="flex justify-between ">
                  <div class="flex items-end">
                    <div class="pr-2 font-medium text-xs text-grayText">
                      <span>{{ match.matchDate }}</span>
                    </div>
                    <div class="font-semibold text-xs " style="color: #333333;">
                      <span>{{ match.matchTimeStr }}</span>
                    </div>
                  </div>
                  <div class="flex bg-green-50" style="width: 650px;" >
                    <div class="flex justify-between items-center w-full">
                      <div class="">
                        <span class="text-lg font-semibold">{{ match.homeTeamName }}</span>
                      </div>
                      <div class="">
                        <img src="@/assets/favourite/favTeamIcon.png" />
                      </div>
                    </div>
                    <div class="flex flex-col px-5 items-center bg-red-100 w-1/2"  >
                      <div class="font-semibold text-2xl px-2">
                        <span>{{ match.homeTeamScore }}</span>
                        <span class="px-2">-</span>
                        <span>{{ match.awayTeamScore }}</span>
                      </div>
                    </div>
                    <div class="flex items-center justify-start bg-green-50 w-full">
                      <div>
                        <img src="@/assets/favourite/favTeamIcon.png" />
                      </div>
                      <div class="pl-3">
                        <span class="text-lg font-semibold">{{ match.awayTeamName }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="pt-2 ">
                    <img src="@/assets/favourite/ended.png" />
                  </div>
                </div>
              </div>

            </li>
          </ul>
        </div>
      </div>

    </div>
  </BackgroundImage>
  {{ results }}

  <!-- <div>
    {{ results }}
    <h2>Search Results</h2>
    homeTeamName, awayTeamName, homeTeamScore, awayTeamScore, matchTime/matchTimeStr, competitionName
    homeTeamLogo, awayTeamLogo
    <ul>
      <li v-for="match in results" :key="match.id">
        <div>
          <h3>Match ID: {{ match.id }}</h3>
          <p>Competition: {{ match.competitionName }}</p>
          <p>Home Team: {{ match.homeTeamName }}</p>
          <p>Away Team: {{ match.awayTeamName }}</p>
          <p>homeTeamScore: {{ match.homeTeamScore }}</p>
          <p>awayTeamScore: {{ match.awayTeamScore }}</p>
          <p>matchTimeStr: {{ match.matchTimeStr }}</p>
          <p>competitionName: {{ match.competitionName }}</p>
          <img :src="match.homeTeamLogo">
          <img :src="match.awayTeamLogo">
        </div>
      </li>
    </ul>
  </div> -->
</template>

<script>
import { searchLiveCompetitionStream } from '@/service/searchLiveStreamProvider.js'
import BackgroundImage from '@/components/BackGround.vue'

export default {
  components: {
    BackgroundImage
  },
  data() {
    return {
      searchQuery: this.$route.query.searchQuery,
      searchPages: this.$route.query.searchPages,
      results: {},
    };
  },
  created() {
    this.getResult()
  },
  methods: {
    async getResult() {
      this.results = await searchLiveCompetitionStream(this.searchQuery, this.searchPages)
      console.log("NEW THIS RESULT" + this.results);

    },
    async search() {
      // console.log('Search query:', this.searchQuery);
      // const matchName = "Shamakhi";
      const searchPages = "1";

      if (this.searchQuery === '') {
        console.log('Search is empty');
        this.results = {};
      } else {
        this.results = await searchLiveCompetitionStream(this.searchQuery, searchPages)

        console.log(' ' + this.searchQuery);
        console.log("THIS RESULT" + this.results);

        this.$router.push({ name: 'ResultPage', query: { searchQuery: this.searchQuery, searchPages: searchPages } });

      }
    },
    toggleFavorite(results) {
      results.favorite = !results.favorite;
    },
  }
};
</script>


<style scoped>
.tournamentList {
  width: 50%;
  max-width: 960px;


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

