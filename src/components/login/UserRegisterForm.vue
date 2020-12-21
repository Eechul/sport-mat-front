<template>
    <el-row type="flex" class="content" justify="center" align="middle" style="height: 35em">
      <el-col :xs="20" :sm="14" :md="12" :lg="10" :xl="12" v-if="!registerComplete">
        <el-form
            :model="registerForm"
            status-icon
            :rules="rules"
            ref="registerForm"
            label-position="left"
            :hide-required-asterisk="true"
            class="demo-ruleForm">
          <el-form-item>
            <div class="tit ma0 txt-left">가입</div>
          </el-form-item>
          <el-form-item prop="email">
            <el-input v-model="registerForm.email" placeholder="이메일" autocomplete="off">
              <template slot="prepend"><emoji emoji="email" :size="20" /></template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="registerForm.password" :placeholder="passwordPlaceHolder" autocomplete="off">
              <template slot="prepend"><emoji emoji="key" :size="20" /></template>
            </el-input>
          </el-form-item>
          <el-form-item prop="passwordChk">
            <el-input type="password" v-model="registerForm.passwordChk" placeholder="비밀번호 재입력" autocomplete="off">
              <template slot="prepend"><emoji emoji="key" :size="10" /><emoji emoji="key" :size="10" /></template>
            </el-input>
          </el-form-item>
          <el-form-item prop="nickname">
            <el-input type="text" v-model="registerForm.nickname" autocomplete="off" placeholder="닉네임 입력">
              <template slot="prepend"><emoji emoji="bust_in_silhouette" :size="20" /></template>
            </el-input>
          </el-form-item>
          <el-form-item prop="myselfIntrodution">
            <el-input type="textarea" v-model="registerForm.myselfIntrodution" placeholder="자기소개. 필수로 입력하지 않아도 돼요."></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="fright" @click="doRegister('registerForm')" :loading="false">회원가입</el-button>
          </el-form-item>
        </el-form>
      </el-col>

      <finish-send-mail-form v-if="registerComplete" :email="'choise154@gmail.com'"/>
    </el-row>
</template>

<script>
import { Emoji } from 'emoji-mart-vue'
import FinishSendMailForm from "@/components/login/SendedEmailForm";
import PasswordPolicy from "@/model/PasswordPolicy";

export default {
  name: "Login",
  components: {
    Emoji,
    FinishSendMailForm
  },
  mounted() {
    this.passwordPlaceHolder = '비밀번호 '+this.passwordPolicy.getWordNumber()+'자 이상.'
  },
  data() {
    return {
      passwordPolicy: new PasswordPolicy(),
      passwordPlaceHolder: '',
      registerComplete: false,
      registerForm: {
        email: '',
        password: '',
        passwordChk: '',
        nickname: '',
        myselfIntrodution: '',
      },
      rules: {
        email: [
          { required: true, message: '이메일을 입력해주세요.', trigger: 'blur' },
          { type: 'email', message: '이메일 규격에 맞게 정확히 입력해주세요.', trigger: ['blur', 'change'] }
        ],
        password: [
          { validator: this.validatePassword1, trigger: 'blur' },
        ],
        passwordChk: [
          { validator: this.validatePassword2, trigger: 'blur' },
        ],
        nickname: [
          { required: true, message: '닉네임을 입력해주세요.', trigger: 'blur' },
        ],
        myselfIntrodution: [
          { required: false },
        ],
      }
    };
  },
  methods: {
    validatePassword1(rule, value, callback) {
      const validResult = this.passwordPolicy.valid(value)
      if (!validResult.state) {
        callback(new Error(validResult.msg));
      } else {
        if (this.registerForm.password !== '') {
          this.$refs.registerForm.validateField('passwordChk');
        }
        callback();
      }
    },
    validatePassword2(rule, value, callback) {
      if (value === '') {
        callback(new Error('패스워드를 재입력 해주세요.'));
      } else if (value !== this.registerForm.password) {
        callback(new Error('두 패스워드가 맞지 않습니다 :('));
      } else {
        callback();
      }
    },
    doRegister(formName) {
      this.$refs[formName].validate( () => {
        // if(valid) {
        //   alert('submit!')
        // } else {
        //   return false
        // }
        alert('테스트 중이라 validation 넘어감!')
        this.registerComplete= true
      })
    }
  },
}
</script>

<style scoped>

</style>