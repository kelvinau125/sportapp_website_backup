<template>
  <div class="w-full flex flex-col">
      <div class="tournament-container">
        <div class="tournament">
          <div class="tournament_window" >
            <div class="content_s">
              <div class="flex flex-col items-center">
                <span class="font-semibold text-lg text-white">欧冠</span> 
                <div class="flex flex-col items-center pt-2">
                  <span style="color: #F8FEE4;" class="font-normal text-xs text-white">2023-08-03 17:30</span> 
                  <span style="color: #F8FEE4;" class="font-normal text-xs ">已开赛</span> 
                </div>
              </div>
            </div>  
            <div class="flex tournament_icon">
              <div class="" style="margin-right: 80px;">
                <div class="flex flex-col items-center">
                  <img class="pb-3" src="../assets/tournament/moneyBadge.png"/>
                  <p class="text-white">球队名字</p>
                </div>
              </div>
              <div class="text-white flex w-24 justify-between pt-10">
                <span class="text-3xl font-semibold">0</span>
                <span class="text-3xl font-semibold">-</span>
                <span class="text-3xl font-semibold">5</span>
              </div>
              <div class="" style="margin-left: 80px;">
                <div class="flex flex-col items-center">
                  <img class="pb-3" src="../assets/tournament/badge_.png"/>
                  <p class="text-white">球队名字</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
  </div>
  <div class="flex flex-col match_status">
    <h2 class="text-headerFont font-headerWeight">赛况</h2>
    <div class="flex justify-between">
      <!-- TEAMs NAME -->
      <div class="flex flex-col">
        <div class="flex">
          <span>ICON</span>
          <span>HOME TEAM NAME</span>
        </div>
        <div class="flex">
          <span>HOME TEAM NAME</span>
          <span>ICON</span>
        </div>
      </div>
      <!-- STATISTICS -->
      <div class="flex">
        <div>进攻</div>
        <div>危险进攻</div>
        <div>控球率</div>
      </div>
      <div class="flex">
        <div>LEFT</div>
        <div>RIGHT</div>
      </div>
    </div>

  </div>
  <div class="flex flex-col match_status">
    <h2 class="text-headerFont font-headerWeight">直播</h2>
    <div>
      <div class="flex">
        <img src="../assets//tournament/streamIcon.png" />
        <span>本场主播</span>
      </div>
      <div>
        LEFT
        直播内容
        RIGHT
      </div>

    </div>
    <div>
      <div class="flex">
        <img src="../assets//tournament/streamIcon.png" />
        <span>比赛直播</span>
      </div>
      <div>
        直播地址
      </div>
    </div>

  </div>
  <div class="flex flex-col match_status">
    <h2 class="text-headerFont font-headerWeight">阵容</h2>
    <div style="width: 728px;">
      <img src="../assets//tournament/football_court.png"/>
    </div>

    
  </div>

  
</template>

<style>
.tournament-container{
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  border: 1px solid red;
  
}

.tournament{
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 5px;
  border: 1px solid green;

}

.tournament_window{
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  width: 892px;
  height: 200px;
  margin-top: 10px;
  border: 1px solid green;
  background-image: url('../assets/tournament/footballBackground.png');
  background-size: cover;
  background-position: center;
  position: relative;



}
.content_s {
  padding: 15px;
  display: flex;
  justify-content: center;
}

.match_status{
  width: 50%;
  margin: auto;

}

.tournament_icon {
  position: absolute;
  top: 75px;
  left: 252px;
  display: flex;
  align-items: center;
  
}

</style>

