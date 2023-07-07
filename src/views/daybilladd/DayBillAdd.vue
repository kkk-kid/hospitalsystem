<template>
    <div class="daybilladd">
        <h1>建立病人日账单</h1>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="日期">
                <el-col :span="11">
                    <el-date-picker
                        v-model="form.date"
                        type="date"
                        placeholder="选择日期"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd">
                    </el-date-picker>
        
                </el-col>    
            </el-form-item>
            <el-form-item label="姓名">
                <el-input v-model.number="form.name"></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
                <el-input v-model="form.idnum"></el-input>
            </el-form-item>
            <el-form-item label="日药品费">
                <el-input v-model.number="form.medicationcost"></el-input>
            </el-form-item>
            <el-form-item label="日化验费">
                <el-input v-model.number="form.laboratorycost"></el-input>
            </el-form-item>
            <el-form-item label="日手术费">
                <el-input v-model.number="form.surgerycost"></el-input>
            </el-form-item>
            <el-form-item label="日床位费">
                <el-input v-model.number="form.bedcost"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button @click="goPage('/daybill')">返回</el-button>
            </el-form-item>
            </el-form>
    </div>
</template>

<script>
import { adddaybill } from '@/network/hospitalization';

export default {
  name: 'DayBillAdd',
  data() {
      return {
        form: {
          name: '',
          idnum: '',
          date: '',
          medicationcost: null,
          laboratorycost: null,
          surgerycost: null,
          bedcost: null
        },
        xx: '1'
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
        console.log(this.form)
        adddaybill(this.form.idnum,this.form.date,this.form.name,this.form.medicationcost,this.form.laboratorycost,this.form.bedcost,this.form.surgerycost).then(res => {
            console.log(res)
            this.$message({
                message: '添加成功',
                type: 'success'
            });
        })
      },
      
        goPage(target) {
            this.$router.push(target)
            console.log(target)
        }
  
    }
}
</script>

<style>

</style>
