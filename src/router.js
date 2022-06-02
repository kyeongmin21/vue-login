import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

Vue.use(Router)

const rejectAuthUser = (to, from, next) => {
  if (store.state.isLogin === true) {
    // 이미 로그인된 유저니까 막아야한다.
    alert('이미 로그인 되었습니다.')
    next("/")
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
      component: () => import(/* webpackChunkName: "mypage" */ './views/Mypage.vue')
    }
  ]
})
