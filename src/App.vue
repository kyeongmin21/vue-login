<template>
  <v-app id="inspire">

    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile router :to="{name: 'home'}" exact>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-if="this.isLogin === false" router :to="{name: 'login'}" exact>
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-else router :to="{name: 'mypage'}" exact>
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>MyPage</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu offset-y v-if="this.isLogin">
          <v-btn slot="activator" flat dark icon >
            <v-icon>more_vert</v-icon>

          </v-btn>
          <v-list>
            <v-list-tile>
              <v-list-tile-title>마이페이지</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title>로그아웃</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

        <v-btn flat v-else router :to="{ name: 'login' }">Login</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

  </v-app>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data: () => ({
    drawer: null
  }),
  computed: {
    ...mapState(["isLogin"])
  },
  props: {
    source: String
  }
}
</script>
