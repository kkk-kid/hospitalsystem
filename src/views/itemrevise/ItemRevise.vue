<template>
    <div class="itemrevise">
        <h1>修改项目收费标准</h1>
            <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="项目编号">
                <el-input v-model="form.item_charge_number" disabled></el-input>
            </el-form-item>   
            <el-form-item label="项目名称">
                <el-input v-model="form.item_charge_name" disabled></el-input>
            </el-form-item>
            <el-form-item label="单位">
                <el-input v-model="form.unit" disabled></el-input>
            </el-form-item>
            <el-form-item label="收费价格">
                <el-input v-model="form.price"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" class="check">修改</el-button>
            </el-form-item>
            </el-form>
            <el-button type="primary" round @click="goPage('/changeitemsfee')">返回</el-button>
    </div>
</template>

<script>
import { updateitemfee } from '@/network/system'

export default {
  name: 'ItemRevise',
  created() {
    this.setform()
  },
  data() {
      return {
        form: {},
      }
    },
  methods: {
    goPage(target) {
      this.$router.push(target)
      console.log(target)
    },
    onSubmit() {
      updateitemfee(this.form.price,this.form.item_charge_number).then(res => {
        console.log(res)
        this.$message({
          message: '修改成功！',
          type: 'success'
        });
      })
    },
    setform() {
        this.form = this.$store.state.itemfeelist
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
