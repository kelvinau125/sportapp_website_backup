<template>
  <div class="flex justify-start" v-show="showfootballsubstitue">
    <div class="flex pb-10 rounded-lg" style="width: 343px; height: auto">
      <div class="w-1/2 rounded-lg">
        <div class="flex items-center h-8 rounded-lg bg-white">
          <div class="pl-1.5">
            <img class="h-[18px] w-[18px]" :src="homeTeamLogo" />
          </div>
          <div class="font-normal text-xs pl-2" style="color: #666666">
            {{ homeTeamName }}
          </div>
        </div>

        <div class="flex items-center h-8 rounded-lg" style=" ;">
          <div class="">
            <img class="h-[28px] w-[28px]" src="@/assets/profile_coach.jpg" />
          </div>
          <div class="flex flex-col pl-2">
            <div class="font-normal text-xs" style="color: #333333">
              {{ this.homeCoach }}
            </div>
            <div class="font-normal text-10px" style="color: #666666">
              <p>{{ $t("Coach") }}</p>
            </div>
          </div>
        </div>

        <div
          v-for="(homeSub, index) in filteredHomeSubPlayers(0)"
          :key="homeSub.homeTeamSubstitute"
          :class="{ oddRowColor: index % 2 !== 0, 'bg-white': index % 2 === 0 }"
          class="flex justify-start items-center h-10"
        >
          <div class="homeCircle class flex justify-center items-center">
            <div>
              <p class="text-white text-sm font-normal">{{ homeSub.shirtNumber }}</p>
            </div>
          </div>
          <div class="flex flex-col justify-center items-start pl-2">
            <div class="font-normal text-xs" style="color: #333333">
              {{ homeSub.playerName }}
            </div>
          </div>
        </div>
      </div>
      <div class="w-1/2 rounded-lg">
        <div class="flex items-center rounded-lg h-8 bg-white">
          <div class="pl-1.5">
            <img class="h-[18px] w-[18px]" :src="awayTeamLogo" />
          </div>
          <div class="font-normal text-xs pl-2" style="color: #666666">
            {{ awayTeamName }}
          </div>
        </div>

        <div class="flex items-center h-8 rounded-lg">
          <div class="">
            <img class="h-[28px] w-[28px]" src="@/assets/profile_coach.jpg" />
          </div>
          <div class="flex flex-col pl-2">
            <div class="font-normal text-xs" style="color: #333333">
              {{ this.awayCoach }}
            </div>
            <div class="font-normal text-10px" style="color: #666666">
              <p>{{ $t("Coach") }}</p>
            </div>
          </div>
        </div>

        <div
          v-for="(awaySub, index) in filteredAwaySubPlayers(0)"
          :key="awaySub.awayTeamSubstitute"
          :class="{ oddRowColor: index % 2 !== 0, 'bg-white': index % 2 === 0 }"
          class="flex justify-start items-center h-10"
        >
          <div class="awayCircle class flex justify-center items-center">
            <div>
              <p class="text-white text-sm font-normal">{{ awaySub.shirtNumber }}</p>
            </div>
          </div>
          <div class="flex flex-col pl-2">
            <div class="font-normal text-xs" style="color: #333333">
              {{ awaySub.playerName }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getFootballLineup,
  getFootballMatchbyId,
} from "@/service/apiFootBallMatchProvider.js";

export default {
  props: {
    tournamentID: String,
    homeTeamName: String,
    awayTeamName: String,
    homeTeamLogo: String,
    awayTeamLogo: String,
    showfootballsubstitue: Boolean,
  },

  data() {
    return {
      homeTeamSubstitute: [],
      awayTeamSubstitute: [],

      homeCoach: "",
      awayCoach: "",
    };
  },
  created() {},
  mounted() {
    this.getResult();
  },
  methods: {
    async getResult() {
      this.getTournamentLineup = await getFootballLineup(
        this.tournamentID,
        this.$i18n.locale === "ZH" ? true : false
      );
      this.getTournamentDetails = await getFootballMatchbyId(
        this.tournamentID,
        this.$i18n.locale === "ZH" ? true : false
      );

      if (this.getTournamentDetails == null) {
        this.homeCoach = "";
        this.awayCoach = "";
      } else {
        this.homeCoach = this.getTournamentDetails["homeCoach"];
        this.awayCoach = this.getTournamentDetails["awayCoach"];
      }

      this.homeTeamSubstitute = this.getTournamentLineup["homeMatchLineUpList"];
      this.awayTeamSubstitute = this.getTournamentLineup["awayMatchLineList"];
    },
  },
  computed: {
    filteredHomeSubPlayers() {
      if (
        this.homeTeamSubstitute !== null &&
        this.homeTeamSubstitute !== " " &&
        this.homeTeamSubstitute.length > 0
      ) {
        return (first) =>
          this.homeTeamSubstitute.filter((player) => player.first === first);
      } else {
        return () => [];
      }
    },
    filteredAwaySubPlayers() {
      if (
        this.awayTeamSubstitute !== null &&
        this.awayTeamSubstitute !== " " &&
        this.awayTeamSubstitute.length > 0
      ) {
        return (first) =>
          this.awayTeamSubstitute.filter((player) => player.first === first);
      } else {
        return () => [];
      }
    },
  },
};
</script>

<style scoped>
div {
}

.homeCircle {
  width: 28px;
  height: 28px;
  background-color: #1168b9;
  border-radius: 50%;
  border: 2px solid black;
}

.awayCircle {
  width: 28px;
  height: 28px;
  background-color: #d043d3;
  border-radius: 50%;
  border: 2px solid black;
}

.oddRowColor {
  background-color: #f7f7f8;
}
</style>
