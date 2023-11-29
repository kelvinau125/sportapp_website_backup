<template>
  <!-- <div class="searchInputBox">
    <div class="searchLeftBox">
      <input v-model="searchQuery" @keyup.enter="search" type="text" placeholder="搜索主播/比赛/房间名" maxlength="20" />
    </div>
    <div class="searchIconBox bg-green-500" @click="search">
      <img src="@/assets/topNav/search.png" />
      <span class="word">搜索</span>
    </div>
  </div> -->
  <TournamentSubstitue />

  <div v-for="smtg in homeTeamSubstitute" :key="smtg.homeTeamSubstitute">
    {{ smtg.playerName }}
  </div>
</template>

<script>
import TournamentSubstitue from '@/views/Tournament/TournamentSubstitue.vue';
import { getFootballLineup } from '@/service/apiFootBallMatchProvder.js';

export default {
  components: {
    TournamentSubstitue,
  },
  data() {
    return {
      homeTeamSubstitute: [],
      awayTeamSubstitute: [],
    }
  },
  created(){
    this.getResult()

  },
  methods: {
    async getResult() {
      this.getTournamentLineup = await getFootballLineup(1187648, false);
      console.log("HALLO" + this.getTournamentLineup)

      this.homeTeamSubstitute = this.getTournamentLineup['homeMatchLineUpList'];
      this.awayTeamSubstitute = this.getTournamentLineup['awayMatchLineList'];

      console.log("HOME" + this.homeTeamSubstitute)
      console.log("AWAY" + this.awayTeamSubstitute)

    },
  },

}


</script>