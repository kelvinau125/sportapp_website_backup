<template>
    <div class="flex justify-start">
        <div class="flex pb-10" style="width: 343px; height: auto;">
            <div class="w-1/2">
                <div class="flex items-center h-8 bg-white">
                    <div class="">
                        <img src="@/assets/favourite/icon_.png" />
                    </div>
                    <div class="font-normal text-xs pl-2" style="color: #666666;">{{ "球队A名称" }}</div>
                </div>

                <div v-for="(homeSub, index) in filteredHomeSubPlayers(0)" :key="homeSub.homeTeamSubstitute"
                    :class="{ 'oddRowColor': index % 2 === 0, 'bg-white': index % 2 !== 0 }"
                    class="flex justify-start items-center h-10">
                    <div class="homeCircle class flex justify-center items-center ">
                        <div>
                            <p class="text-white text-sm font-normal"> {{ homeSub.shirtNumber }}</p>
                        </div>
                    </div>
                    <div class="flex flex-col justify-center items-start pl-2  ">
                        <div class="font-normal text-xs" style="color: #333333;">{{ homeSub.playerName }}</div>
                        <div class="font-normal text-10px" style=" color: #666666;">{{ homeSub.position }}</div>
                    </div>
                </div>
            </div>
            <div class="w-1/2">
                <div class="flex items-center h-8 bg-white">
                    <img src="@/assets/favourite/icon_.png" />
                    <div class="font-normal text-xs pl-2" style="color: #666666;">{{ "球队A名称" }}</div>
                </div>
                <div v-for="(awaySub, index) in filteredAwaySubPlayers(0)" :key="awaySub.awayTeamSubstitute"
                    :class="{'oddRowColor': index % 2 === 0, 'bg-white': index % 2 !== 0 }" class="flex justify-start items-center h-10">
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
import { getFootballLineup } from '@/service/apiFootBallMatchProvder.js';

export default {
    data() {
        return {
            homeTeamSubstitute: [],
            awayTeamSubstitute: [],

        }
    },
    created() {
        this.getResult()

    },
    methods: {
        async getResult() {
            this.getTournamentLineup = await getFootballLineup(5, true);
            console.log("HALLO" + this.getTournamentLineup)

            this.homeTeamSubstitute = this.getTournamentLineup['homeMatchLineUpList'];
            this.awayTeamSubstitute = this.getTournamentLineup['awayMatchLineList'];

            console.log(this.homeTeamSubstitute)
            console.log("AWAY" + this.awayTeamSubstitute)



        },

    },
    computed: {
        filteredHomeSubPlayers() {
            return (first) => this.homeTeamSubstitute.filter(player => player.first === first);
        },
        filteredAwaySubPlayers() {
            return (first) => this.awayTeamSubstitute.filter(player => player.first === first);
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

.oddRowColor{
    background-color: #F7F7F8;
}

</style>