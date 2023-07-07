<template>
    <div class="feeitem">
        <h1>项目费用明细表</h1>
        <el-table
            :data="itemfeelist"
            height="600px"
            style="width: 100%">
            <el-table-column
                prop="item_charge_number"
                label="项目编号">
            </el-table-column>
            <el-table-column
                prop="item_charge_name"
                label="项目名称">
            </el-table-column>
            <el-table-column
                prop="unit"
                label="单位">
            </el-table-column>
            <el-table-column
                prop="price"
                label="收费价格">
            </el-table-column>
        </el-table>
        <el-footer>
             <el-button type="primary" round @click="goPage('/management')">返回</el-button>
        </el-footer>
    </div>
</template>

<script>
import { getitemfeelist } from '@/network/hospitalization'

export default {
  name: 'FeeItem',
  created() {
      this.getItemFee()
  },
  data() {
      return {
        idnumvalue: '',
        itemfeelist: []
      }
    },
    methods: {
     goPage(target) {
       this.$router.push(target)
       console.log(target)
     },
     getItemFee() {
      getitemfeelist().then(res => {
          this.itemfeelist = res
      })
     }
   }
}
</script>

<style>

</style>
