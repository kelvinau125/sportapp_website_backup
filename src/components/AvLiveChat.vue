<!-- <template>
  <div style="height: 100vh; width: 100vw">
    <TencentCloudChat :tim="tim"></TencentCloudChat>
  </div>
</template>

<script>
import TencentCloudChat from "@tencentcloud/chat";
import TIM from "tim-js-sdk/tim-js-friendship";
import TIMUploadPlugin from "tim-upload-plugin";
import genTestUserSig from "@/tencent/GenerateTestUserSig.js";
import { ref } from "vue";
import { onMounted } from "vue";

export default {
  components: {
    TencentCloudChat,
  },
  data() {
    return {
      chat: null,
      groupID: "@TGS#aCXDLWE5CR",
      playUrl: "https://web.sdk.qcloud.com/im/demo/intl/live-demo-video.mp4",
    };
  },
  setup() {
    const tim = ref(null);

    const init = async () => {
      return new Promise((resolve) => {
        const timInstance = TIM.create({
          SDKAppID: 20004801,
          userSig: new genTestUserSig("60127659785").userSig,
        });
        timInstance?.registerPlugin({
          "tim-upload-plugin": TIMUploadPlugin,
        });
        const onReady = () => {
          resolve(timInstance);
        };
        timInstance.on(TIM.EVENT.SDK_READY, onReady);
        timInstance.login({
          userID: "60127659785",
          userSig: new genTestUserSig("60127659785").userSig,
        });
      });
    };

    onMounted(async () => {
      const userSigInfo = new genTestUserSig(
        "05a26268b99ece6f3c9b00549dafcbabf2e76b7df1d6b0fae9d8513c6efeeac3"
      );
      genTestUserSig.SDKAppID = userSigInfo.SDKAppID;
      tim.value = await init();
    });

    return {
      tim,
    };
  },
  methods: {},
};
</script>
@/tencent/lib-generate-test-usersig-es.min -->
