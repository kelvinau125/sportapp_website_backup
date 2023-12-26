<template>
  <div class="flex justify-between p-5">
    <span class="text-lg font-medium" style="color: rgba(51, 51, 51, 1);">{{$t("My Favourite Live")}}</span>
    <span @click="showAllFavourite()" class="text-sm font-medium" style="color: rgba(102, 102, 102, 1)">{{ $t('Show All') }}</span>
  </div>
  <!-- <div class="h-[200px] border-2">
    我收藏的直播.....
  </div> -->
  <div class="schedule_detail pl-4 pr-4 w-[100%] ">
    <div class="schedule_detail_box">
      <ul class="h-[90px]" v-for="match in matchDetails" :key="match.matchDetails">
        <li @click="
          toAllMatchPage(
            match.linkAddress,
            match.matchType,
            match.date,
            match.time,
            match.statusStr,
            match.homeTeamName,
            match.homeTeamScore,
            match.homeTeamIcon,
            match.awayTeamName,
            match.awayTeamScore,
            match.awayTeamIcon
          )
          " class="max-w-full bg-white">
          <div class="h-[80px] pt-2 pb-5 pr-2">
            <div class="flex justify-between ">
              <div class="pl-2 flex items-center justify-between w-[200px] ">
                <div class="px-3 flex justify-center overflow-clip  MatchTypeBorder">
                  <span class="text-xs font-medium whitespace-nowrap overflow-hidden text-ellipsis"
                    style="color: #666666">{{
                      match.matchType
                    }}</span>
                </div>
                <div class="flex items-end ml-10">
                  <div class="font-normal text-xs" style="color: #333333">
                    <span>{{ match.time }}</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-between w-[100px] ">
                <div>
                  <span class="text-xs font-normal" :class="{
                    'bg-transparent': match.statusStr === ' ',
                    statusBorder: match.statusStr !== '',
                  }">
                    {{ match.statusStr }}</span>
                </div>
                <button @click.stop="toUnfavourite(match, match.linkAddress)">
                  <img style="width: 24px; height: 24px;" v-if="match.favourite" src="@/assets/content/Unfavourite.png" alt="Unfavourite" />
                  <img style="width: 24px; height: 24px;" v-else src="@/assets/content/Favourite.png" alt="Favourite" />
                </button>

              </div>
            </div>

            <div class="pl-2 pr-2 pt-2 flex justify-start">
              <div class="flex w-full">
                <div class="flex justify-end items-center w-[40%] ">
                  <div class="w-[150px] overflow-hidden">
                    <span class="text-sm font-normal pr-2 whitespace-nowrap overflow-ellipsis">{{
                      match.homeTeamName
                    }}</span>
                  </div>
                  <img :src="match.homeTeamIcon" style="width: 24px; height: 24px; border-radius: 20px" />
                </div>
                <div class="flex flex-col items-center  w-[20%]">
                  <div class="font-semibold text-base">
                    <span>{{ match.homeTeamScore }}</span>
                    <span class="px-2">-</span>
                    <span>{{ match.awayTeamScore }}</span>
                  </div>
                </div>
                <div class=" flex text-end w-[40%]">
                  <img :src="match.awayTeamIcon" style="width: 24px; height: 24px; border-radius: 20px" />
                  <div class=" w-[150px] overflow-hidden">
                    <span class="text-sm font-normal whitespace-nowrap overflow-ellipsis">{{
                      match.awayTeamName
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <div class="flex justify-between items-center p-5">
    <span class="text-lg font-medium" style="color: rgba(51, 51, 51, 1);">{{$t("On Live")}}</span>
    <!-- <span class="text-sm font-medium" style="rgba(102, 102, 102, 1)">展示所有</span> -->
  </div>

  <main class="wrapper pb-12">
    <div class="card-container ml-3 flex justify-start w-full">
      <div class="card  h-44 py-2" v-for="livedata in liveData"
        :key="livedata.liveData">
        <div @click="toLiveStream(livedata.liveID, livedata.streamerID)" class="card-body ">
          <div class="w-full h-[92px]">
            <img class="w-full h-full" :src="livedata.image" alt="Image" />
          </div>
          <div class="bg-white w-full h-[50px] flex titleBox  bottom-[50px] items-center pb-2">
            <img id="circle" class="rounded-full pr-1 " :src="livedata.streamerIcon" alt="Image" />
            <div class="flex flex-col pl-1 items-start  w-[110px]">
              <div class="text-start font-normal text-sm  w-[110px] multiline-ellipsis">
                <span style="color: rgba(51, 51, 51, 1);"> {{ livedata.liveTitle }}</span>
              </div>
              <div style="color: rgba(153, 153, 153, 1);"
                class="text-10px font-medium opacity-60 w-[110px] text-start multiline-ellipsis">
                {{ livedata.streamerName }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <LoginModal :showModal="isLoginModalVisible" :closeModal="closeLoginModal" />
</template>
<script>
import { ref } from "vue";
import VueCookies from "vue-cookies";

import { getAllStreamDetails, getAllPopularStreamDetails } from "@/service/apiStreamProvider.js";

import LoginModal from "@/views/Authentication/LoginModal.vue";

import {
  getLiveStreamBookmark,
  liveStreamSaveBookmark,
  deleteStreamSaveBookmark,
} from "@/service/apiBookmarkProvider.js";

export default {
  components: {
    LoginModal,
  },
  data() {
    return {
      isCN: Boolean,

      livecurrentChannel: ref(localStorage.getItem("currentChannel") === "football" ? 1 : 0),
      currentChannel: ref(localStorage.getItem("currentChannel") === "football" ? 0 : 1),
      isLoginModalVisible: ref(false),

      liveData: [],
      matchDetails: [],
    };
  },
  mounted() {
    this.generateLiveList();
    // ------------------------------------------------------------------- Translation Part ------------------------------------------ Remember Change It ----------------------------
    this.isCN = this.$i18n.locale === "ZH" ? true : false;
    // handle when come inside favorite is empty
    this.generateMatchDetailsList("showall");

  },

  methods: {
    toAllMatchPage(
      linkAddress,
      competitionName,
      matchDate,
      matchTimeStr,
      statusStr,
      homeTeamName,
      homeTeamScore,
      homeTeamLogo,
      awayTeamName,
      awayTeamScore,
      awayTeamLogo
    ) {
      // Push to the Live Page
      const routeData = this.$router.resolve({
        name: "TournamentDetails",
        query: {
          TournamentID: linkAddress,
          competitionName: competitionName,
          matchDate: matchDate,
          matchTimeStr: matchTimeStr,
          statusStr: statusStr,
          homeTeamName: homeTeamName,
          homeTeamScore: homeTeamScore,
          homeTeamLogo: homeTeamLogo,
          awayTeamName: awayTeamName,
          awayTeamScore: awayTeamScore,
          awayTeamLogo: awayTeamLogo,
        },
      });
      window.open(routeData.href, "_blank");
    },
    async toUnfavourite(match, matchID) {
      match.favourite = !match.favourite;
      if (!match.favourite) {
        await liveStreamSaveBookmark(matchID, this.livecurrentChannel, this.isCN);
      } else {
        await deleteStreamSaveBookmark(matchID, this.isCN);
      }
    },
    async generateMatchDetailsList(matchdate) {
      this.matchDetails = [];
      this.getfootballMatchList = await getLiveStreamBookmark(
        this.isCN,
        this.livecurrentChannel
      );

      for (let i = 0; i < Math.min(3, this.getfootballMatchList.length); i++) {
        if (
          matchdate === "showall"
        ) {
          // if(matchdate){
          this.matchDetails.push({
            matchType: this.getfootballMatchList[i]["competitionName"],
            date: this.getfootballMatchList[i]["matchDate"],
            time: this.getfootballMatchList[i]["matchTimeStr"],
            homeTeamName: this.getfootballMatchList[i]["homeTeamName"],
            homeTeamIcon: this.getfootballMatchList[i]["homeTeamLogo"],
            homeTeamScore: this.getfootballMatchList[i]["homeTeamScore"],
            awayTeamName: this.getfootballMatchList[i]["awayTeamName"],
            awayTeamIcon: this.getfootballMatchList[i]["awayTeamLogo"],
            awayTeamScore: this.getfootballMatchList[i]["awayTeamScore"],
            overTime: "null",
            favourite: false,
            statusStr: this.getfootballMatchList[i]["statusStr"],
            linkAddress: this.getfootballMatchList[i]["id"],
          });
        }
      }
    },
    showAllFavourite() {
      console.log("Show Favourite Page");
      this.$router.push('/mobileFavLive');
    },

    showLoginModal() {
      this.isLoginModalVisible = true;
    },
    closeLoginModal() {
      this.isLoginModalVisible = false;
    },

    toLiveStream(liveID, streamerID) {
      // Push to the Live Page
      const userToken = VueCookies.get("userToken");

      if (!userToken) {
        this.showLoginModal();
      } else {
        localStorage.setItem("stream", streamerID);

        const routeData = this.$router.resolve({
          name: "LiveStream",
          query: {
            LiveID: liveID,
          },
        });

        window.open(routeData.href, "_blank");
      }
    },

    async generateLiveList() {
      this.liveData = [];

      this.getPopularLiveList = await getAllPopularStreamDetails();
      for (let i = 0; i < this.getPopularLiveList.length; i++) {
        // Check if sportType is 0 (football)
        if (this.getPopularLiveList[i]["sportType"] == this.currentChannel) {
          this.liveData.push({
            liveID: this.getPopularLiveList[i]["id"],
            image: this.getPopularLiveList[i]["cover"],
            liveTitle: this.getPopularLiveList[i]["title"],
            streamerName: this.getPopularLiveList[i]["nickName"],
            streamerIcon: this.getPopularLiveList[i]["avatar"],
            streamerID: this.getPopularLiveList[i]["userId"],
          });
        }
      }

      this.getLiveList = await getAllStreamDetails();

      for (let i = 0; i < this.getLiveList.length; i++) {
        // Check if sportType is 0 (football)
        if (this.getLiveList[i]["sportType"] == this.currentChannel) {
          this.liveData.push({
            liveID: this.getLiveList[i]["id"],
            image: this.getLiveList[i]["cover"],
            liveTitle: this.getLiveList[i]["title"],
            streamerName: this.getLiveList[i]["nickName"],
            streamerIcon: this.getLiveList[i]["avatar"],
            streamerID: this.getLiveList[i]["userId"],
          });
        }
      }
    },
  },
};
</script>

<style scoped>
@media (min-width: 300px) {
  .card {
    display: inline-block;
    width: 165px;
    height: 162px;
  }

  .titleBox {
    position: absolute;
    bottom: 0;
  }

  .contentImage {
    display: block;
    width: 30px;
  }

}

/* @media (min-width: 500px) {
  .card {
    display: inline-block;
    width: 230px;
    height: 162px;
  }

  .titleBox {
    position: absolute;
    bottom: 0;
  }

  .contentImage {
    display: block;
    width: 35px;
  }


}

@media (min-width: 640px) {
  .card {
    display: inline-block;
    width: 287px;
    height: 162px;
  }

  .titleBox {
    position: absolute;
    bottom: 0;
  }

  .contentImage {
    display: block;
    width: 38px;
  }


} */

.wrapper {
  width: 100%;
  max-width: 360px;
  margin: 0px auto;
  /* border: 1px solid red; */
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.card-body {
  text-align: center;
  height: 142px;
  width: 100%;
  cursor: pointer;
  position: relative;
}

.card-body img {
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

#circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}



.multiline-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.multiline-ellipsis::after {
  content: "...";
}


.scroll-container::-webkit-scrollbar {
  display: none;
}


.MatchTypeBorder {
  background-color: #f5f5f5;
  border: 1px solid rgba(156, 163, 175, 0.5);
  border-radius: 49px;
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


.statusBorder {
  background-color: #eeedf4;
  border-radius: 8px;
  width: auto;
  padding: 8px;
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
</style>