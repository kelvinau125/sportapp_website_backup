<template>
    <div class="flex justify-center ">
        <div class=" w-[890px] flex justify-between">
            <div class="flex flex-col justify-center py-4">
                <!-- ZH Show -->
                <div class="borderColor mb-3 flex justify-center items-center">
                    <span class="font-medium md:text-sm text-xs">{{ $t("Pause") }} {{ teamATotalPause }}</span>
                </div>
                <!-- ZH Show -->
                <div class="borderColor flex justify-center items-center">
                    <span class="font-medium md:text-sm text-xs">{{ $t("Foul") }}  {{ homeNumOfFouls }}</span>

                </div>
            </div>
            <div class="flex">
                <div class="  flex flex-col justify-around">
                    <div class="flex justify-center items-center">
                        <p class=" w-[30px] font-medium md:text-sm text-10px md:pr-2 pr-1">{{ homeThreeGoal }}</p>
                        <div class="team relative w-[50px] p-[20px] bottom-1">
                            <div class=" stat-bar-left totalGrayBar border_leftTB" :style="{ width: 100 + '%' }"></div>
                            <!-- TEAMaRATE -->
                            <div class="stat-bar-left left-bar-color border_leftTB"
                                :style="{ width: teamAThreeGoal + '%' }">
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <p class=" w-[30px] font-medium md:text-sm text-10px md:pr-2 pr-1">{{ homeTwoGoal }}</p>
                        <div class="team relative w-[50px] p-[20px] bottom-1">
                            <div class=" stat-bar-left totalGrayBar border_leftTB" :style="{ width: 100 + '%' }"></div>
                            <!-- TEAMaRATE -->
                            <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamATwoGoal + '%' }">
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <p class=" w-[30px] font-medium md:text-sm text-10px md:pr-2 pr-1">{{ homeBlocks }}</p>
                        <div class="team relative w-[50px] p-[20px] bottom-1">
                            <div class=" stat-bar-left totalGrayBar border_leftTB" :style="{ width: 100 + '%' }"></div>
                            <!-- TEAMaRATE -->
                            <div class="stat-bar-left left-bar-color border_leftTB"
                                :style="{ width: teamATotalBlocks + '%' }">
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <p class=" w-[30px] font-medium md:text-sm text-10px md:pr-2 pr-1">{{ homeNumOfFouls }}</p>
                        <div class="team relative w-[50px] p-[20px] bottom-1">
                            <div class=" stat-bar-left totalGrayBar border_leftTB" :style="{ width: 100 + '%' }"></div>
                            <!-- TEAMaRATE -->
                            <div class="stat-bar-left left-bar-color border_leftTB"
                                :style="{ width: teamATotalFouls + '%' }">
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <p class=" w-[30px] font-medium md:text-sm text-10px md:pr-2 pr-1">{{ homeSteals }}</p>
                        <div class="team relative w-[50px] p-[20px] bottom-1">
                            <div class=" stat-bar-left totalGrayBar border_leftTB" :style="{ width: 100 + '%' }"></div>
                            <!-- TEAMaRATE -->
                            <div class="stat-bar-left left-bar-color border_leftTB"
                                :style="{ width: teamATotalSteal + '%' }">
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <p class=" w-[30px] font-medium md:text-sm text-10px md:pr-2 pr-1">{{ homeTurnOvers }}</p>
                        <div class="team relative w-[50px] p-[20px] bottom-1">
                            <div class=" stat-bar-left totalGrayBar border_leftTB" :style="{ width: 100 + '%' }"></div>
                            <!-- TEAMaRATE -->
                            <div class="stat-bar-left left-bar-color border_leftTB"
                                :style="{ width: teamATotalTurnOver + '%' }">
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <p class=" w-[30px] font-medium md:text-sm text-10px md:pr-2 pr-1">{{ homeFieldGoal }}</p>
                        <div class="team relative w-[50px] p-[20px] bottom-1">
                            <div class=" stat-bar-left totalGrayBar border_leftTB" :style="{ width: 100 + '%' }"></div>
                            <!-- TEAMaRATE -->
                            <div class="stat-bar-left left-bar-color border_leftTB"
                                :style="{ width: teamAFieldGoal + '%' }">
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <p class=" w-[30px] font-medium md:text-sm text-10px md:pr-2 pr-1">{{ homeRebounds }}</p>
                        <div class="team relative w-[50px] p-[20px] bottom-1">
                            <div class=" stat-bar-left totalGrayBar border_leftTB" :style="{ width: 100 + '%' }"></div>
                            <!-- TEAMaRATE -->
                            <div class="stat-bar-left left-bar-color border_leftTB" :style="{ width: teamARebounds + '%' }">
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <p class=" w-[30px] font-medium md:text-sm text-10px md:pr-2 pr-1">{{ teamAFreeThrow }}</p>
                        <div class="team relative w-[50px] p-[20px] bottom-1">
                            <div class=" stat-bar-left totalGrayBar border_leftTB" :style="{ width: 100 + '%' }"></div>
                            <!-- TEAMaRATE -->
                            <div class="stat-bar-left left-bar-color border_leftTB"
                                :style="{ width: teamAFreeThrowPercentage + '%' }">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-around items-center  md:w-[180px] w-[100px]">
                    <!-- EN Need Show -->
                    <div class="font-medium md:text-sm text-xs">{{$t("3 Pointer")}}</div>
                    <!-- ZH Need Show -->
                    <div class="font-medium md:text-sm text-xs">{{$t("2 Pointer")}}</div>

                    <!-- EN Need Show -->
                    <div class="font-medium md:text-sm text-xs">{{$t("Block")}}</div>
                    <div class="font-medium md:text-sm text-xs">{{$t("Foul")}}</div>
                    <div class="font-medium md:text-sm text-xs">{{$t("Steal")}}</div>
                    <div class="font-medium md:text-sm text-xs">{{$t("Turn Over")}}</div>
                    <div class="font-medium md:text-sm text-xs">{{$t("Field Goal")}} </div>
                    <div class="font-medium md:text-sm text-xs">{{$t("Rebound")}}</div>

                    <!-- ZH and EN need Show -->
                    <div class=" flex justify-start items-center w-full">
                        <div class="font-medium md:text-sm text-xs w-1/3 md:pl-3 pl-1">{{ teamAFreeThrowPercentage + "%" }}
                        </div>
                        <div class="font-medium md:text-sm text-xs  flex justify-center w-[80px]">{{$t("Free Throw")}}</div>
                        <div class="font-medium md:text-sm text-xs w-1/3 md:pl-6 pl-0"> {{ teamBFreeThrowPercentage + "%" }}
                        </div>
                    </div>

                </div>
                <div class="flex flex-col justify-around items">
                    <div class="flex items-center">
                        <div class="bottom-1 team relative w-[50px] p-[20px]">
                            <div class="stat-bar-right totalGrayBar border_rightTB " style="width: 100%;"></div>
                            <div class="stat-bar-right right-bar-color border_rightTB"
                                :style="{ width: teamBThreeGoal + '%' }">
                            </div>
                        </div>
                        <p class="w-[30px] font-medium md:text-sm text-10px pl-3 pr-1">{{ awayThreeGoal }}</p>
                    </div>
                    <div class="flex items-center">
                        <div class="bottom-1 team relative w-[50px] p-[20px]">
                            <div class="stat-bar-right totalGrayBar border_rightTB " style="width: 100%;"></div>
                            <div class="stat-bar-right right-bar-color border_rightTB"
                                :style="{ width: teamBTwoGoal + '%' }">
                            </div>
                        </div>
                        <p class="w-[30px] font-medium md:text-sm text-10px pl-3 pr-1">{{ awayTwoGoal }}</p>
                    </div>
                    <div class="flex items-center">
                        <div class="bottom-1 team relative w-[50px] p-[20px]">
                            <div class="stat-bar-right totalGrayBar border_rightTB " style="width: 100%;"></div>
                            <div class="stat-bar-right right-bar-color border_rightTB"
                                :style="{ width: teamBTotalBlocks + '%' }">
                            </div>
                        </div>
                        <p class="w-[30px] font-medium md:text-sm text-10px pl-3 pr-1">{{ awayBlocks }}</p>
                    </div>
                    <div class="flex items-center">
                        <div class="bottom-1 team relative w-[50px] p-[20px]">
                            <div class="stat-bar-right totalGrayBar border_rightTB " style="width: 100%;"></div>
                            <div class="stat-bar-right right-bar-color border_rightTB"
                                :style="{ width: teamBTotalFouls + '%' }">
                            </div>
                        </div>
                        <p class="w-[30px] font-medium md:text-sm text-10px pl-3 pr-1">{{ awayNumOfFouls }}</p>
                    </div>
                    <div class="flex items-center">
                        <div class="bottom-1 team relative w-[50px] p-[20px]">
                            <div class="stat-bar-right totalGrayBar border_rightTB " style="width: 100%;"></div>
                            <div class="stat-bar-right right-bar-color border_rightTB"
                                :style="{ width: teamBTotalSteal + '%' }">
                            </div>
                        </div>
                        <p class="w-[30px] font-medium md:text-sm text-10px pl-3 pr-1">{{ awaySteals }}</p>
                    </div>
                    <div class="flex items-center">
                        <div class="bottom-1 team relative w-[50px] p-[20px]">
                            <div class="stat-bar-right totalGrayBar border_rightTB " style="width: 100%;"></div>
                            <div class="stat-bar-right right-bar-color border_rightTB"
                                :style="{ width: teamBTotalTurnOver + '%' }">
                            </div>
                        </div>
                        <p class="w-[30px] font-medium md:text-sm text-10px pl-3 pr-1">{{ awayTurnOvers }}</p>
                    </div>
                    <div class="flex items-center">
                        <div class="bottom-1 team relative w-[50px] p-[20px]">
                            <div class="stat-bar-right totalGrayBar border_rightTB " style="width: 100%;"></div>
                            <div class="stat-bar-right right-bar-color border_rightTB"
                                :style="{ width: teamBFieldGoal + '%' }">
                            </div>
                        </div>
                        <p class="w-[30px] font-medium md:text-sm text-10px pl-3 pr-1">{{ awayFieldGoal }}</p>
                    </div>
                    <div class="flex items-center">
                        <div class="bottom-1 team relative w-[50px] p-[20px]">
                            <div class="stat-bar-right totalGrayBar border_rightTB " style="width: 100%;"></div>
                            <div class="stat-bar-right right-bar-color border_rightTB"
                                :style="{ width: teamBRebounds + '%' }">
                            </div>
                        </div>
                        <p class="w-[30px] font-medium md:text-sm text-10px pl-3 pr-1">{{ awayRebound }}</p>
                    </div>
                    <div class="flex items-center">
                        <div class="bottom-1 team relative w-[50px] p-[20px]">
                            <div class="stat-bar-right totalGrayBar border_rightTB " style="width: 100%;"></div>
                            <div class="stat-bar-right right-bar-color border_rightTB"
                                :style="{ width: teamBFreeThrowPercentage + '%' }">
                            </div>
                        </div>
                        <p class="w-[30px] font-medium md:text-sm text-10px pl-3 pr-1">{{ teamBFreeThrow }}</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-center py-4">
                <!-- ZH Show -->
                <div class="borderColor mb-3 flex justify-center items-center">
                    <span class="font-medium md:text-sm text-xs">{{ $t("Pause") }} {{ teamBTotalPause }}</span>
                </div>
                <!-- ZH Show -->
                <div class="borderColor flex justify-center items-center">
                    <span class="font-medium md:text-sm text-xs">{{ $t("Foul") }} {{ awayNumOfFouls }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            // hthreeGoal (3分球得分) athreeGoal (3分球得分)
            homeThreeGoal: 1,
            awayThreeGoal: 3,

            // htwoGoal (2分球得分) , atwoGoal (2分球得分)
            homeTwoGoal: 4,
            awayTwoGoal: 1,

            //  hfreeThrow (罚球) afreeThrow (罚球)
            homeFreeThrow: 14,
            awayFreeThrow: 11,

            //  hfreeThrow (罚球率) afreeThrow (罚球率)
            homeFreeThrowPercentage: 6,
            awayFreeThrowPercentage: 4,

            //htotalPause (暂停) atotalPause (暂停)
            homeTotalPause: 1,
            awayTotalPause: 3,

            //hnumOfFouls (犯规) anumOfFouls (犯规)
            homeNumOfFouls: 7,
            awayNumOfFouls: 4,

            //EN Need Data

            //hblocks (Block) ablocks (Block)
            homeBlocks: 3,
            awayBlocks: 5,

            // hsteals (Steal) asteals (Steal)
            homeSteals: 5,
            awaySteals: 5,

            // hturnOvers (Turn Over) aturnOvers (Turn Over)
            homeTurnOvers: 17,
            awayTurnOvers: 15,

            // hfieldGoals (Field Goal) afieldGoals (Field Goal)
            homeFieldGoal: 44,
            awayFieldGoal: 32,

            //hrebounds (Rebound) arebounds (Rebound)
            homeRebounds: 39,
            awayRebound: 30,
        }
    },
    computed: {
        //En Needed Data
        teamATotalBlocks() {
            const totalBlocks = this.homeBlocks + this.awayBlocks;
            if (totalBlocks !== 0) {
                return Math.round((this.homeBlocks / totalBlocks) * 100);
            } else {
                return 0;
            }
        },
        teamBTotalBlocks() {
            const totalBlocks = this.homeBlocks + this.awayBlocks;
            if (totalBlocks !== 0) {
                return Math.round((this.awayBlocks / totalBlocks) * 100);
            } else {
                return 0;
            }
        },

        teamATotalSteal() {
            const totalSteals = this.homeSteals + this.awaySteals;
            if (totalSteals !== 0) {
                return Math.round((this.homeSteals / totalSteals) * 100);
            } else {
                return 0;
            }

        },

        teamBTotalSteal() {
            const totalSteals = this.homeSteals + this.awaySteals;
            if (totalSteals !== 0) {
                return Math.round((this.awaySteals / totalSteals) * 100);
            } else {
                return 0;
            }

        },

        teamATotalTurnOver() {
            const totalTurnOver = this.homeTurnOvers + this.awayTurnOvers;
            if (totalTurnOver !== 0) {
                return Math.round((this.homeTurnOvers / totalTurnOver) * 100);
            } else {
                return 0;
            }

        },

        teamBTotalTurnOver() {
            const totalTurnOver = this.homeTurnOvers + this.awayTurnOvers;
            if (totalTurnOver !== 0) {
                return Math.round((this.awayTurnOvers / totalTurnOver) * 100);
            } else {
                return 0;
            }

        },

        teamAFieldGoal() {
            const totalFieldGoal = this.homeFieldGoal + this.awayFieldGoal;
            if (totalFieldGoal !== 0) {
                return Math.round((this.homeFieldGoal / totalFieldGoal) * 100);
            } else {
                return 0;
            }
        },

        teamBFieldGoal() {
            const totalFieldGoal = this.homeFieldGoal + this.awayFieldGoal;
            if (totalFieldGoal !== 0) {
                return Math.round((this.awayFieldGoal / totalFieldGoal) * 100);
            } else {
                return 0;
            }
        },

        teamARebounds() {
            const totalRebounds = this.homeRebounds + this.awayRebound;
            if (totalRebounds !== 0) {
                return Math.round((this.homeRebounds / totalRebounds) * 100);
            } else {
                return 0;
            }
        },
        teamBRebounds() {
            const totalRebounds = this.homeRebounds + this.awayRebound;
            if (totalRebounds !== 0) {
                return Math.round((this.awayRebound / totalRebounds) * 100);
            } else {
                return 0;
            }
        },

        teamAThreeGoal() {
            const totalThreeGoal = this.homeThreeGoal + this.awayThreeGoal;
            if (totalThreeGoal !== 0) {
                return Math.round((this.homeThreeGoal / totalThreeGoal) * 100);
            } else {
                return 0;
            }
        },

        teamBThreeGoal() {
            const totalThreeGoal = this.homeThreeGoal + this.awayThreeGoal;
            if (totalThreeGoal !== 0) {
                return Math.round((this.awayThreeGoal / totalThreeGoal) * 100);
            } else {
                return 0;
            }
        },

        teamATwoGoal() {
            const totalTwoGoal = this.homeTwoGoal + this.awayTwoGoal;
            if (totalTwoGoal !== 0) {
                return Math.round((this.homeTwoGoal / totalTwoGoal) * 100);
            } else {
                return 0;
            }
        },
        teamBTwoGoal() {
            const totalTwoGoal = this.homeTwoGoal + this.awayTwoGoal;
            if (totalTwoGoal !== 0) {
                return Math.round((this.awayTwoGoal / totalTwoGoal) * 100);
            } else {
                return 0;
            }
        },

        teamAFreeThrow() {
            if (this.homeFreeThrow !== 0) {
                return this.homeFreeThrow
            } else {
                return 0;
            }
        },

        teamBFreeThrow() {
            if (this.awayFreeThrow !== 0) {
                return this.awayFreeThrow
            } else {
                return 0;
            }
        },

        teamAFreeThrowPercentage() {
            if (this.homeFreeThrowPercentage !== 0) {
                return this.homeFreeThrowPercentage
            } else {
                return 0;
            }
        },

        teamBFreeThrowPercentage() {
            if (this.awayFreeThrowPercentage !== 0) {
                return this.awayFreeThrowPercentage
            } else {
                return 0;
            }
        },

        teamATotalPause() {
            if (this.homeTotalPause !== 0) {
                return this.homeTotalPause
            } else {
                return 0;
            }
        },

        teamBTotalPause() {
            if (this.awayTotalPause !== 0) {
                return this.awayTotalPause
            } else {
                return 0;
            }
        },

        teamATotalFouls() {
            const totalFouls = this.homeNumOfFouls + this.awayNumOfFouls;
            if (totalFouls !== 0) {
                return Math.round((this.homeNumOfFouls / totalFouls) * 100);
            } else {
                return 0;
            }
        },

        teamBTotalFouls() {
            const totalFouls = this.homeNumOfFouls + this.awayNumOfFouls;
            if (totalFouls !== 0) {
                return Math.round((this.awayNumOfFouls / totalFouls) * 100);
            } else {
                return 0;
            }
        },
    }
}
</script>

