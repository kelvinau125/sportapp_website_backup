// store/index.js

import { createStore } from 'vuex'
// import { reactive } from 'vue'

export default createStore({
  state: {
    nickName: '',
    phoneNumber: '',
    password: '',
    role:'',
    userId: null,
    status: false,
    currentChannel: localStorage.getItem('currentChannel') || 'football',
    timInstance: null
  },
  mutations: {
    setUserData(state, { nickName, phoneNumber, password, userId, role }) {
      state.nickName = nickName
      state.phoneNumber = phoneNumber
      state.password = password
      state.userId = userId
      state.role = role
    },
    clearUserData(state) {
      state.nickName = ''
      state.phoneNumber = ''
      state.password = ''
      state.userId = null
      state.role = ''
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

    //av live chat room
    setAVChatRoom(state, timInstance) {
      state.timInstance = timInstance;
      // const reactiveObject = reactive(this.timInstance);
      // localStorage.setItem('AVChatRoom', JSON.stringify(reactiveObject));
      console.log("check data:",timInstance);
    },
    clearAVChatRoom(state) {
      state.timInstance = null;
    }
  },
  actions: {
    register({ commit }, { nickName, phoneNumber, password, userId, role }) {
      commit('setUserData', { nickName, phoneNumber, password, userId, role })
      console.log(phoneNumber);
      console.log(userId);
      console.log(role);
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

    //tencent live chat room
    AVChatRoomLogin({commit},timInstance) {
      commit('setAVChatRoom',timInstance);
      console.log("avchat done");
      console.log(timInstance.timInstance);
    },
    AVChatRoomLogout({commit}) {
      commit('clearAVChatRoom');
    }
  },
  getters: {
    isLoggedIn: state => !!state.userId,
    nickName: state => state.nickName,
    phoneNumber: state => state.phoneNumber,
    role: state => state.role,
    password: state => state.password,
    status: state => state.status,
    getCurrentChannel: state => state.currentChannel,
    timInstance: state =>(state.timInstance ? state.timInstance.timInstance : null),
  
  }
})
