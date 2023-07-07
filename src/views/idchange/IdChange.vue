<template>
    <div class="idchange">
        <h1>修改职工编号</h1>
            <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="科目编号">
                <el-input v-model="form.account_number" disabled></el-input>
            </el-form-item>   
            <el-form-item label="工号">
                <el-input v-model="form.number"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="form.name" disabled></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-input v-model="form.sex" disabled></el-input>
            </el-form-item>
            <el-form-item label="年龄">
                <el-input v-model.number="form.age" disabled></el-input>
            </el-form-item>
            <el-form-item label="职称">
                <el-input v-model="form.job_title" disabled></el-input>
            </el-form-item>
            <el-form-item label="电话">
                <el-input v-model.number="form.phone" disabled></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" class="check">修改</el-button>
            </el-form-item>
            </el-form>
                <el-button type="primary" round @click="goPage('/staffinfo')">返回</el-button>
    </div>
</template>

<script>
import { updatedoctorinfo,updatenurseinfo } from '@/network/system'

export default {
  name: 'IdChange',
  created() {
    this.setform()
  },
  data() {
      return {
        form: {},
        oldnumber: ''
      }
    },
  methods: {
    goPage(target) {
      this.$router.push(target)
      console.log(target)
      
    },
    onSubmit() {
      console.log(this.form.number)
      if(this.form.number.substr(0,1) == 'h') {
        updatenurseinfo(this.form.number,this.oldnumber).then(res => {
          console.log(res)
          this.$message({
              message: '修改成功',
              type: 'success'
        });
          
        })
      }
      else {
        updatedoctorinfo(this.form.number,this.oldnumber).then(res => {
          console.log(res)
          this.$message({
              message: '修改成功',
              type: 'success'
        });
        })
      }
    },
    setform() {
      this.form = this.$store.state.staffinfo
      this.oldnumber = this.$store.state.staffinfo.number
    }
  },
}
</script>

<style>
.el-header{
    text-align: center;
  }

  .item {
    margin-bottom: 20px;
  }
  .check{
    width: 200px;
  }
</style>
