import { 
    postRequest,
    getRequest,
    postFileRequest,
   } from '@/service/apiRequestMethod';
  
import { 
    baseUrl,
    pushStreamUrl,
    createStreamUrl,
    uploadStreamFileUrl
    } from '@/utils/apiConfig.js';

// liveStreamSaveBookmark
export async function getPushStreamUrl() {

    const url = baseUrl + pushStreamUrl

    try {
      const response = await getRequest(url);
  
      const code = response.code;
      const data = response.data;
  
      if (code === 0) {
        return data;
      }else {
        console.log(`get getPushStreamUrl Unsuccessfully: ${code}`);
        return [];
      }
  
    } catch (e) {
      console.log(`Unsuccessful in provider: ${e}`);
      return [];
    }
  }

// getLiveStreamBookmark
export async function createStream(time, host, code, cover, title) {
 
    const url = baseUrl + createStreamUrl

    const apiDetails = {
        createTime: time,
        pushHost: host,
        pushCode: code,
        cover: cover,
        title: title
    };    
  
    try {
      const response = await postRequest(url, apiDetails);
  
      const code = response.code;
      const data = response.data;
  
      if (code === 0) {
        return data;
      }else {
        console.log(`get createStream Unsuccessfully: ${code}`);
        return [];
      }
  
    } catch (e) {
      console.log(`Unsuccessful in provider: ${e}`);
      return [];
    }
  }

// Update Image
export async function updateStreamCover(file) {
  
    const url = baseUrl + uploadStreamFileUrl;
  
    console.log(file);
  
    try {
      const response = await postFileRequest(file, url);
      const code = response.code;
      const data = response.data;
  
      if (code === 0) {
        return data;
      }else {
        console.log(`get updateStreamCover Unsuccessfully: ${code}`);
        return [];
      }

    } catch (e) {
      console.log(`Unsuccessful in provider: ${e}`);
      return false;
    }
  }