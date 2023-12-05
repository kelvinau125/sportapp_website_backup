<template>
  <div style="border: 1px solid red;" class="flex justify-center ">
    <div style="border: 1px solid red;" class="w-[892px] tournament_window">
      <div class="content_s">
        <div class="flex flex-col items-center">
          <span class="font-semibold text-lg text-white">{{ this.competitionName }}</span>
          <div class="flex flex-col items-center pt-2">
            <span style="color: #F8FEE4;" class="font-normal text-xs text-white">{{ this.matchDate + " " +
              this.matchTimeStr }}</span>
            <span style="color: #F8FEE4;" class="font-normal text-xs ">{{ this.statusStr }}</span>
          </div>
        </div>
      </div>
      <div class="flex justify-start relative top-[30px] items-center ">
        <div class="absolute left-[20px] homeTeamPos sm:left-[300px]" style="">
          <div style="border: 2px solid black;" class="mt-10 h-30 w-28 flex flex-col items-center">
            <img class="pb-3" :src="this.homeTeamLogo" style="
                    height: 46px;
                    width: 46px;
                " />
            <p class="flex justify-center text-white w-28 h-16 whitespace-normal overflow-hidden text-ellipsis"
              style="border: 1px solid red;">{{ this.homeTeamName }}</p>
          </div>
        </div>
        <div class="absolute left-[140px] sm:left-[320px] md:left-[395px]  text-white flex w-24 justify-between pt-10">
          <span class="md:text-3xl text-2xl md:pl-0 pl-4 font-semibold">{{ this.homeTeamScore }}</span>
          <span class="md:text-3xl text-2xl font-semibold">-</span>
          <span class="md:text-3xl text-2xl md:pr-0 pr-4 font-semibold">{{ this.awayTeamScore }}</span>
        </div>
        <div class="absolute left-[250px]" style="">
          <div style="border: 2px solid black;" class="mt-10 h-30 w-28 flex flex-col items-center">
            <img class="pb-3" :src="this.awayTeamLogo" style="
                    height: 46px;
                    width: 46px;
                " />
            <p class="flex justify-center text-white w-28 h-16 whitespace-normal overflow-hidden text-ellipsis"
              style="border: 1px solid red;">{{ this.awayTeamName }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
  <!-- <div class="tournament-container">
    <div class="tournament">
      <div class="tournament_window">
        <div class="content_s">
          <div class="flex flex-col items-center">
            <span class="font-semibold text-lg text-white">{{ this.competitionName }}</span>
            <div class="flex flex-col items-center pt-2">
              <span style="color: #F8FEE4;" class="font-normal text-xs text-white">{{ this.matchDate + " " +
                this.matchTimeStr }}</span>
              <span style="color: #F8FEE4;" class="font-normal text-xs ">{{ this.statusStr }}</span>
            </div>
          </div>
        </div>
        <div class="flex tournament_icon">
          <div class="" style="margin-right: 80px;">
            <div class="flex flex-col items-center">
              <img class="pb-3" :src="this.homeTeamLogo" style="
                    height: 46px;
                    width: 46px;
                " />
              <p class="text-white">{{ this.homeTeamName }}</p>
            </div>
          </div>
          <div class="text-white flex w-24 justify-between pt-10">
            <span class="text-3xl font-semibold">{{ this.homeTeamScore }}</span>
            <span class="text-3xl font-semibold">-</span>
            <span class="text-3xl font-semibold">{{ this.awayTeamScore }}</span>
          </div>
          <div class="" style="margin-left: 80px;">
            <div class="flex flex-col items-center">
              <img class="pb-3" :src="this.awayTeamLogo" style="
                    height: 46px;
                    width: 46px;
                " />
              <p class="text-white">{{ this.awayTeamName }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="flex flex-col match_status pt-8">
    <h2 class="text-headerFont font-headerWeight">{{ $t("Tournament Status") }}</h2>
    <div class="pt-1">
      <TournamentStatus :tournamentID="this.TournamentID" :homeFormation="homeFormation" />
    </div>

  </div>
  <div class="flex flex-col match_status pt-8">
    <h2 class="text-headerFont font-headerWeight">{{ $t("Live") }}</h2>
    <div>
      <div class="flex pt-3 items-center">
        <img src="@/assets//tournament/streamIcon.png" />
        <span class="pl-2 font-normal text-sm">{{ $t("Anchor of this event") }}</span>
      </div>
      <div class="py-3">
        <LiveList />
      </div>

    </div>
    <div>
      <div class="flex items-center">
        <img src="@/assets//tournament/streamIcon.png" />
        <span class="pl-2 font-normal text-sm">{{ $t("Live match") }}</span>
      </div>
      <div class="pb-2">
        <div class="flex justify-start px-2 ">
          <router-link :to="address.addressLink" v-for="address in liveAddress" :key="address.liveAddress">
            <div class="flex items-center py-3">
              <div class="live_border">
                <p class="px-4 py-2 font-medium text-sm">{{ address.liveAddress }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col match_status pb-10 ">
    <h2 class="text-headerFont font-headerWeight ">{{ $t("Line Up") }}</h2>
    <div class="pt-3">
      <LineUp :tournamentID="this.TournamentID" :homeTeamLogo="this.homeTeamLogo" :awayTeamLogo="this.awayTeamLogo" />
    </div>

  </div>
  <div class="flex flex-col match_status pb-10">
    <h2 class="text-headerFont font-headerWeight ">{{ $t("Substitute") }}</h2>
    <div class="pt-3">
      <TournamentSubstitue :homeTeamName="this.homeTeamName" :awayTeamName="this.awayTeamName"
        :homeTeamLogo="this.homeTeamLogo" :awayTeamLogo="this.awayTeamLogo" />

    </div>
  </div>

  <div class="flex flex-col match_status pb-10" style="background-color: white;">
    <div class="pt-3">
      <BasketballTournament></BasketballTournament>
    </div>

  </div>
</template>

<script>
import LiveList from '@/components/ListOfLive.vue'
import LineUp from '@/views/Tournament/tournamentLineUp.vue'
import TournamentStatus from '@/views/Tournament/tournamentStatus.vue'
import TournamentSubstitue from './TournamentSubstitue.vue';
import BasketballTournament from '@/components/BasketballTournament.vue';


export default {
  components: {
    LiveList,
    LineUp,
    TournamentStatus,
    TournamentSubstitue,
    BasketballTournament
  },
  data() {
    return {
      liveAddress: [
        { liveAddress: this.$t("Broadcast address"), addressLink: '/' },
        { liveAddress: this.$t("Broadcast address"), addressLink: '/live' },
        { liveAddress: this.$t("Broadcast address"), addressLink: '/' },
        { liveAddress: this.$t("Broadcast address"), addressLink: '/' },
      ],

      TournamentID: this.$route.query.TournamentID,
      competitionName: this.$route.query.competitionName,
      matchDate: this.$route.query.matchDate,
      matchTimeStr: this.$route.query.matchTimeStr,
      statusStr: this.$route.query.statusStr,
      homeTeamName: this.$route.query.homeTeamName,
      homeTeamScore: this.$route.query.homeTeamScore,
      homeTeamLogo: this.$route.query.homeTeamLogo,
      awayTeamName: this.$route.query.awayTeamName,
      awayTeamScore: this.$route.query.awayTeamScore,
      awayTeamLogo: this.$route.query.awayTeamLogo,

    };
  },
};
</script>

<style scoped>
@media (min-width: 500px) {
  .backgroundImg {
    height: 500px;
  }

  .VPNBoard {
    width: 25rem;
    height: 25rem;
    z-index: 0;
    margin-right: 20px;
  }

  .homeTeamPos {
    left: 150px
  }

  .scorePosition {
    left: 300px
  }

  .awayTeamPosition {
    left: 400px
  }

  .tournament_icon {
    position: absolute;
    top: 75px;
    left: 252px;
    display: flex;
    align-items: center;

  }
}

@media (min-width: 640px) {
  .homeTeamPos {
    left: 250px
  }

  .scorePosition {
    left: 300px
  }

  .awayTeamPosition {
    left: 400px
  }
}

.tournament-container {
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;

}

.tournament {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 5px;

}

.tournament_window {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  width: 892px;
  height: 200px;
  margin-top: 10px;
  background-image: url('@/assets/tournament/footballBackground.png');
  background-size: cover;
  background-position: center;
  position: relative;

}

.content_s {
  padding: 15px;
  display: flex;
  justify-content: center;
}

.match_status {
  width: 50%;
  margin: auto;

}



/* .tournament_icon {
  position: absolute;
  top: 75px;
  left: 252px;
  display: flex;
  align-items: center;

} */


.wrapper {
  width: 100%;
  max-width: 960px;
  margin: 0px auto;
}

.card-container {
  display: flex;
}

.card {
  display: inline-block;
  width: 165px;

}

.card-body {
  text-align: center;
  height: 161px;
  width: 100%;
  cursor: pointer;

}

.card-body img {
  width: 100%;
}

.live_border {
  background-color: white;
  border-radius: 8px;
  border: white;
  cursor: pointer;
}
</style>

