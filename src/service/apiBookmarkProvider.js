import { 
    getRequestSaveBookmark,
    deleteRequestSaveBookmark,
    postRequestSaveBookmark
   } from '@/service/apiRequestMethod';
  
import { 
    baseUrl,
    getAllStreamCollectionListFootballUrl,
    getAllStreamCollectionListEngUrlFootball,
    getAllStreamCollectionListBasketballUrl,
    getAllStreamCollectionListEngUrlBasketball,
    deleteCollectionByMatchIdUrl,
    deleteCollectionEngByMatchIdUrl,
    createCollectionUrl,
    createCollectionEngUrl,
    } from '@/utils/apiConfig.js';

// liveStreamSaveBookmark
export async function liveStreamSaveBookmark(matchId, isFootBall, isCN) {
    let url = "";

    (isCN)
    ? (url = baseUrl + createCollectionUrl)
    : (url = baseUrl + createCollectionEngUrl);

    const apiDetails = {
        matchId: matchId,
        category:     
        (isFootBall)
        ? 0
        : 1,
    };
  
    try {
      const response = await postRequestSaveBookmark(url, apiDetails);
  
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

// getLiveStreamBookmark
export async function getLiveStreamBookmark(isCN, isFootBall) {
    let url = "";


    (isCN)
    ? ((isFootBall)
      ? url = baseUrl + getAllStreamCollectionListFootballUrl
      : url = baseUrl + getAllStreamCollectionListBasketballUrl)
    : ((isFootBall)
      ? url = baseUrl + getAllStreamCollectionListEngUrlFootball
      : url = baseUrl + getAllStreamCollectionListEngUrlBasketball)
  
    try {
      const response = await getRequestSaveBookmark(url);
  
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

// deleteStreamSaveBookmark
export async function deleteStreamSaveBookmark(matchId, isCN) {
    let url = "";

    (isCN)
    ? (url = (baseUrl + deleteCollectionByMatchIdUrl).replace("{matchId}", matchId))
    : (url = (baseUrl + deleteCollectionEngByMatchIdUrl).replace("{matchId}", matchId));
  
    try {
      const response = await deleteRequestSaveBookmark(url);
  
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