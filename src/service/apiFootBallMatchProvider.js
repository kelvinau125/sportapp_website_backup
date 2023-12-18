import { 
    getRequest,
   } from '@/service/apiRequestMethod';
  
import { 
    baseUrl,
    getFootballMatchLineUpUrl,
    getFootballMatchLineUpENurl,
    getFootballMatchByIdUrl,
    getFootballMatchByIdENurl,
    getMatchByDateUrl,
    getFootballMatchListByDateENurl,
    searchFootballMatchTodayUrl,
    searchFootballMatchTodayENurl,
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

        // console.log("debug tournament: ", data);
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

// getMatchByDate
export async function getMatchByDate(date, isCN, page) {
    let url = "";

    (isCN)
    ? (url = baseUrl + getMatchByDateUrl + date + `?page=${page}&size=20`)
    : (url = baseUrl + getFootballMatchListByDateENurl + date + `?page=${page}&size=20`);
  
    try {
      const response = await getRequest(url);
  
      const code = response.code;
      const data = response.data;
  
      if (code === 0) {
        return data;
      }else {
        console.log(`get getMatchByDate Unsuccessfully: ${code}`);
        return [];
      }
  
    } catch (e) {
      console.log(`Unsuccessful in provider: ${e}`);
      return [];
    }
  }
  

// getMatchTodaybyCompName
export async function getMatchTodaybyCompName(compName, isCN) {
    let url = "";

    (isCN)
    ? (url = baseUrl + searchFootballMatchTodayUrl + "competitionName=" + compName)
    : (url = baseUrl + searchFootballMatchTodayENurl + "competitionName=" + compName);
  
    try {
      const response = await getRequest(url);
  
      const code = response.code;
      const data = response.data;
  
      if (code === 0) {
        return data;
      }else {
        console.log(`get getMatchTodaybyCompName Unsuccessfully: ${code}`);
        return [];
      }
  
    } catch (e) {
      console.log(`Unsuccessful in provider: ${e}`);
      return [];
    }
  }
  
  