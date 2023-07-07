<template>
    <div class="InHospital">
       <el-container>
           <el-header><h1>住院管理</h1></el-header>
           <el-main>
               <el-card class="box-card">
                   <div class="text item" @click="goPage('/bedinfo')">
                         病床信息
                   </div>
               </el-card>
               <el-card class="box-card">
                   <div class="text item" @click="goPage('/wardcheckinfo')">
                         日查房信息
                   </div>
               </el-card>
               <el-card class="box-card">
                   <div class="text item" @click="goPage('/daybill')">
                         病人费用日记账
                   </div>
               </el-card>
               <el-card class="box-card">
                   <div class="text item" @click="goPage('/feeitem')">
                         收费项目管理
                   </div>
                </el-card>
                <el-card class="box-card">
                   <div class="text item" @click="goPage('/fundsform')">
                         住院部资金报表
                   </div>
               </el-card>
           </el-main>
           <el-footer>
             <el-button type="primary" round @click="goPage('/home')">返回</el-button>
           </el-footer>
       </el-container>
    </div>
 </template>
 
 <script>
 export default {
   name: 'InHospital',
   methods: {
     goPage(target) {
       this.$router.push(target)
       console.log(target)
     }
   }
 }
 </script>
 
 <style>
 .el-header{
   text-align: center;
 }
 .el-main{
   text-align: center;
 }
 </style>
 