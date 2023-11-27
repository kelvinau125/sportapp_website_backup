// store/index.js

import { createStore } from 'vuex'

export default createStore({
  state: {
    nickName: '',
    phoneNumber: '',
    password: '',
    userId: null
  },
  mutations: {
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
    }
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
    }
  },
  getters: {
    isLoggedIn: state => !!state.userId,
    nickName: state => state.nickName,
    phoneNumber: state => state.phoneNumber,
    password: state => state.password,
  }
})