<template>
  <div id="misspass-container" class="sub-container">
    <el-row type="flex" class="content" justify="center" align="middle" style="height: 30em">
      <el-col :xs="20" :sm="14" :md="12" :lg="10" :xl="12"  v-if="!misspassForm.sendEmailFlag">
        <el-form
            :model="misspassForm"
            status-icon
            :rules="rules"
            ref="misspassForm"
            label-position="left"
            :hide-required-asterisk="true"
            class="demo-ruleForm">
          <el-form-item>
            <div class="tit ma0 txt-left">인증번호 발송</div>
          </el-form-item>
          <el-form-item prop="email">
            <el-input type="email" v-model="misspassForm.email" placeholder="사용하던 이메일로 인증번호가 전송됩니다 :)" autocomplete="off">
              <template slot="prepend"><emoji emoji="email" :size="20" /></template>
              <el-button slot="append" @click="sendEmail('misspassForm')">전송</el-button>
            </el-input>
          </el-form-item>
<!--          <el-form-item prop="authNum">-->
<!--            <el-input type="authNum" v-model="misspassForm.authNum" placeholder="6자 인증번호 입력 " @keydown="valiAuthNum('misspassForm')" autocomplete="off" />-->
<!--          </el-form-item>-->
<!--          <el-form-item prop="password">-->
<!--            <el-input type="password" v-model="misspassForm.password" placeholder="새로운 비밀번호. 16자 입력" autocomplete="off" />-->
<!--          </el-form-item>-->
<!--          <el-form-item prop="passwordChk">-->
<!--            <el-input type="password" v-model="misspassForm.passwordChk" placeholder="새로운 비밀번호 재입력" autocomplete="off" />-->
<!--          </el-form-item>-->
<!--          <el-form-item>-->
<!--            <el-button class="w100p" @click="changePassword('misspassForm')">확인</el-button>-->
<!--          </el-form-item>-->

        </el-form>
      </el-col>
      <finish-send-mail-form v-if="misspassForm.sendEmailFlag" :email="'choise154@gmail.com'"/>
    </el-row>
  </div>

</template>

<script>
import { Emoji } from 'emoji-mart-vue'
import FinishSendMailForm from "@/components/login/SendedEmailForm";

export default {
  name: 'MisspasswordForm',
  components: {
    Emoji,
    FinishSendMailForm
  },
  data() {
    return {
      misspassForm: {
        email: '',
        sendEmailFlag: false
      },
      rules: {
        email: [
          { required: true, message: '이메일을 입력해주세요.', trigger: 'blur' },
          { type: 'email', message: '이메일 규격에 맞게 정확히 입력해주세요.', trigger: ['blur', 'change'] }
        ],
        // password: [
        //   { validator: this.validatePassword1, trigger: 'blur' },
        // ],
        // passwordChk: [
        //   { validator: this.validatePassword2, trigger: 'blur' },
        // ],
      }
    };
  },
  methods: {
    sendEmail(formName) {
      this.$refs[formName].validate( () => {
        // if(valid) {
        //   alert('submit!')
        // } else {
        //   return false
        // }
        alert('테스트 중이라 validation 넘어감!')
        this.misspassForm.sendEmailFlag = true
      })
    },
    valiAuthNum(formName) {
      this.$refs[formName].validate( () => {
        // if(valid) {
        //   alert('submit!')
        // } else {
        //   return false
        // }
        // 인증번호 매칭
        // 새로운 비밀번호 지정
      })
    },
    changePassword(formName) {
      this.$refs[formName].validate( () => {
        alert('테스트 중이라 validation 넘어감!')
      })
    },
    validateAuthNum(rule, value, callback) {
      if(value === '') {
        callback(new Error('인증번호를 입력해주세요.'))
      } else if(value && value.trim().length !== 6) {
        callback(new Error('인증번호 6자리를 입력해주세요.'))
      } else {
        callback()
      }
    },
    validatePassword1(rule, value, callback) {
      if (value === '') {
        callback(new Error('패스워드를 입력해주세요.'));
      } else {
        if (this.misspassForm.password !== '') {
          this.$refs.registerForm.validateField('passwordChk');
        }
        callback();
      }
    },
    validatePassword2(rule, value, callback) {
      if (value === '') {
        callback(new Error('패스워드를 재입력 해주세요.'));
      } else if (value !== this.misspassForm.password) {
        callback(new Error('두 패스워드가 맞지 않습니다 :('));
      } else {
        callback();
      }
    },
  }
}
</script>

<style scoped>

</style>