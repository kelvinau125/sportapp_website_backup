import {
  getRequest,
} from '@/service/apiRequestMethod';

import {
  baseUrl,
  getBasketballMatchLineUpUrl,
  getBasketballLineUpENurl,
  getBasketballMatchByDateUrl,
  getBasketballMatchByDateENurl,
  searchBasketballTodayUrl,
  searchBasketballTodayENurl,
  getBasketballMatchLiveDataUrl,
  getBasketballMatchLiveDataENurl,
} from '@/utils/apiConfig.js';

// getFootballMatchId
export async function getBasketBallMatchbyId(matchId, isCN) {
  let url = "";

  (isCN)
    ? (url = baseUrl + getBasketballMatchLiveDataUrl + matchId)
    : (url = baseUrl + getBasketballMatchLiveDataENurl + matchId);

  try {
    const response = await getRequest(url);

    const code = response.code;
    const data = response.data;

    if (code === 0) {
      return data;
    } else {
      console.log(`get getBasketBallMatchbyId Unsuccessfully: ${code}`);
      return [];
    }

  } catch (e) {
    console.log(`Unsuccessful in provider: ${e}`);
    return [];
  }
}


// getBasketballLineup
export async function getBasketballLineUp(matchId, isCN) {
  let url = "";

  (isCN)
    ? (url = baseUrl + getBasketballMatchLineUpUrl + matchId)
    : (url = baseUrl + getBasketballLineUpENurl + matchId);

  try {
    const response = await getRequest(url);
    // console.log(`check url: ${url}`);

    const code = response.code;
    const data = response.data;

    if (code === 0) {
      return data;
    } else {
      console.log(`get footballlineup Unsuccessfully: ${code}`);

      return [];
    }

  } catch (e) {
    console.log(`Unsuccessful in provider: ${e}`);
    return [];
  }
}

// getMatchByDate
export async function getBasketballMatchByDate(date, isCN, page) {
  let url = "";

  (isCN)
    ? (url = baseUrl + getBasketballMatchByDateUrl + date + `?page=${page}&size=20`)
    : (url = baseUrl + getBasketballMatchByDateENurl + date + `?page=${page}&size=20`);

  try {
    const response = await getRequest(url);

    const code = response.code;
    const data = response.data;

    if (code === 0) {
      return data;
    } else {
      console.log(`get footballlineup Unsuccessfully: ${code}`);
      return [];
    }

  } catch (e) {
    console.log(`Unsuccessful in provider: ${e}`);
    return [];
  }
}


// getMatchTodaybyCompName
export async function getBasketBallMatchTodaybyCompName(compName, isCN) {
  let url = "";

  (isCN)
    ? (url = baseUrl + searchBasketballTodayUrl + "competitionName=" + compName)
    : (url = baseUrl + searchBasketballTodayENurl + "competitionName=" + compName);

  try {
    const response = await getRequest(url);

    const code = response.code;
    const data = response.data;

    if (code === 0) {
      return data;
    } else {
      console.log(`get footballlineup Unsuccessfully: ${code}`);
      return [];
    }

  } catch (e) {
    console.log(`Unsuccessful in provider: ${e}`);
    return [];
  }
}

