import { 
    postRequest,
    getRequest,
    postFileRequest,
    patchRequest,
    deleteLiveStreamDetail
   } from '@/service/apiRequestMethod';
  
import { 
    baseUrl,
    pushStreamUrl,
    createStreamUrl,
    uploadStreamFileUrl,
    getStreamDetailsUrl,
    editStreamDetailsUrl,
    getAllStreamDetailsUrl,
    deleteStreamDetailsByIdUrl
    } from '@/utils/apiConfig.js';

// get user cookie / set cookie
import VueCookies from 'vue-cookies';

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
export async function createStream(category, time, host, code, cover, title) {

    // get user token
    const userid = VueCookies.get('phoneNumber')
 
    const url = baseUrl + (createStreamUrl.replace("{userId}", userid))

    // pushImageToServer;
    const isFinished = await updateStreamCover(cover);

    const apiDetails = {
        sportType:category,
        createTime: time,
        pushHost: host,
        pushCode: code,
        cover: isFinished,
        title: title
    };    

    try {
      const response = await postRequest(url, apiDetails);
  
      const code = response.code;
  
      if (code === 0) {
        return true;
      }else {
        console.log(`get createStream Unsuccessfully: ${code}`);
        return false;
      }
  
    } catch (e) {
      console.log(`Unsuccessful in provider: ${e}`);
      return false;
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

// get stream details
export async function getStreamDetails(streamID) {

  const url = baseUrl + getStreamDetailsUrl + streamID

  try {
    const response = await getRequest(url);

    const code = response.code;
    const data = response.data;

    if (code === 0) {
      console.log("show stream data: ", data.userId
      );
      return data;
    }else {
      console.log(`get getStreamDetails Unsuccessfully: ${code}`);
      return [];
    }

  } catch (e) {
    console.log(`Unsuccessful in provider: ${e}`);
    return [];
  }
}

// edit stream details
export async function editStreamDetails(streamID, title, file) {

  const url = baseUrl + editStreamDetailsUrl + streamID
  
  // pushImageToServer;
  const isFinished = await updateStreamCover(file);

  const apiDetails = {
    title: title,
    cover: isFinished,
  };

  try {
    const response = await patchRequest(url, apiDetails);

    const code = response.code;

    if (code === 0) {
      return true;
    } else {
      console.log(`editStreamDetails Unsuccessfully: ${code}`);
      return false;
    }
  } catch (e) {
    console.log(`Unsuccessful in provider: ${e}`);
    return false;
  }
}

// get all stream details
export async function getAllStreamDetails() {

  const url = baseUrl + getAllStreamDetailsUrl

  try {
    const response = await getRequest(url);

    const code = response.code;
    const data = response.data;

    if (code === 0) {
      console.log("debug: ", data);
      return data;
    }else {
      console.log(`get getAllStreamDetails Unsuccessfully: ${code}`);
      return [];
    }

  } catch (e) {
    console.log(`Unsuccessful in provider: ${e}`);
    return [];
  }
}

//delete live stream details after streamer leave the room
export async function deleteStreamDetails(streamID) {
  const url = baseUrl + deleteStreamDetailsByIdUrl + streamID;
  console.log("check del url: ", url);

  try{
    const response = await deleteLiveStreamDetail(url);

    const code = response.code;
    const data = response.data;

    if(code === 0) {
      console.log("debug: ", data);
      return data;
    }else{
      console.log(`get deleteStreamDetails Unsuccessfully: ${code}`);
      return [];
    }
    
  }catch(e){
    console.log(`Unsuccessful in provider: ${e}`);
    return [];
  }
}

