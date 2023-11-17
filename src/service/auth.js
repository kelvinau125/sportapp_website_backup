import CryptoJS from 'crypto-js';

import { postRequest } from '@/service/apiRequestMethod';
import { setCookie } from '@/service/cookie';


export async function loginUser(countryCode, phoneNumber, password) {
  const url = 'http://localhost:8080/api/v1/login/do-login';

  // phone number format reformat
  const phoneNo = (countryCode + phoneNumber).replace('+', '');

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

export function hashPassword(password) {
  const salt = '1a2b3c4d';
  const saltedPassword = '' + salt[0] + salt[2] + password + salt[5] + salt[4];
  const hashedPassword = CryptoJS.MD5(saltedPassword).toString();
  return hashedPassword;
}




