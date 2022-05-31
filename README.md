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


