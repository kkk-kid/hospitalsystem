<template>
    <div class="daybill">
        <h1>病人日账单记录</h1>
        <el-button type="primary" @click="goPage('/daybilladd')">添加</el-button>
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
            :data="daybilllist"
            height="600px"
            style="width: 100%">
            <el-table-column
                prop="date_"
                label="日期">
            </el-table-column>
            <el-table-column
                prop="ID"
                label="身份证号">
            </el-table-column>
            <el-table-column
                prop="patient_name"
                label="姓名">
            </el-table-column>
            <el-table-column
                prop="cost_of_medicine_daliy"
                label="日药品费">
            </el-table-column>
            <el-table-column
                prop="cost_of_laboratoey_daliy"
                label="日化验费">
            </el-table-column>
            <el-table-column
                prop="cost_of_bed_daliy"
                label="日床位费">
            </el-table-column>
            <el-table-column
                prop="cost_of_operstion_daliy"
                label="日手术费">
            </el-table-column>
            <el-table-column
                prop="total_daliy_rate"
                label="日总费">
            </el-table-column>
        </el-table>
        <el-footer>
             <el-button type="primary" round @click="goPage('/management')">返回</el-button>
        </el-footer>
    </div>
</template>

<script>
import { getdalybill } from '@/network/hospitalization'

export default {
  name: 'DayBill',
  created() {
    this.getDayBill()
  },
  watch: {
    datevalue: {
      handler(datevalue) {
          this.getDayBill(datevalue)
      }
    }
  },
  data() {
      return {
        datevalue: '2023-03-22',
        daybilllist: []
      }
    },
    methods: {
     goPage(target) {
       this.$router.push(target)
       console.log(target)
     },
     getDayBill() {
        getdalybill(this.datevalue).then(res => {
            console.log(res)
            this.daybilllist = res
        })
     }
   }
}
</script>

<style>

</style>
