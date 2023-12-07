
<template>
    <div class="flex justify-center">
        <div class="max-w-[1519px]  md:flex justify-between pt-1.5">
            <div class="live-container  ">
                <div  class="relative  rounded-lg">
                    <div class="">
                        <img class="w-full h-full" src="@/assets/live/liveStreamBackground.png" alt="Image" />
                    </div>
                    <div class="w-full flex titleBox items-center md:pt-4 pt-3 md:pl-2 pb-2">
                        <div class="pr-1 pl-3 z-10 pb-1.5">
                            <img src="@/assets/live/defaultStreamerIcon.png" alt="Image" />
                        </div>
                        <div class=" flex flex-col md:pl-1 pl-0 z-10 items-start pb-1.5">
                            <div class="text-white font-normal md:text-sm text-xs"> 直播标题 </div>
                            <div class="md:text-10px text-8px font-bold text-white opacity-60">主播昵称</div>
                        </div>
                        <div class="pr-1 pl-5 z-10 pb-1.5">
                            <ButtonPress @click="showEditStreamDetailModal()" class="rounded-[30px]" style="background-color: #16B13B;">
                                <div class="flex">
                                    <img src="@/assets/live/liveSetting.png" />
                                    <div class="pl-1.5 font-normal text-base text-white"> {{ $t("Live broadcastsettings") }}
                                    </div>
                                </div>
                            </ButtonPress>
                        </div>
                    </div>

                </div>
            </div>
            <div class="chat-container w-full h-[380px] ml-2  border-2">聊天窗口</div>
        </div>
    </div>
    <div class="flex justify-center">
        <div class="flex flex-col max-w-[1519px] w-full">
            <span class="text-lg font-semibold md:pl-12 pl-5 pt-3 pb-1">其他直播推荐</span>
            <main class="live_wrapper md:p-2 p-0 ">
                <div class="card-container flex justify-start pb-12">
                    <div class="card h-44 py-2 px-1 relative md:w-1/2 lg: w-1/3 xl:w-1/4"
                        v-for="(livedata, index) in liveData.slice(0, 10)" :key="index">

                        <div @click="toLiveStream" class="card-body relative">
                            <img class="rounded-lg w-full h-full" :src= livedata.image alt="Image" />
                            <div class="gradient_bottom w-full flex absolute bottom-3 items-center p-1 pb-2">
                                <div class="pr-1 pl-1 z-10 w-10">
                                    <img :src= livedata.streamerIcon alt="Image" />
                                </div>
                                <div class="flex flex-col pl-1 z-10 items-start">
                                    <div class="text-white font-medium text-sm">{{ livedata.liveTitle }}</div>
                                    <div class="text-10px font-medium text-white opacity-60">{{ livedata.streamerName }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <EditStreamDetailModal 
    :showEditStreamDetailModal="isEditStreamDetailsModalVisible"
    :closeEditStreamDetailModal="closeEditStreamDetailModal"
    :LiveID="this.LiveID" />

    <!-- <div class="scroll-container">
        <div class="inner-container border-2 border-green-500 ">
            <div class=" border-2 border-red-200 max-w-[1519px]  flex justify-between pt-1.5">
                <div class="max-w-[1037px] w-full  h-[586px]  ">
                    <div class="relative rounded-lg">
                        <div class="">
                            <img class="w-full h-full" src="@/assets/live/liveStreamBackground.png" alt="Image" />
                        </div>
                        <div class="w-full flex titleBox items-center pt-4 pl-2 pb-2">
                            <div class="pr-1 pl-3 z-10 pb-1.5">
                                <img src="@/assets/live/defaultStreamerIcon.png" alt="Image" />
                            </div>
                            <div class=" flex flex-col pl-1 z-10 items-start pb-1.5">
                                <div class="text-white font-normal md:text-sm text-xs"> 直播标题 </div>
                                <div class="md:text-10px text-8px font-bold text-white opacity-60">主播昵称</div>
                            </div>
                            <div class="pr-1 pl-10 z-10 pb-1.5">
                                <ButtonPress @click="showEditStreamDetailModal()" class="rounded-[30px]" style="background-color: #16B13B;">
                                    <div class="flex ">
                                        <img src="@/assets/live/liveSetting.png" />
                                        <div class="pl-1.5 font-normal text-base text-white"> {{ $t("Live broadcastsettings") }}</div>
                                    </div>
                                </ButtonPress>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="max-w-[463px] w-full border-2 border-red-500">聊天窗口</div>

            </div>

        </div>
    </div>
    <div class="flex justify-center">
        <div class="flex flex-col max-w-[1519px] w-full">
            <span class="text-lg font-semibold pl-7 pt-3 pb-1">其他直播推荐</span>
            <main class="live_wrapper ">
                <div class="card-container flex justify-start pb-12">
                    <div class="card h-44 py-2 px-1 relative md:w-1/2 lg: w-1/3 xl:w-1/4"
                        v-for="(livedata, index) in liveData.slice(0, 10)" :key="index">

                        <div @click="toLiveStream" class="card-body relative">
                            <img class="rounded-lg" :src="require(`@/assets/live/${livedata.image}.png`)" alt="Image" />
                            <div class="gradient_bottom w-full flex absolute bottom-0 items-center p-1 pb-2">
                                <div class="pr-1 pl-1 z-10 w-10">
                                    <img :src="require(`@/assets/live/${livedata.streamerIcon}.png`)" alt="Image" />
                                </div>
                                <div class="flex flex-col pl-1 z-10 items-start">
                                    <div class="text-white font-medium text-sm">{{ livedata.liveTitle }}</div>
                                    <div class="text-10px font-medium text-white opacity-60">{{ livedata.streamerName }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>



     <div class="flex justify-center">
        <div class="max-w-[1519px] w-[100%] h-[587px] flex justify-between border-2 border-red-500">
            <div class="w-[1037px] border-2 border-green-500">A</div>
            <div class="w-[463px] border-2">B</div>
        </div>
    </div>
    <div class="flex flex-col contain-er " style="border: 1px solid red">
        <div class="flex justify-evenly">
            <div class="live-stream bg-slate-200" style="width: 1037px; height: 587px;">
                <div class="flex items-center pt-2.5">
                    <div class="pl-4 pr-2">
                        <img src="@/assets/live/defaultStreamerIcon.png" />
                    </div>
                    <div class="flex flex-col">
                        <span class="text-sm font-medium text-grayText">直播标题</span>
                        <span class="font-medium text-10px text-grayText opacity-60" style="font-size: 10px;">主播昵称</span>
                    </div>
                </div>
            </div>
            <div class="live-chat rounded-lg border-green-600"
                style="width: 463px; height: 587px; border-radius: 8px; border-color: green;">
                聊天框
            </div>
        </div>

        <span class="text-lg font-semibold pl-12 pt-5">其他直播推荐</span>
        <main class="live_wrapper">
            <div class="card-container flex justify-start pl-5 pb-12">
                <div class="card h-44 py-2 px-1 relative md:w-1/2 lg: w-1/3 xl:w-1/4"
                    v-for="(livedata, index) in liveData.slice(0, 10)" :key="index">

                    <div @click="toLiveStream" class="card-body relative">
                        <img class="rounded-lg" :src="require(`@/assets/live/${livedata.image}.png`)" alt="Image" />
                        <div class="gradient_bottom w-full flex absolute bottom-0 items-center p-1 pb-2">
                            <div class="pr-1 pl-1 z-10 w-10">
                                <img :src="require(`@/assets/live/${livedata.streamerIcon}.png`)" alt="Image" />
                            </div>
                            <div class="flex flex-col pl-1 z-10 items-start">
                                <div class="text-white font-medium text-sm">{{ livedata.liveTitle }}</div>
                                <div class="text-10px font-medium text-white opacity-60">{{ livedata.streamerName }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    </div> -->
</template>

<script >
// import { useRouter } from 'vue-router'

import { ref } from 'vue';
import ButtonPress from '@/components/ButtonPress.vue';
import EditStreamDetailModal from '@/views/Stream/EditStreamDetail.vue';

// api
import { getUserInfo } from '@/service/apiProvider.js';
import { getAllStreamDetails } from '@/service/apiStreamProvider.js';

export default {
    components: {
        ButtonPress,
        EditStreamDetailModal,
    },

    methods: {
        toLiveStream() {
            // Navigating
            // Push to the Live Page
            this.$router.push({ name: 'home' });
        },
        // edit stream
        showEditStreamDetailModal() {
        this.isEditStreamDetailsModalVisible = true;
        },

        closeEditStreamDetailModal() {
        this.isEditStreamDetailsModalVisible = false;
        },

        async generateLiveList() {
            this.liveData = [];

            this.getLiveList = await getAllStreamDetails();

            console.log()
            console.log(this.getLiveList)

            for (let i = 0; i < this.getLiveList.length; i++) {
                // Pass userId to getUserInfo and get user details
                const userInfo = await getUserInfo(this.getLiveList[i]["userId"]);

                // Check if sportType is 0 (football)
                if (this.getLiveList[i]["sportType"] == this.currentChannel) {
        
                this.liveData.push({
                    liveID: this.getLiveList[i]["id"],
                    image: this.getLiveList[i]["cover"],
                    liveTitle: this.getLiveList[i]["title"],
                    streamerName: userInfo.nickName,
                    streamerIcon: userInfo.head,
                });
                }
            }
        },

    },
    
    mounted() {
        this.generateLiveList()
    },

    data() {
        return {
            // edit stream
            isEditStreamDetailsModalVisible: ref(false),

            currentChannel: ref((localStorage.getItem('currentChannel') === "football") ? 0 : 1),

            LiveID: this.$route.query.LiveID,
            liveData: [],

            // liveData: [
            //     { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon' },
            //     { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon' },
            //     { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon' },
            //     { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'NAME', streamerIcon: 'defaultStreamerIcon' },

            //     { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'CX', streamerIcon: 'defaultStreamerIcon' },
            //     { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'CX', streamerIcon: 'defaultStreamerIcon' },
            //     { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'CX', streamerIcon: 'defaultStreamerIcon' },
            //     { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'CX', streamerIcon: 'defaultStreamerIcon' },
            //     { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'CX', streamerIcon: 'defaultStreamerIcon' },
            //     { image: 'LiveImage', liveTitle: '直播标题', streamerName: 'CX', streamerIcon: 'defaultStreamerIcon' },
            // ],
        };
    },
};


</script>

<style scoped>
@media (min-width: 300px) {
    .chat-container {
        width: 100%;
        height: 380px;

    }
}

@media (min-width: 500px) {
    .chat-container {
        width: 100%;
        height: 380px;

    }
}

@media (min-width: 640px) {
    .live-container {
        max-width: 1037px;
        width: 100%;
        height: auto;

    }

    .chat-container {
        width: auto;
        height: 380px;

    }
}

@media (min-width: 768px) {
    .live-container {
        max-width: 1037px;
        width: 100%;
        height: 586px;
        /* box-sizing: border-box;
    text-align: center;
    margin: 0 auto; */

    }

    .chat-container {
        max-width: 350px;
        width: 100%;
        max-height: 586px;
        height: 100%;

    }

}

@media (min-width: 1300px) {
    .live-container {
        max-width: 1100px;
        width: 100%;
        height: 586px;

    }

    .chat-container {
        max-width: 363px;
        width: 100%;
        max-height: 586px;
        height: 100%;

    }

}

@media (min-width: 1500px) {
    .live-container {
        max-width: 1519px;
        width: 100%;
        height: 586px;


    }

}

/* .live_wrapper {
    width: 100%;
    max-width: 1519px;
    margin: 0px auto;
} */

.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 18px;
    row-gap: 50px;
}

.card {
    display: inline-block;
    width: 270px;
    height: 162px;
    margin-bottom: -35px;

}

.card-body {
    text-align: center;
    height: 161px;
    width: 100%;
    cursor: pointer;
    border: 100px;

}

.card-body img {
    width: 100%;
}

.titleBox {
    position: absolute;
    top: 0;
}

.card-body {
    text-align: center;
    height: 161px;
    width: 100%;
    cursor: pointer;
    position: relative;
}

.card-body img {
    width: 100%;
}

.live-stream {
    border-radius: 8px;
    /* height: 50vh; */
    margin-top: 10px;
    /* margin-left: 150px; */
}


.gradient_bottom::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: -7px;
    z-index: 1;
    background: linear-gradient(to bottom, rgba(197, 197, 197, 0), #000000);
    background-size: cover;
    border-radius: 8px;
}

.scroll-container {
    width: 100%;
    overflow-x: auto;

}


.scroll-container::-webkit-scrollbar {
    display: none;
}

@media (min-width: 300px) {}

@media (min-width: 500px) {}

@media (min-width: 640px) {
    .inner-container {
        max-width: 50px;
        width: 100%;
        height: 600px;
        box-sizing: border-box;
        text-align: center;
        margin: 0 auto;
    }
}

@media (min-width: 768px) {
    .inner-container {
        max-width: 1200px;
        width: 100%;
        height: 600px;
        box-sizing: border-box;
        text-align: center;
        margin: 0 auto;
    }

}

@media (min-width: 1300px) {
    .inner-container {
        max-width: 1519px;
        width: 100%;
        height: 600px;
        box-sizing: border-box;
        text-align: center;
        margin: 0 auto;
    }

}

@media (max-width: 1519px) {
    .inner-container {
        min-width: 1519px;
    }
}
</style>