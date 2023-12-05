<template>
  <div class="backgroundImg">
    <div class="scroll-container">
      <div class="inner-container">
        <!-- Your content here -->
        HALo
      </div>
    </div>
  </div>

  <!-- {{ defendPlayerIndexInt }}
  {{ MiddlePlayerIndexInt }}
  {{ FirstPlayerIndexInt }}
  {{ SSFirstPlayerIndexInt }} -->
  <div class="pr-4 md:flex items-center w-full h-1/2 m-1 justify-between">
    <button class="md:flex cursor-pointer text-xl mr-2.5 items-center md:pl-3" @click="toggleDropdown">
      <img :src="img" class="md:static absolute md:right-0 right-10 md:top-0 bottom-9 hover:bg-blue-950"
        alt="defaultFootBall Image" />
      <img class="md:block hidden pl-1.5 py-1" src="@/assets/topNav/arrowDown.png" alt="Arrow Down">
    </button>
  </div>
  <div>
    <div v-for="i in (defendPlayerIndexInt)" :key="i">
      {{ i }}
    </div>
  </div>

  <div class="" v-for="(smtg, index) in homeFirstAscending" :key="index.homeFirstAscending">
    <div v-if="defendPlayerIndex < teamTotal">
      Halo
    </div>
    <div v-if="MiddlePlayerIndexInt < teamTotal - defendPlayerIndex">
      Second
    </div>
    <div v-if="MiddlePlayerIndexInt < teamTotal - defendPlayerIndex">
      Second
    </div>
  </div>

  <!-- {{ this.homeFormation }} -->
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
import { getFootballLineup } from '@/service/apiFootBallMatchProvider.js';

