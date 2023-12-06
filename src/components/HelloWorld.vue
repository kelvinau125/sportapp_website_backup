<template>
  <div class="flex justify-center ">
    <div class=" w-[890px] flex justify-between">
      <div class="flex flex-col justify-center py-4">
        <!-- ZH Show -->
        <div class="borderColor mb-3 flex justify-center items-center">
          <span class="font-medium md:text-sm text-xs">暂停 {{ teamATotalPause }}</span>
        </div>
        <!-- ZH Show -->
        <div class="borderColor flex justify-center items-center">
          <span class="font-medium md:text-sm text-xs">犯规 {{ homeNumOfFouls }}</span>

        </div>
      </div>
      <div class="flex">
        <div class="  flex flex-col justify-around">
          <div class="flex justify-center items-center">
            <p class=" w-[30px] font-medium md:text-sm text-10px md:pr-2 pr-1">{{ homeThreeGoal }}</p>
            <div class="team relative w-[50px] p-[20px] bottom-1">
              <div class=" stat-bar-left totalGrayBar border_leftTB" :style="{ width: 100 + '%' }"></div>
              <!-- TEAMaRATE -->
              <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamAThreeGoal + '%' }">
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <p class=" w-[30px] font-medium md:text-sm text-10px md:pr-2 pr-1">{{ homeTwoGoal }}</p>
            <div class="team relative w-[50px] p-[20px] bottom-1">
              <div class=" stat-bar-left totalGrayBar border_leftTB" :style="{ width: 100 + '%' }"></div>
              <!-- TEAMaRATE -->
              <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamATwoGoal + '%' }">
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <p class=" w-[30px] font-medium md:text-sm text-10px md:pr-2 pr-1">{{ homeBlocks }}</p>
            <div class="team relative w-[50px] p-[20px] bottom-1">
              <div class=" stat-bar-left totalGrayBar border_leftTB" :style="{ width: 100 + '%' }"></div>
              <!-- TEAMaRATE -->
              <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamATotalBlocks + '%' }">
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <p class=" w-[30px] font-medium md:text-sm text-10px md:pr-2 pr-1">{{ homeNumOfFouls }}</p>
            <div class="team relative w-[50px] p-[20px] bottom-1">
              <div class=" stat-bar-left totalGrayBar border_leftTB" :style="{ width: 100 + '%' }"></div>
              <!-- TEAMaRATE -->
              <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamATotalFouls + '%' }">
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <p class=" w-[30px] font-medium md:text-sm text-10px md:pr-2 pr-1">{{ homeSteals }}</p>
            <div class="team relative w-[50px] p-[20px] bottom-1">
              <div class=" stat-bar-left totalGrayBar border_leftTB" :style="{ width: 100 + '%' }"></div>
              <!-- TEAMaRATE -->
              <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamATotalSteal + '%' }">
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <p class=" w-[30px] font-medium md:text-sm text-10px md:pr-2 pr-1">{{ homeTurnOvers }}</p>
            <div class="team relative w-[50px] p-[20px] bottom-1">
              <div class=" stat-bar-left totalGrayBar border_leftTB" :style="{ width: 100 + '%' }"></div>
              <!-- TEAMaRATE -->
              <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamATotalTurnOver + '%' }">
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <p class=" w-[30px] font-medium md:text-sm text-10px md:pr-2 pr-1">{{ homeFieldGoal }}</p>
            <div class="team relative w-[50px] p-[20px] bottom-1">
              <div class=" stat-bar-left totalGrayBar border_leftTB" :style="{ width: 100 + '%' }"></div>
              <!-- TEAMaRATE -->
              <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamAFieldGoal + '%' }">
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <p class=" w-[30px] font-medium md:text-sm text-10px md:pr-2 pr-1">{{ homeRebounds }}</p>
            <div class="team relative w-[50px] p-[20px] bottom-1">
              <div class=" stat-bar-left totalGrayBar border_leftTB" :style="{ width: 100 + '%' }"></div>
              <!-- TEAMaRATE -->
              <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamARebounds + '%' }">
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <p class=" w-[30px] font-medium md:text-sm text-10px md:pr-2 pr-1">{{ teamAFreeThrow }}</p>
            <div class="team relative w-[50px] p-[20px] bottom-1">
              <div class=" stat-bar-left totalGrayBar border_leftTB" :style="{ width: 100 + '%' }"></div>
              <!-- TEAMaRATE -->
              <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamAFreeThrowPercentage + '%' }">
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-around items-center  md:w-[180px] border-2 w-[100px]">
          <!-- EN Need Show -->
          <div class="font-medium md:text-sm text-xs">3分球得分</div>
          <!-- ZH Need Show -->
          <div class="font-medium md:text-sm text-xs">2分球得分</div>

          <!-- EN Need Show -->
          <div class="font-medium md:text-sm text-xs">Blocks</div>
          <div class="font-medium md:text-sm text-xs">Foul</div>
          <div class="font-medium md:text-sm text-xs">Steal</div>
          <div class="font-medium md:text-sm text-xs">Turn Over</div>
          <div class="font-medium md:text-sm text-xs">Field Goal</div>
          <div class="font-medium md:text-sm text-xs">Rebound</div>

          <!-- ZH and EN need Show -->
          <div class=" flex justify-start items-center w-full">
            <div class="font-medium md:text-sm text-xs w-1/3 md:pl-3 pl-1">{{ teamAFreeThrowPercentage + "%" }}</div>
            <div class="font-medium md:text-sm text-xs  flex justify-center w-[80px]">罚球</div>
            <div class="font-medium md:text-sm text-xs w-1/3 md:pl-6 pl-0"> {{ teamBFreeThrowPercentage + "%" }}</div>
          </div>

        </div>
        <div class="flex flex-col justify-around items">
          <div class="flex items-center">
            <div class="bottom-1 team relative w-[50px] p-[20px]">
              <div class="stat-bar-right totalGrayBar border_rightTB " style="width: 100%;"></div>
              <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBThreeGoal + '%' }">
              </div>
            </div>
            <p class="w-[30px] font-medium md:text-sm text-10px pl-3 pr-1">{{ awayThreeGoal }}</p>
          </div>
          <div class="flex items-center">
            <div class="bottom-1 team relative w-[50px] p-[20px]">
              <div class="stat-bar-right totalGrayBar border_rightTB " style="width: 100%;"></div>
              <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBTwoGoal + '%' }">
              </div>
            </div>
            <p class="w-[30px] font-medium md:text-sm text-10px pl-3 pr-1">{{ awayTwoGoal }}</p>
          </div>
          <div class="flex items-center">
            <div class="bottom-1 team relative w-[50px] p-[20px]">
              <div class="stat-bar-right totalGrayBar border_rightTB " style="width: 100%;"></div>
              <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBTotalBlocks + '%' }">
              </div>
            </div>
            <p class="w-[30px] font-medium md:text-sm text-10px pl-3 pr-1">{{ awayBlocks }}</p>
          </div>
          <div class="flex items-center">
            <div class="bottom-1 team relative w-[50px] p-[20px]">
              <div class="stat-bar-right totalGrayBar border_rightTB " style="width: 100%;"></div>
              <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBTotalFouls + '%' }">
              </div>
            </div>
            <p class="w-[30px] font-medium md:text-sm text-10px pl-3 pr-1">{{ awayNumOfFouls }}</p>
          </div>
          <div class="flex items-center">
            <div class="bottom-1 team relative w-[50px] p-[20px]">
              <div class="stat-bar-right totalGrayBar border_rightTB " style="width: 100%;"></div>
              <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBTotalSteal + '%' }">
              </div>
            </div>
            <p class="w-[30px] font-medium md:text-sm text-10px pl-3 pr-1">{{ awaySteals }}</p>
          </div>
          <div class="flex items-center">
            <div class="bottom-1 team relative w-[50px] p-[20px]">
              <div class="stat-bar-right totalGrayBar border_rightTB " style="width: 100%;"></div>
              <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBTotalTurnOver + '%' }">
              </div>
            </div>
            <p class="w-[30px] font-medium md:text-sm text-10px pl-3 pr-1">{{ awayTurnOvers }}</p>
          </div>
          <div class="flex items-center">
            <div class="bottom-1 team relative w-[50px] p-[20px]">
              <div class="stat-bar-right totalGrayBar border_rightTB " style="width: 100%;"></div>
              <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBFieldGoal + '%' }">
              </div>
            </div>
            <p class="w-[30px] font-medium md:text-sm text-10px pl-3 pr-1">{{ awayFieldGoal }}</p>
          </div>
          <div class="flex items-center">
            <div class="bottom-1 team relative w-[50px] p-[20px]">
              <div class="stat-bar-right totalGrayBar border_rightTB " style="width: 100%;"></div>
              <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBRebounds + '%' }">
              </div>
            </div>
            <p class="w-[30px] font-medium md:text-sm text-10px pl-3 pr-1">{{ awayRebound }}</p>
          </div>
          <div class="flex items-center">
            <div class="bottom-1 team relative w-[50px] p-[20px]">
              <div class="stat-bar-right totalGrayBar border_rightTB " style="width: 100%;"></div>
              <div class="stat-bar-right right-bar-color border_rightTB"
                :style="{ width: teamBFreeThrowPercentage + '%' }">
              </div>
            </div>
            <p class="w-[30px] font-medium md:text-sm text-10px pl-3 pr-1">{{ teamBFreeThrow }}</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center py-4">
        <!-- ZH Show -->
        <div class="borderColor mb-3 flex justify-center items-center">
          <span class="font-medium md:text-sm text-xs">暂停 {{ teamBTotalPause }}</span>
        </div>
        <!-- ZH Show -->
        <div class="borderColor flex justify-center items-center">
          <span class="font-medium md:text-sm text-xs">犯规 {{ awayNumOfFouls }}</span>
        </div>
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
@media (min-width: 300px) {
  .team {
    position: relative;
    width: 70px;
    padding: 20px;
  }

  .teamDown {
    position: relative;
    width: 50px;
    padding: 20px;

  }

  .statusContainer {
    width: 384px;
  }

  .box {
    display: flex;
    justify-content: flex-start;
  }
  
  .borderColor {
    width: 44px;
    height: 32px;
    background-color: #D7DDD7;
    border-radius: 19px;
  }
}

