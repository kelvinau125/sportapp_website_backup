import axios from 'axios';

export async function postRequest(url, body) {
    try {
      const response = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "accept": "application/json"
        },
      });
  
    //   console.log(response);
  
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Exception: ${error}`);
    }
  }