<style scoped>
@media (min-width: 300px) {
  .team {
    position: relative;
    width: 70px;
    padding: 20px;
  }

  .teamDown {
    position: relative;
    width: 50px;
    padding: 20px;

  }

  .statusContainer {
    width: 384px;
  }

  .box {
    display: flex;
    justify-content: flex-start;
  }
  
  .borderColor {
    width: 44px;
    height: 32px;
    background-color: #D7DDD7;
    border-radius: 19px;
  }
}

@media (min-width: 500px) {
  .team {
    position: relative;
    width: 100px;
    padding: 20px;
  }

  .teamDown {
    position: relative;
    width: 80px;
    padding: 20px;

  }

  .statusContainer {
    width: 615px;
  }

  .box {
    display: flex;
    justify-content: center;
  }

  .borderColor {
    width: 64px;
    height: 32px;
    background-color: #D7DDD7;
    border-radius: 19px;
  }

}

@media (min-width: 640px) {
  .team {
    position: relative;
    width: 230px;
    padding: 20px;
  }

  .teamDown {
    position: relative;
    width: 120px;
    padding: 20px;

  }

  .statusContainer {
    width: 100%;
  }

  .box {
    display: flex;
    justify-content: center;
  }

  .borderColor {
    width: 84px;
    height: 32px;
    background-color: #D7DDD7;
    border-radius: 19px;
  }


}

.border_leftTB {
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}

.border_rightTB {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}

.totalGrayBar {
  background-color: #D7DDD7;
}

/* .team {
    position: relative;
    width: 150px;
    padding: 20px;
  } */

.stat-bar-right {
  height: 9px;
  width: 230px;
  position: absolute;
  left: 0;
  bottom: 8px;
  margin-bottom: 5px;
}

/* 左边的Bar */
.stat-bar-left {
  height: 9px;
  width: 230px;
  position: absolute;
  right: 0;
  /* bottom: 8px;
  margin-bottom: 5px; */

}
.left-bar-color {
  background-color: #FDA24C;
}

.right-bar-color {
  background-color: #33BA53;
}


</style>
