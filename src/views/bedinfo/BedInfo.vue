<template>
    <div class="bedinfo">
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
            :data="bedinfolist"
            height="700px"
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
                prop="status"
                label="是否被占用">
            </el-table-column>
        </el-table>
        <el-footer>
             <el-button type="primary" round @click="goPage('/management')">返回</el-button>
        </el-footer>
    </div>
</template>

<script>
import {getbedinfo} from '@/network/hospitalization'

export default {
  bednum: 'BedInfo',
  created() {
    this.getBedIfo()
  },
  watch: {
    datevalue: {
      handler(datevalue) {
          this.getBedIfo(datevalue)
      }
    }
  },
  data() {
      return {
        datevalue: '2022-02-07',
        bedinfolist: []
      }
    },
    
    methods: {
     goPage(target) {
       this.$router.push(target)
       console.log(target)
     },
     getBedIfo() {
        getbedinfo(this.datevalue).then(res => {
          console.log(res)
          this.bedinfolist = res
      })
     }
   }
}
</script>

<style>

</style>

