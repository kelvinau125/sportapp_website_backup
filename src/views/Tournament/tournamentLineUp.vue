<template>
  <!-- {{ filteredHomePlayers('G').length }} -->

  <div class="flex justify-start">
    <div class="overflow-hidden">
      <div class="soccer-field flex">

        <!-- Home Players -->
        <div class="w-1/2 h-full flex justify-between">
          <!-- IF G PASS HERE -->
          <div class="w-full flex flex-col justify-around">
            <div v-for="player in filteredHomePlayers('G')" :key="player.id" class="">
              <div class="flex flex-col items-center">
                <div class="homeKeeperCircle relative flex justify-center items-center">
                  <div>
                    <p class="text-white text-sm font-normal"> {{ isCN ? player.shirtNumber : player.shirtNo }}</p>
                  </div>
                  <div v-if="player.captain === 1" class="CaptainCircle ">
                    <span class="mb-[1px] mr-[0.5px] text-[8px]">c</span>
                  </div>

                </div>
                <p>{{ player.playerName }}</p>
              </div>
            </div>
          </div>
          <!-- IF D PASS HERE -->
          <div class="w-full flex flex-col justify-around">
            <div v-for="player in filteredHomePlayers('D')" :key="player.id" class="">
              <div class="flex flex-col items-center">
                <div class="homeCircle relative flex justify-center items-center">
                  <div>
                    <p class="text-white text-sm font-normal"> {{ isCN ? player.shirtNumber : player.shirtNo }}</p>
                  </div>
<div v-if="player.captain === 1" class="CaptainCircle ">
                    <span class="mb-[1px] mr-[0.5px] text-[8px]">c</span>
                  </div>
                </div>
                <p>{{ player.playerName }}</p>
              </div>
            </div>
          </div>
          <!-- IF M PASS HERE -->
          <div class="w-full flex flex-col justify-around">
            <div v-for="player in filteredHomePlayers('M')" :key="player.id" class="">
              <div class="flex flex-col items-center">
                <div class="homeCircle relative flex justify-center items-center">
                  <div>
                    <p class="text-white text-sm font-normal"> {{ isCN ? player.shirtNumber : player.shirtNo }}</p>
                  </div>
<div v-if="player.captain === 1" class="CaptainCircle ">
                    <span class="mb-[1px] mr-[0.5px] text-[8px]">c</span>
                  </div>
                </div>
                <p>{{ player.playerName }}</p>
              </div>
            </div>
          </div>
          <!-- IF F PASS HERE -->
          <div class="w-full flex flex-col justify-around">
            <div v-for="player in filteredHomePlayers('F')" :key="player.id" class="">
              <div class="flex flex-col items-center">
                <div class="homeCircle relative flex justify-center items-center">
                  <div>
                    <p class="text-white text-sm font-normal"> {{ isCN ? player.shirtNumber : player.shirtNo }}</p>
                  </div>
<div v-if="player.captain === 1" class="CaptainCircle ">
                    <span class="mb-[1px] mr-[0.5px] text-[8px]">c</span>
                  </div>
                </div>
                <p>{{ player.playerName }}</p>
              </div>
            </div>
            <div class="absolute bottom-0 left-[275px]">
              <div class="flex pb-2">
                <div class="pr-1">
                  <span v-show="isCN" class="pl-2.5 pr-1 pt-1.5 text-xs font-normal text-white">{{
                    filteredHomePlayers('D').length + "-" +
                    filteredHomePlayers('M').length + "-" + filteredHomePlayers('F').length + "-" +
                    filteredHomePlayers('S').length }}</span>
                  <span v-show="!isCN" class="pl-2.5 pt-1.5 text-xs font-normal text-white">{{
                    homeTeamFormation }}</span>
                </div>
                <img class="" style="width: 24px; height: 24px;" :src="homeTeamLogo" />
              </div>
            </div>
          </div>
          <!-- IF有S 的球员 -->
          <div class="w-full flex flex-col justify-around" v-if="hasHomeSPlayers">
            <div v-for="player in filteredHomePlayers('S')" :key="player.id" class="">
              <div class="flex flex-col items-center">
                <div class="homeCircle relative flex justify-center items-center">
                  <!-- <img class="" src="@/assets/tournament/playerIcon.png" /> -->
                  <div>
                    <p class="text-white text-sm font-normal"> {{ isCN ? player.shirtNumber : player.shirtNo }}</p>
                  </div>
