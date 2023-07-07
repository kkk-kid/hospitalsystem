<template>
    <div class="fundsform">
        <h1>住院资金报表</h1>
        <div class="block">
            <el-date-picker
                v-model="datevalue"
                type="date"
                placeholder="选择日期"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd">
            </el-date-picker>
            <el-button type="primary" class="checkall" @click="checkall">查看所有</el-button>
        </div>
        
        <el-table
            :data="funlist"
            height="600px"
            style="width: 100%">
            <el-table-column
                prop="time_"
                label="日期">
            </el-table-column>
            <el-table-column
                prop="total_disburse"
                label="总支出">
            </el-table-column>
            <el-table-column
                prop="total_incom"
                label="总收入">
            </el-table-column>
            
        </el-table>
        <el-footer>
             <el-button type="primary" round @click="goPage('/management')">返回</el-button>
        </el-footer>
    </div>
</template>

<script>
import { getfunform,getdayfunform } from '@/network/hospitalization'

export default {
  totalrevenue: 'FundsForm',
  watch: {
    datevalue: {
      handler(datevalue) {
          if(datevalue != '') this.getDayFundForm(datevalue)          
      }
    }
  },
  created() {
      this.getFunForm()
  },
  data() {
      return {
        datevalue: '',
        funlist: []
      }
    },
    methods: {
     goPage(target) {
       this.$router.push(target)
       console.log(target)
     },
     getFunForm() {
        getfunform().then(res => {
            this.funlist = res
        })
     },
     checkall() {
          this.getFunForm()
          setTimeout(()=>{
            this.datevalue = ''
          },200)
     },
     getDayFundForm(date) {
      getdayfunform(date).then(res => {
        console.log(res)
          this.funlist = res
      })
     }
   }
}
</script>

<style>
.checkall{
  margin-left: 15px;
}
</style>
