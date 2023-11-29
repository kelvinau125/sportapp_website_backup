<template>
  <div>HALLO</div>
  <div class="searchInputBox">
    <div class="searchLeftBox">
      <input v-model="searchQuery" @keyup.enter="search" type="text" placeholder="搜索主播/比赛/房间名" maxlength="20" />
    </div>
    <div class="searchIconBox bg-green-500" @click="search">
      <img src="@/assets/topNav/search.png" />
      <span class="word">搜索</span>
    </div>
  </div>
  {{ searchTeamResult[0] }}
  {{ searchTeamResult[1] }}
  长度 {{ searchTeamResult.length }}
  <div>
    <h2>Search searchTeamResult</h2>
    <ul>
      <li v-for="match in searchTeamResult" :key="match.id">
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
import { searchLiveTeamStream, searchLiveCompetitionStream } from '@/service/searchLiveStreamProvider.js'
// import { searchLiveCompetitionStream }from '@/service/searchLiveStreamProvider.js'

export default {
  data() {
    return {
      searchQuery: '',
      searchTeamResult: {},
      searchLiveCompetitionResult: {},
    }
  },
  methods: {
    async search() {
      // console.log('Search query:', this.searchQuery);
      // const teamName = "Shamakhi";
      const searchPages = "1";

      if (this.searchQuery === '') {
        console.log('Search is empty');
      } else {
        this.searchTeamResult = await searchLiveTeamStream(this.searchQuery, searchPages)
        this.searchLiveCompetitionResult = await searchLiveCompetitionStream(this.searchQuery, searchPages)
        // this.searchLiveCompetitionResult = await searchLiveCompetitionStream(this.searchQuery, searchPages)

        // console.log(' ' + this.searchQuery);
        // console.log("THE LIVE TEAM RESULT" + this.searchTeamResult);

        // console.log("THE COMP TEAM RESULT"  + this.searchLiveCompetitionResult);

        this.$router.push({ name: 'ResultPage', query: { searchQuery: this.searchQuery, searchPages: searchPages } });

      }


    }
  }
}


</script>