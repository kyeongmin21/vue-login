# vue-login

### vuetify 속성
* v-container 태그안에 fill-height 넣으면 height: 100% 가 된다.
* 컨테이너 안에 v-layout 태그 만들기
* v-layout 태그안에 align-center 넣으면 화면의 정중앙에 오게 된다.
* flat 클래스 속성은 : 툴바의 박스 그림자를 제거

### login 맞는지 확인하기
* 전체 유저에서 해당 이메일로 유저를 찾는다.
* 그 유저의 비밀번호와 입력된 비밀번호를 비교한다.
* alert 창을 vuetify 로 만든다.
* vuex 중앙집중식 저장소를 써야하는 이유 : <br>
  login 되었는지 안되었는지 확인 해야하는데 그때마다 loginSuccess 값을 전체에 넘겨줄 수 없으므로

### store.js
* state 
  - Login.vue 파일안에 data에 있는 allUsers 값 가져오기
  - isLogin, isLoginError false 로 default 
* mutations
  - 로그인 성공 or 실패 : 2개의 경우를 만들어 준다.
* actions 
  - Login.vue 에서 login() methods 를 지우고, store.js에서 actions에 넣어준다.
  - Login.vue 에서 가져온 코드에서, allUsers 앞에 this 를 지워주고 state로 변경한다.
  - this.email 이 아니라 loginObj(payload)를 받아서 써야하므로 loginObj.email 로 변경
  - this.isError 를 => commit('loginError')
  - this.loginSuccess = true 를 => commit('loginSuccess')

### Login.vue
  - store.js 의 actions 에서 login() 을 쓰기위해 우리는 import 를 해야한다.
  - import 하기 / methods 안에 ...mapActions(['login']) 으로 쓰겠다고 선언하기
  - @click="login({ email, password })"  email, password 는 payload 이다.
  - isError, loginSuccess 는 store 에서 isLogin, isLoginError 로 쓰므로 삭제

### Login 되었는지 알려주기
 - 성공하면 header 에 LogOut
 - 실패하면 header 에 Login

### userInfo 순서
 - 1. state : allUsers 의 { id: 1, ~~ } 객체가
 - 2. actions : commit('loginSuccess', selectedUser) 의 selectedUser 로 넘어오고
 - 3. mutations : loginSuccess(state, payload) 의 payload 에 담기고,
 - 4. mutations : state.userInfo = payload 에 다시 담겨서,
 - 5. state : userInfo = { id: 1, ~} 가 바인딩 된다.
 - 6. 그래서 실제 DB 에는 userInfo: {id: 1, name: 'min', ~~} 값이 전달된다.
  

### Mypage
 -  userInfo 를 받아 받아오기 ...mapState로!
 - 로그인이 성공하면 Mypage.vue 파일로 넘어가게 된다!


### reject 시키기
 - 로그인 페이지에 들어갈 때 로그인 했는지 안했는지 판단하기
 - router.js 에서 const rejectAuthUser 변수를 만드는데, <br>
   로그인 되었으면 / home 경로로, 안되었으면 next() 경로로 설정
 - isLogin 되었는지 알기 위해서는 import store 시켜서 <br>
  store.state.isLogin 로 true, false 값을 전달 받아야한다.
 - login 라우터에서, beforeEnter 만들어서 rejectAuthUser 로 설정하기

### onlyAuthUser 마이페이지
 - 마이페이지 접속할 때 로그인 했는지 안했는지 판단
 - 로그인되어 있으면 접속가능, 안되어 있으면 login 으로
 - mypage 라우터에서, beforeEnter 만들어서 onlyAuthUser 로 설정하기


### login, mypage 하나만 보여지게 하기
 - 로그인 되어 있으면 : 로그인 안보여짐, mypage 보여짐
 - 로그인 안되어 있으면 : 로그인 보여짐, mypage 안보여짐


### logout 만들기
 - 로그아웃 : mutations 값 바꿔주고, 경로를 home 으로 바꿔주기
 
 // https://www.youtube.com/watch?v=TSyS3hMaDfA&t=262s
