<template>
  <div class="searchInputBox">
    <div class="searchLeftBox">
      <input v-model="searchQuery" @keyup.enter="search" type="text" placeholder="搜索主播/比赛/房间名" maxlength="20" />
    </div>
    <div class="searchIconBox bg-green-500" @click="search">
      <img src="@/assets/topNav/search.png" />
      <span class="word">搜索</span>
    </div>
  </div>
  {{ results[0] }}
  {{ results[1] }}
  长度 {{ results.length }}
  <div>
    <h2>Search Results</h2>
    <ul>
      <li v-for="match in results" :key="match.id">
        <div>
          <h3>Match ID: {{ match.id }}</h3>
          <p>Competition: {{ match.competitionName }}</p>
          <p>Home Team: {{ match.homeTeamName }}</p>
          <p>Away Team: {{ match.awayTeamName }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { searchLiveCompetitionStream } from '@/service/searchLiveStreamProvider.js'

export default {
  data() {
    return {
      searchQuery: '',
      results: {},
    }
  },
  methods: {
    async search() {
      // console.log('Search query:', this.searchQuery);
      // const matchName = "Shamakhi";
      const searchPages = "1";

      if (this.searchQuery === '') {
        console.log('Search is empty');
      } else {
        this.results = await searchLiveCompetitionStream(this.searchQuery, searchPages)

        console.log(' ' + this.searchQuery);
        console.log("THIS RESULT" + this.results);
          
        this.$router.push({ name: 'ResultPage', query: { searchQuery: this.searchQuery,searchPages:searchPages } });

      }


    }
  }
}


</script>