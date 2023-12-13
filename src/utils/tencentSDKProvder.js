import { ref, provide, inject } from 'vue';
import TIM from "tim-js-sdk/tim-js-friendship.js";
import genTestUserSig from "@/tencent/GenerateTestUserSig.js";
// import TencentCloudChat from "@tencentcloud/chat";
import VueCookies from "vue-cookies";
import TIMUploadPlugin from "tim-upload-plugin";

export const TencentSDKSymbol = Symbol();
const phonenumber = VueCookies.get("phoneNumber");

export async function useTencentSDK() {
    const timInstance = ref(
        null
    );

    timInstance.value = TIM.create({
        SDKAppID: 20004801,
        userSig: new genTestUserSig(phonenumber).userSig,
    });

    console.log("register: ", timInstance.value.registerPlugin({
        "tim-upload-plugin": TIMUploadPlugin,
    }))
    console.log("login:", timInstance.value.login({
        userID: phonenumber,
        userSig: new genTestUserSig(phonenumber).userSig,
    }).then((result) => {
        console.log("cheng gong ", result);
    }).catch((err) => {
        console.log("error: ", err);
    }));

    console.log("set log: ", timInstance.value.setLogLevel(4));



    provide(TencentSDKSymbol, timInstance.value);

    return {
        timInstance,
    };
}


export function injectTencentSDK() {
    return inject(TencentSDKSymbol);
}