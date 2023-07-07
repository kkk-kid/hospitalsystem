<template>
    <div>
      <h1>病人登记表</h1>
       <el-table
       height="700"
      :data="patientlist"
      style="width: 100%">
      <el-table-column
        prop="sickroom"
        label="病床号"
        >
      </el-table-column>
      <el-table-column
        prop="patient_name"
        label="姓名"
        >
      </el-table-column>
      <el-table-column
        prop="patient_phone"
        label="电话"
        >
      </el-table-column>
      <el-table-column
        prop="ID"
        label="身份证号"
        >
      </el-table-column>
      <el-table-column
        prop="patient_age"
        label="年龄"
        >
      </el-table-column>
      <el-table-column
        prop="patient_sex"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="check_in_time"
        label="入院日期">
      </el-table-column>
      <el-table-column
        prop="sickcondition"
        label="病情"
        >
      </el-table-column>
      
    </el-table>
    <el-footer><el-button type="primary" round @click="goPage('/inhospital')">返回</el-button></el-footer>
</div>
    
</template>

<script>
import { getpatientinfo } from '@/network/admission'

export default {
  name: 'PRegForm',
  created() {
      this.getPatientInfo()
  },
  data() {
        return {
          patientlist: []
        }
      },
      methods: {
        goPage(target) {
        this.$router.push(target)
        console.log(target)
    },
    getPatientInfo() {
      getpatientinfo().then(res => {
        console.log(res)
        this.patientlist = res
      })
    }
  }
}
</script>

<style>

</style>
