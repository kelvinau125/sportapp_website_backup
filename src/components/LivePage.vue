<template>
    <div class="content">
        <PopularMatch/>

        <main class="wrapper">
        <h1>Products</h1>

        <div class="card-container">
            <div class="card">
            
            <div class="card-body">
                <div class="absolute">
                    <img src="../assets/live/LiveImage.png" class="" />
                </div>
                <div class="flex z-10 items-center">
                    <div class="z-10 pr-1 pl-1">
                    <img src="../assets/live/defaultStreamerIcon.png" />
                    </div>
                    <div class="flex-col z-10 pl-1">
                        <div class="text-white text-base">直播标题</div>
                        <div class="text-sm font-bold">主播昵称</div>
                    </div>
                </div>
            </div>
          </div>

          <div class="card">
            
            <div class="card-body">
              <form>
                <div class="row">
                  <div class="cell">
                    <label>Type:</label>
                  </div>
                  <div class="cell">
                    <em>Fruit</em>
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Price:</label>
                  </div>
                  <div class="cell">
                    $1.62
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Quantity:</label>
                  </div>
                  <div class="cell">
                    <input type="number" value="0">
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div class="card">
            <div class="card-body">
              <form>
                <div class="row">
                  <div class="cell">
                    <label>Type:</label>
                  </div>
                  <div class="cell">
                    <em>Fruit</em>
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Price:</label>
                  </div>
                  <div class="cell">
                    $1.04
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Quantity:</label>
                  </div>
                  <div class="cell">
                    <input type="number" value="0">
                  </div>
                </div>
              </form>
            </div>
   
          </div>
        
          <div class="card">
            
            <div class="card-body">
              <form>
                <div class="row">
                  <div class="cell">
                    <label>Type:</label>
                  </div>
                  <div class="cell">
                    <em>Vegetable</em>
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Price:</label>
                  </div>
                  <div class="cell">
                    $4.82
                  </div>
                </div>
                <div class="row">
                  <div class="cell">
                    <label>Quantity:</label>
                  </div>
                  <div class="cell">
                    <input type="number" value="0">
                  </div>
                </div>
              </form>
            </div>
          </div>



        </div>
      </main>


        <!-- <div class="h-full">
            <div class="rounded-sm grid grid-cols-3 px-5 h-44">
                <div class="col-span-1 flex items-end">
                    <div class="absolute">
                        <img src="../assets/live/LiveImage.png" class="" />
                    </div>
                    <div class="flex z-10 items-center">
                        <div class="z-10 pr-1 pl-1">
                        <img src="../assets/live/defaultStreamerIcon.png" />
                        </div>
                        <div class="flex-col z-10 pl-1">
                            <div class="text-white text-base">直播标题</div>
                            <div class="text-sm font-bold">主播昵称</div>
                        </div>
                    </div>
                </div>
                
                <div class="col-span-1 flex items-end">
                    <div class="absolute">
                        <img src="../assets/live/LiveImage.png" class="" />
                    </div>
                    <div class="flex z-10 items-center">
                        <div class="z-10 pr-1 pl-1">
                        <img src="../assets/live/defaultStreamerIcon.png" />
                        </div>
                        <div class="flex-col z-10 pl-1">
                            <div class="text-white text-base">直播标题</div>
                            <div class="text-sm font-bold">主播昵称</div>
                        </div>
                    </div>
                </div>
                <div class="col-span-1 flex items-end">
                    <div class="relative">
                        <img src="../assets/live/LiveImage.png" class="" />
                    </div>

                </div>
                <div class="col-span-1 flex items-end">
                    <div class="">
                        <img src="../assets/live/LiveImage.png" class="" />
                    </div>
                </div>

                
            </div>
        </div> -->
    </div>


    
</template>

<script setup>
import PopularMatch from '../components/PopularMatch.vue'


</script>

<style>
.content{
  width: 50%;
  height: 100px;
  margin: auto;
}

.wrapper{
    width: 100%;
    max-width: 960px;
    margin: 0px auto;
    padding-top: 35px;
}

.card-container{
    display: flex;
    justify-content: space-between;

}

.card-container{
    flex-wrap: wrap

}

.card{
    display: inline-block;
    width: 290px;
    /* background: $cardBackground; */
    margin-bottom: 20px;
    /* color: $cardTextColor; */
    /* &:hover i
        opacity: 1.0; */

}
.card-title{
    /* +truncate; */
    width: 100%;
    /* background: $cardHeaderBackground; */
    padding: 10px;
    font-size: 22px;


}
.card-body{
    /* border: 1px solid $cardBorder; */
    border-top: 0px;
    border-bottom: 0px;
    text-align: center;
    i{
        display: block;
        color: var(--bodyTextColor);
        opacity: 0.8;

    }
    label{
        display: inline-block;
        font-weight: bold;
        /* &:first-of-type
            margin-top: 0px; */

    }
    input{
        width: 100px;
        /* border: 1px solid $cardBorder; */
        padding: 4px;

    }
    .cell{
        align-items: center;
        width: 50%;
        min-height: 2em;
        padding: 3px 4px;
        /* &:first-of-type
            justify-content: end; */

    }

}


</style>