import axios from 'axios';

  const header = {
  "Content-Type": "application/json; charset=utf-8",
  "accept": "application/json"}

  export async function postRequest(url, body) {
    try {
      const response = await axios.post(url, body, {
        headers: header,
      });
  
      console.log(response);
  
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
  
      console.log(response);
  
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (error) {
      throw new Error(`Exception: ${error}`);
    }
  }




  // Future<Map<String, dynamic>> getRequest(String url) async {
  //   try {
  //     final response = await http.get(Uri.parse(url));

  //     if (response.statusCode == 200) {
  //       Map<String, dynamic> jsonData = json.decode(response.body);
  //       return jsonData;
  //     } else {
  //       throw Exception("Error: ${response.statusCode}");
  //     }
  //   } catch (e) {
  //     throw Exception('Exception: $e');
  //   }
  // }
