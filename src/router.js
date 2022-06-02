import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const rejectAuthUser = (to, from, next) => {
  if (store.state.isLogin === true) {
    // 이미 로그인된 유저니까 로그인 페이지를 막아야한다.
    alert('이미 로그인 되었습니다.')
    next("/")
  } else {
    next()
  }
}
const onlyAuthUser = (to, from, next) => {
  if (store.state.isLogin === false) {
    // 아직 로그인된 유저니까 마이페이지 접속을 막아야한다.
    alert('로그인이 필요합니다.')
    next("/login")
  } else {
    next()
  }
}
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      beforeEnter: rejectAuthUser, // 로그인 하기 전
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/mypage',
      name: 'mypage',
      beforeEnter: onlyAuthUser,
      component: () => import(/* webpackChunkName: "mypage" */ './views/Mypage.vue')
    }
  ]
})