@media (min-width: 500px) {
  .team {
    position: relative;
    width: 100px;
    padding: 20px;
  }

  .teamDown {
    position: relative;
    width: 80px;
    padding: 20px;

  }

  .statusContainer {
    width: 615px;
  }

  .box {
    display: flex;
    justify-content: center;
  }

  .borderColor {
    width: 64px;
    height: 32px;
    background-color: #D7DDD7;
    border-radius: 19px;
  }

}

@media (min-width: 640px) {
  .team {
    position: relative;
    width: 230px;
    padding: 20px;
  }

  .teamDown {
    position: relative;
    width: 120px;
    padding: 20px;

  }

  .statusContainer {
    width: 100%;
  }

  .box {
    display: flex;
    justify-content: center;
  }

  .borderColor {
    width: 84px;
    height: 32px;
    background-color: #D7DDD7;
    border-radius: 19px;
  }


}

.border_leftTB {
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.border_rightTB {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.totalGrayBar {
  background-color: #D7DDD7;
  /* Color for combined total shots */
}

/* .team {
    position: relative;
    width: 150px;
    padding: 20px;
  } */

.stat-bar-right {
  height: 9px;
  width: 230px;
  position: absolute;
  left: 0;
  bottom: 8px;
  margin-bottom: 5px;
}

/* 左边的Bar */
.stat-bar-left {
  height: 9px;
  width: 230px;
  position: absolute;
  right: 0;
  /* bottom: 8px;
  margin-bottom: 5px; */

}


.left-bar-color {
  background-color: #FDA24C;
}

.right-bar-color {
  background-color: #33BA53;
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
  position: absolute;
  width: 100%;
  overflow-x: auto;
  overflow-y: visible;
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

