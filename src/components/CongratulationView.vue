<template>
  <el-row type="flex" class="content" justify="center" align="middle" style="height: 30em">
    <el-col :xs="20" :sm="14" :md="12" :lg="10" :xl="12" class="txt-center">
      <emoji emoji="tada" :size="38" /> {{ title }} <br /> <br />
      <div v-if="contentFlag === 'userRegister'">
        이제  '<router-link to="/team/create" class="non-link">팀을 만들</router-link>'거나 '<router-link to="/team" class="non-link">팀에 참여</router-link>'해보세요.
      </div>
    </el-col>
  </el-row>

</template>

<script>
import { Emoji } from 'emoji-mart-vue'

export default {
  name: "CongratulationView",
  components: {
    Emoji
  },
  props: {
    title: String,
    contentFlag: String,
    token: String
  },
  mounted() {
    // 로딩 -> 토큰 비교 후, 결과 출력, 에러가 있다면 숨기고 content에 적재
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>