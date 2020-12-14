<template>
  <div class="block">
    <el-image
        style="width: 50px; height: 50px; border-radius: 50%"
        :src="'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'"
        :fit="'cover'">
    </el-image>
    <div class="block team-name">팀이름</div>
  </div>
</template>

<script>
export default {
  name: "TeamProfile"
}
</script>

<style scoped>
  .team-name {
    padding-top: 12px;
    font-size: 14px;
  }
</style>