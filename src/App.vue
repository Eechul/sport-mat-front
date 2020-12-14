<template>
  <el-container id="app">
    <el-header>
      <el-menu :default-active="activePath" class="hd-menu" mode="horizontal" menu-trigger="click" @select="handleSelect">
        <el-menu-item disabled>(로고)</el-menu-item>
        <el-menu-item index="/">메인</el-menu-item>
        <el-menu-item index="/team">TEAM</el-menu-item>
        <el-submenu index="/user" class="fright">
          <template slot="title">로그인 / 로그인 중 일땐 아래로 열림</template>
          <el-menu-item index="/user/profile">프로필</el-menu-item>
        </el-submenu>
<!--          <el-menu-item index="/login" class="fright">로그인/ 로그인 중 일땐 아래로 열림</el-menu-item>-->


      </el-menu>
    </el-header>

    <el-main id="main">
      <router-view />
    </el-main>
  </el-container>
</template>
<script>

 export default {
   data() {
     return {
       activePath: ""
     }
   },
   computed: {
   },
   created() {
     this.activePath = window.location.pathname
   },
   mounted() {
   },
   methods: {
     handleSelect(key) {
       this.$router.push(key)
     }
   }
 }
</script>
<style>
  body {
    background-color: aliceblue;
    margin: 0
  }
  #app{}
  #main{
    padding-top: 60px;
  }
  .el-header{
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
  }
  .hd-menu .fright {
    float: right !important;
  }
</style>
