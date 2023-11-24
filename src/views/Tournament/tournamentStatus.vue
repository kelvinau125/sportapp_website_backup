<template>
    <!-- Main Component -->
    <div class="flex flex-col py-2">
      <div class="overflow-hidden">
        <div class="flex justify-center">
          <div class="flex items-center">
            <div class="flex px-2 pb-1.5">
              <img style="width: 24px; height: 24px;" src="@/assets/tournament/jiaoQiu.png" />
              <span class="font-medium text-sm pt-1.5 px-2">{{ homeCornerKickNum }}</span>
            </div>
            <div class="flex px-2 pb-1.5">
              <img style="width: 24px; height: 24px;" src="@/assets/tournament/hongPai.png" />
              <span class="font-medium text-sm pt-1.5 px-2">{{ homeRedCardNum }}</span>
            </div>
            <div class="flex px-2 pb-1.5">
              <img style="width: 24px; height: 24px;" src="@/assets/tournament/huangPai.png" />
              <span class="font-medium text-sm pt-1.5 px-2">{{ homeYellowCardNum }}</span>
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex items-center">
              <p class=" font-medium text-sm pr-3">{{ homePossessionRate + '%' }}</p>
              <div class="team">
                <div class="stat-bar-left totalGrayBar border_leftTB "
                  :style="{ width: (teamAPossessionRate + teamBPossessionRate) + '%' }"></div>
                <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamAPossessionRate + '%' }"></div>
              </div>
            </div>
            <div>
              <span class="text-sm font-medium px-2.5">控球率</span>
            </div>
            <div class="flex items-center">
              <div class="team">
                <div class="stat-bar-right totalGrayBar border_rightTB " style="width: 100%;"></div>
                <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBPossessionRate + '%' }">
                </div>
              </div>
              <p class="font-medium text-sm pl-3 pr-1.5">{{ awayPossessionRate + '%' }}</p>
  
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex px-2 pb-1.5">
              <img style="width: 24px; height: 24px;" src="@/assets/tournament/huangPai.png" />
              <span class="font-medium text-sm pt-1.5 px-2">{{ awayYellowCardNum }}</span>
            </div>
            <div class="flex px-2 pb-1.5">
              <img style="width: 24px; height: 24px;" src="@/assets/tournament/hongPai.png" />
              <span class="font-medium text-sm pt-1.5 px-2">{{ awayRedCardNum }}</span>
            </div>
            <div class="flex px-2 pb-1.5">
              <img style="width: 24px; height: 24px;" src="@/assets/tournament/jiaoQiu.png" />
              <span class="font-medium text-sm pt-1.5 px-2">{{ awayCornerKickNu }}</span>
            </div>
  
          </div>
        </div>
        <div class="flex justify-between">
          <div class="flex justify-between w-full" >
            <div class="">
              <div class="flex items-center">
                <span class="font-medium text-sm pr-2">{{ homeAttackNum }}</span>
                <div class="team">
                  <div class="stat-bar-left totalGrayBar border_leftTB" style="width: 100%;"></div>
  
                  <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamAAttackNumber + '%' }"></div>
                </div>
              </div>
              <div class="flex items-center">
                <span class="font-medium text-sm pr-2">{{ homeAttackDangerNum }}</span>
                <div class="team">
                  <div class="stat-bar-left totalGrayBar border_leftTB " style="width: 100% "></div>
                  <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamADangerNum + '%' }"></div>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-center justify-around">
              <span class="font-medium text-sm">进攻</span>
              <span class="font-medium text-sm">危险进攻</span>
            </div>
            <div class="">
              <div class="flex items-center">
                <div class="team">
                  <div class="stat-bar-right totalGrayBar border_rightTB" style="width: 100%;"></div>
  
                  <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBShotPercentage + '%' }">
                  </div>
                </div>
                <span class="pl-2.5 font-medium text-sm">{{ awayAttackNum }}</span>
              </div>
              <div class="flex items-center">
                <div class="team">
                  <div class="stat-bar-right totalGrayBar border_rightTB" style="width: 100%;"></div>
  
                  <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBDangerNum + '%' }"></div>
                </div>
                <span class="font-medium text-sm pl-2.5">{{ awayAttackDangerNum }}</span>
              </div>
            </div>
          </div>
          <div class="w-1/4" ></div>
          <!-- HALo -->
          <div class="flex justify-between w-full" >
            <div class="">
              <div class="flex items-center">
                <span class="font-medium text-sm">{{ teamAtotalShotNum }}</span>
                <span class="font-medium text-sm pr-2">{{ '(' + homeShootGoalNum + ')' }}</span>
                <div class="team">
                  <div class="stat-bar-left totalGrayBar border_leftTB " style="width: 100% "></div>
                  <div class="stat-bar-left total-shots border_leftTB" :style="{ width: teamAtotalShotPercent + '%' }">
                  </div>
                  <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: something + '%' }"></div>
                </div>
              </div>
              <div class="flex items-center">
                <span class="font-medium text-sm px-3">{{ homePenaltyNum }}</span>
                <div class="team">
                  <div class="stat-bar-left totalGrayBar border_leftTB " style="width: 100% "></div>
                  <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamAPenaltyNum + '%' }"></div>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-center justify-around">
              <span class="font-medium text-sm pl-1.5">射门(射正)</span>
              <span class="font-medium text-sm ">点球</span>
            </div>
            <div class="">
              <div class="flex items-center">
                <div class="team">
                  <div class="stat-bar-right totalGrayBar border_rightTB" style="width: 100%;"></div>
                  <div class="stat-bar-right total-shotsB border_rightTB" :style="{ width: teamBtotalShotPercent + '%' }">
                  </div>
                  <div class="stat-bar-right shots-on-target border_rightTB" :style="{ width: test + '%' }"></div>
                </div>
                <span class="font-medium text-sm pl-2.5">{{ teamBtotalShotNum }}</span>
                <span class="font-medium text-sm">{{ "(" + awayShootGoalNum + ")" }}</span>
              </div>
              <div class="flex items-center">
                <div class="team ">
                  <div class="stat-bar-right totalGrayBar border_rightTB" style="width: 100%;"></div>
  
                  <div class="stat-bar-right right-bar-color border_rightTB" :style="{ width: teamBPenaltyNum + '%' }">
                  </div>
                </div>
                <span class="font-medium text-sm pl-2.5">{{ awayPenaltyNum }}</span>
              </div>
            </div>
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
        homeBiasNum: 1,
  
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
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
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
  </style>
  