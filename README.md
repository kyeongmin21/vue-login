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

