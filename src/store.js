import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null, // server 쪽 정보를 넘기기 위해 만든 변수
    allUsers: [
      { id: 1, name: 'min', email: 'min@naver.com', password: '1234' },
      { id: 2, name: 'jin', email: 'jin@naver.com', password: '1234' }
    ],
    isLogin: false,
    isLoginError: false
  },
  // mutations 는 state 값을 변화시키는 로직
  mutations: {
    // 로그인이 성공했을 때
    loginSuccess (state, payload) {
      state.isLogin = true
      state.isLoginError = false
      state.userInfo = payload
    },

    // 로그인이 실패했을 때
    loginError (state) {
      state.isLogin = false
      state.isLoginError = true
    },
    logout(state) {
      state.isLogin = false
      state.isLoginError = false
      state.userInfo = null
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

      if (selectedUser === null || selectedUser.password !== loginObj.password) {
        commit("loginError")
      } else {
        commit("loginSuccess", selectedUser)
        router.push({ name: "mypage" })
      }
    },
    logout({commit}) {
      commit('logout')
      router.push({ name: 'home' })
    }
  }
})
