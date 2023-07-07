<template>
    <div class="staffinfo">
        <h1>职工表</h1>
        <el-table
            :data="stafflist"
            height="600px"
            style="width: 100%">
            <el-table-column
                prop="choose"
                label="修改">
                <template slot-scope="{row, $index}">
                    <el-button type="primary" icon="el-icon-edit" circle @click="handlePass(row, $index)"></el-button>
          
                </template>

            </el-table-column>
            <el-table-column
                prop="number"
                label="工号">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名">
            </el-table-column>
            <el-table-column
                prop="sex"
                label="性别">
            </el-table-column>
            <el-table-column
                prop="age"
                label="年龄">
            </el-table-column>
            <el-table-column
                prop="account_number"
                label="科目编号">
            </el-table-column>
            <el-table-column
                prop="job_title"
                label="职称">
            </el-table-column>
            <el-table-column
                prop="phone"
                label="电话">
            </el-table-column>
        </el-table>
        <el-footer>
             <el-button type="primary" round @click="goPage('/system')">返回</el-button>
        </el-footer>
    </div>
</template>

<script>
import { getdoctorinfo,getnurseinfo } from '@/network/system'

export default {
  name: 'StaffInfo',
  created() {
        this.getstaffinfo()
  },
  data() {
      return {
        datevalue: '',
        stafflist: []
      }
    },
    methods: {
     goPage(target) {
       this.$router.push(target)
       console.log(target)
     },
     handlePass(row, $index) {
            console.log(row)
            this.$store.commit('getstaffinfo',row)
            console.log('$index ' + $index)
            console.log('/idchange')
            setTimeout(() => {
                this.$router.push('/idchange')
            },200)
    },
    getstaffinfo() {
        getdoctorinfo().then(res => {
            this.stafflist.push(...res)
        })
        getnurseinfo().then(res => {
            this.stafflist.push(...res)
        })
    }
   }
}
</script>

<style>

</style>
