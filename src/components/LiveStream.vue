<template>
    <div class="flex justify-center">
        <div class="max-w-[1519px] md:flex justify-between pt-1.5">
            <div class="live-container">
                <div class="relative rounded-lg">
                    <div class="">
                        <img class="w-full h-full" src="@/assets/live/liveStreamBackground.png" alt="Image" />
                    </div>
                    <div class="w-full flex headerBox items-center md:pt-4 pt-3 md:pl-2 pb-2">
                        <div class="pr-1 pl-1 z-10 w-[50px]">
                            <img class="rounded-full" :src="this.StreamIcon" alt="Image" />
                        </div>
                        <div class="flex flex-col md:pl-1 pl-5 z-10 items-start md:pb-1.5 pb-3">
                            <div class="text-white font-normal md:text-sm text-10px">
                                {{ this.LiveTitle }}
                            </div>
                            <div class="md:text-10px text-8px font-bold text-white opacity-60">
                                {{ this.StreamName }}
                            </div>
                        </div>
                        <div class="pr-1 pl-5 z-10 pb-1.5">
                            <ButtonPress @click="showEditStreamDetailModal()"
                                class="rounded-[30px] md:static relative -top-1" style="background-color: #16b13b">
                                <div class="flex">
                                    <img class="live-image" src="@/assets/live/liveSetting.png" />
                                    <div class="pl-1.5 font-normal md:text-base text-sm text-white md:block hidden">
                                        {{ $t("Live broadcast settings") }}
                                    </div>
                                </div>
                            </ButtonPress>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chat-box border-2 border-white rounded-lg ml-2 flex flex-col">
                <div class="chat-container overflow-y-auto h-[300px] ">
                    <div v-for="(message, index) in this.chatsend" :key="index" class="flex pb-4 p-3">
                        <div v-if="this.chatsend[index]" class="flex">
                            <div class="pr-2">
                                <img class="w-[30px]" src="@/assets/ProfilePicture.png" />
                            </div>

                            <div class="flex flex-col chat_border">
                                <div class="text-xs font-medium" style="color: #666666">
                                    <!-- <div v-if="this.chatsend[index]"> -->
                                    {{ this.chatsender[index] }}
                                    <!-- </div> -->
                                </div>
                                <div class="text-sm font-medium" style="color: #333333">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <div class="pr-4 pl-1">
                        <input class="w-[140px] pl-3 rounded-[24.46px] h-[44px] font-normal text-xs" v-model="messageInput"
                            placeholder="输入内容" type="text" />
                    </div>
                    <div class="mt-1">
                        <button @click="toSendMessage">
                            <img class="max-w-[36px] max-h-[36px]" src="@/assets/live/chatSend.png" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="flex justify-center">
        <div class="flex flex-col max-w-[1519px] w-full">
            <span class="text-lg font-semibold md:pl-12 pl-5 pt-3 pb-1">{{
                $t("Other Live Recommend")
            }}</span>
            <main class="live_wrapper items-center md:pl-[45px] pl-0">
                <div class="card-container flex justify-start pb-12">
                    <div class="card h-44 py-2 px-1 relative md:w-1/2 lg: w-1/3 xl:w-1/4"
                        v-for="(livedata, index) in liveData.slice(0, 10)" :key="index">
                        <div @click="toLiveStream(livedata.liveID)" class="card-body relative">
                            <img class="rounded-lg border-2 w-full h-full" :src="livedata.image" alt="Image" />
                            <div class="gradient_bottom w-full flex absolute bottom-3 items-center p-1 pb-2">
                                <div class="pr-1 pl-1 z-10 w-10">
                                    <img class="rounded-full" :src="livedata.streamerIcon" alt="Image" />
                                </div>
                                <div class="flex flex-col pl-1 z-10 items-start">
                                    <div class="text-white font-medium md:text-sm text-10px">
                                        {{ livedata.liveTitle }}
                                    </div>
                                    <div class="md:text-10px text-8px font-medium text-white opacity-60">
                                        {{ livedata.streamerName }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <EditStreamDetailModal :showEditStreamDetailModal="isEditStreamDetailsModalVisible"
        :closeEditStreamDetailModal="closeEditStreamDetailModal" :LiveID="this.LiveID" />
</template>

<script>
// import { useRouter } from 'vue-router'

import { ref } from "vue";
import ButtonPress from "@/components/ButtonPress.vue";
import EditStreamDetailModal from "@/views/Stream/EditStreamDetail.vue";

//tencent api
import TIM from "tim-js-sdk/tim-js-friendship.js";
import genTestUserSig from "@/tencent/GenerateTestUserSig.js";
import TencentCloudChat from "@tencentcloud/chat";
import VueCookies from "vue-cookies";
import TIMUploadPlugin from "tim-upload-plugin";

// api
import { getAllStreamDetails, getStreamDetails } from "@/service/apiStreamProvider.js";

// import { mapActions } from "vuex";

export default {
    components: {
        ButtonPress,
        EditStreamDetailModal,
    },

    methods: {
        // ...mapActions(["clearAVChatRoom"]),
        toLiveStream(liveID) {
            console.log(liveID);
            // // Navigating
            // // Push to the Live Page
            // // this.$router.push({ name: 'LiveStream' });
            // const routeData = this.$router.resolve({
            //   name: "LiveStream",
            //   query: {
            //     LiveID: liveID,
            //   },
            // });
            // window.location.href = routeData.href;
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

            for (let i = 0; i < this.getLiveList.length; i++) {
                // Check if sportType is 0 (football)
                if (this.getLiveList[i]["sportType"] == this.currentChannel) {
                    this.liveData.push({
                        liveID: this.getLiveList[i]["id"],
                        image: this.getLiveList[i]["cover"],
                        liveTitle: this.getLiveList[i]["title"],
                        streamerName: this.getLiveList[i]["nickName"],
                        streamerIcon: this.getLiveList[i]["avatar"],
                    });
                }
            }
        },

        async displayLive(liveID) {
            this.getLiveDetails = await getStreamDetails(liveID);

            this.LiveTitle = this.getLiveDetails["title"];
            this.StreamIcon = this.getLiveDetails["avatar"];
            this.StreamName = this.getLiveDetails["nickName"];
        },

        //tencent setup

        toSetLogLevel() {
            this.timInstance.setLogLevel(4);
        },

        toRegisterPlugin() {
            this.timInstance?.registerPlugin({
                "tim-upload-plugin": TIMUploadPlugin,
            });

            // this.$store.dispatch("AVChatRoomLogin", { timInstance: this.timInstance });
        },

        toLogin() {
            this.timInstance
                .login({
                    userID: this.phonenumber,
                    userSig: new genTestUserSig(this.phonenumber).userSig,
                })
                .then((response) => {
                    console.log("logined", response);
                })
                .catch((error) => {
                    console.warn("error", error);
                });
        },

        toJoinGroup() {
            this.timInstance
                .joinGroup({
                    groupID: this.groupID,
                    type: TIM.TYPES.GRP_AVCHATROOM,
                    applyMessage: "HUHHH",
                })
                .then((response) => {
                    console.log("joined", response);
                })
                .catch((error) => {
                    console.warn("error", error);
                });
        },

        toSendMessage() {
            console.log(this.messageInput);
            const msg = this.timInstance.createTextMessage({
                to: this.groupID,
                conversationType: TIM.TYPES.CONV_GROUP,
                payload: {
                    text: this.messageInput,
                },
                needReadReceipt: false,
            });
            console.log(
                this.timInstance
                    .sendMessage(msg)
                    .then((imResponse) => {
                        const array = imResponse.data.message.payload.text;
                        this.chatsend.push(array);
                        const sender = imResponse.data.message.nick;
                        this.chatsender.push(sender);
                        console.log("haha", imResponse.data.message.nick);
                    })
                    .catch((imError) => {
                        console.warn("fuck", imError);
                    })
            );
        },

        toGetMessageList() {
            let promise = this.timInstance.getMessageList({
                conversationID: `GROUP${this.groupID}`,
            });
            promise.then(function (response) {
                console.log("response sending:", response.data.messageList);
            });
        },

        onMessageReceived(event) {
            this.messageList = event.data[0].payload.text;
            const sender = event.data[0].nick;
            console.log("huh", event);
            this.chatsend.push(this.messageList);
            this.chatsender.push(sender);
            this.messageList.forEach((message) => {
                if (message.type === TencentCloudChat.TYPES.MSG_TEXT) {
                    // Handle text message
                } else if (message.type === TencentCloudChat.TYPES.MSG_IMAGE) {
                    // Handle image message
                } else if (message.type === TencentCloudChat.TYPES.MSG_SOUND) {
                    // Handle audio message
                } else if (message.type === TencentCloudChat.TYPES.MSG_VIDEO) {
                    // Handle video message
                } else if (message.type === TencentCloudChat.TYPES.MSG_FILE) {
                    // Handle file message
                } else if (message.type === TencentCloudChat.TYPES.MSG_CUSTOM) {
                    // Handle custom message
                } else if (message.type === TencentCloudChat.TYPES.MSG_MERGER) {
                    // Handle merger message
                } else if (message.type === TencentCloudChat.TYPES.MSG_LOCATION) {
                    // Handle location message
                } else if (message.type === TencentCloudChat.TYPES.MSG_GRP_TIP) {
                    // Handle group tip message
                } else if (message.type === TencentCloudChat.TYPES.MSG_GRP_SYS_NOTICE) {
                    // Handle group system notice message
                }
            });
        },
    },
    mounted() {
        this.toLogin();
        this.toJoinGroup();
        console.log(
            this.timInstance.on(TencentCloudChat.EVENT.MESSAGE_RECEIVED, this.onMessageReceived)
        );
        // this.toGetMessageList();
    },

    data() {
        return {
            timInstance: TIM.create({
                SDKAppID: 20004801,
                userSig: new genTestUserSig(this.phonenumber).userSig,
            }),
            //get user information for the chat room
            nickname: VueCookies.get("username"),
            phonenumber: VueCookies.get("phoneNumber"),

            //variable to store info related to AVChat room
            groupID: "wtf",
            chatsend: [],
            chatsender: [],

            // edit stream
            isEditStreamDetailsModalVisible: ref(false),

            currentChannel: ref(localStorage.getItem("currentChannel") === "football" ? 0 : 1),

            LiveID: this.$route.query.LiveID,
            LiveTitle: ref(""),
            StreamIcon: "@/assets/avatar_default",
            StreamName: ref(""),
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

    input{
        width: 300px;
    }

    .chat-container {
        width: 350px;
        height: 580px;
        overflow-y: auto;
    }

    .chat-box {
        width: 400px;
        height: 450px;
    }

    .card {
        display: inline-block;
        width: 175px;
        height: 162px;
    }



    .gradient_bottom:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        z-index: 1;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
        background-size: cover;
        border-radius: 8px;
    }

    .live-image {
        display: block;
        width: 22px;
    }
}

@media (min-width: 500px) {
    .card {
        display: inline-block;
        width: 230px;
        height: 162px;
    }

    .gradient_bottom:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        z-index: 1;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
        background-size: cover;
        border-radius: 8px;
    }

    .live-image {
        display: block;
        width: 22px;
    }
}

@media (min-width: 640px) {

    .live-container {
        max-width: 1037px;
        width: 100%;
        height: auto;
    }

    .card {
        display: inline-block;
        width: 287px;
        height: 162px;
    }

    .gradient_bottom:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        z-index: 1;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
        background-size: cover;
        border-radius: 8px;
    }

    .live-image {
        display: block;
        width: 24px;
    }
}

