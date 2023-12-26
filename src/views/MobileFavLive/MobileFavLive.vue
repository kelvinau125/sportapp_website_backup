<template>
    <div class="p-5 flex justify-center relative">
        <div class="absolute left-3" @click="goBackMyPage()">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
        </div>
        <div class="flex justify-center">
            <div class="text-base font-semibold">{{ $t("My Favourite Live") }}</div>
        </div>
    </div>

    <div class="schedule_detail pl-4 pr-4 pb-20 w-[100%] ">
        <div class="schedule_detail_box">
            <div class="" v-for="(match, index) in matchDetails" :key="index">

                <div v-if="isDifferentDate(match.date, index) || index == 0" class="my-2">{{ match.date }} {{ $t(match.days)
                }}</div>
                <div v-else></div>

                <ul>
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
                        <div class="h-[80px] pt-2 pb-5 pr-2 my-3">
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
                                        <img style="width: 24px; height: 24px;" v-if="match.favourite"
                                            src="@/assets/content/Unfavourite.png" alt="Unfavourite" />
                                        <img style="width: 24px; height: 24px;" v-else src="@/assets/content/Favourite.png"
                                            alt="Favourite" />
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
                                        <img :src="match.homeTeamIcon"
                                            style="width: 24px; height: 24px; border-radius: 20px" />
                                    </div>
                                    <div class="flex flex-col items-center  w-[20%]">
                                        <div class="font-semibold text-base">
                                            <span>{{ match.homeTeamScore }}</span>
                                            <span class="px-2">-</span>
                                            <span>{{ match.awayTeamScore }}</span>
                                        </div>
                                    </div>
                                    <div class=" flex text-end w-[40%]">
                                        <img :src="match.awayTeamIcon"
                                            style="width: 24px; height: 24px; border-radius: 20px" />
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
    </div>
</template>

<script>
import { ref } from "vue";
import VueCookies from "vue-cookies";

// import { getAllStreamDetails, getAllPopularStreamDetails } from "@/service/apiStreamProvider.js";

import {
    getLiveStreamBookmark,
    liveStreamSaveBookmark,
    deleteStreamSaveBookmark,
} from "@/service/apiBookmarkProvider.js";

export default {
    data() {
        return {
            isCN: Boolean,

            currentChannel: ref(localStorage.getItem("currentChannel") === "football" ? 1 : 0),
            isLoginModalVisible: ref(false),
            previousDate: '',
            // dateArrData: [],

            liveData: [],
            matchDetails: [],
        };
    },
    mounted() {
        this.isCN = this.$i18n.locale === "ZH" ? true : false;
        this.generateMatchDetailsList();
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
                await liveStreamSaveBookmark(matchID, this.currentChannel, this.isCN);
            } else {
                await deleteStreamSaveBookmark(matchID, this.isCN);
            }
        },
        showLoginModal() {
            this.isLoginModalVisible = true;
        },
        goBackMyPage() {
            this.$router.back();
        },
        async generateMatchDetailsList() {
            this.matchDetails = [];
            this.getfootballMatchList = await getLiveStreamBookmark(
                this.isCN,
                this.currentChannel
            );
            this.getfootballMatchList.sort(this.sortDate);
            console.log(this.getfootballMatchList)
            for (let i = 0; i < this.getfootballMatchList.length; i++) {
                var dateObject = new Date(this.getfootballMatchList[i]["matchDate"]);
                var dayOfWeek = dateObject.getDay();
                var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                var dayName = daysOfWeek[dayOfWeek];
                var newDate = this.getfootballMatchList[i]["matchDate"].replace(new RegExp('-', 'g'), '/')

                this.matchDetails.push({
                    matchType: this.getfootballMatchList[i]["competitionName"],
                    // date: this.getfootballMatchList[i]["matchDate"],
                    date: newDate,
                    time: this.getfootballMatchList[i]["matchTimeStr"],
                    days: dayName,
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
        // Sort Date and time descending
        sortDate(a, b) {
            const dateA = new Date(`${a.matchDate}T${a.matchTimeStr}`);
            const dateB = new Date(`${b.matchDate}T${b.matchTimeStr}`);

            // Sort in descending order
            return dateB - dateA;
        },
        isDifferentDate(currentDate, currentIndex) {
            if (currentIndex === 0) {
                this.previousDate = currentDate;
                return true;
            }

            const different = currentDate !== this.previousDate;

            if (different) {
                this.previousDate = currentDate;
            }

            return different;
        },

    }
}


</script>

<style scoped>
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
}</style>