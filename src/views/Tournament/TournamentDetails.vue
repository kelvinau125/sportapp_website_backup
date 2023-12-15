<template>
  <div class="flex justify-center">
    <div
      :class="{
        'w-[892px] tournament_window': currentChannel,
        'w-[892px] tournament_basketball_window': !currentChannel,
      }"
    >
      <div class="content_s">
        <div class="flex flex-col items-center">
          <span class="font-semibold text-lg text-white">{{ this.competitionName }}</span>
          <div class="flex flex-col items-center pt-2">
            <span style="color: #f8fee4" class="font-normal text-xs text-white">{{
              this.matchDate + " " + this.matchTimeStr
            }}</span>
            <span style="color: #f8fee4" class="font-normal text-xs">{{
              this.statusStr
            }}</span>
          </div>
        </div>
      </div>
      <div class="flex justify-start relative top-[35px] items-center">
        <div class="absolute left-[20px] homeTeamPos sm:left-[300px]" style="">
          <div class="mt-10 h-30 w-28 flex flex-col items-center">
            <img
              class="pb-3"
              :src="this.homeTeamLogo"
              style="height: 46px; width: 46px"
            />
            <p
              class="text-sm font-normal flex justify-center text-white w-28 h-16 whitespace-normal overflow-hidden text-ellipsis"
            >
              {{ this.homeTeamName }}
            </p>
          </div>
        </div>
        <div
          class="absolute left-[155px] scorePosition text-white flex w-24 justify-between pt-10"
        >
          <span class="md:text-3xl text-2xl md:pl-0 pl-4 font-semibold">{{
            this.homeTeamScore
          }}</span>
          <span class="md:text-3xl text-2xl font-semibold">-</span>
          <span class="md:text-3xl text-2xl md:pr-0 pr-4 font-semibold">{{
            this.awayTeamScore
          }}</span>
        </div>
        <div class="absolute left-[270px] awayTeamPosition" style="">
          <div class="mt-10 h-30 w-28 flex flex-col items-center">
            <img
              class="pb-3"
              :src="this.awayTeamLogo"
              style="height: 46px; width: 46px"
            />
            <p
              class="text-sm font-normal flex justify-center text-white w-28 h-16 whitespace-normal overflow-hidden text-ellipsis"
            >
              {{ this.awayTeamName }}
            </p>
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
  <div class="flex justify-center">
    <div class="w-full md:w-[892px] flex flex-col">
      <h2 class="pt-6 text-headerFont font-headerWeight">
        {{ $t("Tournament Status") }}
      </h2>
      <TournamentStatus
        class="pt-5"
        :tournamentID="this.TournamentID"
        :homeFormation="homeFormation"
        :showfootballstatus="currentChannel"
      />

      <BasketballTournamentStatus
        :tournamentID="this.TournamentID"
        :showbasketballstatus="!currentChannel"
      />
    </div>
  </div>

  <div class="flex justify-center">
    <div class="liveContainer">
      <h2 class="text-headerFont font-headerWeight">{{ $t("Live") }}</h2>
      <div>
        <div class="flex pt-3 items-center">
          <img src="@/assets//tournament/streamIcon.png" />
          <span class="pl-2 font-normal md:text-sm text-xs">{{
            $t("Anchor of this event")
          }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="py-3 flex justify-center">
    <LiveList />
  </div>
  <div class="flex justify-center">
    <div class="w-[892px]">
      <div class="flex items-center">
        <img src="@/assets//tournament/streamIcon.png" />
        <span class="pl-2 font-normal md:text-sm text-xs">{{ $t("Live match") }}</span>
      </div>
      <div class="pb-2">
        <div class="flex flex-wrap justify-start px-2">
          <div
            @click="toLiveStream(address.addressLink)"
            v-for="address in liveAddress"
            :key="address.liveAddress"
          >
            <div class="flex items-center px-1 py-3">
              <div class="live_border">
                <p class="px-4 py-2 font-medium md:text-sm text-xs">
                  {{ address.liveAddress }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="scroll-container">
    <div class="inner-container">
      <div v-show="currentChannel">
        <div class="flex justify-center pb-10">
          <div class="w-[892px]">
            <h2 class="text-headerFont font-headerWeight">{{ $t("Line Up") }}</h2>
            <!-- <div class="pt-3">
          <LineUp :tournamentID="this.TournamentID" :homeTeamLogo="this.homeTeamLogo" :awayTeamLogo="this.awayTeamLogo" />
        </div> -->
          </div>
        </div>
        <div class="flex justify-center pb-10">
          <div class="w-[892px]">
            <LineUp
              :tournamentID="this.TournamentID"
              :homeTeamLogo="this.homeTeamLogo"
              :awayTeamLogo="this.awayTeamLogo"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-center pb-10" v-show="currentChannel">
    <div class="w-[892px]">
      <h2 class="text-headerFont font-headerWeight">{{ $t("Substitute") }}</h2>
      <div class="pt-3">
        <TournamentSubstitue
          :tournamentID="this.TournamentID"
          :homeTeamName="this.homeTeamName"
          :awayTeamName="this.awayTeamName"
          :homeTeamLogo="this.homeTeamLogo"
          :awayTeamLogo="this.awayTeamLogo"
          :showfootballsubstitue="currentChannel"
        />
      </div>
    </div>
  </div>
  <div class="flex justify-center pb-10" v-show="!currentChannel">
    <div class="max-w-[892px] w-full">
      <h2 class="text-headerFont font-headerWeight pb-3">{{ $t("Data analysis") }}</h2>
      <div class="flex flex-col pb-5 team_lineup" style="background-color: white">
        <div class="pt-3">
          <BasketballTournamentSubstitue
            :tournamentID="this.TournamentID"
            :awayTeamName="this.awayTeamName"
            :homeTeamName="this.homeTeamName"
            :is-home-team="true"
            :home-team-logo="this.homeTeamLogo"
            :away-team-logo="this.awayTeamLogo"
            :showbasketballsubstitue="!currentChannel"
          >
          </BasketballTournamentSubstitue>
        </div>
      </div>
      <div class="flex flex-col team_lineup pb-5" style="background-color: white">
        <div class="pt-3">
          <BasketballTournamentSubstitue
            :tournamentID="this.TournamentID"
            :awayTeamName="this.awayTeamName"
            :homeTeamName="this.homeTeamName"
            :is-home-team="false"
            :home-team-logo="this.homeTeamLogo"
            :away-team-logo="this.awayTeamLogo"
            :showbasketballsubstitue="!currentChannel"
          >
          </BasketballTournamentSubstitue>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="flex justify-center pb-10" v-show="!currentChannel">
    <div class="max-w-[892px] w-full">
      <h2 class="text-headerFont font-headerWeight pb-3">{{ $t("Data analysis") }}</h2>
      <div class="flex flex-col pb-5 team_lineup" style="background-color: white">
        <div class="pt-3">
          <BasketballTournamentSubstitue :tournamentID="1" :awayTeamName="this.awayTeamName"
            :homeTeamName="this.homeTeamName" :is-home-team="true" :home-team-logo="this.homeTeamLogo"
            :away-team-logo="this.awayTeamLogo" :showbasketballsubstitue="!currentChannel">
          </BasketballTournamentSubstitue>
        </div>
      </div>

      <div class="flex flex-col team_lineup pb-5" style="background-color: white">
        <div class="pt-3">
          <BasketballTournamentSubstitue :tournamentID="1" :awayTeamName="this.awayTeamName"
            :homeTeamName="this.homeTeamName" :is-home-team="false" :home-team-logo="this.homeTeamLogo"
            :away-team-logo="this.awayTeamLogo" :showbasketballsubstitue="!currentChannel">
          </BasketballTournamentSubstitue>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import { ref } from "vue";

import LiveList from "@/components/ListOfLive.vue";
import LineUp from "@/views/Tournament/tournamentLineUp.vue";
import TournamentStatus from "@/views/Tournament/tournamentStatus.vue";
import TournamentSubstitue from "./TournamentSubstitue.vue";
import BasketballTournamentSubstitue from "@/views/Tournament/BasketballTournamentSubstitue.vue";
import BasketballTournamentStatus from "@/views/Tournament/basketballTournamentStatus.vue";

import { searchLiveAddress } from "@/service/searchLiveStreamProvider.js";

export default {
  components: {
    LiveList,
    LineUp,
    TournamentStatus,
    TournamentSubstitue,
    BasketballTournamentSubstitue,
    BasketballTournamentStatus,
  },
  data() {
    return {
      currentChannel: ref(
        localStorage.getItem("currentChannel") === "football" ? true : false
      ),
      isCN: this.$i18n.locale === "ZH" ? true : false,

      liveAddress: [
        // { liveAddress: this.$t("Broadcast address"), addressLink: "/" },
        // { liveAddress: this.$t("Broadcast address"), addressLink: "/live" },
        // { liveAddress: this.$t("Broadcast address"), addressLink: "/" },
        // { liveAddress: this.$t("Broadcast address"), addressLink: "/" },
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

      // TournamentID: "1000",
      // homeTeamName: "kelvin 1",
      // awayTeamName: "phillip 1",

      liveAdressName: ["直播地址 - 标清", "直播地址 -  华语", "直播地址 - 英文"],
    };
  },

  mounted() {
    this.generateLiveAddress();
    // console.log("check id--------------------");
    // console.log(this.TournamentID);
  },

  methods: {
    toLiveStream(liveID) {
      const routeData = this.$router.resolve({
        name: "LiveStream",
        query: {
          LiveID: liveID,
        },
      });
      window.location.href = routeData.href;
    },
    async generateLiveAddress() {
      this.liveAddress = [];

      this.isCN
        ? (this.getLiveAddress = await searchLiveAddress(
            "",
            "",
            this.TournamentID,
            this.isCN,
            this.currentChannel
          ))
        : (this.getLiveAddress = await searchLiveAddress(
            this.homeTeamName,
            this.awayTeamName,
            "",
            this.isCN,
            this.currentChannel
          ));

      if (this.getLiveAddress != "null" && this.getLiveAddress !== null) {
        if (this.isCN) {
          for (let i = 0; i < 3; i++) {
            this.liveAddress.push({
              liveAddress: this.liveAdressName[i],
              addressLink: this.getLiveAddress["pushUrl" + (i + 1)],
            });
          }
        } else {
          this.liveAddress.push({
            liveAddress: "Live broadcast address",
            addressLink: this.getLiveAddress,
          });
        }
      } else {
        this.liveAddress = [];
      }
      // console.log("???", this.liveAddress);
    },
  },
};
</script>

<style scoped>
.scroll-container {
  width: 100%;
  overflow-x: auto;
  overflow-y: visible;
}

.inner-container {
  max-width: 892px;
  width: 100%;
  box-sizing: border-box;
  text-align: start;
  padding: 20px;
  margin: 0 auto;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

@media (max-width: 892px) {
  .inner-container {
    min-width: 892px;
    /* Set a minimum width to stop shrinking */
  }
}

@media (min-width: 300px) {
  .liveContainer {
    width: 280px;
  }
}

@media (min-width: 500px) {
  .liveContainer {
    width: 595px;
  }

  .homeTeamPos {
    left: 150px;
  }

  .scorePosition {
    left: 260px;
  }

  .awayTeamPosition {
    left: 360px;
  }
}

@media (min-width: 640px) {
  .homeTeamPos {
    left: 250px;
  }

  .scorePosition {
    left: 395px;
  }

  .awayTeamPosition {
    left: 525px;
  }

  .liveContainer {
    width: 892px;
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
  background-image: url("@/assets/tournament/footballBackground.png");
  background-size: cover;
  background-position: center;
  position: relative;
}

.tournament_basketball_window {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  width: 892px;
  height: 200px;
  margin-top: 10px;
  background-image: url("@/assets/tournament/basketballBackground.png");
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

.team_lineup {
  max-width: 892px;
  width: 100%;
  margin: auto;
  position: relative;
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
  width: auto;
  border: white;
  cursor: pointer;
}
</style>
