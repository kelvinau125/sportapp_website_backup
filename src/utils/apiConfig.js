//vue.config.js (localhost proxy) -- no use one need go vue.config.js to change
// export const proxyurl = 'http://localhost:8080/'; 

//Base Url for all API
// export const baseUrl = 'http://localhost:8080'; 
export const baseUrl = 'http://192.168.0.48:8080'; //kelvin ip
// export const baseUrl = 'http://192.168.0.41:8080'; //jim ip
// export const baseUrl = 'https://192.168.67.109:8080'; //virtual ip
// export const baseUrl = 'http://192.168.0.49:8080'; //phillip ip

// Login
export const loginBaseUrl = '/api/v1/login';

export const login = '/do-login';

export const loginUrl = loginBaseUrl + login; //login

//Live Stream User
export const liveStreamUserBaseUrl = '/api/v1/users';

export const updatePassword = '/updatePass/';

export const createUser = '/create';

export const findUserById = '/';

export const updateNickName = '/updateNickName/';

export const updateHead = '/updateHead/';

export const updateforgotPassword = '/updatePassByForgot/';

export const updatePasswordUrl =
    liveStreamUserBaseUrl + updatePassword; //update password

export const createUserUrl =
    liveStreamUserBaseUrl + createUser; //create user

export const findUserByIdUrl =
    liveStreamUserBaseUrl + findUserById; //find user by id

export const updateNickNameUrl =
    liveStreamUserBaseUrl + updateNickName; //update nick name

export const updateHeadUrl =
    liveStreamUserBaseUrl + updateHead; //update profile pic

export const updateforgotPasswordurl =
    liveStreamUserBaseUrl + updateforgotPassword; //update forgot password

//Basketball CN--------------------------------------------------------------------------------------------//
export const basketballBaseUrl = '/api/v1/basketballs/match';

export const searchBasketballToday = '/now-list?';

export const getStartBasketballMatch = '/list-start?';

export const getFutureBasketballMatch = '/list-future?';

export const getPastBasketballMatch = '/list-past?';

export const getBasketballMatchByDate = '/list/';

export const getBasketballMatchLineUp = '/line-up/';

export const getBasketballMatchLiveData = '/livedata/';

export const getBasketballLiveAddress = '/address/';

export const getBasketballMatchLineUpUrl = basketballBaseUrl +
    getBasketballMatchLineUp; //get matches line up in matches status

export const getBasketballMatchLiveDataUrl =
    basketballBaseUrl + getBasketballMatchLiveData; //get matches live data

export const getBasketballLiveAddressUrl =
    basketballBaseUrl + getBasketballLiveAddress; //get live address

export const getBasketballMatchByDateUrl =
    basketballBaseUrl + getBasketballMatchByDate; //get all matches by date

export const getPastBasketballMatchUrl =
    basketballBaseUrl + getPastBasketballMatch; //get past matches

export const getFutureBasketballMatchUrl =
    basketballBaseUrl + getFutureBasketballMatch; // get future matches

export const getStartBasketballMatchUrl =
    basketballBaseUrl + getStartBasketballMatch; // get Today started matches

export const searchBasketballTodayUrl = basketballBaseUrl +
    searchBasketballToday; // get today's matchs via matches or team name

//---Basketball EN-----------------------------------------------------------------------------------------//

export const EN = '/en';

export const searchBasketballTodayENurl =
    basketballBaseUrl + EN + searchBasketballToday;

export const getBasketballMatchByDateENurl =
    basketballBaseUrl + EN + getBasketballMatchByDate;

export const getStartBasketballMatchENurl =
    basketballBaseUrl + EN + getStartBasketballMatch;

export const getFutureBasketballMatchENurl =
    basketballBaseUrl + EN + getFutureBasketballMatch;

export const getPastBasketballMatchENurl =
    basketballBaseUrl + EN + getPastBasketballMatch;

export const getBasketballLineUpENurl =
    basketballBaseUrl + EN + getBasketballMatchLineUp;

export const getBasketballMatchLiveDataENurl =
    basketballBaseUrl + EN + getBasketballMatchLiveData;

// Football & Basketball EN - live address

export const LiveAddressBaseENUrl = '/api/v1/live-address';

export const FootballLiveAddress = '/football';

export const BasketballLiveAddress = '/basketball';

export const getFootballLiveAddressENUrl =
LiveAddressBaseENUrl + FootballLiveAddress;

export const getBasketballLiveAddressENUrl =
LiveAddressBaseENUrl + BasketballLiveAddress;

