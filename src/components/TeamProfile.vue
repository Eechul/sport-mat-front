<template>
  <div class="block">
    <el-avatar :size="50" icon="el-icon-user-solid" />
    <div class="block team-name">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "TeamProfile",
  props: {
    name: String
  }
}
</script>

<style scoped>
  .team-name {
    padding-top: 12px;
    font-size: 14px;
  }
</style>