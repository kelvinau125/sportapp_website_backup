<template>
        <!-- Overflow Setting -->
        <div class="flex gap-2 teamContainer overflow-auto">
          <div class="border bg-white-400" style="width: 215px; height: 180px;">
            <!-- 热门赛程 Header -->
          <div class="py-2 px-4 flex justify-between" style="background-color: #D6F1DD;">
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
          <div class="flex justify-between" style="background-color: white;">
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
              <div>12</div>
              <div>
                <img src="../assets/content/Badge.png" />
              </div>
              <div class="w-20 overflow-hidden">球队名称球队名称球</div>

            </div>
          </div>
          </div>  
          <div class="border" style="width: 215px;">
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
          <div class="flex justify-between" style="background-color: white;">
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
          <div class="border" style="width: 215px;">
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
          <div class="flex justify-between" style="background-color: white;">
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
          <div class="border" style="width: 215px;">
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
          <div class="flex justify-between" style="background-color: white;">
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
            <ButtonCom @click="toAllMatchPage" class="border h-full flex flex-col justify-center items-center">
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
    
</template>

<script setup>
import ButtonCom from '../components/ButtonPress.vue'
import { useRouter } from 'vue-router'


const router = useRouter();

const toAllMatchPage = () => {
  //Navigating
  // router.push({ name: 'allMatch' })
  router.push({ name: 'live' })
}

</script>

<style>
.teamContainer{
  width: 100%;
  height: 180px;
  margin: auto;
}

.teamContainer .border{
  width: 215px;
  border: 1px solid rgba(156, 163, 175, 0.5);
  border-radius: 0.375rem;
  /* background-color: red; */
}

</style>