<template>
    <div class="flex justify-start" v-show="showfootballsubstitue">
        <div class="flex pb-10 rounded-lg" style=" width: 343px; height: auto;">
            <div class="w-1/2 rounded-lg">
                <div class="flex items-center h-8 rounded-lg bg-white">
                    <div class="pl-1.5">
                        <img class="h-[18px] w-[18px]" :src=homeTeamLogo />
                    </div>
                    <div class="font-normal text-xs pl-2" style="color: #666666;">{{ homeTeamName }}</div>
                </div>

                <div v-for="(homeSub, index) in filteredHomeSubPlayers(0)" :key="homeSub.homeTeamSubstitute"
                    :class="{ 'oddRowColor': index % 2 === 0, 'bg-white': index % 2 !== 0 }"
                    class="flex justify-start items-center h-10">
                    <div class="homeCircle class flex justify-center items-center ">
                        <div>
                            <p class="text-white text-sm font-normal"> {{ homeSub.shirtNumber }}</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-center items-start pl-2">
                        <div class="font-normal text-xs" style="color: #333333;">{{ homeSub.playerName }}</div>
                        <div class="font-normal text-10px" style=" color: #666666;">{{ homeSub.position }}</div>
                    </div>
                </div>
            </div>
            <div class="w-1/2 rounded-lg">
                <div class="flex items-center rounded-lg h-8 bg-white">
                    <div class="pl-1.5">
                        <img class="h-[18px] w-[18px]" :src=awayTeamLogo />
                    </div>
                    <div class="font-normal text-xs pl-2" style="color: #666666;">{{ awayTeamName }}</div>
                </div>
                <div v-for="(awaySub, index) in filteredAwaySubPlayers(0)" :key="awaySub.awayTeamSubstitute"
                    :class="{ 'oddRowColor': index % 2 === 0, 'bg-white': index % 2 !== 0 }"
                    class="flex justify-start items-center h-10">
                    <div class="awayCircle class flex justify-center items-center ">
                        <div>
                            <p class="text-white text-sm font-normal"> {{ awaySub.shirtNumber }}</p>
                        </div>
                    </div>
                    <div class="flex flex-col pl-2">
                        <div class="font-normal text-xs" style="color: #333333;">{{ awaySub.playerName }}</div>
                        <div class="font-normal text-10px" style=" color: #666666;">{{ awaySub.position }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getFootballLineup } from '@/service/apiFootBallMatchProvider.js';

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

        }
    },
    created() {
        console.log()

    },
    mounted() {
        this.getResult()
    },
    methods: {
        async getResult() {
            this.getTournamentLineup = await getFootballLineup(this.tournamentID, (this.$i18n.locale === 'ZH')?true :false);

            // this.getTournamentLineup = await getFootballLineup(5, true);
            // this.getTournamentLineup = await getFootballLineup(1000, false);

            // console.log("HALLO" + this.tournamentID)
            // console.log("HALLO" + this.getTournamentLineup)

            this.homeTeamSubstitute = this.getTournamentLineup['homeMatchLineUpList'];
            this.awayTeamSubstitute = this.getTournamentLineup['awayMatchLineList'];

            // console.log(this.homeTeamSubstitute)
            // console.log("AWAY" + this.awayTeamSubstitute)

        },

    },
    computed: {
        filteredHomeSubPlayers() {
            if (
                this.homeTeamSubstitute !== null &&
                this.homeTeamSubstitute !== " " &&
                this.homeTeamSubstitute.length > 0
            ) {
                return (first) => this.homeTeamSubstitute.filter((player) => player.first === first);
            } else{
                return () => [];
            }
        },
        filteredAwaySubPlayers() {
            if (
                this.awayTeamSubstitute !== null &&
                this.awayTeamSubstitute !== " " &&
                this.awayTeamSubstitute.length > 0
            ) {
                return (first) => this.awayTeamSubstitute.filter((player) => player.first === first);
            } else{
                return () => [];

            }
        },
    }
}


</script>

<style scoped>
div {
    /* border: 1px solid red; */
}


.homeCircle {
    width: 28px;
    height: 28px;
    background-color: #1168B9;
    border-radius: 50%;
    border: 2px solid black;
}

.awayCircle {
    width: 28px;
    height: 28px;
    background-color: #D043D3;
    border-radius: 50%;
    border: 2px solid black;
}

.oddRowColor {
    background-color: #F7F7F8;
}
</style>