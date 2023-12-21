import axios from 'axios';

// get user cookie / set cookie
import VueCookies from 'vue-cookies';

const header = {
  "Content-Type": "application/json; charset=utf-8",
  "accept": "application/json"}

  const headerBookmark = {
    "Content-Type": "application/json; charset=utf-8",
    "accept": "application/json",
    "token": VueCookies.get('userToken')
  }

export async function postRequest(url, body) {
  try {
    const response = await axios.post(url, body, {
      headers: header,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Exception: ${error}`);
  }
}

  export async function getRequest(url) {
    try {
      const response = await axios.get(url);
  
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Exception: ${error}`);
    }
  }

  export async function getRequestSaveBookmark(url) {
    try {
      const response = await axios.get(url, {
        headers: headerBookmark,
      });
  
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Exception: ${error}`);
    }
  }

  export async function postRequestSaveBookmark(url, body) {
    try {
      const response = await axios.post(url, body, {
        headers: headerBookmark,
      });
  
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Exception: ${error}`);
    }
  }

  export async function deleteRequestSaveBookmark(url) {
    try {
      const response = await axios.delete(url, {
        headers: headerBookmark,
      });
  
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Exception: ${error}`);
    }
  }

export async function patchRequest(url, body) {
  try {
    const response = await axios.patch(url, body, {
      headers: header,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Exception: ${error}`);
  }
}

export async function postFileRequest(file, url) {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Exception: ${error}`);
  }
}

export async function getRequestSearchStream(url) {
  try {
    const response = await axios.get(url);
    

    if (response.status === 200) {
      console.log('Response Data:', response.data);

      return response.data
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (e) {
    console.error(`Exception: ${e.message}`);
  }

}

export async function deleteLiveStreamDetail(url) {
  try{
    const response = await axios.delete(url);

    if(response.status === 200) {
      console.log('Response Data:', response.data);

      return response.data
    }else{
      throw new Error(`Error: ${response.status}`);
    }
  }catch(e){
    console.error(`Exception: ${e.message}`);
  }
}
