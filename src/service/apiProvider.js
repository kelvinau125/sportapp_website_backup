import CryptoJS from 'crypto-js';

import { 
  postRequest,
  getRequest
 } from '@/service/apiRequestMethod';
import { setCookie } from '@/service/cookie';
import { 
  baseUrl,
  loginUrl,
  createUserUrl,
  sendMsgUrl,
  verifyMsgUrl
 } from '@/utils/apiConfig.js';


// User Login
export async function loginUser(phoneNumber, password) {
  const url = baseUrl + loginUrl;

  console.log(url)

  // phone number format reformat
  const phoneNo = (phoneNumber).replace('+', '').replace(/\s/g, '');

  // Assuming you have a hashPassword function
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

      setCookie(token, mobile);

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
  // const phoneNo = (phoneNumber).replace('+', '').replace(/\s/g, '');
  const phoneNo = phoneNumber;

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

    // if (code === 0) {
    //   console.log(`OTP sent successfully: ${code}`);
    //   return code;
    // }
    // else {
    //   console.log(`Unsuccessfully get otp: ${code}`);
    //   return code;
    // }

  } catch (e) {
    console.log(`Unsuccessful in provider: ${e}`);
    return false;
  }
}

// Verify OTP
export async function verifyOTP(phoneNumber, OTP, code) {
  const url = baseUrl + verifyMsgUrl + "/" + 1;

  // phone number format reformat
  // const phoneNo = (phoneNumber).replace('+', '').replace(/\s/g, '');
  // const phoneNo = (phoneNumber).replace('+', '');
  const phoneNo = phoneNumber;

  console.log(url)
  console.log(phoneNumber)
  console.log(OTP)
  console.log(code)

  const apiDetails = {
    mobile: phoneNo,
    code: OTP,
  };

  try {
    const response = await postRequest(url, apiDetails);

    const code = response.code;
    const data = response.data;

    if (code === 0) {
      const token = data.token;
      const mobile = data.mobile;

      setCookie(token, mobile);

      if (data !== '') {
        return true;
      }
    } else {
      console.log(`Unsuccessfully verify OTP: ${code}`);
      return false;
    }
  } catch (e) {
    console.log(`Unsuccessful in provider: ${e}`);
    return false;
  }
}





