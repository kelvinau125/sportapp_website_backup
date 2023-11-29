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
                  :style="{ width: 100 + '%' }"></div>
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
                  <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamAGoalPercentage + '%' }"></div>
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
                  <div class="stat-bar-right shots-on-target border_rightTB" :style="{ width: teamBGoalPercentage + '%' }"></div>
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
  // import to run the login function
  import { getFootballMatchbyId } from '@/service/apiFootBallMatchProvder.js';
  
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
        if(totalAttack !== 0){
          return Math.round(this.homeAttackNum / (totalAttack) * 100)
        }else{
          return 0;
        }
      },
      teamBShotPercentage() {
        const totalAttack = this.homeAttackNum + this.awayAttackNum;
        if(totalAttack !==0){
          return Math.round(this.awayAttackNum / (totalAttack) * 100)
        }else{
          return 0;
        }
      },
      teamADangerNum() {
        const totalDanger = this.homeAttackDangerNum + this.awayAttackDangerNum;
        if(totalDanger !==0){
          return Math.round(this.homeAttackDangerNum / (totalDanger) * 100)
        }else{
          return 0;
        }
      },
      teamBDangerNum() {
        const totalDanger = this.homeAttackDangerNum + this.awayAttackDangerNum;
        if(totalDanger !==0){
          return Math.round(this.awayAttackDangerNum / (totalDanger) * 100)
        }else{
          return 0;
        }
      },
      teamAPenaltyNum() {
        const totalPenalty = this.homePenaltyNum + this.awayPenaltyNum;
        if(totalPenalty !==0){
          return Math.round(this.homePenaltyNum / (totalPenalty) * 100)

        }else{
          return 0;
        }
      },
      teamBPenaltyNum() {
        const totalPenalty = this.homePenaltyNum + this.awayPenaltyNum;
        if(totalPenalty !==0){
          return Math.round(this.awayPenaltyNum / (totalPenalty) * 100)
        }else{
          return 0;
        }
      },
      teamAGoalNum() {
        const totalGoalNum = this.homeShootGoalNum + this.awayShootGoalNum;
        if(totalGoalNum !==0) {
          return Math.round(this.homeShootGoalNum / (totalGoalNum) * 100)
        }else{
          return 0;
        }
      },
      teamBGoalNum() {
        const totalGoalNum = this.homeShootGoalNum + this.awayShootGoalNum
        if( totalGoalNum !== 0){
          return Math.round(this.awayShootGoalNum / (totalGoalNum) * 100)
        }else{
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
        if(totalShotPercent!==0){
          return Math.round(this.teamBtotalShotNum / (totalShotPercent) * 100)
        }else{
          return 0;
        }
      },
  
      teamAtotalShotPercent() {
        const totalShotPercent = this.teamAtotalShotNum + this.teamBtotalShotNum;
        if(totalShotPercent !==0){
          return Math.round(this.teamAtotalShotNum / (totalShotPercent) * 100)
        }else{
          return 0;
        }
      },
  
      teamAGoalPercentage() {
        if(this.homeShootGoalNum !==0){
          return (this.homeShootGoalNum / this.teamAtotalShotNum) * this.teamAtotalShotPercent

        }else{
          return 0;
        }
       
      },
      
      teamBGoalPercentage() {
        if(this.awayShootGoalNum !== 0){
          return (this.awayShootGoalNum / this.teamBtotalShotNum) * this.teamBtotalShotPercent
        }else{
          return 0;
        }
      },
    },

    methods: {
    
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
  