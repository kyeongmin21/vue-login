import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers: [
      { id: 1, name: 'min', email: 'min@naver.com', password: '1234' },
      { id: 2, name: 'jin', email: 'jin@naver.com', password: '1234' }
    ],
    isLogin: false,
    isLoginError: false
  },
  mutations: {
    // 로그인이 성공했을 때
    loginSuccess (state) {
      state.isLogin = true
      state.isLoginError = false
    },

    // 로그인이 실패했을 때
    loginError (state) {
      state.isLogin = false
      state.isLoginError = true
    }
  },
  actions: {

  }
})
