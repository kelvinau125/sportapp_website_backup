import CryptoJS from 'crypto-js';

import { postRequest } from '@/service/apiRequestMethod';
import { setCookie } from '@/service/cookie';
import { 
  baseUrl,
  loginUrl
 } from '@/utils/apiConfig.js';


// User Login
export async function loginUser(countryCode, password) {
  const url = baseUrl + loginUrl;

  // phone number format reformat
  const phoneNo = (countryCode).replace('+', '').replace(/\s/g, '');

  console.log(phoneNo);

  // Assuming you have a hashPassword function
  const encryptedPassword = hashPassword(password);

  const userLoginData = {
    mobile: phoneNo,
    password: encryptedPassword,
  };

  try {
    const response = await postRequest(url, userLoginData);

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



