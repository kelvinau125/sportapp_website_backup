<template>
    <!-- <table>
        <thead id="teamName">
            <tr style="height: 25px; ">
                <th>球队A名称</th>
            </tr>
            <tr>
                <th></th>
                <th>出场时间</th>
                <th>得分</th>
                <th>助攻</th>
                <th>抢断</th>
                <th>篮板</th>
                <th>罚球数</th>
                <th>罚球命中</th>
                <th>犯规</th>
                <th>失误</th>
                <th>三分球数</th>
                <th>三分球命中</th>
                <th>盖帽</th>
                <th>投篮数</th>
                <th>投篮命中</th>
            </tr>
        </thead>
        <tbody id="teamDetails">
            <tr class="single">
                <td>球员名字</td>
                <td>00:00</td>
                <td>8</td>
                <td>6</td>
                <td>35</td>
                <td>2-11</td>
                <td>0-5</td>
                <td>2-11</td>
                <td>0-5</td>
                <td>2-2</td>
                <td>1</td>
                <td>6</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr class="double">
                <td>球员名字</td>
                <td>00:00</td>
                <td>8</td>
                <td>6</td>
                <td>35</td>
                <td>2-11</td>
                <td>0-5</td>
                <td>2-11</td>
                <td>0-5</td>
                <td>2-2</td>
                <td>1</td>
                <td>6</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr class="single">
                <td>球员名字</td>
                <td>00:00</td>
                <td>8</td>
                <td>6</td>
                <td>35</td>
                <td>2-11</td>
                <td>0-5</td>
                <td>2-11</td>
                <td>0-5</td>
                <td>2-2</td>
                <td>1</td>
                <td>6</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
            </tr>
        </tbody>
    </table> -->

    <hr>

    <div class="box">
        <vue-scrolling-table class="scrolling w2 freezeFirstColumn" ref="scrollingTable">
            <template #thead>
                <tr>
                    <th v-for="(col, index) in useColumns" :key="col.id" :class="{ 'double': isGrey(index) }">{{
                        $t(col.title)
                    }}</th>
                </tr>
            </template>
            <template #tbody>
                <tr v-for="(item, index) in items" :key="item.id" :class="{ 'single': isGrey(index) }">
                    <td v-for="col in useColumns" :key="col.id">{{ item[col.id] }}</td>
                </tr>
            </template>
        </vue-scrolling-table>

    </div>
</template>

<script>
import { reactive } from 'vue'
import VueScrollingTable from 'vue-scrolling-table';
import { getBasketballLineUp } from '@/service/apiBasketBallMatchProvider';

