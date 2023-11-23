<template>
  <div class="team-stats">
    <div class="team">
      <span>{{ teamAAttackNumber }}</span>
      <div class="stat-bar-left totalGrayBar" style="width: 100%;"></div>

      <div class="stat-bar-left total-shotsA" :style="{ width: teamAAttackNumber + '%' }"></div>
      <!-- <div class="stat-bar-left shots-on-targetA" :style="{ width: shotsOnTargetA + '%' }"></div> -->
    </div>

    <div class="team">
      <div>{{ teamBShotPercentage }}</div>
      <div class="stat-bar-right totalGrayBar" style="width: 100%;"></div>

      <div class="stat-bar-right total-shots" :style="{ width: teamBShotPercentage + '%' }"></div>
      <!-- <div class="stat-bar shots-on-target" :style="{ width: shotsOnTargetB + '%' }"></div> -->
    </div>

 
    <!-- MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA -->
  </div>
  <!-- 控球率 -->
  <div class="team">
    <div>{{ homePossessionRate + '%' }}</div>
    <div class="stat-bar-left totalGrayBar border_leftTB " :style="{width: (teamAPossessionRate+teamBPossessionRate) +'%'}"></div>
    <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamAPossessionRate + '%' }"></div>
  </div>
  <div class="team">
    <div>{{ awayPossessionRate + '%' }}</div>
    <div class="stat-bar-left totalGrayBar border_rightTB " style="width: 100%;"></div>
    <div class="stat-bar-left right-bar-color border_rightTB" :style="{ width: teamBPossessionRate + '%' }"></div>
  </div>

  <div>

  </div>

</template>

<script>
export default {
  data() {
    return {

      homeAttackNum: 26, // Replace with your actual data
      awayAttackNum: 8, // Replace with your actual data

      homePossessionRate: 60,
      awayPossessionRate: 40,

      //Home Attack Number (进攻)， Away Attack Number (进攻)
      //homeAttackDangerNum (危险进攻), awayAttackDangerNum (危险进攻)
      //homePossessionRate (控球率), awayPossessionRate (控球率)
      //homeShootGoalNum (射正), awayShootGoalNum(射正)
      //homeBiasNum (射偏)， awayBiasNum(射偏)
      //Total 射门 homeShootGoalNum + homeBiasNum
      //homeCornerKickNum (角球)，awayCornerKickNum(角球)
      //homeRedCardNum (红卡), awayRedCardNum(红卡)
      //homeYellowCardNum（黄卡), awayYellowCardNum(黄卡)
      //homePenaltyNum (点球)，awayPenaltyNum(点球)

    };
  },

  computed: {
    combinedTotal() {
      return (100 - (this.homeAttackNum + this.awayAttackNum)) * 100;
    },
    teamAPossessionRate(){
      return this.homePossessionRate/( this.homePossessionRate + this.awayPossessionRate) * 100
    },
    teamBPossessionRate(){
      return this.awayPossessionRate/( this.homePossessionRate + this.awayPossessionRate) * 100
    },
    teamAAttackNumber() {
      return Math.round(this.homeAttackNum / (this.homeAttackNum + this.awayAttackNum) * 100)
    },
    teamBShotPercentage() {
      return Math.round(this.awayAttackNum / (this.homeAttackNum + this.awayAttackNum) * 100)
    },
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

.left-bar-color{
  background-color: #FDA24C;
}

.right-bar-color{
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
  background-color: #33BA53;
  /* Lighter color for total shots */
}

.total-shotsA {
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
  border: 1px solid red;
}
</style>
