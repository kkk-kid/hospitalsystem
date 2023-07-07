<template>
    <div class="hosrecords">
        <h1>建立住院病历</h1>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="病历号">
                <el-input v-model.number="form.recordid"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-input v-model="form.gender"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
                <el-input v-model.number="form.age"></el-input>
            </el-form-item>
            <el-form-item label="医生工号">
                <el-input v-model="form.dno"></el-input>
            </el-form-item>
            <el-form-item label="医生姓名">
                <el-input v-model="form.dname"></el-input>
            </el-form-item>
            <el-form-item label="症状">
                <el-input type="textarea" v-model="form.symptom"></el-input>
            </el-form-item>
            <el-form-item label="诊断结果">
                <el-input type="textarea" v-model="form.result"></el-input>
            </el-form-item>
            <el-form-item label="用药">
                <el-input type="textarea" v-model="form.medication"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button @click="goPage('/inhospital')">返回</el-button>
            </el-form-item>
            </el-form>
    </div>
</template>

<script>
import { addhospitalcase } from '@/network/admission';

export default {
  name: 'HosRecords',
  data() {
      return {
        form: {
          name: '',
          recordid: null,
          gender: '',
          age: null,
          dno: '',
          dname: '',
          symptom: '',
          result: '',
          medication: ''
        },
        xx: '1'
      }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
            console.log(this.form)
            addhospitalcase(this.form.recordid,this.form.name,this.form.gender,this.form.age,this.form.symptom,this.form.medication,this.form.result,this.form.dname,this.form.dno).then(res => {
                console.log(res)
                this.$message({
                    message: '添加成功！',
                    type: 'success'
        });
            })
      },
      
        goPage(target) {
            this.$router.push(target)
            console.log(target)
        }
    }
}
</script>

<style>

</style>