//Football CN----------------------------------------------------------------------------------------------//
export const footballBaseUrl = '/api/v1/footballs';

export const getFootballMatchList = '/match/list?';

export const getFootballMatchLineUp = '/match/line-up/';

export const searchFootballMatchToday = '/match/now-list?';

export const getFootballMatchById = '/match/livedata/';

export const getFootballLiveAddress = '/match/address/';

export const getStartFootballMatch = '/match/list-start?';

export const getFutureFootballMatch = '/match/list-future?';

export const getPassFootballMatch = '/match/list-past?';

export const getMatchByDate = '/match/list/';

export const getMatchByDateUrl =
    footballBaseUrl + getMatchByDate; //get football matches by date

export const getFootballMatchListUrl =
    footballBaseUrl + getFootballMatchList; //get football match list

export const getStartFootballMatchListUrl =
    footballBaseUrl + getStartFootballMatch; //get start football match

export const getFutureFootballMatchListUrl =
    footballBaseUrl + getFutureFootballMatch; //get future football match

export const getPassFootballMatchListUrl =
    footballBaseUrl + getPassFootballMatch; //get pass football match

export const getFootballMatchLineUpUrl =
    footballBaseUrl + getFootballMatchLineUp; //get football match line up

export const searchFootballMatchTodayUrl =
    footballBaseUrl + searchFootballMatchToday; //search football match

export const getFootballMatchByIdUrl =
    footballBaseUrl + getFootballMatchById; // get Football match by Id

export const getFootballLiveAddressUrl =
    footballBaseUrl + getFootballLiveAddress;

//--------------------------------------------------------------------------------------------------------------------//
//Football EN---------------------------------------------------------------------------------------------------------//

export const searchFootballMatchTodayEn = '/match/en/now-list?';

export const getFootballMatchLineUpEN = "/match/en/line-up/";

export const getFootballMatchListEN = '/match/en/list';

export const getFootballMatchListByDateEN = '/match/en/list/';

export const getStartFootballMatchListEN = '/match/en/list-start';

export const getFutureFootballMatchListEN = '/match/en/list-future';

export const getPastFootballMatchListEN = '/match/en/list-past';

export const getFootballMatchByIdEN = '/match/en/livedata/';

export const getFootballMatchByIdENurl =
    footballBaseUrl + getFootballMatchByIdEN;

export const getPastFootballMatchListENurl =
    footballBaseUrl + getPastFootballMatchListEN;

export const getFutureFootballMatchListENurl =
    footballBaseUrl + getFutureFootballMatchListEN;

export const getStartFootballMatchListENurl =
    footballBaseUrl + getStartFootballMatchListEN;

export const getFootballMatchListByDateENurl =
    footballBaseUrl + getFootballMatchListByDateEN;

export const getFootballMatchListENurl =
    footballBaseUrl + getFootballMatchListEN;

export const searchFootballMatchTodayENurl =
    footballBaseUrl + searchFootballMatchTodayEn;

export const getFootballMatchLineUpENurl =
    footballBaseUrl + getFootballMatchLineUpEN;

//---------------------------------------------------------------------------------------------------------------------//

 //Live Stream Collection
 export const liveStreamCollectionBaseUrlFootball =
 '/api/v1/collections/football';

export const liveStreamCollectionBaseUrlBasketball =
 '/api/v1/collections/basketball';

export const liveStreamCollectionBaseUrl = '/api/v1/collections';

export const getAllStreamCollectionList = '/list';

export const getMatch = '/{matchId}';

export const deleteCollectionByMatchId = '/{matchId}';

export const createCollection = '/';

export const getAllStreamCollectionListFootballUrl =
 liveStreamCollectionBaseUrlFootball +
     getAllStreamCollectionList; //get football all stream collection list

export const getAllStreamCollectionListBasketballUrl =
 liveStreamCollectionBaseUrlBasketball +
     getAllStreamCollectionList; //get all basketball collection list

export const getFootballMatchUrl =
 liveStreamCollectionBaseUrlFootball + getMatch; //get football match

export const getBasketballMatchUrl =
 liveStreamCollectionBaseUrlBasketball + getMatch; //get basketball match

export const deleteCollectionByMatchIdUrl =
 liveStreamCollectionBaseUrl +
     deleteCollectionByMatchId; //delete collection by id

export const createCollectionUrl =
 liveStreamCollectionBaseUrl + createCollection; //create collection

