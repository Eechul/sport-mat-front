<template>
  <el-container id="app" direction="vertical">
    <navigation-view/>

    <el-main id="main">
      <router-view />
    </el-main>

<!--    <footer-view />-->
  </el-container>

</template>
<script>
import NavigationView from "@/components/NavigationView";
// import FooterView from "@/components/FooterView";

export default {
   components: {
     NavigationView,
     // FooterView
   }
 }
</script>
<style>
  html,body{
    margin: 0;
    height:100%;
    overflow: hidden;
  }
  body {
    /*margin: 0;*/
  }
  #app{}
  #main{
    padding: 60px 0px 0px 0px;
  }
  .el-header{
    padding: 0 !important;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
  }


</style>
