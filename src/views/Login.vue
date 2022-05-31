<template>
  <v-container fill-height style="max-width: 450px;">
    <v-layout row wrap align-center>
      <v-flex xs12>

        <v-alert class="mb-3" :value="isLoginError" type="error">아이디와 이메일을 확인해주세요.</v-alert>
        <v-alert class="mb-3" :value="isLogin" type="success">로그인이 완료되었습니다.</v-alert>

        <v-card >
          <v-toolbar flat>
            <v-toolbar-title>로그인</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field
              v-model="email"
              label="이메일을 입력하세요">
            </v-text-field>

            <v-text-field
              type="password"
              v-model="password"
              label="패스워드를 입력하세요">
            </v-text-field>

            <v-btn block large depressed
                   color="primary"
                   @click="login({ email, password })">로그인
            </v-btn>
          </div>
        </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      email: null,
      password: null
    }
  },
  computed: {
    ...mapState(["isLogin", "isLoginError"])
  },
  methods: {
    // store 에 있는 login actions 를 methods 처럼 쓸 수 있게 만듬.
    ...mapActions(["login"])
  }
}

</script>
