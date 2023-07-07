<template>
    <div class="feedetails">
        <h1>费用明细</h1>
        <el-table
            :data="feelist"
            
            style="width: 100%">
            <el-table-column
                prop="item"
                label="项目">
            </el-table-column>
            <el-table-column
                prop="fees"
                label="费用">
            </el-table-column>
        </el-table>
        <div>
            <el-button type="primary"  @click="pay()" class="check">支付</el-button>
        </div>
        <el-footer>
             <el-button type="primary" round @click="goPage('/discharge')">返回</el-button>
        </el-footer>
    </div>
</template>

<script>
import {chargedeposit} from '@/network/admission'

export default {
  fees: 'FeeDetails',
  created() {
    this.setitemfeelist()
  },
  data() {
      return {
        itemvalue: '',
        feelist: [{
          item: '药品费',
          fees: null,
        }, {
          item: '化验费',
          fees: null,
        }, {
          item: '床位费',
          fees: null,
        },{
          item: '手术费',
          fees: null,
        },{
          item: '总费',
          fees: null,
        },],
        payobject: ''
        }
    },
    methods: {     
        goPage(target) {
            this.$router.push(target)
            console.log(target)
        },
        setitemfeelist() {
            this.feelist[0].fees = this.$store.state.itemfeelist.cost_of_medicine
            this.feelist[1].fees = this.$store.state.itemfeelist.cost_of_laboratoey
            this.feelist[2].fees = this.$store.state.itemfeelist.cost_of_bed
            this.feelist[3].fees = this.$store.state.itemfeelist.cost_of_operstion
            this.feelist[4].fees = this.$store.state.itemfeelist.total_rate
            this.payobject = this.$store.state.payobject

    },
    pay() {
      chargedeposit(this.feelist[4].fees,this.payobject)
      this.$message({
          showClose: true,
          message: '支付成功！',
          type: 'success'
        });
    }
    },
}
</script>

<style scoped>
.check{
    margin-top: 5%;
    margin-bottom: 10%;
    margin-left: 25%;
    width: 200px;
}
</style>