export default {
    components: {
        VueScrollingTable
    },
    props: {
        tournamentID: String
    },
    data() {
        return {
            homeTeamLineUpList: [],
            awayTeamLineUpList: [],

            state: reactive({
                maxRows: 14,
                scrollVertical: true,
                scrollHorizontal: true,
                freezeFirstColumn: true,
                syncHeaderScroll: true,
                columns: [
                    {
                        id: "playerName", title: "", cssClasses: ""
                    },
                    {
                        id: "minutes", title: "Minutes", cssClasses: ""
                    },
                    {
                        id: "scores", title: "Scores", cssClasses: ""
                    },
                    {
                        id: "rebound", title: "Rebound", cssClasses: ""
                    },
                    {
                        id: "assist", title: "Assist", cssClasses: ""
                    },
                    {
                        id: "fieldGoal", title: "Field Goal", cssClasses: ""
                    },
                    {
                        id: "threePointer", title: "Three Pointer", cssClasses: ""
                    },
                    {
                        id: "freeThrow", title: "Free Throw", cssClasses: ""
                    },
                    {
                        id: "steal", title: "Steal", cssClasses: ""
                    },
                    {
                        id: "turnover", title: "Turnover", cssClasses: ""
                    },
                    {
                        id: "blockShot", title: "Block Shot", cssClasses: ""
                    },
                    {
                        id: "foul", title: "Foul", cssClasses: ""
                    },
                ],
                allItems: [


                    // {
                    //     playerName: 'Phillip', minutes: '00:00', scores: '42', rebound: '18', assist: '3', fieldGoal: '7', threePointer: '8', freeThrow: '4', steal: '7', turnover: '4', blockShot: '7', foul: '8'
                    // },
                    // {
                    //     playerName: 'Phillip', minutes: '00:00', scores: '42', rebound: '18', assist: '3', fieldGoal: '7', threePointer: '8', freeThrow: '4', steal: '7', turnover: '4', blockShot: '7', foul: '8'
                    // },
                    // {
                    //     playerName: 'Phillip', minutes: '00:00', scores: '42', rebound: '18', assist: '3', fieldGoal: '7', threePointer: '8', freeThrow: '4', steal: '7', turnover: '4', blockShot: '7', foul: '8'
                    // },
                    // {
                    //     playerName: 'Phillip', minutes: '00:00', scores: '42', rebound: '18', assist: '3', fieldGoal: '7', threePointer: '8', freeThrow: '4', steal: '7', turnover: '4', blockShot: '7', foul: '8'
                    // },

                ],

            }),
        };

    },
    async mounted() {
        this.isCN = ((this.$i18n.locale === 'ZH') ? true : false)

        // this.getBasketballLineUpList = await getBasketballMatchLineUpUrl

        this.getBasketballLineUpList = await getBasketballLineUp(this.tournamentID, (this.$i18n.locale === 'ZH') ? true : false);

        this.homeTeamLineUpList = this.getBasketballLineUpList['home'];
        this.awayTeamLineUpList = this.getBasketballLineUpList['away'];

        // console.log(this.getBasketballLineUpList);
        // console.log(`check home: ${this.homeTeamLineUpList[1]["id"]}`);

        this.homeTeamList();

        console.log(`apa ini: ${this.allItems}`);
        console.log(`apa ini: ${this.allItems}`);
        console.log(this.homeTeamList);
        console.log(`apa ini: ${this.items}`);
    },
    computed: {
        items() {
            return this.state.allItems.slice(0, this.state.maxRows);
        },
        useColumns() {
            return this.state.columns.slice(0, this.state.maxColumns);
        },
        isGrey() {
            return (i) => i % 2 === 0;
        },

    },


    methods: {

        async homeTeamList() {
            this.homeTeamList = [];
            this.allItems = [];

            for (let i = 0; i < this.homeTeamLineUpList.length; i++) {
                this.allItems.push({
                    // id: i,
                    playerName: this.homeTeamLineUpList[i].playerName,
                    minutes: this.homeTeamLineUpList[i].minutes,
                    scores: this.homeTeamLineUpList[i].point,
                    rebound: this.homeTeamLineUpList[i].totalRebounds,
                    assist: this.homeTeamLineUpList[i].assists,
                    // fieldGoal: `${this.homeTeamLineUpList[i].fieldGoalsMade} - ${this.homeTeamLineUpList[i].fieldGoalsAttempts}`,
                    // threePointer: `${this.homeTeamLineUpList[i].threePointGoalsMade} - ${this.homeTeamLineUpList[i].threePointGoalsAttempts}`,
                    // freeThrow: `${this.homeTeamLineUpList[i].freeThrowsGoalsMade} - ${this.homeTeamLineUpList[i].freeThrowsGoalsAttempts}`,

                    fieldGoal: "0",
                    threePointer: "0",
                    freeThrow: "0",
                    steal: this.homeTeamLineUpList[i].steals,
                    turnover: this.homeTeamLineUpList[i].turnovers,
                    blockShot: this.homeTeamLineUpList[i].blocks,
                    foul: this.homeTeamLineUpList[i].personalFouls
                });
                // this.homeTeamList.push(allList);
            }
            console.log("--------------------------")
            console.log(this.allItems)
        },
    }
}
</script>

<style scoped>
.box {
    clear: both;
    padding: 0;
    min-height: 150px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
}

.scrolling .w2 {
    width: auto;
}

.freezeFirstColumn thead tr,
.freezeFirstColumn tbody tr {
    display: block;
    width: min-content;
}

.freezeFirstColumn thead td:first-child,
.freezeFirstColumn tbody td:first-child,
.freezeFirstColumn thead th:first-child,
.freezeFirstColumn tbody th:first-child {
    position: sticky;
    position: -webkit-sticky;
    left: 0;
}

thead {
    border: 1px solid rgb(209, 209, 209);
    background-color: white;
}

thead::-webkit-scrollbar {
    display: block;
    background-color: aqua;
}

thead::-webkit-scrollbar-track {
    background-color: blue;
}


th,
td {
    width: 75px;
    min-width: 70px;
    max-width: 75px;
    /* border: 1px solid black; */
    padding: 3px;
    text-align: center;
}

tbody {
    /* display: block; */
    /* overflow: scroll; */
    border: 1px solid rgb(209, 209, 209);
    background-color: white;
}

td:first-child,
th:first-child {
    position: sticky;
    position: -webkit-sticky;
    left: 0;
    /* background-color: white; */
    text-align: left;
}

.single {
    background-color: #F7F7F8;

}

.double {
    background-color: transparent;
}

* {
    font-family: Inter;
    font-size: 12px;
    font-weight: 400;
    line-height: 11px;
    letter-spacing: 0em;
    text-align: left;

}
</style>