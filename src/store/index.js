import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginSuccess: false
  },
  mutations: {
    loginSuccess(state) {
      state.loginSuccess = true
    },
    loginOut(state) {
      state.loginSuccess = false
    }
  },
  actions: {
  },
  modules: {
  }
})
