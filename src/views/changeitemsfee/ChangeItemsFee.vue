<template>
    <div class="changeitemsfee">
        <h1>项目费用明细表</h1>
        <el-table
            :data="itemfeelist"
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
             <el-button type="primary" round @click="goPage('/system')">返回</el-button>
        </el-footer>
    </div>
</template>

<script>
import { getitemfeelist } from '@/network/system'

export default {
  name: 'ChangeItemsFee',
  created() {
    this.getItemFeeList()
  },
  data() {
      return {
        itemfeelist: []
      }
    },
    methods: {
     goPage(target) {
       this.$router.push(target)
       console.log(target)
     },
     handlePass(row, $index) {
            this.$store.commit('getitemfeelist',row)
            console.log(row)
            console.log($index)
            setTimeout(() => {
                this.$router.push('/itemrevise')
            },200)
            
        },
    getItemFeeList() {
        getitemfeelist().then(res => {
            this.itemfeelist = res
        })
    }
   }
}
</script>

<style>

</style>
