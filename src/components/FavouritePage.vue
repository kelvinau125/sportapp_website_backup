<template>
    <BackgroundImage>
      <div class="schedule_list">
        <div class="flex justify-center my-5">
        Schedule
      </div>
      <div class="schedule_detail">
        <div class="schedule_detail_box">
        <ul>
        <li @click="toAllMatchPage" class="max-w-full h-52 bg-white">
          <div class="conten_box">
            <div class="flex justify-between">
            <div class="flex items-center">
              <div class="pr-2">
                <img src="../assets/favourite/icon.png" />
              </div>
              <div class="border flex justify-center">
                <span class="text-xs" style="color: #666666;">欧冠</span>
              </div>
            </div>
            <div>
              <img src="../assets/content/Unfavourite.png" />

            </div>
          </div>
          <div class="flex justify-between">
            <div class="flex items-end">
              <div class="pr-5 font-normal text-xs " style="color: #999999;">
                <span>10月08日</span>
              </div>
              <div class="font-semibold text-xs">
                <span>00:00</span>
              </div>
            </div>
            <div class="flex">
              <div class="flex items-center">
                <div class="pr-2">
                  <span class="text-lg font-semibold">球队名称</span>
                </div>
                <div>
                  <img src="../assets/favourite/favTeamIcon.png" />
                </div>
              </div>
              <div class="flex flex-col px-5 items-center">
                <div class="font-semibold text-2xl px-2">
                  <span>0</span>
                  <span class="px-2">-</span>
                  <span>0</span>
                </div> 
                <div class="font-medium text-xs" style="color: #999999;">
                  <span>如有加时标注字体</span>
                </div>
              </div>
              <div class="flex items-center">
                <div>
                  <img src="../assets/favourite/favTeamIcon.png" />
                </div>
                <div class="pl-2">
                  <span class="text-lg font-semibold">球队名称</span>
                </div>
              </div>
            </div>
            <div>
              <img src="../assets/favourite/ended.png" />
            </div>
          </div>
          </div>
          
        </li>


      </ul>

        </div>

      </div>
      
      </div>
    </BackgroundImage>  
  
</template>

<script setup>
import BackgroundImage from '@/components/BackGround.vue'
import { useRouter } from 'vue-router'


const router = useRouter();

const toAllMatchPage = () => {
  //Navigating
  //Push to the Live Page
  router.push({ name: 'live' })
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>



.tournamentList{
  width: 50%;
  max-width: 960px;
  

}

.schedule_list{
    /* background-color: antiquewhite; */
    width: 50%;
    height: calc(100% - 40px);
    margin: 20px 0 0 0;
    padding-right: .65%;
    padding-left: .65%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 960px;

}

.schedule_list .schedule_detail{
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

.border{
  background-color: #F5F5F5;
  width: 100%;
  border: 1px solid rgba(156, 163, 175, 0.5);
  border-radius: 49px;
}

.schedule_list .schedule_detail .schedule_detail_box>ul {
    min-height: calc(100% + 40px);
    display: flex;
    flex-direction: column;
    width: 100%;
}

.schedule_list .schedule_detail .schedule_detail_box>ul>li {
    width: 100%;
    margin: 0 auto;
    height: 120px;
    padding: 0 2.1%;
    cursor: pointer;
}

.schedule_list .schedule_detail .schedule_detail_box>ul>li .conten_box {
    padding: 2.2% 1.7% 1.4% 1.4%;
    border-bottom: 1px solid #f5f5f6;
    height: 120px;
}
</style>
