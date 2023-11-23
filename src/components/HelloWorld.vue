<template>
  <!-- Main Component -->
  <div class="flex flex-col py-2">
    <div class="flex justify-around py-2">
      <div class="flex">
        <div class="flex">
          <img style="width: 24px; height: 24px;" src="@/assets/tournament/jiaoQiu.png" />
          <span>{{ homeCornerKickNum }}</span>
        </div>
        <div class="flex">
          <img style="width: 24px; height: 24px;" src="@/assets/tournament/hongPai.png" />
          <span>{{ homeRedCardNum }}</span>
        </div>
        <div class="flex">
          <img style="width: 24px; height: 24px;" src="@/assets/tournament/huangPai.png" />
          <span>{{ homeYellowCardNum }}</span>
        </div>
      </div>
      <div class="flex items-center">
        <div class="flex items-center">
          <p class="pt-2">{{ homePossessionRate + '%' }}</p>
          <div class="team">
            <div class="stat-bar-left totalGrayBar border_leftTB "
              :style="{ width: (teamAPossessionRate + teamBPossessionRate) + '%' }"></div>
            <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamAPossessionRate + '%' }"></div>
          </div>
        </div>
        <div>控球率</div>
        <div class="flex items-center">
          <div class="team">
            <div class="stat-bar-right totalGrayBar border_rightTB " style="width: 100%;"></div>
            <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBPossessionRate + '%' }">
            </div>
          </div>
          <p class="pt-2">{{ awayPossessionRate + '%' }}</p>

        </div>
      </div>
      <div class="flex">

        <div class="flex">
          <img style="width: 24px; height: 24px;" src="@/assets/tournament/huangPai.png" />
          <span>{{ awayYellowCardNum }}</span>
        </div>
        <div class="flex">
          <img style="width: 24px; height: 24px;" src="@/assets/tournament/hongPai.png" />
          <span>{{ awayRedCardNum }}</span>
        </div>
        <div class="flex">
          <img style="width: 24px; height: 24px;" src="@/assets/tournament/jiaoQiu.png" />
          <span>{{ awayCornerKickNu }}</span>
        </div>

      </div>
    </div>
    <div class="flex justify-between py-2">
      <div class="flex items-center">
        <div class="flex items-center">
          <span class="pt-2">{{ homeAttackNum }}</span>
          <div class="team">
            <div class="stat-bar-left totalGrayBar border_leftTB" style="width: 100%;"></div>

            <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamAAttackNumber + '%' }"></div>
          </div>
        </div>
        <div>进攻</div>
        <div class="flex items-center">
          <div class="team">
            <div class="stat-bar-right totalGrayBar border_rightTB" style="width: 100%;"></div>

            <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBShotPercentage + '%' }">
            </div>
          </div>
          <span class="pt-2">{{ awayAttackNum }}</span>

        </div>
      </div>
      <div class="flex items-center">
        <div class="pt-2">
          <span>{{ teamAtotalShotNum }}</span>
          <span>{{ '(' + homeShootGoalNum + ')' }}</span>
        </div>
        <div class="team">
          <div class="stat-bar-left totalGrayBar border_leftTB " style="width: 100% "></div>
          <div class="stat-bar-left total-shots border_leftTB" :style="{ width: teamAtotalShotPercent + '%' }"></div>
          <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: something + '%' }"></div>
        </div>
        <div>射门(射正)</div>
        <div class="flex items-center">
          <div class="team">
            <div class="stat-bar-right totalGrayBar border_rightTB" style="width: 100%;"></div>
            <div class="stat-bar-right total-shotsB border_rightTB" :style="{ width: teamBtotalShotPercent + '%' }"></div>
            <div class="stat-bar-right shots-on-target border_rightTB" :style="{ width: test + '%' }"></div>
            <!-- <div class="stat-bar-left shots-on-targetA" :style="{ width: shotsOnTargetA + '%' }"></div> -->
          </div>
          <div class="pt-2">
            <span>{{ teamBtotalShotNum }}</span>
            <span>{{ "(" + awayShootGoalNum + ")" }}</span>
          </div>

        </div>
      </div>
    </div>
    <div class="flex justify-between py-2">
      <div class="flex items-center">
        <div class="flex items-center">
          <span class="pt-2">{{ homeAttackDangerNum }}</span>
          <div class="team">
            <div class="stat-bar-left totalGrayBar border_leftTB " style="width: 100% "></div>
            <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamADangerNum + '%' }"></div>
          </div>
        </div>
        <div>危险进攻</div>
        <div class="flex items-center">
          <div class="team">
            <div class="stat-bar-right totalGrayBar border_rightTB" style="width: 100%;"></div>

            <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBDangerNum + '%' }"></div>
            <!-- <div class="stat-bar-left shots-on-targetA" :style="{ width: shotsOnTargetA + '%' }"></div> -->
          </div>
          <span class="pt-2">{{ awayAttackDangerNum }}</span>
        </div>
      </div>
      <div class="flex items-center">
        <div class="flex items-center">
          <span class="pt-2">{{ homePenaltyNum }}</span>
          <div class="team">
            <div class="stat-bar-left totalGrayBar border_leftTB " style="width: 100% "></div>
            <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamAPenaltyNum + '%' }"></div>
          </div>
        </div>
        <div>点球</div>
        <div class="flex items-center">
          <div class="team">
            <div class="stat-bar-right totalGrayBar border_rightTB" style="width: 100%;"></div>

            <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBPenaltyNum + '%' }"></div>
            <!-- <div class="stat-bar-left shots-on-targetA" :style="{ width: shotsOnTargetA + '%' }"></div> -->
          </div>
          <span class="pt-2">{{ awayPenaltyNum }}</span>


        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      //homePossessionRate (控球率), awayPossessionRate (控球率)
      homePossessionRate: 60,
      awayPossessionRate: 40,

      //homeCornerKickNum (角球)，awayCornerKickNum(角球)
      homeCornerKickNum: 5,
      awayCornerKickNu: 1,
      //homeRedCardNum (红卡), awayRedCardNum(红卡)
      homeRedCardNum: 2,
      awayRedCardNum: 3,
      //homeYellowCardNum（黄卡), awayYellowCardNum(黄卡)
      homeYellowCardNum: 0,
      awayYellowCardNum: 1,
      //Home Attack Number (进攻)， Away Attack Number (进攻)
      homeAttackNum: 5,
      awayAttackNum: 10,

      //homeAttackDangerNum (危险进攻), awayAttackDangerNum (危险进攻)
      homeAttackDangerNum: 6,
      awayAttackDangerNum: 9,

      //homePenaltyNum (点球)，awayPenaltyNum(点球)
      homePenaltyNum: 6,
      awayPenaltyNum: 6,

      //homeShootGoalNum (射正), homeBiasNum (射偏) 
      homeShootGoalNum: 5,
      homeBiasNum: 0,

      //awayShootGoalNum(射正)， awayBiasNum(射偏)
      awayShootGoalNum: 2,
      awayBiasNum: 2,
      //Total 射门 homeShootGoalNum + homeBiasNum
      // homeShootGoalNum+homeBiasNum
      //awayShootGoalNum+awayBiasNum
    };
  },

  computed: {
    combinedTotal() {
      return (100 - (this.homeAttackNum + this.awayAttackNum)) * 100;
    },
    teamAPossessionRate() {
      return Math.round(this.homePossessionRate / (this.homePossessionRate + this.awayPossessionRate) * 100)
    },
    teamBPossessionRate() {
      return Math.round(this.awayPossessionRate / (this.homePossessionRate + this.awayPossessionRate) * 100)
    },
    teamAAttackNumber() {
      return Math.round(this.homeAttackNum / (this.homeAttackNum + this.awayAttackNum) * 100)
    },
    teamBShotPercentage() {
      return Math.round(this.awayAttackNum / (this.homeAttackNum + this.awayAttackNum) * 100)
    },
    teamADangerNum() {
      return Math.round(this.homeAttackDangerNum / (this.homeAttackDangerNum + this.awayAttackDangerNum) * 100)
    },
    teamBDangerNum() {
      return Math.round(this.awayAttackDangerNum / (this.homeAttackDangerNum + this.awayAttackDangerNum) * 100)
    },
    teamAPenaltyNum() {
      return Math.round(this.homePenaltyNum / (this.homePenaltyNum + this.awayPenaltyNum) * 100)
    },
    teamBPenaltyNum() {
      return Math.round(this.awayPenaltyNum / (this.homePenaltyNum + this.awayPenaltyNum) * 100)
    },
    teamAGoalNum() {
      return Math.round(this.homeShootGoalNum / (this.homeShootGoalNum + this.awayShootGoalNum) * 100)
    },
    teamBGoalNum() {
      return Math.round(this.awayShootGoalNum / (this.homeShootGoalNum + this.awayShootGoalNum) * 100)
    },
    teamAtotalShotNum() {
      return this.homeShootGoalNum + this.homeBiasNum
    }
    ,
    teamBtotalShotNum() {
      return this.awayShootGoalNum + this.awayBiasNum
    },
    teamBtotalShotPercent() {
      return Math.round(this.teamBtotalShotNum / (this.teamAtotalShotNum + this.teamBtotalShotNum) * 100)
    },

    teamAtotalShotPercent() {
      return Math.round(this.teamAtotalShotNum / (this.teamAtotalShotNum + this.teamBtotalShotNum) * 100)
    },

    something() {
      return (this.homeShootGoalNum / this.teamAtotalShotNum) * this.teamAtotalShotPercent
    },
    //2/6*25

    test() {
      return (this.awayShootGoalNum / this.teamBtotalShotNum) * this.teamBtotalShotPercent
    },
    // 50/100*67
  },
};
</script>

<style scoped>
.border_leftTB {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.border_rightTB {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.team {
  position: relative;
  width: 150px;
  padding: 20px;
}

.stat-bar-right {
  height: 20px;
  position: absolute;
  left: 0;
  bottom: 0;
  margin-bottom: 5px;
}

/* 左边的Bar */
.stat-bar-left {
  height: 20px;
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 5px;

}

.left-bar-color {
  background-color: #FDA24C;
}

.right-bar-color {
  background-color: #33BA53;
}

/* ============= */

.team-stats {
  display: flex;
  justify-content: space-around;
  margin: 20px;
}



.combined-total {
  text-align: center;
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

.shots-on-targetA {
  background-color: #33BA53;
  /* Darker color for shots on target */
}

.combined {
  background-color: #D7DDD7;
  /* Color for combined total shots */
}

.totalGrayBar {
  background-color: #D7DDD7;
  /* Color for combined total shots */
}

div {
  /* border: 1px solid red; */
}
</style>
