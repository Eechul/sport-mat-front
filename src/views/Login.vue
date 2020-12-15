<template>
  <div id="login-container">

    <el-row type="flex" class="row-bg" justify="center" align="middle" style="height: 50em">
      <el-col :xs="20" :sm="14" :md="12" :lg="10" :xl="12">
        <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            label-position="left"
            :hide-required-asterisk="true"
            class="demo-ruleForm">
          <el-form-item label="이메일" prop="email">
            <el-input type="email" v-model="ruleForm.email" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="비밀번호" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item class="ma0">
            <div class="ma0"><a href="" class="non-link">비밀번호를 잊어버리셨나요?<emoji emoji="mag_right" :size="16" /></a></div>
            <div><a href="/user/register" class="non-link">아니면 아직 회원이 아니세요?<emoji emoji="writing_hand" :size="16" /></a></div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="doLogin('ruleForm')" :loading="false">로그인</el-button>
          </el-form-item>
        </el-form>
      </el-col>

    </el-row>
  </div>
</template>

<script>
import { Emoji } from 'emoji-mart-vue'

export default {
  name: "Login",
  components: {
    Emoji,
  },
  methods: {
    doLogin(formName) {
      this.$refs[formName].validate( valid => {
        if(valid) {
          alert('submit!')
        } else {
          return false
        }
      })
    }
  },
  data() {
    // var checkAge = (rule, value, callback) => {
    //   if (!value) {
    //     return callback(new Error('Please input the age'));
    //   }
    //   setTimeout(() => {
    //     if (!Number.isInteger(value)) {
    //       callback(new Error('Please input digits'));
    //     } else {
    //       if (value < 18) {
    //         callback(new Error('Age must be greater than 18'));
    //       } else {
    //         callback();
    //       }
    //     }
    //   }, 1000);
    // };
    // var validatePass = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('Please input the password'));
    //   } else {
    //     if (this.ruleForm.checkPass !== '') {
    //       this.$refs.ruleForm.validateField('checkPass');
    //     }
    //     callback();
    //   }
    // };
    // var validatePass2 = (rule, value, callback) => {
    //   if (value === '') {
    //     callback(new Error('Please input the password again'));
    //   } else if (value !== this.ruleForm.pass) {
    //     callback(new Error('Two inputs don\'t match!'));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      ruleForm: {
        email: '',
        pass: '',
        checkPass: '',
        // age: ''
      },
      rules: {
        email: [
          { required: true, message: '이메일을 입력해주세요.', trigger: 'blur' },
          { type: 'email', message: '이메일 규격에 맞게 정확히 입력해주세요.', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: '패스워드를 입력해주세요.', trigger: 'blur' },
        ],
        // pass: [
        //   { validator: validatePass, trigger: 'blur' }
        // ],
        // checkPass: [
        //   { validator: validatePass2, trigger: 'blur' }
        // ],
        // age: [
        //   { validator: checkAge, trigger: 'blur' }
        // ]
      }
    };
  },
}
</script>

<style scoped>

</style>