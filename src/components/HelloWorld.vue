<template>
  <div class="scroll-container">
    <div class="inner-container ">
      <div class="max-w-[1519px]  flex justify-between pt-1.5">
        <div class="max-w-[1037px] w-full  h-[586px]  ">
          <div @click="toLiveStream" class="relative  rounded-lg">
            <div class="">
              <img class="w-full h-full" src="@/assets/live/liveStreamBackground.png" alt="Image" />
            </div>
            <div class="w-full flex titleBox items-center pt-4 pl-2 pb-2">
              <div class="pr-1 pl-3 z-10 pb-1.5">
                <img src="@/assets/live/defaultStreamerIcon.png" alt="Image" />
              </div>
              <div class=" flex flex-col pl-1 z-10 items-start pb-1.5">
                <div class="text-white font-normal md:text-sm text-xs"> 直播标题 </div>
                <div class="md:text-10px text-8px font-bold text-white opacity-60">主播昵称</div>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-[463px] w-full border-2">聊天窗口</div>

      </div>

    </div>
  </div>
  <div class="flex justify-center">
    <div class="flex flex-col max-w-[1519px] w-full">
      <span class="text-lg font-semibold pl-7 pt-3 pb-1">其他直播推荐</span>
      <main class="live_wrapper border-2">
        <div class="card-container flex justify-start pb-12">
          <div class="card h-44 py-2 px-1 relative md:w-1/2 lg: w-1/3 xl:w-1/4"
            v-for="(livedata, index) in liveData.slice(0, 10)" :key="index">

            <div @click="toLiveStream" class="card-body relative">
              <img class="rounded-lg" :src="require(`@/assets/live/${livedata.image}.png`)" alt="Image" />
              <!-- <img src="@/assets/live/LiveImage.png" class="" /> -->
              <div class="gradient_bottom w-full flex absolute bottom-0 items-center p-1 pb-2">
                <div class="pr-1 pl-1 z-10 w-10">
                  <img :src="require(`@/assets/live/${livedata.streamerIcon}.png`)" alt="Image" />
                  <!-- <img src="@/assets/live/defaultStreamerIcon.png" /> -->
                </div>
                <div class="flex flex-col pl-1 z-10 items-start">
                  <div class="text-white font-medium text-sm">{{ livedata.liveTitle }}</div>
                  <div class="text-10px font-medium text-white opacity-60">{{ livedata.streamerName }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>



  <!-- <div class="flex justify-center">
    <div class="max-w-[1519px] w-[100%] h-[587px] flex justify-between border-2 border-red-500">
      <div class="max-w-[1037px] w-[100%] border-2 border-green-500">A</div>
      <div class="chatContainer border-2"></div>
    </div>
  </div> -->









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
      // hthreeGoal (3分球得分) athreeGoal (3分球得分)
      homeThreeGoal: 1,
      awayThreeGoal: 3,

      // htwoGoal (2分球得分) , atwoGoal (2分球得分)
      homeTwoGoal: 4,
      awayTwoGoal: 1,

      //  hfreeThrow (罚球) afreeThrow (罚球)
      homeFreeThrow: 14,
      awayFreeThrow: 11,

      //  hfreeThrow (罚球率) afreeThrow (罚球率)
      homeFreeThrowPercentage: 6,
      awayFreeThrowPercentage: 4,

      //htotalPause (暂停) atotalPause (暂停)
      homeTotalPause: 1,
      awayTotalPause: 3,

      //hnumOfFouls (犯规) anumOfFouls (犯规)
      homeNumOfFouls: 7,
      awayNumOfFouls: 4,

      //EN Need Data

      //hblocks (Block) ablocks (Block)
      homeBlocks: 3,
      awayBlocks: 5,

      // hsteals (Steal) asteals (Steal)
      homeSteals: 5,
      awaySteals: 5,

      // hturnOvers (Turn Over) aturnOvers (Turn Over)
      homeTurnOvers: 17,
      awayTurnOvers: 15,

      // hfieldGoals (Field Goal) afieldGoals (Field Goal)
      homeFieldGoal: 44,
      awayFieldGoal: 32,

      //hrebounds (Rebound) arebounds (Rebound)
      homeRebounds: 39,
      awayRebound: 30,


      homeTeamSubstitute: [],
      awayTeamSubstitute: [],
      homeFirstAscending: [],
      homeFormation: "4-2-3-1",
      defendPlayerIndex: 0,
      MiddlePlayerIndex: 0,
      FirstPlayerIndex: 0,
      SSFirstPlayerIndex: 0,
      teamTotal: 10,

      liveData: [
        { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon' },
        { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon' },
        { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon' },
        { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon' },

        { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'CX', streamerIcon: 'defaultStreamerIcon' },
        { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'CX', streamerIcon: 'defaultStreamerIcon' },
        { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'CX', streamerIcon: 'defaultStreamerIcon' },
        { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'CX', streamerIcon: 'defaultStreamerIcon' },
        { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'CX', streamerIcon: 'defaultStreamerIcon' },
        { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'CX', streamerIcon: 'defaultStreamerIcon' },
      ],

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
    //En Needed Data
    teamATotalBlocks() {
      const totalBlocks = this.homeBlocks + this.awayBlocks;
      if (totalBlocks !== 0) {
        return Math.round((this.homeBlocks / totalBlocks) * 100);
      } else {
        return 0;
      }
    },
    teamBTotalBlocks() {
      const totalBlocks = this.homeBlocks + this.awayBlocks;
      if (totalBlocks !== 0) {
        return Math.round((this.awayBlocks / totalBlocks) * 100);
      } else {
        return 0;
      }
    },

    teamATotalSteal() {
      const totalSteals = this.homeSteals + this.awaySteals;
      if (totalSteals !== 0) {
        return Math.round((this.homeSteals / totalSteals) * 100);
      } else {
        return 0;
      }

    },

    teamBTotalSteal() {
      const totalSteals = this.homeSteals + this.awaySteals;
      if (totalSteals !== 0) {
        return Math.round((this.awaySteals / totalSteals) * 100);
      } else {
        return 0;
      }

    },

    teamATotalTurnOver() {
      const totalTurnOver = this.homeTurnOvers + this.awayTurnOvers;
      if (totalTurnOver !== 0) {
        return Math.round((this.homeTurnOvers / totalTurnOver) * 100);
      } else {
        return 0;
      }

    },

    teamBTotalTurnOver() {
      const totalTurnOver = this.homeTurnOvers + this.awayTurnOvers;
      if (totalTurnOver !== 0) {
        return Math.round((this.awayTurnOvers / totalTurnOver) * 100);
      } else {
        return 0;
      }

    },

    teamAFieldGoal() {
      const totalFieldGoal = this.homeFieldGoal + this.awayFieldGoal;
      if (totalFieldGoal !== 0) {
        return Math.round((this.homeFieldGoal / totalFieldGoal) * 100);
      } else {
        return 0;
      }
    },

    teamBFieldGoal() {
      const totalFieldGoal = this.homeFieldGoal + this.awayFieldGoal;
      if (totalFieldGoal !== 0) {
        return Math.round((this.awayFieldGoal / totalFieldGoal) * 100);
      } else {
        return 0;
      }
    },

    teamARebounds() {
      const totalRebounds = this.homeRebounds + this.awayRebound;
      if (totalRebounds !== 0) {
        return Math.round((this.homeRebounds / totalRebounds) * 100);
      } else {
        return 0;
      }
    },
    teamBRebounds() {
      const totalRebounds = this.homeRebounds + this.awayRebound;
      if (totalRebounds !== 0) {
        return Math.round((this.awayRebound / totalRebounds) * 100);
      } else {
        return 0;
      }
    },

    teamAThreeGoal() {
      const totalThreeGoal = this.homeThreeGoal + this.awayThreeGoal;
      if (totalThreeGoal !== 0) {
        return Math.round((this.homeThreeGoal / totalThreeGoal) * 100);
      } else {
        return 0;
      }
    },

    teamBThreeGoal() {
      const totalThreeGoal = this.homeThreeGoal + this.awayThreeGoal;
      if (totalThreeGoal !== 0) {
        return Math.round((this.awayThreeGoal / totalThreeGoal) * 100);
      } else {
        return 0;
      }
    },

    teamATwoGoal() {
      const totalTwoGoal = this.homeTwoGoal + this.awayTwoGoal;
      if (totalTwoGoal !== 0) {
        return Math.round((this.homeTwoGoal / totalTwoGoal) * 100);
      } else {
        return 0;
      }
    },
    teamBTwoGoal() {
      const totalTwoGoal = this.homeTwoGoal + this.awayTwoGoal;
      if (totalTwoGoal !== 0) {
        return Math.round((this.awayTwoGoal / totalTwoGoal) * 100);
      } else {
        return 0;
      }
    },

    teamAFreeThrow() {
      if (this.homeFreeThrow !== 0) {
        return this.homeFreeThrow
      } else {
        return 0;
      }
    },

    teamBFreeThrow() {
      if (this.awayFreeThrow !== 0) {
        return this.awayFreeThrow
      } else {
        return 0;
      }
    },

    teamAFreeThrowPercentage() {
      if (this.homeFreeThrowPercentage !== 0) {
        return this.homeFreeThrowPercentage
      } else {
        return 0;
      }
    },

    teamBFreeThrowPercentage() {
      if (this.awayFreeThrowPercentage !== 0) {
        return this.awayFreeThrowPercentage
      } else {
        return 0;
      }
    },

    teamATotalPause() {
      if (this.homeTotalPause !== 0) {
        return this.homeTotalPause
      } else {
        return 0;
      }
    },

    teamBTotalPause() {
      if (this.awayTotalPause !== 0) {
        return this.awayTotalPause
      } else {
        return 0;
      }
    },

    teamATotalFouls() {
      const totalFouls = this.homeNumOfFouls + this.awayNumOfFouls;
      if (totalFouls !== 0) {
        return Math.round((this.homeNumOfFouls / totalFouls) * 100);
      } else {
        return 0;
      }
    },

    teamBTotalFouls() {
      const totalFouls = this.homeNumOfFouls + this.awayNumOfFouls;
      if (totalFouls !== 0) {
        return Math.round((this.awayNumOfFouls / totalFouls) * 100);
      } else {
        return 0;
      }
    },




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
    teamAPossessionRate() {
      const totalPossession = this.homePossessionRate + this.awayPossessionRate;
      if (totalPossession !== 0) {
        return Math.round((this.homePossessionRate / totalPossession) * 100);
      } else {
        return 0;
      }
    },
    teamBPossessionRate() {
      const totalPossession = this.homePossessionRate + this.awayPossessionRate;

      // Check if the totalPossession is not zero before performing the division
      if (totalPossession !== 0) {
        return Math.round((this.awayPossessionRate / totalPossession) * 100);
      } else {
        return 0;
      }
    },


  }

}
</script>

<style scoped>
.live_wrapper {
  width: 100%;
  max-width: 1519px;
  margin: 0px auto;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  row-gap: 50px;
}

.card {
  display: inline-block;
  width: 287px;
  height: 162px;
  margin-bottom: -35px;

}

.card-body {
  text-align: center;
  height: 161px;
  width: 100%;
  cursor: pointer;
  border: 100px;

}

.card-body img {
  width: 100%;
}

/* .gradient_bottom::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
} */
.titleBox {
  position: absolute;
  top: 0;
}

.card-body {
  text-align: center;
  height: 161px;
  width: 100%;
  cursor: pointer;
  position: relative;
}


.backgroundImg {
  width: 100%;
  height: 647px;
  display: flex;
  align-items: center;
  background-image: url('@/assets/main/background_2.png');
  background-size: cover;
  background-position: center;
  position: relative;

}

.scroll-container {
  /* position: absolute; */
  width: 100%;
  overflow-x: auto;

}

.inner-container {
  max-width: 1519px;
  width: 100%;
  height: 600px;
  box-sizing: border-box;
  text-align: center;
  /* padding: 20px; */
  margin: 0 auto;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

@media (max-width: 1519px) {
  .inner-container {
    min-width: 1519px;
    /* Set a minimum width to stop shrinking */
  }
}
</style>

