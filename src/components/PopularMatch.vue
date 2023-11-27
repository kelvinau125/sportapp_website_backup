<template>
  <!-- Overflow Setting -->
  <div class="flex gap-1   ">
    <div class="w-full flex-wrap" v-for="match in matchDetails" :key="match.matchDetails">
      <div @click="navigateTo(match.linkAddress)" class="border" style="width: 204px; height: 136px; border-radius: 8px;">
        <!-- 热门赛程 Header -->
        <div class="py-1.5 flex justify-between items-center rounded-t-lg"
          style="background-color: #D6F1DD; height: 30px;">
          <div class="headerContainer pl-2.5">
            <div class="headerBorder text-xs font-medium flex justify-center">
              <span>{{ match.matchType }}</span>
            </div>
          </div>
          <div class="text-xs font-normal">
            {{ match.time }}
          </div>
          <div class="pr-2" @click.stop="toUnfavourite(match)">
            <img v-if="match.favourite" src="@/assets/content/Favourite.png" />
            <img v-else src="@/assets/content/Unfavourite.png" alt="Favourite" />
          </div>

        </div>
        <!-- 热门赛程 Contents -->
        <div class="flex justify-between rounded-b-lg" style="background-color: white; height: 106px; ">
          <div class="flex flex-col justify-center items-center pb-3 w-full">
            <div class="text-base font-semibold "> {{ match.homeTeamScore }}</div>
            <div class="pt-2">
              <img src="@/assets/content/moneyBadge.png" />
            </div>
            <div class="pt-2">
              <span class="flex text-center text-xs font-normal text-grayText">{{ match.homeTeamName }}</span>
            </div>
          </div>
          <div class=" w-16 flex flex-col justify-start items-center py-2 ">
            <div class="font-medium text-sm pt-1 flex items-center justify-center pb-0.5"
              :class="{ 'statusStartBorder': match.status === '开', 'statusEndBorder': match.status === '终' }">{{
                match.status }}</div>
            <span class="pt-2 text-base font-semibold">VS</span>
          </div>
          <div class="flex flex-col justify-center items-center w-full pb-3">
            <div class="text-base font-semibold">{{ match.awayTeamScore }}</div>
            <div class="pt-2">
              <img src="@/assets/content/Badge.png" />
            </div>
            <div class="w-20 pt-2 overflow-hidden text-xs font-normal text-grayText"> {{ match.awayTeamName }}</div>

          </div>
        </div>
      </div>

    </div>

    <div @click="toAllMatchPage" class="flex flex-col justify-start items-center border cursor-pointer px-5 pt-8"
      style="width: 42px; height: 136px; background-color: #808F7E;">
      <div class="" style="width: 24px; height: 24px;">
        <img class="" src="@/assets/hello.png" alt="全部赛程" />
      </div>
      <div class=" flex text-center pt-5" style="width: 31px; height: 36px; ">
        <span class="text-xs font-medium text-white">全部赛程</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();

    const navigateTo = (linkAddress) => {
      // Navigating to the specified page
      router.push({ path: linkAddress });
    };
    const toAllMatchPage = () => {
      // Navigating
      router.push({ name: 'AllMatch' });
    };

    const matchDetails = ref([
      { matchType: '欧冠', date: '10月08日', time: '13:14', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite: false, linkAddress: '/', status: '开' },
      { matchType: '欧冠', date: '10月08日', time: '13:14', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite: false, linkAddress: '/live', status: '开' },
      { matchType: '欧冠', date: '10月08日', time: '13:14', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite: false, linkAddress: '/', status: '开' },
      { matchType: '欧冠', date: '10月08日', time: '13:14', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite: false, linkAddress: '/', status: '终' },
    ]);

    return {
      toAllMatchPage,
      matchDetails,
      navigateTo,
    };
  },
  methods: {
    toUnfavourite(matchDetails) {
      matchDetails.favourite = !matchDetails.favourite;
    }
  }
};
</script>
<style scoped>
.content {
  border: 2px solid red;
  width: 100%;
  height: 136px;
  margin: auto;
}

.teamContainer {
  width: 100%;
  height: 160px;
  margin: auto;
}

.border {
  width: 100%;
  /* border: 1px solid red; */
  border-radius: 8px;
}

.headerBorder {
  width: 41px;
  height: 20px;
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

.statusStartBorder {
  background-color: #EEFBEE;
  width: 28px;
  height: 28px;
  border-radius: 30px;
}

.statusEndBorder {
  background-color: #F5F5F5;
  width: 28px;
  height: 28px;
  border-radius: 30px;

}
</style>