<template>
  <!-- Overflow Setting -->
  <div class="flex gap-2 teamContainer overflow-auto ">
    <div class="w-full" v-for="match in matchDetails" :key="match.matchDetails"  >
      <div class="border" style="width: 100%; height: 136px;">
        <!-- 热门赛程 Header -->
        <div class="py-2 px-4 flex justify-between" style="background-color: #D6F1DD;">
          <div class="headerContainer">
            <div class="headerBorder text-sm flex justify-center">
              <span>{{ match.matchType}}</span>
            </div>
          </div>
          <div class="text-base">
            {{ match.time }}
          </div>
          <div>
            <img src="../assets/content/Favourite.png" />
          </div>
        </div>
        <!-- 热门赛程 Contents -->
        <div class="flex justify-between" style="background-color: white;">
          <div class="flex flex-col items-center">
            <div> {{ match.homeTeamScore }}</div>
            <div>
              <img src="../assets/content/moneyBadge.png" />
            </div>
            <div class="w-20 overflow-hidden">{{ match.homeTeamName }}</div>
          </div>
          <div class=" w-16 flex flex-col items-center py-2">
            <div>开</div>
            <div class="pt-1">VS</div>
          </div>
          <div class="flex flex-col items-center">
            <div>{{ match.awayTeamScore}}</div>
            <div>
              <img src="../assets/content/Badge.png" />
            </div>
            <div class="w-20 overflow-hidden"> {{  match.awayTeamName }}</div>

          </div>
        </div>
      </div>
    </div>

    <!-- <ButtonCom @click="toAllMatchPage" class="border h-full flex flex-col justify-center items-center" style="width: 42px ; height: 136px;">
      <div class="" style="width: 24px; height: 24px;" >
        <img class="" src="../assets/hello.png" alt="全部赛程" />
      </div>
      <div class="">
          <p class="text-sm font-medium">全部赛程</p>
      </div>
    </ButtonCom> -->
    <a href="/allMatch" class="all_match_btn" style="width: 175px; height: 136px;">
      <!-- <div style="width: 42px ; height: 136px; justify-content: center; align-items: center;" class=" flex flex-col bg-green-500  h-full justify-center">
       <div style="width: 24px; height: 24px;">
        <img class="" src="../assets/hello.png" alt="全部赛程" /> 

        </div>
        <div>
          <span class="text-sm font-medium">全部赛程</span>
        </div>
      </div> -->
    </a>
    

      <!-- <a href="/allMatch" class="bg-green-500 border h-full flex flex-col justify-center items-center" >
      <div class="" style="width: 24px; height: 24px;" >
        <img class="" src="../assets/hello.png" alt="全部赛程" />
      </div>
      <div class="">
            <p class="text-sm font-medium">全部赛程</p>
      </div>
    </a> -->


      <!-- <ButtonCom @click="toAllMatchPage" class="border h-full flex flex-col justify-center items-center">
        <div class="button">
          <img class="" src="../assets/hello.png" alt="全部赛程" />
        </div>
        <div>
          <p>全部赛程</p>
        </div>
      </ButtonCom> -->
  </div>

    
</template>

<script setup>
// import ButtonCom from '../components/ButtonPress.vue'
// import { useRouter } from 'vue-router'


// const router = useRouter();

// const toAllMatchPage = () => {
//   //Navigating
//   // router.push({ name: 'allMatch' })
//   router.push({ name: 'AllMatch' })
// }

const matchDetails = [
{ matchType: '欧冠', date: '10月08日', time: '13:14',  homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0',awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime:'null'},
{ matchType: '欧冠', date: '10月08日', time: '13:14',  homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0',awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime:'null'},
{ matchType: '欧冠', date: '10月08日', time: '13:14',  homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0',awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime:'null'},
{ matchType: '欧冠', date: '10月08日', time: '13:14',  homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0',awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime:'null'},

]

</script>

<style scoped>
.content{
  border: 2px solid red;
  width: 100%;
  height: 136px;
  margin: auto;
}

.teamContainer{
  width: 100%;
  height: 180px;
  margin: auto;
}

.teamContainer .border{
  width: 100%;
  border: 1px solid rgba(156, 163, 175, 0.5);
  border-radius: 0.375rem;
  /* display: flex; */
}

.headerBorder{
  width: 45px;
  background-color: white;
  border-radius: 49px;
}

.button {
  right: 5px;
  background: none;
  border: 1px solid red;
  cursor: pointer;
}

.all_match_btn {
    /* position: relative; */
    background: url('@/assets/allMatchButton.png');
    background-position: 50%;
    background-size: 100% 100%;
    background-repeat: no-repeat;

}
</style>