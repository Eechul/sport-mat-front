<template>
    <el-row>
      <el-col :span="24">
        <el-avatar :size="24" ></el-avatar>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: "UserProfile",
  props: {
    name: String,
    img: String
  },
  data() {
    return {
      activeName: 'myinfo',
    }
  }
}
</script>

<style scoped>
  .user-name {
    padding-top: 12px;
    font-size: 14px;
  }


</style>