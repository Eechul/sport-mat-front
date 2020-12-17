<template>
  <el-col :xs="20" :sm="14" :md="12" :lg="10" :xl="12" class="txt-center">
    (메일 서비스 개발중)<emoji emoji="postbox" :size="64" /> <br /> <br />
    {{ email }} 계정의 메일을 확인 해주시고 <br /> 메일 인증을 해주세요.
  </el-col>
</template>

<script>
import { Emoji } from 'emoji-mart-vue'

export default {
  name: "FinishSendMailForm",
  components: {
    Emoji,
  },
  props: {
    email: String
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

</style>