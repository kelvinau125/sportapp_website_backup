<template>
    <div class="flex-col content">
    <h2 class="text-2xl pr-5 py-5 font-semibold">热门赛程</h2>
        <!-- Overflow Setting -->
        <div class="flex gap-2 teamContainer overflow-auto">
          <div class="" style="width: 215px;">
            <!-- 热门赛程 Header -->
          <div class="py-2 px-4 rounded-md flex justify-between" style="background-color: #D6F1DD;">
            <div class="headerContainer">
              <div class="text-sm">
                欧冠
              </div>
            </div>
            <div class="text-base">
              12:00
            </div>
            <div>
              <img src="../assets/content/Favourite.png" />
            </div>
          </div>
          <!-- 热门赛程 Contents -->
          <div class="flex justify-between">
            <div class="flex flex-col items-center">
              <div>2</div>
              <div>
                <img src="../assets/content/moneyBadge.png" />
              </div>
              <div class="w-20 overflow-hidden">球队名称球队名称球</div>
            </div>
            <div class=" w-16 flex flex-col items-center py-2">
              <div>开</div>
              <div class="pt-1">VS</div>
            </div>
            <div class="flex flex-col items-center">
              <div>1</div>
              <div>
                <img src="../assets/content/Badge.png" />
              </div>
              <div class="w-20 overflow-hidden">球队名称球队名称球</div>

            </div>
          </div>
          </div>  
          <div class="" style="width: 215px;">
            <!-- 热门赛程 Header -->
          <div class="py-2 px-4 rounded-md flex justify-between" style="background-color: #D6F1DD;">
            <div class="headerContainer">
              <div class="text-sm">
                欧冠
              </div>
            </div>
            <div class="text-base">
              12:00
            </div>
            <div>
              <img src="../assets/content/Favourite.png" />
            </div>
          </div>
          <!-- 热门赛程 Contents -->
          <div class="flex justify-between">
            <div class="flex flex-col items-center">
              <div>2</div>
              <div>
                <img src="../assets/content/moneyBadge.png" />
              </div>
              <div class="w-20 overflow-hidden">球队名称球队名称球</div>
            </div>
            <div class=" w-16 flex flex-col items-center py-2">
              <div>开</div>
              <div class="pt-1">VS</div>
            </div>
            <div class="flex flex-col items-center">
              <div>1</div>
              <div>
                <img src="../assets/content/Badge.png" />
              </div>
              <div class="w-20 overflow-hidden">球队名称球队名称球</div>

            </div>
          </div>
          </div>  
          <div class="" style="width: 215px;">
            <!-- 热门赛程 Header -->
          <div class="py-2 px-4 rounded-md flex justify-between" style="background-color: #D6F1DD;">
            <div class="headerContainer">
              <div class="text-sm">
                欧冠
              </div>
            </div>
            <div class="text-base">
              12:00
            </div>
            <div>
              <img src="../assets/content/Unfavourite.png" />
            </div>
          </div>
          <!-- 热门赛程 Contents -->
          <div class="flex justify-between">
            <div class="flex flex-col items-center">
              <div>2</div>
              <div>
                <img src="../assets/content/moneyBadge.png" />
              </div>
              <div class="w-20 overflow-hidden">球队名称球队名称球</div>
            </div>
            <div class=" w-16 flex flex-col items-center py-2">
              <div>开</div>
              <div class="pt-1">VS</div>
            </div>
            <div class="flex flex-col items-center">
              <div>1</div>
              <div>
                <img src="../assets/content/Badge.png" />
              </div>
              <div class="w-20 overflow-hidden">球队名称球队名称球</div>

            </div>
          </div>
          </div> 
          <div class="" style="width: 215px;">
            <!-- 热门赛程 Header -->
          <div class="py-2 px-4 rounded-md flex justify-between" style="background-color: #D6F1DD;">
            <div class="headerContainer">
              <div class="text-sm">
                欧冠
              </div>
            </div>
            <div class="text-base">
              12:00
            </div>
            <div>
              <img src="../assets/content/Unfavourite.png" />
            </div>
          </div>
          <!-- 热门赛程 Contents -->
          <div class="flex justify-between">
            <div class="flex flex-col items-center">
              <div>2</div>
              <div>
                <img src="../assets/content/moneyBadge.png" />
              </div>
              <div class="w-20 overflow-hidden">球队名称球队名称球</div>
            </div>
            <div class=" w-16 flex flex-col items-center py-2">
              <div>开</div>
              <div class="pt-1">VS</div>
            </div>
            <div class="flex flex-col items-center">
              <div>1</div>
              <div>
                <img src="../assets/content/Badge.png" />
              </div>
              <div class="w-20 overflow-hidden">球队名称球队名称球</div>

            </div>
          </div>
          </div> 
   
          <!-- 全部赛程 Button -->
          <div class="w-10">
        <!-- <img src="../assets/content/TeamMenu.png" /> -->
            <ButtonCom class="h-full flex flex-col justify-center items-center">
              <div class="button">
                <img class="" src="../assets/content/TeamMenu.png" alt="全部赛程" />
              </div>
              <div>
                <p>全部赛程</p>
              </div>
            </ButtonCom>
            
          </div>
       </div>
      <!-- </div> -->

      
    <!-- </div> -->
    <h2 class="text-2xl pr-5 pt-5 font-semibold">热门主播榜</h2>
    <div class="pb-10 pt-5 flex">
      <img class="w-64" src="../assets/content/champion.png" />
      <div class="md:mx-4 w-52 flex flex-col items-center py-3" v-for="link in streamer" :key ="link.link">
        <div class="">
          <!-- <img :src="require(`../assets/main/${link.image}.png`)" alt="Link Image" class="w-20 h-20" /> -->
          <img :src="require(`../assets/topNav/${link.image}.png`)" alt="Link Image" class="" style="width: 50px; height: 50px;" />
        </div>
        <div>
          <p class="text-base hover:text-green-500">{{ link.name }}</p>

        </div>
        <div class="flex items-center">
          <p class="text-base hover:text-green-500">{{ link.no }}</p>
          <img class="w-5 h-5" src="../assets/content/Frame.png" alt="Frame Icon" >

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import ButtonCom from '../components/ButtonPress.vue'

const streamer = [
  { name: '主播名称', image: 'defaultProfile', no: '1234' },
  { name: '主播名称', image: 'defaultProfile', no: '1234' },
  { name: '主播名称', image: 'defaultProfile', no: '1234' },
  { name: '主播名称', image: 'defaultProfile', no: '1234' },
  { name: '主播名称', image: 'defaultProfile', no: '1234' },
  { name: '主播名称', image: 'defaultProfile', no: '520' }
]

</script>