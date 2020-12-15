<template>
  <el-header>
    <div class="header-wrapper">
      <el-menu class="hd-menu" mode="horizontal" menu-trigger="click" @select="handleSelect">
        <el-menu-item index="/"><span id="ft-logo">스매칭</span></el-menu-item>
        <el-menu-item index="/team">팀</el-menu-item>
        <el-menu-item index="/login" class="fright" v-if="userStatus === 'logout'">로그인</el-menu-item>
        <el-submenu index="/user" class="fright" v-if="userStatus === 'login'">
          <template slot="title">choise154@naver.com(로그인상태)</template>
          <el-menu-item index="/user/profile">프로필</el-menu-item>
          <el-menu-item index="/logout">로그아웃</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>

  </el-header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Navigation",
  data() {
    return {
      activePath: ""
    }
  },
  computed: mapGetters({
    userStatus : 'getLoginStatus'
  }),
  created() {
    this.activePath = window.location.pathname
  },
  mounted() {
  },
  methods: {
    handleSelect(key) {
      console.log(key)
      if(key === '/logout') {
        this.$store.dispatch('logout')
        this.$router.push('/login')
      } else {
        this.$router.push(key)
      }
    }
  }
}
</script>

<style scoped>

</style>