@media (min-width: 768px) {
    input{
        width: 240px;
    }

    .live-container {
        max-width: 1037px;
        width: 100%;
    }

    .chat-container {
        max-width: 340px;
        width: 100%;
        max-height: 586px;
        height: 100%;
        overflow-y: auto;
    }

    .chat-box {
        max-width: 300px;
        width: 100%;
        max-height: 370px;
        height: 100%;
    }
}

@media (min-width: 1300px) {
    input{
        width: 300px;
    }

    .live-container {
        max-width: 1100px;
        width: 100%;
    }

    .chat-container {
        max-width: 363px;
        width: 100%;
        max-height: 520px;
        overflow-y: auto;

    }

    .chat-box {
        max-width: 380px;
        width: 100%;
        max-height: 586px;
        overflow-y: auto;
    }
}

@media (min-width: 1500px) {

    .live-container {
        max-width: 1519px;
        width: 100%;
    }
}

.live_wrapper {
    width: 100%;
    max-width: 1519px;
    margin: 0px auto;
}

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


.headerBox {
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

.gradient_bottom::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: -10px;
    z-index: 1;
    background: linear-gradient(to bottom, rgba(197, 197, 197, 0), #000000);
    background-size: cover;
    border-radius: 8px;
}


.chat_border {
    background-color: #ffffff;
    border-radius: 8px;
    padding: 10px;
}
</style>
