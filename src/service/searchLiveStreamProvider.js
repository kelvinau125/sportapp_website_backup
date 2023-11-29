import {
    getRequestSearchStream
} from '@/service/apiRequestMethod';


import {
    baseUrl,
    // searchFootballMatchTodayUrl,
    searchFootballMatchTodayENurl

} from '@/utils/apiConfig.js';

export async function searchLiveTeamStream(teamName, searchPages) {

    const url = baseUrl + searchFootballMatchTodayENurl + 'teamName=' + teamName + '&page=' + searchPages
    try {
        const response = await getRequestSearchStream(url)

        const data = response.data
        // console.log("NEW FKING DATA" + JSON.stringify(data));
        const code = response.code;
        // console.log("CODE " + code);

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

export async function searchLiveCompetitionStream(competitionName, searchPages) {
    const url = baseUrl + searchFootballMatchTodayENurl + 'competitionName=' + competitionName + '&page=' + searchPages
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