<div v-if="player.captain === 1" class="CaptainCircle ">
                    <span class="mb-[1px] mr-[0.5px] text-[8px]">c</span>
                  </div>
                </div>
                <p>{{ player.playerName }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- AWAY TEAM -->
        <div class="w-1/2 h-full flex justify-between">
          <!-- IF有S 的球员 -->
          <div class="w-full flex flex-col justify-around" v-if="hasAwaySPlayers">
            <div v-for="player in filteredAwayPlayers('S')" :key="player.id" class="">
              <div class="flex flex-col items-center">
                <div class="awayCircle relative flex justify-center items-center">
                  <div>
                    <p class="text-white text-sm font-normal"> {{ isCN ? player.shirtNumber : player.shirtNo }}</p>
                  </div>
<div v-if="player.captain === 1" class="CaptainCircle ">
                    <span class="mb-[1px] mr-[0.5px] text-[8px]">c</span>
                  </div>
                </div>
                <p>{{ player.playerName }}</p>
              </div>
            </div>
          </div>
          <div class="w-full flex flex-col justify-around">
            <div v-for="player in filteredAwayPlayers('F')" :key="player.id" class="">
              <div class="flex flex-col items-center">
                <div class="awayCircle relative flex justify-center items-center">
                  <!-- <img class="" src="@/assets/tournament/playerIcon.png" /> -->
                  <div>
                    <p class="text-white text-sm font-normal"> {{ isCN ? player.shirtNumber : player.shirtNo }}</p>
                  </div>
<div v-if="player.captain === 1" class="CaptainCircle ">
                    <span class="mb-[1px] mr-[0.5px] text-[8px]">c</span>
                  </div>
                </div>
                <p>{{ player.playerName }}</p>
              </div>
            </div>

            <div class="absolute bottom-1" style="left: 372px; ">
              <div class="flex pb-1">
                <img class="" style="width: 24px; height: 24px;" :src=awayTeamLogo />
                <div>
                  <span v-show="isCN" class="pl-1.5 pr-2 pt-1 text-xs font-normal text-white">{{
                    filteredAwayPlayers('D').length + "-" +
                    filteredAwayPlayers('M').length + "-" + filteredAwayPlayers('F').length + "-" +
                    filteredAwayPlayers('S').length }}</span>
                  <span v-show="!isCN" class="pl-1.5 pr-2 pt-1 text-xs font-normal text-white">{{
                    awayTeamFormation }}</span>
                </div>
              </div>
            </div>

          </div>
          <div class="w-full flex flex-col justify-around">
            <div v-for="player in filteredAwayPlayers('M')" :key="player.id" class="">
              <div class="flex flex-col items-center">
                <div class="awayCircle relative flex justify-center items-center">
                  <!-- <img class="" src="@/assets/tournament/playerIcon.png" /> -->
                  <div>
                    <p class="text-white text-sm font-normal"> {{ isCN ? player.shirtNumber : player.shirtNo }}</p>
                  </div>
<div v-if="player.captain === 1" class="CaptainCircle ">
                    <span class="mb-[1px] mr-[0.5px] text-[8px]">c</span>
                  </div>
                </div>
                <p>{{ player.playerName }}</p>
              </div>
            </div>
          </div>
          <div class="w-full flex flex-col justify-around">
            <div v-for="player in filteredAwayPlayers('D')" :key="player.id" class="">
              <div class="flex flex-col items-center">
                <div class="awayCircle relative flex justify-center items-center">
                  <!-- <img class="" src="@/assets/tournament/playerIcon.png" /> -->
                  <div>
                    <p class="text-white text-sm font-normal"> {{ isCN ? player.shirtNumber : player.shirtNo }}</p>
                  </div>
<div v-if="player.captain === 1" class="CaptainCircle ">
                    <span class="mb-[1px] mr-[0.5px] text-[8px]">c</span>
                  </div>
                </div>
                <p>{{ player.playerName }}</p>
              </div>
            </div>
          </div>
          <div class="w-full flex flex-col justify-around">
            <div v-for="player in filteredAwayPlayers('G')" :key="player.id" class="">
              <div class="flex flex-col items-center">
                <div class="awayKeeperCircle relative flex justify-center items-center">
                  <!-- <img class="" src="@/assets/tournament/playerIcon.png" /> -->
                  <div>
                    <p class="text-white text-sm font-normal"> {{ isCN ? player.shirtNumber : player.shirtNo }}</p>
                  </div>
<div v-if="player.captain === 1" class="CaptainCircle ">
                    <span class="mb-[1px] mr-[0.5px] text-[8px]">c</span>
                  </div>
                </div>
                <p>{{ player.playerName }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { getFootballLineup } from '@/service/apiFootBallMatchProvider.js';

export default {
  props: {
    tournamentID: String,
    homeTeamLogo: String,
    awayTeamLogo: String,
  },

  async mounted() {
    this.isCN = false;
    this.getTournamentLineup = await getFootballLineup(1253806, false);
    // this.getTournamentLineup = await getFootballLineup(5, true);

    console.log(this.getTournamentLineup)

    this.homeMatchLineUpList = this.getTournamentLineup['homeMatchLineUpList'];
    this.awayMatchLineList = this.getTournamentLineup['awayMatchLineList'];

    console.log(this.homePlayer)

    this.generateLists();
    if (this.homeMatchLineUpList !== null) {
      let lineupList = [...this.homeMatchLineUpList];

      this.processPlayerPosition(lineupList, this.F_list, this.F_captain, this.F_shirtNumber, this.F_playerName);
      this.processPlayerPosition(lineupList, this.M_list, this.M_captain, this.M_shirtNumber, this.M_playerName);
      this.processPlayerPosition(lineupList, this.G_list, this.G_captain, this.G_shirtNumber, this.G_playerName);
      this.processPlayerPosition(lineupList, this.D_list, this.D_captain, this.D_shirtNumber, this.D_playerName);
      this.processPlayerPosition(lineupList, this.S_list, this.S_captain, this.S_shirtNumber, this.S_playerName);
    }

    if (this.awayMatchLineList !== null) {
      let lineupList = [...this.awayMatchLineList];

      this.processPlayerPosition(lineupList, this.AF_list, this.AF_captain, this.AF_shirtNumber, this.AF_playerName);
      this.processPlayerPosition(lineupList, this.AM_list, this.AM_captain, this.AM_shirtNumber, this.AM_playerName);
      this.processPlayerPosition(lineupList, this.AG_list, this.AG_captain, this.AG_shirtNumber, this.AG_playerName);
      this.processPlayerPosition(lineupList, this.AD_list, this.AD_captain, this.AD_shirtNumber, this.AD_playerName);
      this.processPlayerPosition(lineupList, this.AS_list, this.AS_captain, this.AS_shirtNumber, this.AS_playerName);
    }


    const populateHomePlayer = (position, positionArray, shirtNo, playerName, captain) => {
      for (let i = 0; i < positionArray.length; i++) {
        this.homePlayer.push({
          id: this.homePlayer.length + 1,
          playerName: playerName[i],
          image: 'defaultProfile',
          position: position,
          shirtNo: shirtNo[i],
          captain: captain[i],
          first: positionArray[i].first,
        });
      }
    };

    const ApopulateHomePlayer = (position, positionArray, shirtNo, playerName, captain) => {
      for (let i = 0; i < positionArray.length; i++) {
        this.awayPlayer.push({
          id: this.awayPlayer.length + 1,
          playerName: playerName[i],
          image: 'defaultProfile',
          position: position,
          shirtNo: shirtNo[i],
          captain: captain[i],
          first: positionArray[i].first,
        });
      }
    };

    populateHomePlayer('F', this.F_list, this.F_shirtNumber, this.F_playerName, this.F_captain);
    populateHomePlayer('M', this.M_list, this.M_shirtNumber, this.M_playerName, this.M_captain);
    populateHomePlayer('G', this.G_list, this.G_shirtNumber, this.G_playerName, this.G_captain);
    populateHomePlayer('D', this.D_list, this.D_shirtNumber, this.D_playerName, this.D_captain);
    populateHomePlayer('S', this.S_list, this.S_shirtNumber, this.S_playerName, this.S_captain);

    ApopulateHomePlayer('F', this.AF_list, this.AF_shirtNumber, this.AF_playerName, this.AF_captain);
    ApopulateHomePlayer('M', this.AM_list, this.AM_shirtNumber, this.AM_playerName, this.AM_captain);
    ApopulateHomePlayer('G', this.AG_list, this.AG_shirtNumber, this.AG_playerName, this.AG_captain);
    ApopulateHomePlayer('D', this.AD_list, this.AD_shirtNumber, this.AD_playerName, this.AD_captain);
    ApopulateHomePlayer('S', this.AS_list, this.AS_shirtNumber, this.AS_playerName, this.AS_captain);

  },

  data() {
    return {
      isCN: Boolean,
      getTournamentLineup: {},
      // Esnglish version
      // Home Team List 
      F_list: [],
      M_list: [],
      G_list: [],
      D_list: [],
      S_list: [],
      homeTeamFormation: "4-2-3-1",

      homeMatchLineUpList: [],

      F_shirtNumber: [],
      F_playerName: [],
      F_captain: [],

      M_shirtNumber: [],
      M_playerName: [],
      M_captain: [],

      G_shirtNumber: [],
      G_playerName: [],
      G_captain: [],

      D_shirtNumber: [],
      D_playerName: [],
      D_captain: [],

      S_shirtNumber: [],
      S_playerName: [],
      S_captain: [],

      homePlayer: [],

      // english version
      // away
      AF_list: [],
      AM_list: [],
      AG_list: [],
      AD_list: [],
      AS_list: [],
      awayTeamFormation: "4-3-3",

      awayMatchLineList: [],

      AF_shirtNumber: [],
      AF_playerName: [],
      AF_captain: [],

      AM_shirtNumber: [],
      AM_playerName: [],
      AM_captain: [],

      AG_shirtNumber: [],
      AG_playerName: [],
      AG_captain: [],

      AD_shirtNumber: [],
      AD_playerName: [],
      AD_captain: [],

      AS_shirtNumber: [],
      AS_playerName: [],
      AS_captain: [],

      awayPlayer: [],

      // homePlayer: [
      //   //FIRST, CAPTAIN, SHIRT NUMBER, POSITION, PLAYERNAME
      //   { id: 1, playerName: 'Player 1', image: 'defaultProfile', position: 'D', shirtNo: 2, captain: 1, first: 1 },
      //   { id: 2, playerName: 'Player 2', image: 'defaultProfile', position: 'G', shirtNo: 2, captain: 1, first: 1 },
      //   { id: 3, playerName: 'Player 3', image: 'defaultProfile', position: 'D', shirtNo: 20, captain: 1, first: 1 },
      //   { id: 4, playerName: 'Player 4', image: 'defaultProfile', position: 'D', shirtNo: 2, captain: 1, first: 1 },
      //   { id: 5, playerName: 'Player 5', image: 'defaultProfile', position: 'M', shirtNo: 2, captain: 1, first: 1 },
      //   { id: 6, playerName: 'Player 6', image: 'defaultProfile', position: 'M', shirtNo: 12, captain: 1, first: 1 },
      //   { id: 7, playerName: 'Player 7', image: 'defaultProfile', position: 'M', shirtNo: 2, captain: 1, first: 1 },
      //   { id: 8, playerName: 'Player 8', image: 'defaultProfile', position: 'M', shirtNo: 2, captain: 1, first: 1 },
      //   { id: 9, playerName: 'Player 9', image: 'defaultProfile', position: 'M', shirtNo: 2, captain: 1, first: 1 },
      //   { id: 10, playerName: 'Player 10', image: 'defaultProfile', position: 'F', shirtNo: 2, captain: 1, first: 1 },
      //   { id: 11, playerName: 'Player 11', image: 'defaultProfile', position: 'F', shirtNo: 2, captain: 1, first: 1 },

      // ],
      // awayPlayer: [
      //   { id: 1, playerName: 'Player 11', image: 'defaultProfile', position: 'S', shirtNo: 2, captain: 1, first: 1 },
      //   { id: 2, playerName: 'Player 13', image: 'defaultProfile', position:'F', shirtNo: 2, captain: 1, first: 1 },
      //   { id: 3, playerName: 'Player 14', image: 'defaultProfile', position:'F', shirtNo: 2, captain: 1, first: 1 },
      //   { id: 4, playerName: 'Player 15', image: 'defaultProfile', position:'F', shirtNo: 2, captain: 1, first: 1 },
      //   { id: 5, playerName: 'Player 16', image: 'defaultProfile', position:'M', shirtNo: 2, captain: 1, first: 1 },
      //   { id: 6, playerName: 'Player 17', image: 'defaultProfile', position:'M', shirtNo: 2, captain: 1, first: 1 },
      //   { id: 7, playerName: 'Player 16', image: 'defaultProfile', position:'D', shirtNo: 2, captain: 1, first: 1 },
      //   { id: 8, playerName: 'Player 17', image: 'defaultProfile', position:'D', shirtNo: 2, captain: 1, first: 1 },
      //   { id: 9, playerName: 'Player 18', image: 'defaultProfile', position:'D', shirtNo: 2, captain: 1, first: 1 },
      //   { id: 10, playerName: 'Player 19', image: 'defaultProfile', position:'D', shirtNo: 2, captain: 1, first: 1  },
      //   { id: 11, playerName: 'Player', image: 'defaultProfile', position:  'G', shirtNo: 2, captain: 1, first: 1 },
      // ]
    };
  },

  methods: {
    generateNumberList(start, end) {
      const numbersList = [];
      for (let i = start; i <= end; i++) {
        numbersList.push(i);
      }
      return numbersList;
    },
    generateLists() {
      const parts = this.homeTeamFormation.split("-");
      let F = 0,
        M = 0,
        D = 0,
        S = 0;

      if (parts.length >= 1) {
        F = parseInt(parts[0]) || 0;
      }
      if (parts.length >= 2) {
        M = parseInt(parts[1]) || 0;
      }
      if (parts.length >= 3) {
        D = parseInt(parts[2]) || 0;
      }
      if (parts.length >= 4) {
        S = parseInt(parts[3]) || 0;
      }

      this.F_list = this.generateNumberList(F + M + 2, F + M + D + 1);
      this.M_list = this.generateNumberList(F + 2, F + M + 1);
      this.D_list = this.generateNumberList(2, F + 1);
      this.S_list = this.generateNumberList(F + M + D + 2, F + M + D + S + 1);

      // console.log("first:", this.F_list);
      // console.log("second:", this.M_list);
      // console.log("third:", this.D_list);
      // console.log("fourth:", this.S_list);

      this.G_list = [1];

      const Aparts = this.awayTeamFormation.split("-");
      let AF = 0,
        AM = 0,
        AD = 0,
        AS = 0;

      if (Aparts.length >= 1) {
        AF = parseInt(Aparts[0]) || 0;
      }
      if (Aparts.length >= 2) {
        AM = parseInt(Aparts[1]) || 0;
      }
      if (Aparts.length >= 3) {
        AD = parseInt(Aparts[2]) || 0;
      }
      if (Aparts.length >= 4) {
        AS = parseInt(Aparts[3]) || 0;
      }

      this.AF_list = this.generateNumberList(AF + AM + 2, AF + AM + AD + 1);
      this.AM_list = this.generateNumberList(AF + 2, AF + AM + 1);
      this.AD_list = this.generateNumberList(2, AF + 1);
      this.AS_list = this.generateNumberList(AF + AM + AD + 2, AF + AM + AD + AS + 1);

      // console.log("first:", this.AF_list);
      // console.log("second:", this.AM_list);
      // console.log("third:", this.AD_list);
      // console.log("fourth:", this.AS_list);

      this.AG_list = [1];
    },
    processPlayerPosition(playerList, positionList, captainList, shirtNumberList, playerNameList) {
      for (let player of playerList) {
        let position = player['position'];
        let first = player['first'];
        let captain = player['captain'];

        if (positionList.includes(position) && first === 1) {
          let id = player['shirtNumber'];
          let fullName = player['playerName'];

          // console.log("hello-------------------", positionList);

          let nameParts = fullName.split(/[ ·]/);
          let name = nameParts.length ? nameParts[nameParts.length - 1].trim() : fullName;

          captainList.push(captain);
          shirtNumberList.push(id.toString());
          playerNameList.push(name);
        }
      }
    },
  },


  computed: {
    filteredHomePlayers() {
      if (this.isCN) {
        return (position) => this.homeMatchLineUpList.filter(player => player.position === position && player.first === 1);
      } else {
        return (position) => this.homePlayer.filter(player => player.position === position);

      }
    },
    filteredAwayPlayers() {
      if (this.isCN) {
        return (position) => this.awayMatchLineList.filter(player => player.position === position && player.first === 1);
      } else {
        return (position) => this.awayPlayer.filter(player => player.position === position);

      }
    },
    hasHomeSPlayers() {
      if (this.isCN) {
        return this.homeMatchLineUpList.some(player => player.position === 'S');

      } else {
        return this.homePlayer.some(player => player.position === 'S');
      }
    },
    hasAwaySPlayers() {
      if (this.isCN) {
        return this.awayMatchLineList.some(player => player.position === 'S');
      } else {
        return this.awayPlayer.some(player => player.position === 'S');

      }
    },

  }
};
</script>


<style scoped>
.soccer-field {
  position: relative;
  width: 728px;
  height: 343px;
  background-size: contain;
  background: url('@/assets/tournament/football_court.png') center/cover;
}

.player {
  position: absolute;
  transform: translate(-50%, -50%);
  text-align: center;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.player-name {
  display: block;
  margin-top: 5px;
  font-size: 12px;
  font-weight: 400;
}

.homeCircle {
  width: 28px;
  height: 28px;
  background-color: #1168B9;
  /* Set the background color */
  border-radius: 50%;
  /* Make it a circle by setting border-radius to 50% */
  border: 2px solid black;
}

.awayCircle {
  width: 28px;
  height: 28px;
  background-color: #D043D3;
  /* Set the background color */
  border-radius: 50%;
  /* Make it a circle by setting border-radius to 50% */
  border: 2px solid black;
}

.homeKeeperCircle {
  width: 28px;
  height: 28px;
  background-color: #FC6A28;
  /* Set the background color */
  border-radius: 50%;
  /* Make it a circle by setting border-radius to 50% */
  border: 2px solid black;
}

.awayKeeperCircle {
  width: 28px;
  height: 28px;
  background-color: #FFC42B;
  /* Set the background color */
  border-radius: 50%;
  /* Make it a circle by setting border-radius to 50% */
  border: 2px solid black;
}

.CaptainCircle {
  position: absolute;
  left: -2px;
  bottom: -3px;
  width: 10px; 
  height: 10px; 
  background-color: yellow; 
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black; 
}


</style>
