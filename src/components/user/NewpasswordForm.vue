<template>
  <el-row type="flex" class="content" justify="center" align="middle" style="height: 30em">
    <el-col :xs="20" :sm="14" :md="12" :lg="10" :xl="12" >
      <el-form
          :model="newPasswordForm"
          status-icon
          :rules="rules"
          ref="newPasswordForm"
          label-position="left"
          :hide-required-asterisk="true"
          class="demo-ruleForm">
<!--        <el-form-item>-->
<!--          <div class="tit ma0 txt-left"></div>-->
<!--        </el-form-item>-->
        <el-form-item prop="newPassword">
          <el-input type="password" v-model="newPasswordForm.newPassword" placeholder="새로운 패스워드 16자를 입력해주세요." autocomplete="off">
            <template slot="prepend"><emoji emoji="key" :size="10" /></template>
          </el-input>
        </el-form-item>
        <el-form-item  prop="newPasswordChk">
          <el-input type="password" v-model="newPasswordForm.newPasswordChk" placeholder="새로운 패스워드를 재입력 해주세요." autocomplete="off">
            <template slot="prepend"><emoji emoji="key" :size="10" /><emoji emoji="key" :size="10" /> </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="fright" @click="changePassword('newPasswordForm')">확인</el-button>
        </el-form-item>

      </el-form>
    </el-col>
<!--    <finish-send-mail-form v-if="misspassForm.sendEmailFlag" :email="'choise154@gmail.com'"/>-->
  </el-row>
</template>

<script>
import { Emoji } from 'emoji-mart-vue'

export default {
  name: "NewpasswordForm",
  components: {
    Emoji
  },
  props: {

  },
  data() {
    return {
      newPasswordForm: {
        newPassword: '',
        newPasswordChk: ''
      },
      rules: {
        newPassword: [
          { validator: this.validateNewPassword1, trigger: 'blur' },
        ],
        newPasswordChk: [
          { validator: this.validateNewPassword2, trigger: 'blur' },
        ],
      }
    }
  },
  methods: {
    validateNewPassword1(rule, value, callback) {
      if (value === '') {
        callback(new Error('패스워드를 입력해주세요.'))
      } else if (value.length < 16) {
        callback(new Error('패스워드는 16자 이상 입력해주세요.'))
      } else {
        if (this.newPasswordForm.newPassword !== '') {
          this.$refs.newPasswordForm.validateField('newPasswordChk');
        }
        callback()
      }
    },
    validateNewPassword2(rule, value, callback) {
      if (value === '') {
        callback(new Error('패스워드를 재입력 해주세요.'))
      } else if (value !== this.newPasswordForm.newPassword) {
        callback(new Error('두 패스워드가 맞지 않습니다 :('))
      } else {
        callback()
      }
    },
    changePassword(formName) {
      this.$refs[formName].validate( () => { // valid
        alert("??")
      })
    }
  }
}
</script>

<style scoped>

</style>