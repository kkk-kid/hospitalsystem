<template>
    <div class="wardcheckinfo">
        <h1>每日查房记录</h1>
        <el-button type="primary" @click="goPage('/warcheck')">添加</el-button>
        <div class="block">
            <el-date-picker
                v-model="datevalue"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd">
            </el-date-picker>
        </div>
        <el-table
            :data="wardslist"
            height="600px"
            style="width: 100%">
            <el-table-column
                prop="date"
                label="日期">
            </el-table-column>
            <el-table-column
                prop="bed_number"
                label="床位号">
            </el-table-column>
            <el-table-column
                prop="ward_round_number"
                label="查房人员编号">
            </el-table-column>
            <el-table-column
                prop="patient_situation"
                label="病情">
            </el-table-column>
            <el-table-column
                prop="doctor_advice"
                label="医嘱">
            </el-table-column>
        </el-table>
        <el-footer>
             <el-button type="primary" round @click="goPage('/management')">返回</el-button>
        </el-footer>
    </div>
</template>

<script>
import { getwardrecords } from '@/network/hospitalization'

export default {
  name: 'WardCheckInfo',
  created() {
        this.getWardRecords()
  },
  watch: {
    datevalue: {
      handler(datevalue) {
          this.getWardRecords(datevalue)
      }
    }
  },
  data() {
      return {
        datevalue: '2021-06-09',
        wardslist: [{
          date: '2016-05-03',
          bednum: '王小虎',
          staffno: 3,
          situation: 'nice',
          orders: '多喝热水'
        }, ]
      }
    },
    methods: {
     goPage(target) {
       this.$router.push(target)
       console.log(target)
     },
     getWardRecords() {
        getwardrecords(this.datevalue).then(res => {
            console.log(res)
            this.wardslist = res
        })
     }
   }
}
</script>

<style>

</style>
