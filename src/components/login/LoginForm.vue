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
        <el-form-item>
          <div class="tit ma0 txt-left">로그인</div>
        </el-form-item>
        <el-form-item prop="email">
          <el-input type="email" v-model="ruleForm.email" placeholder="이메일" autocomplete="off">
            <template slot="prepend"><emoji emoji="email" :size="20" /></template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="ruleForm.password" placeholder="비밀번호" autocomplete="off">
            <template slot="prepend"><emoji emoji="key" :size="20" /></template>
          </el-input>
        </el-form-item>
        <el-form-item class="ma0">
          <div class="ma0 txt-left"><el-button type="text" class="default" @click="goToPage('/login/misspass')">비밀번호를 잊어버리셨나요?<emoji emoji="mag_right" :size="16" /></el-button></div>
          <div class="txt-left"><el-button type="text" class="default" @click="goToPage('/login/register')">아니면 아직 회원이 아니세요?<emoji emoji="writing_hand" :size="16" /></el-button></div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary w100p" class="fright" @click="doLogin('ruleForm')" :loading="false">로그인</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import { Emoji } from 'emoji-mart-vue'
import PasswordPolicy from "@/model/PasswordPolicy";

export default {
  name: "LoginForm",
  components: {
    Emoji,
  },
  mounted() {
    this.passwordPlaceHolder = '새로운 패스워드 '+this.passwordPolicy.getWordNumber()+'자 이상을 입력해주세요.'
  },
  data() {
    return {
      passwordPolicy: new PasswordPolicy(),
      ruleForm: {
        email: '',
        pass: ''
      },
      rules: {
        email: [
          { required: true, message: '이메일을 입력해주세요.', trigger: 'blur' },
          { type: 'email', message: '이메일 규격에 맞게 정확히 입력해주세요.', trigger: ['blur', 'change'] }
        ],
        password: [
          { validator: this.validatePassword, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    validatePassword(rule, value, callback) {
      const validResult = this.passwordPolicy.valid(value)
      if (!validResult.state) {
        callback(new Error(validResult.msg));
      } else {
        callback();
      }
    },
    goToPage(url) {
      this.$router.push(url)
    },
    doLogin(formName) {
      this.$refs[formName].validate(() => {
        // if(valid) {
        //   alert('submit')
        // } else {
        //   return false
        // }
        alert('테스트를 위해 validation 안함!')
        this.$store.dispatch('login')
        this.$router.push('/')
      })
    }


  },
}
</script>

<style scoped>

</style>