//Live Stream Collection (English)-------------------------------------------------------------------------------------//
export const liveStreamCollectionBaseEngUrl = '/api/v1/en/collections';

export const getAllStreamCollectionEngListFootball = '/football/list';

export const getAllStreamCollectionEngListBasketball = '/basketball/list';

export const getFootballEngMatch = '/football/{matchId}';

export const getBasketballEngMatch = '/basketball/{matchId}';

export const deleteCollectionEngByMatchId = '/{matchId}';

export const createCollectionEng = '/';

export const createCollectionEngUrl = liveStreamCollectionBaseEngUrl +
 createCollectionEng; //create collection English ver

export const getAllStreamCollectionListEngUrlFootball =
 liveStreamCollectionBaseEngUrl +
     getAllStreamCollectionEngListFootball; //get all football stream collection list English ver

export const getAllStreamCollectionListEngUrlBasketball =
 liveStreamCollectionBaseEngUrl +
     getAllStreamCollectionEngListBasketball; //get all basketball stream collection list English ver

export const getFootballMatchEngUrl = liveStreamCollectionBaseEngUrl +
 getFootballEngMatch; //get football match English ver

export const getBasketballMatchEngUrl =
 liveStreamCollectionBaseEngUrl +
     getBasketballEngMatch; //get basketball match English ver

export const deleteCollectionEngByMatchIdUrl =
 liveStreamCollectionBaseEngUrl +
     deleteCollectionEngByMatchId; //delete collection English ver by id

//Live Stream Message
export const liveStreamMessageBaseUrl = '/api/v1/messages';

export const getLiveStreamMessageList = '/list';

export const getLiveStreamMessageById = '/{id}';

export const getLiveStreamMessageListUrl = liveStreamMessageBaseUrl +
    getLiveStreamMessageList; //get live stream message list

export const getLiveStreamMessageByIdUrl = liveStreamMessageBaseUrl +
    getLiveStreamMessageById; //get live stream message by id

//sms
export const smsBaseUrl = '/api/v1/sms';

export const sendMsgRegister = '/send/1/';

export const sendMsgReset = '/send/2/';

export const sendMsgForgot = '/send/3/';

export const sendMsg = '/send/';

export const verifyMsgRegister = '/verify/mobile/1';

export const verifyMsgReset = '/verify/mobile/2';

export const verifyMsgForgot = '/verify/mobile/3';

export const verifyMsg = '/verify/mobile';

export const sendMsgUrl = smsBaseUrl + sendMsg; //send 3 types of OTP

export const sendMsgRegisterUrl =
    smsBaseUrl + sendMsgRegister; //send registration OTP

export const sendMsgResetUrl =
    smsBaseUrl + sendMsgReset; //send reset password OTP

export const sendMsgForgotUrl =
    smsBaseUrl + sendMsgForgot; //send forgot password OTP

export const verifyMsgRegisterUrl =
    smsBaseUrl + verifyMsgRegister; //verify register msg OTP

export const verifyMsgResetUrl =
    smsBaseUrl + verifyMsgRegister; //verify reset msg OTP

export const verifyMsgForgotUrl =
    smsBaseUrl + verifyMsgRegister; //verify forgot msg OTP

export const verifyMsgUrl = smsBaseUrl + verifyMsg; //verify 3 types of OTP

//Upload File
export const uploadFileBaseUrl = '/api/v1/files';

export const uploadFile = '/upload/tx';

export const deleteFile = '/delete/{fileName}';

export const uploadStreamCover = '/upload/cover';

export const uploadFileUrl = uploadFileBaseUrl + uploadFile; //upload file

export const deleteFileUrl = uploadFileBaseUrl + deleteFile; //delete file

export const uploadStreamFileUrl = uploadFileBaseUrl + uploadStreamCover; //upload stream cover file

//stream
export const streamBaseUrl = '/api/v1/pushAndPlay';

export const pushStream = '/pushUrl';

export const createStream = '/create/{userId}';

export const getStreamDetails = '/';

export const editStreamDetails = '/';

export const getAllStreamDetails = '/list';

export const pushStreamUrl = streamBaseUrl + pushStream; //push stream

export const createStreamUrl = streamBaseUrl + createStream; //create live stream

export const getStreamDetailsUrl = streamBaseUrl + getStreamDetails; //get stream details

export const editStreamDetailsUrl = streamBaseUrl + editStreamDetails; //edit stream details

export const getAllStreamDetailsUrl = streamBaseUrl + getAllStreamDetails; //edit stream details



