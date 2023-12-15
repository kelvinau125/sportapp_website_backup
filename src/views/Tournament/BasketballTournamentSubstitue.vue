<template>
  <!-- <div class="flex justify-center border-2">
    <div class="w-[892px]">
      HALO
    </div>
  </div> -->

  <div class="box" v-show="showbasketballsubstitue">
    <vue-scrolling-table
      class="scrolling w2 freezeFirstColumn"
      ref="scrollingTable"
      :scroll-vertical="state.scrollVertical"
      :scroll-horizontal="state.scrollHorizontal"
    >
      <template #thead>
        <tr class="flex items-center">
          <th>
            <img
              class="w-[20px] h-[20px] ml-1 mt-1"
              :src="isHomeTeam ? homeTeamLogo : awayTeamLogo"
            />
          </th>
          <th style="height: 25px; width: 100px" :colspan="6">
            <span style="font-size: 12px; color: #666666; font-weight: 400">
              {{ isHomeTeam ? homeTeamName : awayTeamName }}
            </span>
          </th>
        </tr>
        <tr></tr>
        <tr>
          <th
            v-for="(col, index) in useColumns"
            :key="col.id"
            :class="{ double: isGrey(index) }"
            class=""
          >
            <span style="color: #666666; font-size: 10px; font-weight: 400">{{
              $t(col.title)
            }}</span>
          </th>
        </tr>
      </template>
      <template #tbody>
        <tr
          v-for="(item, index) in items"
          :key="item.id"
          :class="{ single: isGrey(index) }"
        >
          <td v-for="col in useColumns" :key="col.id">
            <span style="color: #666666; font-size: 10px; font-weight: 400"
              >{{ item[col.id] }}
            </span>
          </td>
        </tr>
      </template>
    </vue-scrolling-table>
  </div>
</template>

<script>
import { reactive } from "vue";
import VueScrollingTable from "vue-scrolling-table";
import { getBasketballLineUp } from "@/service/apiBasketBallMatchProvider";

