<template>
  <!-- Main Component -->
  <div class="flex py-2 md:w-[892px]" style="border: 1px solid hotpink;">
    <div style="border: 3px solid green ;" class="md:w-[890px] statusContainer">
      <div class=" flex box" style="border: 1px solid red;">
        <div class="md:flex items-center">
          <div style="border: 2px solid yellow;" class="flex pb-1.5">
            <img style="width: 24px; height: 24px;" src="@/assets/tournament/jiaoQiu.png" />
            <span class="font-medium text-sm pt-1.5 pr-1">{{ homeCornerKickNum }}</span>
          </div>
          <div style="border: 2px solid yellow;" class="flex  pb-1.5">
            <img style="width: 24px; height: 24px;" src="@/assets/tournament/hongPai.png" />
            <span class="font-medium text-sm pt-1.5 pr-1">{{ homeRedCardNum }}</span>
          </div>
          <div style="border: 2px solid yellow;" class="flex pb-1.5">
            <img style="width: 24px; height: 24px;" src="@/assets/tournament/huangPai.png" />
            <span class="font-medium text-sm pt-1.5 pr-1">{{ homeYellowCardNum }}</span>
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex items-center">
            <p class=" font-medium md:text-sm text-10px md:pr-2 pr-1">{{ homePossessionRate + '%' }}</p>
            <div class="team">
              <div class="stat-bar-left totalGrayBar border_leftTB " :style="{ width: 100 + '%' }"></div>
              <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamAPossessionRate + '%' }"></div>
            </div>
          </div>
          <div>
            <span class="md:text-sm text-xs font-medium md:px-2.5 px-1">{{ $t("Possession") }}</span>
          </div>
          <div class="flex items-center">
            <div class="team">
              <div class="stat-bar-right totalGrayBar border_rightTB " style="width: 100%;"></div>
              <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBPossessionRate + '%' }">
              </div>
            </div>
            <p class="font-medium md:text-sm text-10px pl-3 pr-1">{{ awayPossessionRate + '%' }}</p>

          </div>
        </div>
        <div class="md:flex items-center">
          <div style="border: 2px solid yellow;" class="flex pb-1.5">
            <img style="width: 24px; height: 24px;" src="@/assets/tournament/huangPai.png" />
            <span class="font-medium text-sm pt-1.5 pr-1">{{ awayYellowCardNum }}</span>
          </div>
          <div style="border: 2px solid yellow;" class="flex pb-1.5">
            <img style="width: 24px; height: 24px;" src="@/assets/tournament/hongPai.png" />
            <span class="font-medium text-sm pt-1.5 pr-1">{{ awayRedCardNum }}</span>
          </div>
          <div style="border: 2px solid yellow;" class="flex pb-1.5">
            <img style="width: 24px; height: 24px;" src="@/assets/tournament/jiaoQiu.png" />
            <span class="font-medium text-sm pt-1.5 pr-1">{{ awayCornerKickNu }}</span>
          </div>

        </div>
      </div>
      <div class="flex justify-between">
        <div class="flex justify-between w-full">
          <div class="">
            <div class="flex items-center">
              <span class="font-medium md:text-sm text-10px md:pr-2 pr-1">{{ homeAttackNum }}</span>
              <div class="teamDown">
                <div class="stat-bar-left totalGrayBar border_leftTB" style="width: 100%;"></div>

                <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamAAttackNumber + '%' }"></div>
              </div>
            </div>
            <div class="flex items-center">
              <span class="font-medium md:text-sm text-10px md:pr-2 pr-1">{{ homeAttackDangerNum }}</span>
              <div class="teamDown">
                <div class="stat-bar-left totalGrayBar border_leftTB " style="width: 100% "></div>
                <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamADangerNum + '%' }"></div>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center justify-around">
            <span class="font-medium md:text-sm text-10px px-1">{{ $t("Attack") }}</span>
            <span class="font-medium md:text-sm text-10px px-1">{{ $t("Danger") }}</span>
          </div>
          <div class="">
            <div class="flex items-center">
              <div class="teamDown">
                <div class="stat-bar-right totalGrayBar border_rightTB" style="width: 100%;"></div>

                <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBShotPercentage + '%' }">
                </div>
              </div>
              <span class="md:pl-2.5 pl-1 font-medium md:text-sm text-10px">{{ awayAttackNum }}</span>
            </div>
            <div class="flex items-center">
              <div class="teamDown">
                <div class="stat-bar-right totalGrayBar border_rightTB" style="width: 100%;"></div>

                <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBDangerNum + '%' }"></div>
              </div>
              <span class="font-medium md:text-sm text-10px md:pl-2.5 pl-1">{{ awayAttackDangerNum }}</span>
            </div>
          </div>
        </div>
        <div class="w-1/4"></div>
        <!-- HALo -->
        <div class="flex justify-between w-full">
          <div class="">
            <div class="flex items-center">
              <div class="md:flex items-center">
                <p class="font-medium md:text-sm text-10px pl-1">{{ teamAtotalShotNum }}</p>
                <p class="font-medium md:text-sm text-10px md:pr-2 pr-0.5">{{ '(' + homeShootGoalNum + ')' }}</p>

              </div>
              <div class="teamDown">
                <div class="stat-bar-left totalGrayBar border_leftTB " style="width: 100% "></div>
                <div class="stat-bar-left total-shots border_leftTB" :style="{ width: teamAtotalShotPercent + '%' }">
                </div>
                <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamAGoalPercentage + '%' }">
                </div>
              </div>
            </div>
            <div class="flex items-center">
              <span class="font-medium md:text-sm text-10px px-3">{{ homePenaltyNum }}</span>
              <div class="teamDown">
                <div class="stat-bar-left totalGrayBar border_leftTB " style="width: 100% "></div>
                <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamAPenaltyNum + '%' }"></div>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center justify-around">
            <div class="md:flex md:px-1 px-0">
              <p class="font-medium md:text-sm text-10px ">{{ $t("Shoot") }} </p>
              <p class="font-medium md:text-sm text-10px ">{{ "(" + $t("Score") + ")" }} </p>
            </div>
            <p class="font-medium md:text-sm text-10px ">{{ $t("Penalty") }}</p>
          </div>
          <div class="">
            <div class="flex items-center">
              <div class="teamDown">
                <div class="stat-bar-right totalGrayBar border_rightTB" style="width: 100%;"></div>
                <div class="stat-bar-right total-shotsB border_rightTB" :style="{ width: teamBtotalShotPercent + '%' }">
                </div>
                <div class="stat-bar-right shots-on-target border_rightTB" :style="{ width: teamBGoalPercentage + '%' }">
                </div>
              </div>

              <div class="md:flex items-center">
                <p class="font-medium md:text-sm text-10px pl-1">{{ teamBtotalShotNum }}</p>
                <p class="font-medium md:text-sm text-10px">{{ "(" + awayShootGoalNum + ")" }}</p>
              </div>
            </div>
            <div class="flex items-center">
              <div class="teamDown ">
                <div class="stat-bar-right totalGrayBar border_rightTB" style="width: 100%;"></div>

                <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBPenaltyNum + '%' }">
                </div>
              </div>
              <span class="font-medium md:text-sm text-10px md:pl-2.5 pl-0.5">{{ awayPenaltyNum }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
// import to run the login function
import { getFootballMatchbyId } from '@/service/apiFootBallMatchProvider.js';

export default {
  props: {
    tournamentID: String,
  },

  async mounted() {
    // --------------------------- call the tournment api --------------------------------------
    console.log(this.tournamentID);

    this.getTournamentDetails = await getFootballMatchbyId(1187648, false);
    // this.getTournamentDetails = await getFootballMatchbyId(1187648, ((this.$i18n.locale === 'ZH')?true :false));
    console.log(this.getTournamentDetails)

    //homePossessionRate (控球率), awayPossessionRate (控球率)
    this.homePossessionRate = parseInt(this.getTournamentDetails['homePossessionRate']);
    this.awayPossessionRate = parseInt(this.getTournamentDetails['awayPossessionRate']);

    //homeCornerKickNum (角球)，awayCornerKickNum(角球)
    this.homeCornerKickNum = this.getTournamentDetails['homeCornerKickNum'];
    this.awayCornerKickNum = this.getTournamentDetails['awayCornerKickNum'];

    //homeRedCardNum (红卡), awayRedCardNum(红卡)
    this.homeRedCardNum = this.getTournamentDetails['homeRedCardNum'];
    this.awayRedCardNum = this.getTournamentDetails['awayRedCardNum'];

    //homeYellowCardNum（黄卡), awayYellowCardNum(黄卡)
    this.homeYellowCardNum = this.getTournamentDetails['homeYellowCardNum'];
    this.awayYellowCardNum = this.getTournamentDetails['awayYellowCardNum'];

    //Home Attack Number (进攻)， Away Attack Number (进攻)
    this.homeAttackNum = this.getTournamentDetails['homeAttackNum'];
    this.awayAttackNum = this.getTournamentDetails['awayAttackNum'];

    //homeAttackDangerNum (危险进攻), awayAttackDangerNum (危险进攻)
    this.homeAttackDangerNum = this.getTournamentDetails['homeAttackDangerNum'];
    this.awayAttackDangerNum = this.getTournamentDetails['awayAttackDangerNum'];

    //homePenaltyNum (点球)，awayPenaltyNum(点球)
    this.homePenaltyNum = this.getTournamentDetails['homePenaltyNum'];
    this.awayPenaltyNum = this.getTournamentDetails['awayPenaltyNum'];

    //homeShootGoalNum (射正), homeBiasNum (射偏) 
    this.homeShootGoalNum = this.getTournamentDetails['homeShootGoalNum'];
    this.homeBiasNum = this.getTournamentDetails['homeBiasNum'];

    //awayShootGoalNum(射正)， awayBiasNum(射偏)
    this.awayShootGoalNum = this.getTournamentDetails['awayShootGoalNum'];
    this.awayBiasNum = this.getTournamentDetails['awayBiasNum'];
  },

  data() {
    return {
      getTournamentDetails: {},

      //homePossessionRate (控球率), awayPossessionRate (控球率)
      homePossessionRate: 0,
      awayPossessionRate: 0,

      //homeCornerKickNum (角球)，awayCornerKickNum(角球)
      homeCornerKickNum: 0,
      awayCornerKickNu: 0,

      //homeRedCardNum (红卡), awayRedCardNum(红卡)
      homeRedCardNum: 0,
      awayRedCardNum: 0,

      //homeYellowCardNum（黄卡), awayYellowCardNum(黄卡)
      homeYellowCardNum: 0,
      awayYellowCardNum: 0,

      //Home Attack Number (进攻)， Away Attack Number (进攻)
      homeAttackNum: 0,
      awayAttackNum: 0,

      //homeAttackDangerNum (危险进攻), awayAttackDangerNum (危险进攻)
      homeAttackDangerNum: 0,
      awayAttackDangerNum: 0,

      //homePenaltyNum (点球)，awayPenaltyNum(点球)
      homePenaltyNum: 0,
      awayPenaltyNum: 0,

      //homeShootGoalNum (射正), homeBiasNum (射偏) 
      homeShootGoalNum: 0,
      homeBiasNum: 0,

      //awayShootGoalNum(射正)， awayBiasNum(射偏)
      awayShootGoalNum: 0,
      awayBiasNum: 0,

      //Total 射门 homeShootGoalNum + homeBiasNum
      // homeShootGoalNum+homeBiasNum
      // awayShootGoalNum+awayBiasNum
    };
  },

  computed: {
    combinedTotal() {
      return (100 - (this.homeAttackNum + this.awayAttackNum)) * 100;
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
    teamAAttackNumber() {
      const totalAttack = this.homeAttackNum + this.awayAttackNum;
      if (totalAttack !== 0) {
        return Math.round(this.homeAttackNum / (totalAttack) * 100)
      } else {
        return 0;
      }
    },
    teamBShotPercentage() {
      const totalAttack = this.homeAttackNum + this.awayAttackNum;
      if (totalAttack !== 0) {
        return Math.round(this.awayAttackNum / (totalAttack) * 100)
      } else {
        return 0;
      }
    },
    teamADangerNum() {
      const totalDanger = this.homeAttackDangerNum + this.awayAttackDangerNum;
      if (totalDanger !== 0) {
        return Math.round(this.homeAttackDangerNum / (totalDanger) * 100)
      } else {
        return 0;
      }
    },
    teamBDangerNum() {
      const totalDanger = this.homeAttackDangerNum + this.awayAttackDangerNum;
      if (totalDanger !== 0) {
        return Math.round(this.awayAttackDangerNum / (totalDanger) * 100)
      } else {
        return 0;
      }
    },
    teamAPenaltyNum() {
      const totalPenalty = this.homePenaltyNum + this.awayPenaltyNum;
      if (totalPenalty !== 0) {
        return Math.round(this.homePenaltyNum / (totalPenalty) * 100)

      } else {
        return 0;
      }
    },
    teamBPenaltyNum() {
      const totalPenalty = this.homePenaltyNum + this.awayPenaltyNum;
      if (totalPenalty !== 0) {
        return Math.round(this.awayPenaltyNum / (totalPenalty) * 100)
      } else {
        return 0;
      }
    },
    teamAGoalNum() {
      const totalGoalNum = this.homeShootGoalNum + this.awayShootGoalNum;
      if (totalGoalNum !== 0) {
        return Math.round(this.homeShootGoalNum / (totalGoalNum) * 100)
      } else {
        return 0;
      }
    },
    teamBGoalNum() {
      const totalGoalNum = this.homeShootGoalNum + this.awayShootGoalNum
      if (totalGoalNum !== 0) {
        return Math.round(this.awayShootGoalNum / (totalGoalNum) * 100)
      } else {
        return 0;
      }
    },
    teamAtotalShotNum() {
      return this.homeShootGoalNum + this.homeBiasNum
    }
    ,
    teamBtotalShotNum() {
      return this.awayShootGoalNum + this.awayBiasNum
    },
    teamBtotalShotPercent() {
      const totalShotPercent = this.teamAtotalShotNum + this.teamBtotalShotNum;
      if (totalShotPercent !== 0) {
        return Math.round(this.teamBtotalShotNum / (totalShotPercent) * 100)
      } else {
        return 0;
      }
    },

    teamAtotalShotPercent() {
      const totalShotPercent = this.teamAtotalShotNum + this.teamBtotalShotNum;
      if (totalShotPercent !== 0) {
        return Math.round(this.teamAtotalShotNum / (totalShotPercent) * 100)
      } else {
        return 0;
      }
    },

    teamAGoalPercentage() {
      if (this.homeShootGoalNum !== 0) {
        return (this.homeShootGoalNum / this.teamAtotalShotNum) * this.teamAtotalShotPercent

      } else {
        return 0;
      }

    },

    teamBGoalPercentage() {
      if (this.awayShootGoalNum !== 0) {
        return (this.awayShootGoalNum / this.teamBtotalShotNum) * this.teamBtotalShotPercent
      } else {
        return 0;
      }
    },
  },

  methods: {

  },
};
</script>
  
<style scoped>

@media (min-width: 300px) {
  .team {
    position: relative;
    width: 70px;
    padding: 20px;
  }

  .teamDown{
    position: relative;
    width: 50px;
    padding: 20px;

  }

  .statusContainer{
    width: 384px;
  }

  .box{
    display: flex;
    justify-content: start;
  }
}

@media (min-width: 500px) {
  .team {
    position: relative;
    width: 100px;
    padding: 20px;
  }

  .teamDown{
    position: relative;
    width: 100px;
    padding: 20px;

  }

  .statusContainer{
    width: 615px;
  }
  
  .box{
    display: flex;
    justify-content: center;
  }

}

@media (min-width: 640px) {
  .team {
    position: relative;
    width: 120px;
    padding: 20px;
  }

  .teamDown{
    position: relative;
    width: 120px;
    padding: 20px;

  }

  .statusContainer{
    width: 100%;
  }
  
  .box{
    display: flex;
    justify-content: center;
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

/* .team {
    position: relative;
    width: 150px;
    padding: 20px;
  } */

.stat-bar-right {
  height: 9px;
  width: 137px;
  position: absolute;
  left: 0;
  bottom: 8px;
  margin-bottom: 5px;
}

/* 左边的Bar */
.stat-bar-left {
  height: 9px;
  width: 137px;
  position: absolute;
  right: 0;
  bottom: 8px;
  margin-bottom: 5px;

}

.short-bar-right {
  height: 9px;
  width: 110px;
  position: absolute;
  right: 0;
  bottom: 8px;
  margin-bottom: 5px;

}

.left-bar-color {
  background-color: #FDA24C;
}

.right-bar-color {
  background-color: #33BA53;
}

.total-shots {
  opacity: 0.4;
  background-color: #FDA24C;
  /* Lighter color for total shots */
}

.total-shotsB {
  opacity: 0.4;
  background-color: #33BA53;
  /* Lighter color for total shots */
}

.shots-on-target {
  background-color: #33BA53;
  /* Darker color for shots on target */
}

.totalGrayBar {
  background-color: #D7DDD7;
  /* Color for combined total shots */
}


.tournament_icon {
  position: absolute;
  top: 75px;
  left: 252px;
  display: flex;
  align-items: center;

}


/* <div class="headerBorder text-xs font-medium flex justify-center text-start pl-1.5 pt-0.5">
              <span class="whitespace-nowrap overflow-hidden text-ellipsis" style="color: #666666;">{{ match.matchType
              }}</span>
            </div> */
</style>
  