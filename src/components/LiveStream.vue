<template>
  <div class="scroll-container">
    <div class="inner-container">
      <div class="max-w-[1519px] flex justify-between pt-1.5">
        <div class="max-w-[1037px] w-full h-[586px]">
          <div class="relative rounded-lg">
            <div class="">
              <video
                autoplay
                controls
                class="tui-live-content w-full h-full"
                :class="className"
                :id="ID"
                preload="auto"
                playsInline
                ref="playerRef"
                src="https://vjs.zencdn.net/v/oceans.mp4"
              ></video>
              <!-- <img
                class="w-full h-full"
                src="@/assets/live/liveStreamBackground.png"
                alt="Image"
              /> -->
            </div>
            <div class="w-full flex titleBox items-center pt-4 pl-2 pb-2">
              <div class="pr-1 pl-3 z-10 pb-1.5">
                <img src="@/assets/live/defaultStreamerIcon.png" alt="Image" />
              </div>
              <div class="flex flex-col pl-1 z-10 items-start pb-1.5">
                <div class="text-white font-normal md:text-sm text-xs">直播标题</div>
                <div class="md:text-10px text-8px font-bold text-white opacity-60">
                  主播昵称
                </div>
              </div>
              <div class="pr-1 pl-10 z-10 pb-1.5">
                <ButtonPress
                  @click="HALO"
                  class="rounded-[30px]"
                  style="background-color: #16b13b"
                >
                  <div class="flex">
                    <img src="@/assets/live/liveSetting.png" />
                    <div class="pl-1.5 font-normal text-base text-white">
                      {{ $t("Live broadcastsettings") }}
                    </div>
                  </div>
                </ButtonPress>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-[463px] w-full border-2">
          聊天窗口
          <!-- <input v-model="messageInput" placeholder="Type your message" />
          <button @click="toSendMessage">Send</button>

          <tui-live-context-provider :value="liveContextValue" :class="className">
          </tui-live-context-provider> -->

          <div class="chat-container border-2 border-white rounded-lg ml-2 relative">
            <div class="flex pb-4 p-3">
              <div class="pr-2">
                <img class="w-[30px]" src="@/assets/avatar_default.jpg" />
              </div>
              <div class="flex flex-col chat_border">
                <div class="text-xs font-medium" style="color: #666666">
                  ZHENAYUUUUUUUUUUUU
                </div>
                <div class="text-sm font-medium" style="color: #333333">Halo World</div>
              </div>
            </div>
            <div class="flex pb-4 p-3">
              <div class="pr-2">
                <img class="w-[30px]" src="@/assets/avatar_default.jpg" />
              </div>
              <div class="flex flex-col chat_border">
                <div class="text-xs font-medium" style="color: #666666">
                  俐敏俐敏俐敏俐敏
                </div>
                <div class="text-sm font-medium" style="color: #333333">俐敏 你好</div>
              </div>
            </div>

            <div class="absolute bottom-0 flex pb-3">
              <!-- Enter to send message... -->
              <div class="pr-4">
                <input
                  class="w-[300px] pl-3 rounded-[24.46px] h-[44px] font-normal text-xs"
                  placeholder="输入内容"
                  type="text"
                />
              </div>
              <div class="mt-1">
                <button>
                  <img class="w-[36px] h-[36px]" src="@/assets/live/chatSend.png" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
  <div class="flex justify-center">
    <div class="flex flex-col max-w-[1519px] w-full">
      <span class="text-lg font-semibold pl-7 pt-3 pb-1">其他直播推荐</span>
      <main class="live_wrapper">
        <div class="card-container flex justify-start pb-12">
          <div
            class="card h-44 py-2 px-1 relative md:w-1/2 lg: w-1/3 xl:w-1/4"
            v-for="(livedata, index) in liveData.slice(0, 10)"
            :key="index"
          >
            <div @click="toLiveStream" class="card-body relative">
              <img
                class="rounded-lg"
                :src="require(`@/assets/live/${livedata.image}.png`)"
                alt="Image"
              />
              <!-- <img src="@/assets/live/LiveImage.png" class="" /> -->
              <div
                class="gradient_bottom w-full flex absolute bottom-0 items-center p-1 pb-2"
              >
                <div class="pr-1 pl-1 z-10 w-10">
                  <img
                    :src="require(`@/assets/live/${livedata.streamerIcon}.png`)"
                    alt="Image"
                  />
                  <!-- <img src="@/assets/live/defaultStreamerIcon.png" /> -->
                </div>
                <div class="flex flex-col pl-1 z-10 items-start">
                  <div class="text-white font-medium text-sm">
                    {{ livedata.liveTitle }}
                  </div>
                  <div class="text-10px font-medium text-white opacity-60">
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
  <!-- <div class="flex justify-center">
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

<script>
// import { useRouter } from 'vue-router'

import { ref } from 'vue';
import ButtonPress from "@/components/ButtonPress.vue";
import TIM from "tim-js-sdk/tim-js-friendship.js";
// import TIMUploadPlugin from "tim-upload-plugin";
import genTestUserSig from "@/tencent/GenerateTestUserSig.js";
import TencentCloudChat from "@tencentcloud/chat";
import VueCookies from "vue-cookies";
import EditStreamDetailModal from '@/views/Stream/EditStreamDetail.vue';

// api
import { getAllStreamDetails, getStreamDetails } from '@/service/apiStreamProvider.js';

