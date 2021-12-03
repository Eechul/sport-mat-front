<template>
  <div id="team-detail-container" class="sub-container">
    <el-row>
      <el-col :span="24">
        <el-row>
          <el-col :span="24">
            <h2>대표로고</h2>
            <div class="text-center">
              <el-avatar src="https://blog.kakaocdn.net/dn/kWr1v/btqyqdOcKUZ/5bqzHwqJJdKvPBU4ekM1WK/img.jpg" :size="100"></el-avatar>
            </div>
          </el-col>
          <!-- <el-col :span="12">
            <h3>금아</h3>
            <h3>활동장소: 서울 동작구</h3>
            <h3>인원: 52명</h3>
            <h3>소개: 아좌아좌</h3>
          </el-col> -->
        </el-row>
        <el-row>
          <el-col :span="24">
            <h2 class="demonstration">활동사진</h2>
            <el-carousel height="350px">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3 class="small">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-collapse accordion>
              <el-collapse-item name="1">
                <template slot="title">
                  팀 이름<i class="header-icon el-icon-info"></i>
                </template>
                <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
                <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
              </el-collapse-item>
              <el-collapse-item title="활동장소" name="2">
                <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
                <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
              </el-collapse-item>
              <el-collapse-item title="인원" name="3">
                <div>Simplify the process: keep operating process simple and intuitive;</div>
                <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
                <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
              </el-collapse-item>
              <el-collapse-item title="소개" name="4">
                <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
                <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
              </el-collapse-item>
            </el-collapse>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>

export default {
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {
    
  },
  methods: {
  }
}
</script>
<style scoped>
#team-detail-container {
  padding: 12px 12px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.text-center {
  text-align: center;
}

</style>
