<template>
  <el-row type="flex" class="content" justify="center" align="middle" style="height: 30em">
    <el-col :xs="20" :sm="14" :md="12" :lg="10" :xl="12">
      <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-position="left"
          :hide-required-asterisk="true"
          class="demo-ruleForm">
        <el-form-item prop="email">
          <div class="tit ma0 txt-left">인증번호 발송</div>
        </el-form-item>
        <el-form-item prop="email">
          <el-input type="email" v-model="ruleForm.email" placeholder="사용하던 이메일로 인증번호가 전송됩니다 :)" autocomplete="off">
            <template slot="prepend"><emoji emoji="email" :size="20" /></template>
          </el-input>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import { Emoji } from 'emoji-mart-vue'

export default {
  name: "MisspasswordForm",
  components: {
    Emoji
  },
  data() {
    return {
      ruleForm: {
        email: ''
      },
      rules: {
        email: [
          { required: true, message: '이메일을 입력해주세요.', trigger: 'blur' },
          { type: 'email', message: '이메일 규격에 맞게 정확히 입력해주세요.', trigger: ['blur', 'change'] }
        ]
      }
    };
  }
}
</script>

<style scoped>

</style>