<template>
    <div class="discharge">
      
            <h1>出院结算</h1>
              <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="身份证号">
                <el-input v-model="form.idnum"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" class="check">查询</el-button>
            </el-form-item>
            </el-form>
                <el-button type="primary" round @click="goPage('/outhospital')">返回</el-button>
           
    </div>
</template>

<script>
import { gettotalfeelist } from '@/network/discharge'

export default {
  name: 'DischargePage',
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
      this.$store.commit('setPayID',this.form.idnum)
      gettotalfeelist(this.form.idnum).then(res => {
        this.$store.commit('getitemfeelist',res[0])
        setTimeout(() => {
          this.$router.push('/feedetails')   
        },200)
      })
      
    }
  },
}
</script>

<style>
  .el-header{
    text-align: center;
  }

  .item {
    margin-bottom: 20px;
  }
  .check{
    width: 200px;
  }
</style>
