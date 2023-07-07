<template>
    <div class="wardcheck">
        <h1>查房记录</h1>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="查房人员编号">
                <el-input v-model.number="form.staffno"></el-input>
            </el-form-item>
            <el-form-item label="病床号">
                <el-input v-model.number="form.bednum"></el-input>
            </el-form-item>
            <el-form-item label="时间">
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
            <el-form-item label="医嘱">
                <el-input type="textarea" v-model="form.orders"></el-input>
            </el-form-item>
            <el-form-item label="病情">
                <el-input type="textarea" v-model="form.situation"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button @click="goPage('/wardcheckinfo')">返回</el-button>
            </el-form-item>
            </el-form>
    </div>
</template>

<script>
import { addwardrecords } from '@/network/hospitalization';

export default {
  name: 'WardCheck',
  data() {
      return {
        form: {
          staffno: null,
          bednum: null ,
          date: '',
          orders: '',
          situation: '',
        },
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
        console.log(this.form)
        addwardrecords(this.form.bednum,this.form.date,this.form.staffno,this.form.situation,this.form.orders).then(res => {
            console.log(res)
            this.$message({
                message: '添加成功！',
                type: 'success'
            });
        }).catch(err => {
            console.log(err)
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
