<template>
  <div class="block">
    <el-avatar :size="50" :src="'https://post-phinf.pstatic.net/MjAxOTA0MTBfMSAg/MDAxNTU0OTA0MTU0OTUy.wbiyoTJa-UaWgue-EcZYcwWPDxjcAUO8UEjd-ZT3rsAg.Vmg-tfnQz59yfac-MIA3AdmQQupDTpCUYkMLHA-RVbYg.JPEG/%EC%86%90%ED%9D%A5%EB%AF%BC.jpg?type=w1200'" />
    <div class="block user-name">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  props: {
    name: String,
    img: String
  }
}
</script>

<style scoped>
  .user-name {
    padding-top: 12px;
    font-size: 14px;
  }


</style>