export default {
  components: {
    ButtonPress,
  },
  props: {
    className: String,
    liveContextValue: Object,
    TimInstance: Function,
  },
  methods: {
    toLiveStream() {
      // Navigating
      // Push to the Live Page
      this.$router.push({ name: "home" });
    },

    toLogin() {
      this.getTimInstance.timInstance
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
      this.getTimInstance.timInstance
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
      const msg = this.getTimInstance.timInstance.createTextMessage({
        to: this.groupID,
        conversationType: TIM.TYPES.CONV_GROUP,
        payload: {
          text: this.messageInput,
        },
        needReadReceipt: false,
      });
      console.log(
        this.getTimInstance.timInstance
          .sendMessage(msg)
          .then((imResponse) => {
            console.log("haha", imResponse);
          })
          .catch((imError) => {
            console.warn("fuck", imError);
          })
      );
    },

    toGetMessageList() {
      let promise = this.getTimInstance.timInstance.getMessageList({
        conversationID: `GROUP${this.groupID}`,
      });
      promise.then(function (response) {
        console.log(response.data.messageList);
      });
    },

    onMessageReceived(event) {
      this.messageList = event.data;
      console.log("huh", this.messageList);
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
  computed: {
    getTimInstance() {
      return this.$store.getters.timInstance;
    },
    placeholder() {
      return this.messageInput ? "" : "Type your message...";
    },
  },
  mounted() {
    console.log(this.getTimInstance);
    console.log("timInstance:", this.getTimInstance.timInstance);
    this.toLogin();
    this.toJoinGroup();
    console.log(
      this.getTimInstance.timInstance.on(
        TencentCloudChat.EVENT.MESSAGE_RECEIVED,
        this.onMessageReceived
      )
    );
  },

  data() {
    return {
      //get user information for the chat room
      nickname: VueCookies.get("username"),
      phonenumber: VueCookies.get("phoneNumber"),

      //get message input in chat room
      messageList: "",
      messageInput: "",

      //variable to store info related to AVChat room
      groupID: "wtf",

      liveData: [
        {
          image: "LiveImage",
          liveTitle: "直播标题",
          streamerName: "NAME",
          streamerIcon: "defaultStreamerIcon",
        },
        {
          image: "LiveImage",
          liveTitle: "直播标题",
          streamerName: "NAME",
          streamerIcon: "defaultStreamerIcon",
        },
        {
          image: "LiveImage",
          liveTitle: "直播标题",
          streamerName: "NAME",
          streamerIcon: "defaultStreamerIcon",
        },
        {
          image: "LiveImage",
          liveTitle: "直播标题",
          streamerName: "NAME",
          streamerIcon: "defaultStreamerIcon",
        },

        {
          image: "LiveImage",
          liveTitle: "直播标题",
          streamerName: "CX",
          streamerIcon: "defaultStreamerIcon",
        },
        {
          image: "LiveImage",
          liveTitle: "直播标题",
          streamerName: "CX",
          streamerIcon: "defaultStreamerIcon",
        },
        {
          image: "LiveImage",
          liveTitle: "直播标题",
          streamerName: "CX",
          streamerIcon: "defaultStreamerIcon",
        },
        {
          image: "LiveImage",
          liveTitle: "直播标题",
          streamerName: "CX",
          streamerIcon: "defaultStreamerIcon",
        },
        {
          image: "LiveImage",
          liveTitle: "直播标题",
          streamerName: "CX",
          streamerIcon: "defaultStreamerIcon",
        },
        {
          image: "LiveImage",
          liveTitle: "直播标题",
          streamerName: "CX",
          streamerIcon: "defaultStreamerIcon",
        },
      ],
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

  .card {
    display: inline-block;
    width: 175px;
    height: 162px;
  }

  .titleBox {
    position: absolute;
    bottom: 20px;
  }

  .contentImage {
    display: block;
    width: 30px;
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
  .chat-container {
    width: 100%;
    height: 380px;
  }

  .card {
    display: inline-block;
    width: 230px;
    height: 162px;
  }

  .titleBox {
    position: absolute;
    bottom: 20px;
  }

  .contentImage {
    display: block;
    width: 35px;
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

  .chat-container {
    width: auto;
    height: 380px;
  }

  .card {
    display: inline-block;
    width: 287px;
    height: 162px;
  }

  .titleBox {
    position: absolute;
    bottom: 20px;
  }

  .contentImage {
    display: block;
    width: 38px;
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
  .chat-container {
    max-width: 240px;
    width: 100%;
    max-height: 586px;
    height: 100%;
  }
}

@media (min-width: 1300px) {
  .chat-container {
    max-width: 363px;
    width: 100%;
    max-height: 586px;
    height: 100%;
  }
}

.chat_border {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 10px;
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
  width: 287px;
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

/* .gradient_bottom::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
} */
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

.live-chat {
  border-radius: 8px;
  background-color: #ffffff;
  border: 1px solid;
  /* height: 50vh; */
  margin-top: 10px;
  /* margin-right: 150px; */
}

.gradient_bottom::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: 1;
  background: linear-gradient(to bottom, rgba(197, 197, 197, 0), #000000);
  background-size: cover;
  border-radius: 8px;
}

.scroll-container {
  /* position: absolute; */
  width: 100%;
  overflow-x: auto;
}

.inner-container {
  max-width: 1519px;
  width: 100%;
  height: 600px;
  box-sizing: border-box;
  text-align: center;
  /* padding: 20px; */
  margin: 0 auto;
}

.scroll-container::-webkit-scrollbar {
  display: none;
}

@media (max-width: 1519px) {
  .inner-container {
    min-width: 1519px;
    /* Set a minimum width to stop shrinking */
  }
}

.tui-live-content {
  border-radius: 8px;
  width: 900px;
  height: 580px;
  color: whitesmoke;
  background-color: black;
}
</style>
