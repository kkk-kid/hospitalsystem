<template>
    <div class="deposit">
        <h1>收取押金</h1>
              <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="身份证号">
                <el-input v-model="form.idnum"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" class="check">确认</el-button>
            </el-form-item>
            </el-form>
                <el-button type="primary" round @click="goPage('/inhospital')">返回</el-button>
           
    </div>
</template>

<script>
import {chargedeposit} from '@/network/admission'

export default {
  name: 'DepositPage',
  data() {
      return {
        form: {
          name: '',
          idnum: '',
        },
        
      }
    },
  methods: {
    goPage(target) {
      this.$router.push(target)
      console.log(target)
    },
    onSubmit() {  
      console.log(JSON.parse(JSON.stringify(this.form)))
      chargedeposit(200,this.form.idnum).then(res => {
        console.log(res)
        this.$message({
          message: '已扣除200元押金！',
          type: 'success'
        });
      })
      
    }
  },
}
</script>

<style>

</style>