export default {
  components: {
    TournamentSubstitue,
  },
  data() {
    return {
      homeTeamSubstitute: [],
      awayTeamSubstitute: [],
      homeFirstAscending: [],
      homeFormation: "4-2-3-1",
      defendPlayerIndex: 0,
      MiddlePlayerIndex: 0,
      FirstPlayerIndex: 0,
      SSFirstPlayerIndex: 0,
      teamTotal: 10,

      homePlayer: [
        //FIRST, CAPTAIN, SHIRT NUMBER, POSITION, PLAYERNAME
        { id: 1, playerName: 'Player 1', image: 'defaultProfile', position: '4', shirtNo: 2, captain: 1, first: 1 },
        { id: 2, playerName: 'Player 2', image: 'defaultProfile', position: '10', shirtNo: 2, captain: 1, first: 1 },
        { id: 3, playerName: 'Player 3', image: 'defaultProfile', position: '11', shirtNo: 20, captain: 1, first: 1 },
        { id: 4, playerName: 'Player 4', image: 'defaultProfile', position: '1', shirtNo: 2, captain: 1, first: 1 },
        { id: 5, playerName: 'Player 5', image: 'defaultProfile', position: '8', shirtNo: 2, captain: 1, first: 1 },
        { id: 6, playerName: 'Player 6', image: 'defaultProfile', position: '9', shirtNo: 12, captain: 1, first: 1 },
        { id: 7, playerName: 'Player 7', image: 'defaultProfile', position: '3', shirtNo: 2, captain: 1, first: 1 },
        { id: 8, playerName: 'Player 8', image: 'defaultProfile', position: '6', shirtNo: 2, captain: 1, first: 1 },
        { id: 9, playerName: 'Player 9', image: 'defaultProfile', position: '7', shirtNo: 2, captain: 1, first: 1 },
        { id: 10, playerName: 'Player 10', image: 'defaultProfile', position: '5', shirtNo: 69, captain: 0 },
        { id: 11, playerName: 'Player 11', image: 'defaultProfile', position: '2', shirtNo: 70, captain: 0 },
        { id: 12, playerName: 'Player 11', image: 'defaultProfile', position: '0', shirtNo: 71, captain: 0 },
        { id: 13, playerName: 'Player 11', image: 'defaultProfile', position: '0', shirtNo: 72, captain: 0 },
        { id: 14, playerName: 'Player 11', image: 'defaultProfile', position: '0', shirtNo: 73, captain: 0 },
        { id: 15, playerName: 'Player 11', image: 'defaultProfile', position: '0', shirtNo: 74, captain: 0 },
        { id: 16, playerName: 'Player 11', image: 'defaultProfile', position: '0', shirtNo: 75, captain: 0 },
        { id: 17, playerName: 'Player 11', image: 'defaultProfile', position: '0', shirtNo: 76, captain: 0 },
        { id: 18, playerName: 'Player 11', image: 'defaultProfile', position: '0', shirtNo: 77, captain: 0 },

      ],
      awayPlayer: [
        { id: 1, playerName: 'Player 11', image: 'defaultProfile', position: 'S', shirtNo: 2, captain: 1, first: 1 },
        { id: 2, playerName: 'Player 13', image: 'defaultProfile', position: 'F', shirtNo: 2, captain: 1, first: 1 },
        { id: 3, playerName: 'Player 14', image: 'defaultProfile', position: 'F', shirtNo: 2, captain: 1, first: 1 },
        { id: 4, playerName: 'Player 15', image: 'defaultProfile', position: 'F', shirtNo: 2, captain: 1, first: 1 },
        { id: 5, playerName: 'Player 16', image: 'defaultProfile', position: 'M', shirtNo: 2, captain: 1, first: 1 },
        { id: 6, playerName: 'Player 17', image: 'defaultProfile', position: 'M', shirtNo: 2, captain: 1, first: 1 },
        { id: 7, playerName: 'Player 16', image: 'defaultProfile', position: 'D', shirtNo: 2, captain: 1, first: 1 },
        { id: 8, playerName: 'Player 17', image: 'defaultProfile', position: 'D', shirtNo: 2, captain: 1, first: 1 },
        { id: 9, playerName: 'Player 18', image: 'defaultProfile', position: 'D', shirtNo: 2, captain: 1, first: 1 },
        { id: 10, playerName: 'Player 19', image: 'defaultProfile', position: 'D', shirtNo: 2, captain: 1, first: 1 },
        { id: 11, playerName: 'Player 20', image: 'defaultProfile', position: 'G', shirtNo: 2, captain: 1, first: 1 },
        { id: 12, playerName: 'Player 21', image: 'defaultProfile', position: '0', shirtNo: 71, captain: 0 },
        { id: 13, playerName: 'Player 22', image: 'defaultProfile', position: '0', shirtNo: 72, captain: 0 },
        { id: 14, playerName: 'Player 23', image: 'defaultProfile', position: '0', shirtNo: 73, captain: 0 },
        { id: 15, playerName: 'Player 24', image: 'defaultProfile', position: '0', shirtNo: 74, captain: 0 },
        { id: 16, playerName: 'Player 25', image: 'defaultProfile', position: '0', shirtNo: 75, captain: 0 },
        { id: 17, playerName: 'Player 26', image: 'defaultProfile', position: '0', shirtNo: 76, captain: 0 },
        { id: 18, playerName: 'Player 27', image: 'defaultProfile', position: '0', shirtNo: 77, captain: 0 },

      ]
    }
  },
  created() {
    this.getResult()
  },

  methods: {
    async getResult() {
      this.getTournamentLineup = await getFootballLineup(1187648, false);
      console.log("HALLO" + this.getTournamentLineup)

      this.homeTeamSubstitute = this.getTournamentLineup['homeMatchLineUpList'];
      this.awayTeamSubstitute = this.getTournamentLineup['awayMatchLineList'];

      console.log(this.homeTeamSubstitute)
      console.log("AWAY" + this.awayTeamSubstitute)

      this.homeFirstAscending = this.homePlayer
        .filter(player => player.position !== "0") // Exclude players with position 0
        .sort((a, b) => a.position - b.position);

      console.log(this.homeFirstAscending);

      const parts = this.homeFormation.split("-");
      this.defendPlayerIndex = parts[0]
      this.MiddlePlayerIndex = parts[1]
      this.FirstPlayerIndex = parts[2]
      this.SSFirstPlayerIndex = parts[3]

      console.log(this.defendPlayerIndex);
      console.log(this.MiddlePlayerIndex);
      console.log(this.FirstPlayerIndex);
      console.log(this.SSFirstPlayerIndex);

    },

  },

  computed: {
    filteredHomePlayers() {
      // return (position) => this.homeMatchLineUpList.filter(player => player.position === position && player.first === 1);
      return (position) => this.homeMatchLineUpList.sort(player => player.id === position);
    },
    filteredAwayPlayers() {
      return (position) => this.awayMatchLineList.filter(player => player.position === position && player.first === 1);
    },
    hasHomeSPlayers() {
      return this.homeMatchLineUpList.some(player => player.position === 'S');
    },
    hasAwaySPlayers() {
      return this.awayMatchLineList.some(player => player.position === 'S');
    },
    defendPlayerIndexInt() {
      return parseInt(this.defendPlayerIndex);
    },
    MiddlePlayerIndexInt() {
      return parseInt(this.MiddlePlayerIndex);
    },
    FirstPlayerIndexInt() {
      return parseInt(this.FirstPlayerIndex);
    },
    SSFirstPlayerIndexInt() {
      return parseInt(this.SSFirstPlayerIndex);
    },


  }

}
</script>

<style>
.backgroundImg {
  width: 100%;
  height: 647px;
  display: flex;
  align-items: center;
  background-image: url('@/assets/main/background_2.png');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  /* Hide overflow */
}

.scroll-container {
  width: 100%;
  overflow-x: auto;
  /* Enable horizontal scrolling */
}

.inner-container {
  border: 2px solid red;
  max-width: 892px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  padding: 20px;
  margin: 0 auto;
  /* Center the inner container */
}

@media (max-width: 892px) {
  .backgroundImg .inner-container {
    min-width: 892px;
    /* Set a minimum width to stop shrinking */
  }
}
</style>

