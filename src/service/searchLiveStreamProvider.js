import {
    getRequestSearchStream
} from '@/service/apiRequestMethod';


import {
    baseUrl,
    // searchFootballMatchTodayUrl,
    searchFootballMatchTodayENurl

} from '@/utils/apiConfig.js';

export async function searchLiveCompetitionStream(matchName, searchPages) {

    // const url = baseUrl + searchFootballMatchTodayENurl + 'teamName=' + matchName + '&page=' + searchPages
    const url = baseUrl + searchFootballMatchTodayENurl + 'teamName=' + matchName + '&page=' + searchPages
    // const searchMatchData = {
    //     'competitionName': matchName,
    //     'page': searchPages,
    // };

    try {
        const response = await getRequestSearchStream(url)

        const data = response.data
        // console.log("NEW FKING DATA" + JSON.stringify(data));
        const code = response.code;
        // console.log("CODE " + code);

        if (code === 0) {
            console.log("Success Get Data" + data);
            return data;

        } else {
            console.log(`Unsuccessfully Get Data: ${code}`);
            return [];
        }
    } catch (e) {
        console.log(`Unsuccessful in provider: ${e}`);
        return [];
    }
}