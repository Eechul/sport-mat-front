<template>
  <el-carousel :interval="4000" :type="type" :height="height">
    <el-carousel-item v-for="item in datas" :key="item.title">
      <h3 class="medium">
        <el-image
            style="width: 100%;"
            :src="imgTest"
            :fit="'cover'">
        </el-image>
        </h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
const imgTest = require("../assets/img_notice_stardium.jpg")
export default {
  name: "Carousel",
  props: ["type", "height", "datas"],
  data() {
    return {
      imgTest
    }
  }
}
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>