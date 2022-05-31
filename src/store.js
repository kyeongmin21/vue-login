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
    // 로그인 시도, state 는 DB 역할
    login ({ state, commit }, loginObj) {
      // 전체 유저에서 해당 이메일로 유저를 찾는다
      let selectedUser = null
      state.allUsers.forEach( user => {
        if (user.email ===  loginObj.email) selectedUser = user
      })

      if (selectedUser === null) commit('loginError')
      else {
        // 그 유저의 비밀번호와 입력된 비밀번호를 비교한다
        selectedUser.password !== loginObj.password
        ? commit('loginError')
        : commit('loginSuccess')
      }
    }
  }
})
