import CryptoJS from 'crypto-js';

import {
  postRequest,
  getRequest,
  patchRequest,
  postFileRequest
} from '@/service/apiRequestMethod';

import {
  baseUrl,
  loginUrl,
  createUserUrl,
  sendMsgUrl,
  verifyMsgUrl,
  updatePasswordUrl,
  updateNickNameUrl,
  uploadFileUrl,
  updateHeadUrl,
  updateforgotPasswordurl,
  findUserByIdUrl,
  getPopularAnchorurl,
 } from '@/utils/apiConfig.js';

// get user cookie / set cookie
import VueCookies from 'vue-cookies';
import { setCookie, setNicknameCookie, setImageCookie } from '@/service/cookie';
import { useTencentSDK } from "@/utils/tencentSDKProvder";


// User Login
export async function loginUser(phoneNumber, password) {
  const url = baseUrl + loginUrl;

  console.log(url)

  // phone number format reformat
  const phoneNo = (phoneNumber).replace('+', '').replace(/\s/g, '');

  // hashPassword function
  const encryptedPassword = hashPassword(password);

  const apiDetails = {
    mobile: phoneNo,
    password: encryptedPassword,
  };

  try {
    const response = await postRequest(url, apiDetails);

    const code = response.code;
    const data = response.data;

    if (code === 0) {
      const token = data.token;
      const mobile = data.mobile;
      const avatar = data.head;
      const username = data.username;
      const role = data.role;

      setCookie(token, mobile, avatar, username, role);

      if (data !== '') {
        return true;
      }
    } else {
      console.log(`Unsuccessfully login: ${code}`);
      return false;
    }
  } catch (e) {
    console.log(`Unsuccessful in provider: ${e}`);
    return false;
  }
}

// Login Password Hash Function
export function hashPassword(password) {
  const salt = '1a2b3c4d';
  const saltedPassword = '' + salt[0] + salt[2] + password + salt[5] + salt[4];
  const hashedPassword = CryptoJS.MD5(saltedPassword).toString();
  return hashedPassword;
}

// User Register
export async function registerUser(userNickname, phoneNumber, password) {
  const url = baseUrl + createUserUrl;

  // phone number format reformat
  const phoneNo = (phoneNumber).replace('+', '').replace(/\s/g, '');

  // areacode reformat
  const areacode = "+" + parseInt(phoneNumber.split(' ')[0]);

  // Assuming you have a hashPassword function
  const encryptedPassword = hashPassword(password);

  const apiDetails = {
    id: phoneNo,
    nickName: userNickname,
    password: encryptedPassword,
    head: 'https://live-stream-1321239144.cos.ap-singapore.myqcloud.com/head/000153ed8cd649019e5659f9456419ae.png',
    areaCode: areacode
  };

  try {
    const response = await postRequest(url, apiDetails);

    const code = response.code;
    const data = response.data;

    if (code === 0) {

      if (data !== '') {
        return true;
      }
    } else {
      console.log(`Unsuccessfully login: ${code}`);
      return false;
    }
  } catch (e) {
    console.log(`Unsuccessful in provider: ${e}`);
    return false;
  }
}

// Get OTP
export async function getOTP(phoneNumber, codes) {
  // phone number format reformat
  const phoneNo = (phoneNumber).replace('+', '').replace(/\s/g, '');

  const url = baseUrl + sendMsgUrl + codes + "/" + phoneNo;

  try {
    const response = await getRequest(url);

    const code = response.code;

    if (code === 0) {
      return true;
    } else if (code === 500215) {
      return 'phone number existed';
    } else if (code === 500313) {
      return 'OTP hits limit';
    } else if (code === 500214) {
      return 'account not exist';
    } else {
      return 'Unsuccessfully get otp';
    }

  } catch (e) {
    console.log(`Unsuccessful in provider: ${e}`);
    return false;
  }
}

// Verify OTP
export async function verifyOTP(phoneNumber, OTP, code) {
  const url = baseUrl + verifyMsgUrl + "/" + code;

  // phone number format reformat
  const phoneNo = (phoneNumber).replace('+', '').replace(/\s/g, '');

  const apiDetails = {
    mobile: phoneNo,
    code: OTP,
  };

  try {
    const response = await postRequest(url, apiDetails);

    const code = response.code;

    if (code === 0) {
      return true;
    } else {
      console.log(`Unsuccessfully verify OTP: ${code}`);
      return false;
    }
  } catch (e) {
    console.log(`Unsuccessful in provider: ${e}`);
    return false;
  }
}


