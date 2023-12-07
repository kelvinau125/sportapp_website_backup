import {
    getRequestSearchStream
} from '@/service/apiRequestMethod';


import {
    baseUrl,
    searchFootballMatchTodayUrl,
    searchFootballMatchTodayENurl,
    searchBasketballTodayUrl,
    searchBasketballTodayENurl,
    // getFootballLiveAddressUrl,
    // getBasketballLiveAddressUrl,

} from '@/utils/apiConfig.js';

export async function searchLiveTeamStream(teamName, isCN, isFootBall) {

    // const url = baseUrl + searchFootballMatchTodayENurl + 'teamName=' + teamName
    let url;

    (isCN)
    ? ((isFootBall)
      ? url = baseUrl + searchFootballMatchTodayUrl + 'teamName=' + teamName
      : url = baseUrl + searchBasketballTodayUrl + 'teamName=' + teamName)
    : ((isFootBall)
      ? url = baseUrl + searchFootballMatchTodayENurl + 'teamName=' + teamName
      : url = baseUrl + searchBasketballTodayENurl + 'teamName=' + teamName)
      
    try {
        const response = await getRequestSearchStream(url)

        const data = response.data
        const code = response.code;

        if (code === 0) {
            console.log("Success Get Live Team Data" + data);
            return data;

        } else {
            console.log(`Unsuccessfully Get Live Team Data: ${code}`);
            return [];
        }
    } catch (e) {
        console.log(`Unsuccessful in provider: ${e}`);
        return [];
    }
}

export async function searchLiveCompetitionStream(competitionName, isCN, isFootBall) {
    // const url = baseUrl + searchFootballMatchTodayENurl + 'competitionName=' + competitionName
    let url;

    (isCN)
    ? ((isFootBall)
      ? url = baseUrl + searchFootballMatchTodayUrl + 'competitionName=' + competitionName
      : url = baseUrl + searchBasketballTodayUrl + 'competitionName=' + competitionName)
    : ((isFootBall)
      ? url = baseUrl + searchFootballMatchTodayENurl + 'competitionName=' + competitionName
      : url = baseUrl + searchBasketballTodayENurl + 'competitionName=' + competitionName)

    try {
        const response = await getRequestSearchStream(url)

        const data = response.data
        const code = response.code;

        if (code === 0) {
            console.log("Success Get Live Competition Data" + data);
            return data;

        } else {
            console.log(`Unsuccessfully Get Competition Data: ${code}`);
            return [];
        }
    } catch (e) {
        console.log(`Unsuccessful in provider: ${e}`);
        return [];
    }
}

// export async function searchLiveAddress(homeName, awayName, isCN, isFootBall) {
//     // const url = baseUrl + searchFootballMatchTodayENurl + 'competitionName=' + competitionName
//     let url;

//     (isFootBall)
//       ? url = baseUrl + getFootballLiveAddressUrl + 'competitionName=' + homeName
//       : url = baseUrl + getBasketballLiveAddressUrl + 'competitionName=' + awayName

//     try {
//         const response = await getRequestSearchStream(url)

//         const data = response.data
//         const code = response.code;

//         if (code === 0) {
//             return data;

//         } else {
//             console.log(`Unsuccessfully searchLiveAddress: ${code}`);
//             return [];
//         }
//     } catch (e) {
//         console.log(`Unsuccessful in provider: ${e}`);
//         return [];
//     }
// }