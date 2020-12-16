<template>
  <div id="login-container" class="sub-container">
      <router-view/>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {
  },
  created() {},
  mounted() {
    console.log(this.$route.params)
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
  .tit { font-size: 20px; }
</style>