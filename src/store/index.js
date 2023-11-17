// store/index.js

import { createStore } from 'vuex'

export default createStore({
  state: {
    username: '',
    userId: null
  },
  mutations: {
    setUserData(state, { username, userId }) {
      state.username = username
      state.userId = userId
    },
    clearUserData(state) {
      state.username = ''
      state.userId = null
    }
  },
  actions: {
    login({ commit }, { username, userId }) {
      commit('setUserData', { username, userId })
      console.log(username);
      console.log(userId);
    },
    logout({ commit }) {
      commit('clearUserData')
    }
  },
  getters: {
    isLoggedIn: state => !!state.userId,
    username: state => state.username
  }
})
