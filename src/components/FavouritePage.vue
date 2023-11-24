<template>
  <BackgroundImage>
    <div class="schedule_list">
      <div class="flex justify-between my-5 py-1.5 date-slider" style="height: 46px;">
        <div class=" flex justify-center" style="height: 32px; width: 17px; background-color: #808F7E; border-radius: 8px;">
          <button @click="prevWeek">
            <img src="../assets/toLeft.png" alt="Previous Week" class="" />
          </button>
        </div>
        <div @click="selectDate(day)" v-for="day in week" :key="day" class="date-item hover:bg-hoverGreen px-0.5">
          <div class="font-medium text-sm">{{ formatDay(day) }}</div>
          <div class="day-of-week font-medium text-xs">{{ $t(formatDayOfWeek(day)) }}</div>
        </div>
        <div class="bg-green-500 flex justify-center" style="height: 32px; width: 17px; background-color: #808F7E;border-radius: 8px;">
          <button @click="nextWeek">
            <img class="" src="../assets/toRight.png" alt="Next Week" />
          </button>
        </div>
      </div>
      <div v-if="selectedDate">
        <h2>Content for {{ formatDay(selectedDate) }}</h2>
        <p>Day of the week: {{ formatDayOfWeek(selectedDate) }}</p>
        <!-- Display content specific to the selected date here -->
      </div>

      <div class="schedule_detail">
        <div class="schedule_detail_box">
          <ul v-for="match in matchDetails" :key="match.matchDetails">
            <li @click="toAllMatchPage" class="max-w-full h-52 bg-white">
              <div class="conten_box">
                <div class="flex justify-between">
                  <div class="flex items-center">
                    <div class="pr-2">
                      <img src="../assets/favourite/icon.png" />
                    </div>
                    <div class="border flex justify-center">
                      <span class="text-xs" style="color: #666666;">欧冠</span>
                    </div>
                  </div>
                  <div @click.stop="toUnfavourite(match)">
                    <img v-if="match.favourite" src="../assets/content/Favourite.png" />
                    <img v-else src="../assets/content/Unfavourite.png" alt="Favourite" />
                  </div>
                </div>
                <div class="flex justify-between">
                  <div class="flex items-end">
                    <div class="pr-5 font-normal text-xs " style="color: #999999;">
                      <span>{{ match.date }}</span>
                    </div>
                    <div class="font-semibold text-xs">
                      <span>{{ match.time }}</span>
                    </div>
                  </div>
                  <div class="flex">
                    <div class="flex items-center">
                      <div class="pr-3">
                        <span class="text-lg font-semibold">{{ match.homeTeamName }}</span>
                      </div>
                      <div>
                        <img src="../assets/favourite/favTeamIcon.png" />
                      </div>
                    </div>
                    <div class="flex flex-col px-5 items-center">
                      <div class="font-semibold text-2xl px-2">
                        <span>{{ match.homeTeamScore }}</span>
                        <span class="px-2">-</span>
                        <span>{{ match.awayTeamScore }}</span>
                      </div>
                      <div class="font-medium text-xs" style="color: #999999;">
                        <span>{{ match.overTime }}</span>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div>
                        <img src="../assets/favourite/favTeamIcon.png" />
                      </div>
                      <div class="pl-3">
                        <span class="text-lg font-semibold">{{ match.awayTeamName }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="pt-2">
                    <img src="../assets/favourite/ended.png" />
                  </div>
                </div>
              </div>

            </li>
          </ul>
        </div>
      </div>

    </div>
  </BackgroundImage>
</template>

<script>
import BackgroundImage from '@/components/BackGround.vue'
import { addDays, startOfWeek, format, isToday } from 'date-fns';
import { ref } from 'vue'

export default {
  components: {
    BackgroundImage
  },
  data() {
    return {
      currentDate: ref(new Date()),
      daysToShow: ref(7),
      selectedDate: ref(null),
      matchDetails: [
        { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite:true },
        { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite:true },
        { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite:true },
        { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite:false },
        { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite:true },
        { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite:false },
        { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite:true },
        { matchType: '欧冠', date: '10月08日', time: '00:00', homeTeamName: 'CX Team', homeTeamIcon: 'homeTeamIcon', homeTeamScore: '0', awayTeamName: 'Shawn Team', awayTeamIcon: 'awayTeamIcon', awayTeamScore: '0', overTime: 'null', favourite:true },
      ],
      toFavourite: true,
    };
  },
  computed: {
    week() {
      const startDate = startOfWeek(this.currentDate, { weekStartsOn: 1 });
      return Array.from({ length: this.daysToShow }, (_, index) => addDays(startDate, index));
    }
  },
  methods: {
    formatDay(date) {
      return format(date, 'MM/dd');
    },
    formatDayOfWeek(date) {
      return isToday(date) ? 'Today' : format(date, 'EEEE');
    },
    prevWeek() {
      this.currentDate = addDays(this.currentDate, -7);
    },
    nextWeek() {
      this.currentDate = addDays(this.currentDate, 7);
    },
    selectDate(date) {
      this.selectedDate = date;
      console.log(this.selectedDate);
    },
    toAllMatchPage() {
      this.$router.push({ name: 'TournamentDetails' });
    },
    toUnfavourite(match){
      match.favourite= !match.favourite;
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>
.tournamentList {
  width: 50%;
  max-width: 960px;


}

.schedule_list {
  width: 50%;
  /* height: calc(100% - 40px); */
  margin: 20px 0 0 0;
  padding-right: .65%;
  padding-left: .65%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 960px;
}

.schedule_list .schedule_detail {
  width: 100%;
  flex: 1;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
}

.schedule_list .schedule_detail .schedule_detail_box {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  position: relative;
}

.border {
  background-color: #F5F5F5;
  width: 100%;
  border: 1px solid rgba(156, 163, 175, 0.5);
  border-radius: 49px;
}

.schedule_list .schedule_detail .schedule_detail_box>ul {
  /* min-height: calc(100% + 40px); */
  display: flex;
  flex-direction: column;
  width: 100%;
}

.schedule_list .schedule_detail .schedule_detail_box>ul>li {
  width: 100%;
  margin: 0 auto;
  height: 120px;
  padding-left: 2.1%;
  cursor: pointer;
}

.schedule_list .schedule_detail .schedule_detail_box>ul>li .conten_box {
  padding: 2.2% 1.7% 1.4% 1.4%;
  border-bottom: 1px solid #f5f5f6;
  height: 120px;
}



.date-item {
  margin: 0 10px;
  cursor: pointer;

}


.date-slider{
  background-color: #F5F5F5;
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 10px;
  overflow: auto;
}

</style>
