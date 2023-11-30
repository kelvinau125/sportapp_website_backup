import { 
    getRequest,
   } from '@/service/apiRequestMethod';
  
import { 
    baseUrl,
    getFootballMatchLineUpUrl,
    getFootballMatchLineUpENurl,
    getFootballMatchByIdUrl,
    getFootballMatchByIdENurl
    } from '@/utils/apiConfig.js';
  
  // get user cookie / set cookie
//   import VueCookies from 'vue-cookies';
//   import { setCookie, setNicknameCookie, setImageCookie } from '@/service/cookie';


// getFootballMatchId
export async function getFootballMatchbyId(matchId, isCN) {
    let url = "";

    (isCN)
    ? (url = baseUrl + getFootballMatchByIdUrl + matchId)
    : (url = baseUrl + getFootballMatchByIdENurl + matchId);
  
    try {
      const response = await getRequest(url);
  
      const code = response.code;
      const data = response.data;
  
      if (code === 0) {
        return data;
      }else {
        console.log(`get getFootballMatchbyId Unsuccessfully: ${code}`);
        return [];
      }
  
    } catch (e) {
      console.log(`Unsuccessful in provider: ${e}`);
      return [];
    }
  }
  

// getFootballLineup
export async function getFootballLineup(matchId, isCN) {
    let url = "";

    (isCN)
    ? (url = baseUrl + getFootballMatchLineUpUrl + matchId)
    : (url = baseUrl + getFootballMatchLineUpENurl + matchId);
  
    try {
      const response = await getRequest(url);
  
      const code = response.code;
      const data = response.data;
  
      if (code === 0) {
        return data;
      }else {
        console.log(`get footballlineup Unsuccessfully: ${code}`);
        return [];
      }
  
    } catch (e) {
      console.log(`Unsuccessful in provider: ${e}`);
      return [];
    }
  }
  