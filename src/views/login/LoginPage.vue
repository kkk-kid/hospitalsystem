<template>
    <div class="loginframe">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="账号">
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="formLabelAlign.region" show-password></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" @click="login()">登录</el-button>
    </div>
</template>

<script>
export default {
  name: 'LoginFrame',
  data() {
      return {
        labelPosition: 'left',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };
    },
    methods: {
        login() {
            if(this.formLabelAlign.name == '123' && this.formLabelAlign.region == '123') {
                this.$router.push('/home')
            }
            else {
                this.$message.error('账号或密码错误！');
            }
        }
    }
}
</script>

<style scoped>
.loginframe{
    margin-top: 45%;
}
.el-button{
    margin-left: 45%;
}
</style>
