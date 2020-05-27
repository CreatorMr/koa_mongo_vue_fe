import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import { getUserInfo } from '../api/user.js'

export default new Vuex.Store({
  state: {
    userInfo: {
      _id: '',
      nickname: '',
      username: '',
      email: '',
      status: 'normal'
    }, 
  },
  mutations: {
    userInfoInit(state, data) {
      state.userInfo = data
    }
  },
  actions: {
    async userInit({ commit }, userInfo) {
      if(userInfo) {
        commit('userInfoInit', userInfo)
      } else {
        let results = await getUserInfo()
        if(results.ok) {
          commit('userInfoInit', results.user)
        }
      }
    },
  },
  modules: {
  }
})