// Update User Password
export async function UpdateUserPassword(password) {
  // get user token
  const userToken = VueCookies.get('userToken')

  const url = baseUrl + updatePasswordUrl + userToken;

  // hashPassword function
  const encryptedPassword = hashPassword(password);

  const apiDetails = {
    password: encryptedPassword,
  };

  try {
    const response = await patchRequest(url, apiDetails);

    const code = response.code;

    if (code === 0) {
      return true;
    } else {
      console.log(`Password Unsuccessfully upload to database: ${code}`);
      return false;
    }
  } catch (e) {
    console.log(`Unsuccessful in provider: ${e}`);
    return false;
  }
}

// Update User Password
export async function ForgotPassword(phoneNumber, password) {

  // phone number format reformat
  const phoneNo = (phoneNumber).replace('+', '').replace(/\s/g, '');

  const url = baseUrl + updateforgotPasswordurl + phoneNo;

  // hashPassword function
  const encryptedPassword = hashPassword(password);

  const apiDetails = {
    password: encryptedPassword,
  };

  try {
    const response = await patchRequest(url, apiDetails);

    const code = response.code;

    if (code === 0) {
      return true;
    } else {
      console.log(`Password Unsuccessfully upload to database: ${code}`);
      return false;
    }
  } catch (e) {
    console.log(`Unsuccessful in provider: ${e}`);
    return false;
  }
}

// Update User Nickname
export async function UpdateUserNickname(nickname) {
  // get user token
  const userToken = VueCookies.get('userToken')

  const url = baseUrl + updateNickNameUrl + userToken + "/" + nickname;

  setNicknameCookie(nickname);

  const apiDetails = {};

  try {
    const response = await patchRequest(url, apiDetails);

    const code = response.code;

    if (code === 0) {
      return true;
    } else {
      console.log(`nickname Unsuccessfully upload to database: ${code}`);
      return false;
    }
  } catch (e) {
    console.log(`Unsuccessful in provider: ${e}`);
    return false;
  }
}


// Update Image
export async function updateProfilePic(file) {
  // get user token
  const userToken = VueCookies.get('userToken')

  const url = baseUrl + uploadFileUrl;

  console.log(file);

  try {
    const response = await postFileRequest(file, url);
    const code = response.code;
    const data = response.data;

    // pushImageToServer(userToken, data);
    const isFinished = await pushImageToServer(userToken, data);

    if (isFinished) {

      if (code === 0) {
        return true;
      } else {
        console.log(`picture Unsuccessfully upload to database: ${code}`);
        return false;
      }
    } else {
      console.log(`picture Unsuccessfully upload to database: ${code}`);
      return false;
    }
  } catch (e) {
    console.log(`Unsuccessful in provider: ${e}`);
    return false;
  }
}

export async function pushImageToServer(usertToken, imageToken) {
  let tim = null;
  useTencentSDK()
      .then((result) => {
        tim = result.timInstance.value;
      })
      .catch((err) => {
        console.log("error here: ", err);
      });

  const url = baseUrl + updateHeadUrl + usertToken;

  const imageTokenUrl = imageToken;

  const apiDetails = {
    head: imageTokenUrl,
  };

  try {
    const response = await patchRequest(url, apiDetails);

    const code = response.code;

    if (code === 0) {
      setImageCookie(imageTokenUrl);

      tim.updateMyProfile({
        avatar: imageTokenUrl,
      })
      .then((response) => {
        console.log("change profile: ", response);
      })
      .catch((error) => {
        console.log("error profile", error);
      });

      return true;
    } else {
      console.log(`picture Unsuccessfully upload to database: ${code}`);
      return false;
    }
  } catch (e) {
    console.log(`Unsuccessful in provider: ${e}`);
    return false;
  }
}

// get stream details
export async function getUserInfo(userID) {

  const url = baseUrl + findUserByIdUrl + userID

  try {
    const response = await getRequest(url);

    const code = response.code;
    const data = response.data;

    if (code === 0) {
      return data;
    }else {
      console.log(`get getUserInfo Unsuccessfully: ${code}`);
      return [];
    }

  } catch (e) {
    console.log(`Unsuccessful in provider: ${e}`);
    return [];
  }
}

// get popular anchor
export async function getPopularAnchor() {

  const url = baseUrl + getPopularAnchorurl

  try {
    const response = await getRequest(url);

    const code = response.code;
    const data = response.data;

    if (code === 0) {
      return data;
    }else {
      console.log(`get getPopularAnchor Unsuccessfully: ${code}`);
      return [];
    }

  } catch (e) {
    console.log(`Unsuccessful in provider: ${e}`);
    return [];
  }
}