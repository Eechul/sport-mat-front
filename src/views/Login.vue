<template>
  <div id="login-container" class="sub-container">
      <login-form />
<!--      <misspassword-form/>-->
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
// import MisspasswordForm from "@/components/MisspasswordForm";

export default {
  name: "Login",
  components: {
    LoginForm,
    // MisspasswordForm
  },
  created() {
    console.log(location.query)
    console.log(location.params)
  },
  mounted() {

  }
}
</script>

<style scoped>
  .tit { font-size: 20px; }
</style>