// store/index.js

import { createStore } from 'vuex'

export default createStore({
  state: {
    nickName: '',
    phoneNumber: '',
    password: '',
    userId: null,
    status: false,
    currentChannel: localStorage.getItem('currentChannel') || 'football',
    streamID :'',
  },
  mutations: {
    setStreamID(state, { StreamID }) {
      state.streamID = StreamID
      console.log("-------------------------------")
      console.log(state.streamID)
    },
    clearStreamID(state) {
      state.streamID = ''
    },

    setUserData(state, { nickName, phoneNumber, password, userId }) {
      state.nickName = nickName
      state.phoneNumber = phoneNumber
      state.password = password
      state.userId = userId
    },
    clearUserData(state) {
      state.nickName = ''
      state.phoneNumber = ''
      state.password = ''
      state.userId = null
    },
    setForgotPassword(state, { phoneNumber, status, userId }) {
      state.phoneNumber = phoneNumber
      state.status = status
      state.userId = userId
    },
    clearForgotPassword(state) {
      state.phoneNumber = ''
      state.status = false
      state.userId = null
    },
    setCurrentChannel(state, channel) {
      state.currentChannel = channel;
      localStorage.setItem('currentChannel', channel);
    },
  },
  actions: {
    register({ commit }, { nickName, phoneNumber, password, userId }) {
      commit('setUserData', { nickName, phoneNumber, password, userId })
      console.log(phoneNumber);
      console.log(userId);
    },
    registerDone({ commit }) {
      commit('clearUserData')
      console.log("done delete");
    },
    forgotPassword({ commit }, { phoneNumber, status, userId }) {
      commit('setForgotPassword', { phoneNumber, status, userId })
      console.log(status);
      console.log(userId);
    },
    forgotPasswordDone({ commit }) {
      commit('clearForgotPassword')
      console.log("done delete");
    },
    switchChannel({ commit }, channel) {
      commit('setCurrentChannel', channel);
    },
    passStreamID({ commit }, { StreamID }) {
      commit('setStreamID', { StreamID });
      console.log("check vuex pass stream id: ", StreamID)
    },
    passStreamIDDone({ commit }) {
      commit('clearStreamID')
      console.log("done delete");
    },
  },
  getters: {
    isLoggedIn: state => !!state.userId,
    nickName: state => state.nickName,
    phoneNumber: state => state.phoneNumber,
    password: state => state.password,
    status: state => state.status,
    getCurrentChannel: state => state.currentChannel,
    streamID: state => state.streamID,
  }
})
