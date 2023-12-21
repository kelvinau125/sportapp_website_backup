
// tencent api
import genTestUserSig from "@/tencent/GenerateTestUserSig.js";
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
