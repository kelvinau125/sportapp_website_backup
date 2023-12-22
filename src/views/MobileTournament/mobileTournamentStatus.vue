<template>
  <!-- Main Component -->
  <div class="flex py-2 w-[375px] border-2" v-show="showfootballstatus">
    <div class="w-full border-2 statusContainer">
      <div class="flex justify-between px-4">
        <div class="flex items-center">
          <div class="flex pb-1.5 md:px-3">
            <img style="width: 24px; height: 24px" src="@/assets/tournament/jiaoQiu.png" />
            <span class="font-medium text-sm pt-1.5 pr-1">{{ homeCornerKickNum }}</span>
          </div>
          <div class="flex pb-1.5 md:px-3">
            <img style="width: 24px; height: 24px" src="@/assets/tournament/hongPai.png" />
            <span class="font-medium text-sm pt-1.5 pr-1">{{ homeRedCardNum }}</span>
          </div>
          <div class="flex pb-1.5 md:px-3">
            <img style="width: 24px; height: 24px" src="@/assets/tournament/huangPai.png" />
            <span class="font-medium text-sm pt-1.5 pr-1">{{ homeYellowCardNum }}</span>
          </div>
        </div>
        <div class="flex items-center">
          <div class="flex pb-1.5 md:px-3">
            <img style="width: 24px; height: 24px" src="@/assets/tournament/huangPai.png" />
            <span class="font-medium text-sm pt-1.5 pr-1">{{ awayYellowCardNum }}</span>
          </div>
          <div class="flex pb-1.5 md:px-3">
            <img style="width: 24px; height: 24px" src="@/assets/tournament/hongPai.png" />
            <span class="font-medium text-sm pt-1.5 pr-1">{{ awayRedCardNum }}</span>
          </div>
          <div class="flex pb-1.5 md:px-3">
            <img style="width: 24px; height: 24px" src="@/assets/tournament/jiaoQiu.png" />
            <span class="font-medium text-sm pt-1.5 pr-1">{{ awayCornerKickNu }}</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <div class="flex items-center justify-center border-2 w-[330px]">
          <div class="flex items-center">
            <p class="font-medium md:text-sm text-10px md:pr-2 pr-1">
              {{ homePossessionRate + "%" }}
            </p>
            <div class="team relative w-[50px] p-[20px]">
              <div class="stat-bar-left totalGrayBar border_leftTB" :style="{ width: 100 + '%' }"></div>
              <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamAPossessionRate + '%' }"></div>
            </div>
          </div>
          <div class="flex justify-center w-[80px] border-2 border-red-500">
            <span class="md:text-sm text-xs font-medium md:px-2.5 px-1">{{
              $t("Possession")
            }}</span>
          </div>
          <div class="flex items-center">
            <div class="team relative w-[50px] p-[20px]">
              <div class="stat-bar-right totalGrayBar border_rightTB" style="width: 100%"></div>
              <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBPossessionRate + '%' }">
              </div>
            </div>
            <p class="font-medium md:text-sm text-10px pl-3 pr-1">
              {{ awayPossessionRate + "%" }}
            </p>
          </div>
        </div>


        <div class="flex items-center">
          <div class="flex items-center">
            <p class="font-medium md:text-sm text-10px md:pr-2 pr-1">
              {{ homeAttackDangerNum }}
            </p>
            <div class="team relative w-[50px] p-[20px]">
              <div class="stat-bar-left totalGrayBar border_leftTB" :style="{ width: 100 + '%' }"></div>
              <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamADangerNum + '%' }"></div>
            </div>
          </div>
          <div class="flex justify-center w-[80px] border-2 border-red-500">
            <span class="md:text-sm text-xs font-medium md:px-2.5 px-1">{{
              $t("Danger")
            }}</span>
          </div>
          <div class="flex items-center">
            <div class="team relative w-[50px] p-[20px]">
              <div class="stat-bar-right totalGrayBar border_rightTB" style="width: 100%"></div>
              <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBDangerNum + '%' }">
              </div>
            </div>
            <p class="font-medium md:text-sm text-10px pl-3 pr-1">
              {{ awayAttackDangerNum }}
            </p>
          </div>
        </div>


        <div class="flex items-center">
          <div class="flex items-center">
            <p class="font-medium md:text-sm text-10px md:pr-2 pr-1">
              {{ homeAttackNum }}
            </p>
            <div class="team relative w-[50px] p-[20px]">
              <div class="stat-bar-left totalGrayBar border_leftTB" :style="{ width: 100 + '%' }"></div>
              <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamAAttackNumber + '%' }"></div>
            </div>
          </div>
          <div>
            <span class="md:text-sm text-xs font-medium md:px-2.5 px-1">{{
              $t("Attack")
            }}</span>
          </div>
          <div class="flex items-center">
            <div class="team relative w-[50px] p-[20px]">
              <div class="stat-bar-right totalGrayBar border_rightTB" style="width: 100%"></div>
              <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBShotPercentage + '%' }">
              </div>
            </div>
            <p class="font-medium md:text-sm text-10px pl-3 pr-1">
              {{ awayAttackNum }}
            </p>
          </div>
        </div>

        <div class="flex items-center">
          <div class="flex items-center">
            <p class="font-medium md:text-sm text-10px md:pr-2 pr-1">
              {{ homePenaltyNum }}
            </p>
            <div class="team relative w-[50px] p-[20px]">
              <div class="stat-bar-left totalGrayBar border_leftTB" :style="{ width: 100 + '%' }"></div>
              <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamAPenaltyNum + '%' }"></div>
            </div>
          </div>
          <div>
            <span class="md:text-sm text-xs font-medium md:px-2.5 px-1">{{
              $t("Penalty")
            }}</span>
          </div>
          <div class="flex items-center">
            <div class="team relative w-[50px] p-[20px]">
              <div class="stat-bar-right totalGrayBar border_rightTB" style="width: 100%"></div>
              <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBPenaltyNum + '%' }">
              </div>
            </div>
            <p class="font-medium md:text-sm text-10px pl-3 pr-1">
              {{ awayPenaltyNum }}
            </p>
          </div>
        </div>

        <div class="flex items-center">
          <div class="flex items-center">

            <div class="flex items-center">
              <div class="flex items-center">
                <p class="font-medium md:text-sm text-10px pl-1">
                  {{ teamAtotalShotNum }}
                </p>
                <p class="font-medium md:text-sm text-10px md:pr-2 pr-0.5">
                  {{ "(" + homeShootGoalNum + ")" }}
                </p>
              </div>
              <div class="teamDown relative w-[50px] p-[20px]">
                <div class="stat-bar-left totalGrayBar border_leftTB" style="width: 100%"></div>
                <div class="stat-bar-left total-shots border_leftTB" :style="{ width: teamAtotalShotPercent + '%' }">
                </div>
                <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamAGoalPercentage + '%' }">
                </div>
              </div>
            </div>
          </div>

          <div>
            <p class="font-medium md:text-sm text-10px">
              {{ $t("Shoot") + "(" + $t("Score") + ")" }}
            </p>
          </div>

          <div class="flex items-center">
            <div class="flex items-center">
              <div class="teamDown relative w-[50px] p-[20px]">
                <div class="stat-bar-right totalGrayBar border_rightTB" style="width: 100%"></div>
                <div class="stat-bar-right total-shotsB border_rightTB" :style="{ width: teamBtotalShotPercent + '%' }">
                </div>
                <div class="stat-bar-right shots-on-target border_rightTB" :style="{ width: teamBGoalPercentage + '%' }">
                </div>
              </div>

              <div class="flex items-center">
                <p class="font-medium md:text-sm text-10px pl-1">
                  {{ teamBtotalShotNum }}
                </p>
                <p class="font-medium md:text-sm text-10px">
                  {{ "(" + awayShootGoalNum + ")" }}
                </p>
              </div>
            </div>
          </div>
        </div>


      </div>

    </div>
  </div>
