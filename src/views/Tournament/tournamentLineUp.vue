<script>
export default {
  data() {
    return {
      homePlayer: [
        //FIRST, CAPTAIN, SHIRT NUMBER, POSITION, PLAYERNAME
        { id: 1, playerName: 'Player 1', image: 'defaultProfile', position: 'D', shirtNo: 2, captain: 1, first: 1 },
        { id: 2, playerName: 'Player 2', image: 'defaultProfile', position: 'G', shirtNo: 2, captain: 1, first: 1 },
        { id: 3, playerName: 'Player 3', image: 'defaultProfile', position: 'D', shirtNo: 20, captain: 1, first: 1 },
        { id: 4, playerName: 'Player 4', image: 'defaultProfile', position: 'D', shirtNo: 2, captain: 1, first: 1 },
        { id: 5, playerName: 'Player 5', image: 'defaultProfile', position: 'M', shirtNo: 2, captain: 1, first: 1 },
        { id: 6, playerName: 'Player 6', image: 'defaultProfile', position: 'M', shirtNo: 12, captain: 1, first: 1 },
        { id: 7, playerName: 'Player 7', image: 'defaultProfile', position: 'M', shirtNo: 2, captain: 1, first: 1 },
        { id: 8, playerName: 'Player 8', image: 'defaultProfile', position: 'M', shirtNo: 2, captain: 1, first: 1 },
        { id: 9, playerName: 'Player 9', image: 'defaultProfile', position: 'M', shirtNo: 2, captain: 1, first: 1 },
        { id: 10, playerName: 'Player 10', image: 'defaultProfile', position: 'F', shirtNo: 2, captain: 1, first: 1 },
        { id: 11, playerName: 'Player 11', image: 'defaultProfile', position: 'F', shirtNo: 2, captain: 1, first: 1 },

      ],
      awayPlayer: [
        { id: 1, playerName: 'Player 11', image: 'defaultProfile', position: 'S', shirtNo: 2, captain: 1, first: 1 },

        { id: 2, playerName: 'Player 13', image: 'defaultProfile', position:'F', shirtNo: 2, captain: 1, first: 1 },
        { id: 3, playerName: 'Player 14', image: 'defaultProfile', position:'F', shirtNo: 2, captain: 1, first: 1 },
        { id: 4, playerName: 'Player 15', image: 'defaultProfile', position:'F', shirtNo: 2, captain: 1, first: 1 },

        { id: 5, playerName: 'Player 16', image: 'defaultProfile', position:'M', shirtNo: 2, captain: 1, first: 1 },
        { id: 6, playerName: 'Player 17', image: 'defaultProfile', position:'M', shirtNo: 2, captain: 1, first: 1 },

        { id: 7, playerName: 'Player 16', image: 'defaultProfile', position:'D', shirtNo: 2, captain: 1, first: 1 },
        { id: 8, playerName: 'Player 17', image: 'defaultProfile', position:'D', shirtNo: 2, captain: 1, first: 1 },
        { id: 9, playerName: 'Player 18', image: 'defaultProfile', position:'D', shirtNo: 2, captain: 1, first: 1 },
        { id: 10, playerName: 'Player 19', image: 'defaultProfile', position:'D', shirtNo: 2, captain: 1, first: 1  },

        { id: 11, playerName: 'Player', image: 'defaultProfile', position:  'G', shirtNo: 2, captain: 1, first: 1 },
      ]
    };
  },
  computed: {
    filteredHomePlayers() {
      return (position) => this.homePlayer.filter(player => player.position === position);
    },
    filteredAwayPlayers(){
      return (position) => this.awayPlayer.filter(player => player.position === position);
    },
    hasHomeSPlayers() {
      return this.homePlayer.some(player => player.position === 'S');
    },
    hasAwaySPlayers() {
      return this.awayPlayer.some(player => player.position === 'S');
    },
  }
};
</script>

