<template>
  <div class="block">
    <el-image
        style="width: 50px; height: 50px"
        :src="'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'"
        :fit="'cover'">
    </el-image>
    <div class="block user-name">유저이름</div>
  </div>
</template>

<script>
export default {
  name: "UserProfile"
}
</script>

<style scoped>
  .user-name {

  }


</style>