</template>

<script>
// import to run the login function
import { getFootballMatchbyId } from "@/service/apiFootBallMatchProvider.js";

export default {
  props: {
    tournamentID: String,
    showfootballstatus: Boolean,
  },

  async mounted() {
    // --------------------------- call the tournment api --------------------------------------

    this.getTournamentDetails = await getFootballMatchbyId(
      this.tournamentID,
      this.$i18n.locale === "ZH" ? true : false
    );

    if (this.getTournamentDetails !== null) {
      //homePossessionRate (控球率), awayPossessionRate (控球率)
      this.homePossessionRate =
        parseInt(this.getTournamentDetails["homePossessionRate"]) || 0;
      this.awayPossessionRate =
        parseInt(this.getTournamentDetails["awayPossessionRate"]) || 0;

      //homeCornerKickNum (角球)，awayCornerKickNum(角球)
      this.homeCornerKickNum =
        parseInt(this.getTournamentDetails["homeCornerKickNum"]) || 0;
      this.awayCornerKickNum =
        parseInt(this.getTournamentDetails["awayCornerKickNum"]) || 0;

      //homeRedCardNum (红卡), awayRedCardNum(红卡)
      this.homeRedCardNum = parseInt(this.getTournamentDetails["homeRedCardNum"]) || 0;
      this.awayRedCardNum = parseInt(this.getTournamentDetails["awayRedCardNum"]) || 0;

      //homeYellowCardNum（黄卡), awayYellowCardNum(黄卡)
      this.homeYellowCardNum =
        parseInt(this.getTournamentDetails["homeYellowCardNum"]) || 0;
      this.awayYellowCardNum =
        parseInt(this.getTournamentDetails["awayYellowCardNum"]) || 0;

      //Home Attack Number (进攻)， Away Attack Number (进攻)
      this.homeAttackNum = parseInt(this.getTournamentDetails["homeAttackNum"]) || 0;
      this.awayAttackNum = parseInt(this.getTournamentDetails["awayAttackNum"]) || 0;

      //homeAttackDangerNum (危险进攻), awayAttackDangerNum (危险进攻)
      this.homeAttackDangerNum =
        parseInt(this.getTournamentDetails["homeAttackDangerNum"]) || 0;
      this.awayAttackDangerNum =
        parseInt(this.getTournamentDetails["awayAttackDangerNum"]) || 0;

      //homePenaltyNum (点球)，awayPenaltyNum(点球)
      this.homePenaltyNum = parseInt(this.getTournamentDetails["homePenaltyNum"]) || 0;
      this.awayPenaltyNum = parseInt(this.getTournamentDetails["awayPenaltyNum"]) || 0;

      //homeShootGoalNum (射正), homeBiasNum (射偏)
      this.homeShootGoalNum =
        parseInt(this.getTournamentDetails["homeShootGoalNum"]) || 0;
      this.homeBiasNum = parseInt(this.getTournamentDetails["homeBiasNum"]) || 0;

      //awayShootGoalNum(射正)， awayBiasNum(射偏)
      this.awayShootGoalNum =
        parseInt(this.getTournamentDetails["awayShootGoalNum"]) || 0;
      this.awayBiasNum = parseInt(this.getTournamentDetails["awayBiasNum"]) || 0;
    }
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
        return Math.round((this.homeAttackNum / totalAttack) * 100);
      } else {
        return 0;
      }
    },
    teamBShotPercentage() {
      const totalAttack = this.homeAttackNum + this.awayAttackNum;
      if (totalAttack !== 0) {
        return Math.round((this.awayAttackNum / totalAttack) * 100);
      } else {
        return 0;
      }
    },
    teamADangerNum() {
      const totalDanger = this.homeAttackDangerNum + this.awayAttackDangerNum;
      if (totalDanger !== 0) {
        return Math.round((this.homeAttackDangerNum / totalDanger) * 100);
      } else {
        return 0;
      }
    },
    teamBDangerNum() {
      const totalDanger = this.homeAttackDangerNum + this.awayAttackDangerNum;
      if (totalDanger !== 0) {
        return Math.round((this.awayAttackDangerNum / totalDanger) * 100);
      } else {
        return 0;
      }
    },
    teamAPenaltyNum() {
      const totalPenalty = this.homePenaltyNum + this.awayPenaltyNum;
      if (totalPenalty !== 0) {
        return Math.round((this.homePenaltyNum / totalPenalty) * 100);
      } else {
        return 0;
      }
    },
    teamBPenaltyNum() {
      const totalPenalty = this.homePenaltyNum + this.awayPenaltyNum;
      if (totalPenalty !== 0) {
        return Math.round((this.awayPenaltyNum / totalPenalty) * 100);
      } else {
        return 0;
      }
    },
    teamAGoalNum() {
      const totalGoalNum = this.homeShootGoalNum + this.awayShootGoalNum;
      if (totalGoalNum !== 0) {
        return Math.round((this.homeShootGoalNum / totalGoalNum) * 100);
      } else {
        return 0;
      }
    },
    teamBGoalNum() {
      const totalGoalNum = this.homeShootGoalNum + this.awayShootGoalNum;
      if (totalGoalNum !== 0) {
        return Math.round((this.awayShootGoalNum / totalGoalNum) * 100);
      } else {
        return 0;
      }
    },
    teamAtotalShotNum() {
      return this.homeShootGoalNum + this.homeBiasNum;
    },
    teamBtotalShotNum() {
      return this.awayShootGoalNum + this.awayBiasNum;
    },
    teamBtotalShotPercent() {
      const totalShotPercent = this.teamAtotalShotNum + this.teamBtotalShotNum;
      if (totalShotPercent !== 0) {
        return Math.round((this.teamBtotalShotNum / totalShotPercent) * 100);
      } else {
        return 0;
      }
    },

    teamAtotalShotPercent() {
      const totalShotPercent = this.teamAtotalShotNum + this.teamBtotalShotNum;
      if (totalShotPercent !== 0) {
        return Math.round((this.teamAtotalShotNum / totalShotPercent) * 100);
      } else {
        return 0;
      }
    },

    teamAGoalPercentage() {
      if (this.homeShootGoalNum !== 0) {
        return (
          (this.homeShootGoalNum / this.teamAtotalShotNum) * this.teamAtotalShotPercent
        );
      } else {
        return 0;
      }
    },

    teamBGoalPercentage() {
      if (this.awayShootGoalNum !== 0) {
        return (
          (this.awayShootGoalNum / this.teamBtotalShotNum) * this.teamBtotalShotPercent
        );
      } else {
        return 0;
      }
    },
  },

  methods: {},
};
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
}

@media (min-width: 640px) {
  .team {
    position: relative;
    width: 120px;
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
}

.border_leftTB {
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.border_rightTB {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

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

.left-bar-color {
  background-color: #fda24c;
}

.right-bar-color {
  background-color: #33ba53;
}

.total-shots {
  opacity: 0.4;
  background-color: #fda24c;
  /* Lighter color for total shots */
}

.total-shotsB {
  opacity: 0.4;
  background-color: #33ba53;
  /* Lighter color for total shots */
}

.shots-on-target {
  background-color: #33ba53;
  /* Darker color for shots on target */
}

.totalGrayBar {
  background-color: #d7ddd7;
  /* Color for combined total shots */
}

.tournament_icon {
  position: absolute;
  top: 75px;
  left: 252px;
  display: flex;
  align-items: center;
}
</style>