<template>
  <div class="flex justify-start">
    <div class="overflow-hidden">
      <div class="soccer-field flex">

        <!-- Home Players -->
        <div class="w-1/2 h-full flex justify-between">
          <!-- IF G PASS HERE -->
          <div class="w-full flex flex-col justify-around">
            <div v-for="player in filteredHomePlayers('G')" :key="player.id" class="">
              <div class="flex flex-col items-center">
                <div class="homeKeeperCircle flex justify-center items-center">
                  <div>
                    <p class="text-white text-sm font-normal"> {{ player.shirtNo }}</p>
                  </div>
                </div>
                <p>球员名字</p>
              </div>
            </div>
          </div>
          <!-- IF D PASS HERE -->
          <div class="w-full flex flex-col justify-around">
            <div v-for="player in filteredHomePlayers('D')" :key="player.id" class="">
              <div class="flex flex-col items-center">
                <div class="homeCircle flex justify-center items-center">
                  <div>
                    <p class="text-white text-sm font-normal"> {{ player.shirtNo }}</p>
                  </div>
                </div>
                <p>球员名字</p>
              </div>
            </div>
          </div>


          <!-- IF M PASS HERE -->
          <div class="w-full flex flex-col justify-around">
            <div v-for="player in filteredHomePlayers('M')" :key="player.id" class="">
              <div class="flex flex-col items-center">
                <div class="homeCircle flex justify-center items-center">
                  <div>
                    <p class="text-white text-sm font-normal"> {{ player.shirtNo }}</p>
                  </div>
                </div>
                <p>球员名字</p>
              </div>
            </div>
          </div>

          <!-- IF F PASS HERE -->
          <div class="w-full flex flex-col justify-around">
            <div v-for="player in filteredHomePlayers('F')" :key="player.id" class="">
              <div class="flex flex-col items-center">
                <div class="homeCircle flex justify-center items-center">
                  <div>
                    <p class="text-white text-sm font-normal"> {{ player.shirtNo }}</p>
                  </div>
                </div>
                <p>球员名字</p>
              </div>
            </div>

            <div class="absolute bottom-1" style="left: 285px; ">
              <div class="flex pb-2">
                <span class="pl-2.5 pr-1 pt-1.5 text-xs font-normal text-white">3-5-2</span>
                <img class="" style="width: 24px; height: 24px;" src="@/assets/tournament/moneyBadge.png" />
              </div>
            </div>
          </div>

          <!-- 英文版有S 的球员 -->
          <div class="w-full flex flex-col justify-around" v-if="hasHomeSPlayers">
            <div v-for="player in filteredHomePlayers('S')" :key="player.id" class="">
              <div class="flex flex-col items-center">
                <div class="homeCircle flex justify-center items-center">
                  <!-- <img class="" src="../assets/tournament/playerIcon.png" /> -->
                  <div>
                    <p class="text-white text-sm font-normal"> {{ player.shirtNo }}</p>
                  </div>
                </div>
                <p>球员名字</p>
              </div>
            </div>
          </div>
        </div>
        <!-- AWAY TEAM -->
        <div class="w-1/2 h-full flex justify-between">
          <!-- 英文版有S 的球员 -->
          <div class="w-full flex flex-col justify-around" v-if="hasAwaySPlayers">
            <div v-for="player in filteredAwayPlayers('S')" :key="player.id" class="">
              <div class="flex flex-col items-center">
                <div class="awayCircle flex justify-center items-center">
                  <!-- <img class="" src="../assets/tournament/playerIcon.png" /> -->
                  <div>
                    <p class="text-white text-sm font-normal"> {{ player.shirtNo }}</p>
                  </div>
                </div>
                <p>球员名字</p>
              </div>
            </div>
          </div>
          <div class="w-full flex flex-col justify-around">
            <div v-for="player in filteredAwayPlayers('F')" :key="player.id" class="">
              <div class="flex flex-col items-center">
                <div class="awayCircle flex justify-center items-center">
                  <!-- <img class="" src="../assets/tournament/playerIcon.png" /> -->
                  <div>
                    <p class="text-white text-sm font-normal"> {{ player.shirtNo }}</p>
                  </div>
                </div>
                <p>球员名字</p>
              </div>
            </div>

            <div class="absolute bottom-1" style="left: 370px; ">
              <div class="flex pb-1.5">
                <img class="" style="width: 24px; height: 24px;" src="@/assets/tournament/badge_.png" />
                <span class="pl-1.5 pr-1 pt-1 text-xs font-normal text-white">4-2-3-1</span>
              </div>
            </div>

          </div>
          <div class="w-full flex flex-col justify-around" >
            <div v-for="player in filteredAwayPlayers('M')" :key="player.id" class="">
              <div class="flex flex-col items-center">
                <div class="awayCircle flex justify-center items-center">
                  <!-- <img class="" src="../assets/tournament/playerIcon.png" /> -->
                  <div>
                    <p class="text-white text-sm font-normal"> {{ player.shirtNo }}</p>
                  </div>
                </div>
                <p>球员名字</p>
              </div>
            </div>
          </div>
          <div class="w-full flex flex-col justify-around" >
            <div v-for="player in filteredAwayPlayers('D')" :key="player.id" class="">
              <div class="flex flex-col items-center">
                <div class="awayCircle flex justify-center items-center">
                  <!-- <img class="" src="../assets/tournament/playerIcon.png" /> -->
                  <div>
                    <p class="text-white text-sm font-normal"> {{ player.shirtNo }}</p>
                  </div>
                </div>
                <p>球员名字</p>
              </div>
            </div>
          </div>
          <div class="w-full flex flex-col justify-around" >
            <div v-for="player in filteredAwayPlayers('G')" :key="player.id" class="">
              <div class="flex flex-col items-center">
                <div class="awayKeeperCircle flex justify-center items-center">
                  <!-- <img class="" src="../assets/tournament/playerIcon.png" /> -->
                  <div>
                    <p class="text-white text-sm font-normal"> {{ player.shirtNo }}</p>
                  </div>
                </div>
                <p>球员名字</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>


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
</style>
