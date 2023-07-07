<template>
    <div class="inhospro">
        <h1>办理住院手续</h1>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="姓名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <el-input v-model="form.gender"></el-input>
            </el-form-item>
            <el-form-item label="年龄">
                <el-input v-model="form.age"></el-input>
            </el-form-item>
            <el-form-item label="电话">
                <el-input v-model="form.telnumber"></el-input>
            </el-form-item>
            <el-form-item label="身份证号">
                <el-input v-model="form.idnumber"></el-input>
            </el-form-item>
            <el-form-item label="入住时间">
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
            <el-form-item label="分配病房">
                <el-select v-model.number="form.bednum" placeholder="请选择">
                    <el-option v-for="item in allbed" :label=item :value=item :key="item.index"></el-option>
                    
                </el-select>
            </el-form-item>
            <el-form-item label="病情">
                <el-input type="textarea" v-model="form.situation"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button @click="goPage('/inhospital')">返回</el-button>
            </el-form-item>
            </el-form>
    </div>
</template>

<script>
import {addinhospital} from '@/network/admission'
import { getbedinfo } from '@/network/hospitalization';

export default {
  name: 'InHosPro',
  watch: {
    targetbed: {
      handler(targetbed) {
            console.log(targetbed)
            this.setbed()
      }
    }
  },
  data() {
      return {
        form: {
          name: '',
          date: '',
          gender: '',
          age: '',
          telnumber: null,
          idnumber: null,
          bednum: null,
          situation: '',
        },
        allbed: [],
      }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
            console.log(this.form)
            addinhospital(this.form.idnumber, this.form.name, this.form.gender, this.form.age,this.form.telnumber,this.form.bednum,this.form.date,this.form.situation,'是').then(res => {
                console.log(res)
                if(res[0].data_exists)
                {
                    this.$message({
                        message: '办理成功！',
                        type: 'success'
                    });
                }
                else
                {
                    this.$message.error('此人非本校学生！');
                }
                
            }).catch(err => {
                console.log('获取失败：' + err)
            })
            
        },  
        goPage(target) {
            this.$router.push(target)
            console.log(target)
        },
        setbed() {
            getbedinfo(this.form.date).then(res => {
                for(let i=0;i<res.length;i++){
                    if(res[i].status == '否') {
                        this.allbed.push(res[i].bed_number)
                    }
                }
            })
        }
    },
    computed: {
        targetbed() {
            return this.form.date
        }
    }
}
</script>

<style>

</style>
