<template>
  <el-header>
    <div class="header-wrapper">
      <el-menu class="hd-menu" mode="horizontal" menu-trigger="click" @select="handleSelect">
        <el-menu-item index="/"><span id="ft-logo">스매칭</span></el-menu-item>
        <el-menu-item class="hd-menu-item" index="/login" v-if="userStatus === 'logout'">로그인</el-menu-item>
        <el-submenu class="hd-menu-item" index="/user" v-if="userStatus === 'login'">
          <template slot="title">000 님(로그인상태)</template>
          <el-menu-item index="/user/profile">프로필</el-menu-item>
          <el-menu-item index="/logout">로그아웃</el-menu-item>
        </el-submenu>
        <el-menu-item class="hd-menu-item" index="/player">선수</el-menu-item>
        <el-menu-item class="hd-menu-item" index="/team">팀</el-menu-item>

        <el-menu-item index="menu" class="side-menu-btn fright">
          <i class="el-icon-s-fold" v-show="!isSideActive"></i>
          <i class="el-icon-s-unfold" v-show="isSideActive"></i>
        </el-menu-item>
      </el-menu>

      <el-menu
          class="hd-menu-mobile"
          mode="vertical"
          menu-trigger="click" @select="handleSelect" v-bind:class="{ 'side-active': isSideActive }">
                <el-menu-item index="/team">팀</el-menu-item>
                <el-menu-item index="/player">선수</el-menu-item>
                <el-menu-item index="/login" class="fright" v-if="userStatus === 'logout'">로그인</el-menu-item>
                <el-submenu index="/user" class="fright" v-if="userStatus === 'login'">
                  <template slot="title">아무개 님,</template>
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
    userStatus : 'getLoginStatus',
    isSideActive : 'getSideActive'
  }),
  created() {
    this.activePath = window.location.pathname
  },
  mounted() {

  },
  methods: {
    handleSelect(key) {
      if(key === 'menu') {
        this.$store.dispatch('ctrlMenu')
      } else if(key === '/logout') {
        this.$store.dispatch('logout')
        this.$router.push('/login')
        this.$store.dispatch('ctrlMenu', { by: 'close' })
      } else {
        this.$router.push(key)
        this.$store.dispatch('ctrlMenu', { by: 'close' })
      }

    }
  }
}
</script>

<style scoped>
  .side-menu-btn {
    display: none;
  }
  .hd-menu-mobile {
    right: 0;
    display: none;
  }
  .hd-menu-item {
    float: right !important;
  }

  @media (max-width: 760px) {
    .hd-menu-mobile {
      display: none;
    }
    .hd-menu-item {
      display: none;
    }
    .hd-menu-mobile {
      display: inline-block;
    }
    .side-menu-btn {
      display: inline-block;
    }
  }
  .hd-menu-mobile {
    position: fixed;
    right: -41%;
    width: 40%;
    background-color: #ffffff;
    border: 1px solid #dcdcdc;
    border-top: 0px;
    border-right: 0px;
  }

  .hd-menu-mobile > li {
    width: 100%;
  }

  .hd-menu-mobile.side-active {
    right: 0;
  }
</style>