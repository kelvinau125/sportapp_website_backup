
// tencent api
import TIM from "tim-js-sdk/tim-js-friendship.js";
import genTestUserSig from "@/tencent/GenerateTestUserSig.js";
import TencentCloudChat from "@tencentcloud/chat";
import VueCookies from "vue-cookies";
import TIMUploadPlugin from "tim-upload-plugin";


export function toSetLogLevel(tim) {
    tim.setLogLevel(4);
}

export function toRegisterPlugin(tim) {
    tim?.registerPlugin({
        "tim-upload-plugin": TIMUploadPlugin,
    });
}

export function toLogin(tim) {
    tim
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
}

import appData, { toSetLogLevel, toRegisterPlugin, toLogin } from ''