export default {
  components: {
    VueScrollingTable,
  },
  props: {
    tournamentID: String,
    isHomeTeam: Boolean,
    homeTeamName: String,
    awayTeamName: String,
    homeTeamLogo: String,
    awayTeamLogo: String,
    showbasketballsubstitue: Boolean,
  },
  data() {
    return {
      homeTeamLineUpList: [],
      awayTeamLineUpList: [],
      homeTeamLineUpListLength: null,
      awayTeamLineUpListLength: null,

      state: reactive({
        maxRows: 14,
        scrollVertical: false,
        scrollHorizontal: true,
        freezeFirstColumn: false,
        syncHeaderScroll: true,
        columns: [
          {
            id: "playerName",
            title: "",
            cssClasses: "",
          },
          {
            id: "minutes",
            title: "Minutes",
            cssClasses: "",
          },
          {
            id: "scores",
            title: "Scores",
            cssClasses: "",
          },
          {
            id: "rebound",
            title: "Rebound",
            cssClasses: "",
          },
          {
            id: "assist",
            title: "Assist",
            cssClasses: "",
          },
          {
            id: "fieldGoal",
            title: "Field Goal",
            cssClasses: "",
          },
          {
            id: "threePointer",
            title: "Three Pointer",
            cssClasses: "",
          },
          {
            id: "freeThrow",
            title: "Free Throw",
            cssClasses: "",
          },
          {
            id: "steal",
            title: "Steal",
            cssClasses: "",
          },
          {
            id: "turnover",
            title: "Turnover",
            cssClasses: "",
          },
          {
            id: "blockShot",
            title: "Block Shot",
            cssClasses: "",
          },
          {
            id: "foul",
            title: "Foul",
            cssClasses: "",
          },
        ],
        allItems: [],
      }),
    };
  },
  async mounted() {
    this.isCN = this.$i18n.locale === "ZH" ? true : false;

    this.getBasketballLineUpList = await getBasketballLineUp(
      this.tournamentID,
      this.$i18n.locale === "ZH" ? true : false
    );

    this.homeTeamLineUpList = this.getBasketballLineUpList["home"];
    this.awayTeamLineUpList = this.getBasketballLineUpList["away"];

    // console.log("check data home:", this.homeTeamLineUpList);
    // console.log("check data away:", this.awayTeamLineUpList);

    if (this.homeTeamLineUpList != null) {
      this.homeTeamLineUpListLength = this.homeTeamLineUpList.length;
    } else {
      this.homeTeamLineUpListLength = 0;
    }

    if (this.awayTeamLineUpList != null) {
      this.awayTeamLineUpListLength = this.awayTeamLineUpList.length;
    } else {
      this.awayTeamLineUpListLength = 0;
    }
    // console.log("check bug: ", this.homeTeamLineUpListLength);

    this.homeTeamList();
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
    height() {
      return this.isHomeTeam
        ? this.homeTeamLineUpListLength * 17.5
        : this.awayTeamLineUpListLength * 17.5;
    },
  },

  methods: {
    async homeTeamList() {
      this.homeTeamList = [];
      this.state.allItems = [];
      let lengthCount = null;

      if (this.isHomeTeam) {
        lengthCount = this.homeTeamLineUpListLength;
        // console.log("check team home: ", lengthCount);
      } else {
        lengthCount = this.awayTeamLineUpListLength;
        // console.log("check team away: ", lengthCount);
      }

      for (let i = 0; i < lengthCount; i++) {
        this.state.allItems.push({
          playerName: this.isHomeTeam
            ? this.homeTeamLineUpList[i].playerName
            : this.awayTeamLineUpList[i].playerName,
          minutes: this.isHomeTeam
            ? this.homeTeamLineUpList[i].minutes
            : this.awayTeamLineUpList[i].minutes,
          scores: this.isHomeTeam
            ? this.homeTeamLineUpList[i].point
            : this.awayTeamLineUpList[i].point,
          rebound: this.isHomeTeam
            ? this.homeTeamLineUpList[i].totalRebounds
            : this.awayTeamLineUpList[i].totalRebounds,
          assist: this.isHomeTeam
            ? this.homeTeamLineUpList[i].assists
            : this.awayTeamLineUpList[i].assists,
          fieldGoal: this.isHomeTeam
            ? `${this.homeTeamLineUpList[i].fieldGoalsMade} - ${this.homeTeamLineUpList[i].fieldGoalsAttempts}`
            : `${this.awayTeamLineUpList[i].fieldGoalsMade} - ${this.awayTeamLineUpList[i].fieldGoalsAttempts}`,
          threePointer: this.isHomeTeam
            ? `${this.homeTeamLineUpList[i].threePointGoalsMade} - ${this.homeTeamLineUpList[i].threePointGoalsAttempts}`
            : `${this.awayTeamLineUpList[i].threePointGoalsMade} - ${this.awayTeamLineUpList[i].threePointGoalsAttempts}`,
          freeThrow: this.isHomeTeam
            ? `${this.homeTeamLineUpList[i].freeThrowsGoalsMade} - ${this.homeTeamLineUpList[i].freeThrowsGoalsAttempts}`
            : `${this.awayTeamLineUpList[i].freeThrowsGoalsMade} - ${this.awayTeamLineUpList[i].freeThrowsGoalsAttempts}`,
          steal: this.isHomeTeam
            ? this.homeTeamLineUpList[i].steals
            : this.awayTeamLineUpList[i].steals,
          turnover: this.isHomeTeam
            ? this.homeTeamLineUpList[i].turnovers
            : this.awayTeamLineUpList[i].turnovers,
          blockShot: this.isHomeTeam
            ? this.homeTeamLineUpList[i].blocks
            : this.awayTeamLineUpList[i].blocks,
          foul: this.isHomeTeam
            ? this.homeTeamLineUpList[i].personalFouls
            : this.awayTeamLineUpList[i].personalFouls,
        });
      }
    },
  },
};
</script>

<style scoped>
.box {
  clear: both;
  padding: 0;
  min-height: 244px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  max-width: 892px;
  width: 100%;
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
  overflow-x: hidden;
  overflow-y: scroll;
  width: fit-content;
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
  display: block;
  overflow: hidden;
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
  background-color: #f7f7f8;
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

table {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  border: 0.5px solid #ccc;
  border-collapse: collapse;
  overflow: scroll;
  background-color: white;
  border-radius: 8px;
}
</style>
