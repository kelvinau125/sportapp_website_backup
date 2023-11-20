import CryptoJS from 'crypto-js';

import { postRequest } from '@/service/apiRequestMethod';
import { setCookie } from '@/service/cookie';
import { 
  baseUrl,
  loginUrl,
  createUserUrl
 } from '@/utils/apiConfig.js';


// User Login
export async function loginUser(phoneNumber, password) {
  const url = baseUrl + loginUrl;

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





