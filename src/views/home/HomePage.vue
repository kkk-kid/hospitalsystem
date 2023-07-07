<template>
   <div class="home">
    <el-container>
            <el-header><h1>高校住院管理系统</h1></el-header>
            <el-main>
                <el-card class="box-card">
                    <div class="text item" @click="goPage('/inhospital')">
                        入院管理
                    </div>
                </el-card>
                <el-card class="box-card">
                    <div class="text item" @click="goPage('/management')">
                        住院管理
                    </div>
                </el-card>
                <el-card class="box-card">
                    <div class="text item" @click="goPage('/outhospital')">
                        出院管理
                    </div>
                </el-card>
                <el-card class="box-card">
                    <div class="text item" @click="goPage('/system')">
                        系统维护
                    </div>
                </el-card>
            </el-main>
      </el-container>    
   </div>
</template>

<script>
export default {
  name: 'HomePage',
  
  methods: {
    goPage(target) {
      this.$router.push(target)
      console.log(target)
    }
  }
}
</script>

<style>
.el-card{
    margin-top: 20px;
  }
  .text {
    font-size: 14px;
    text-align: center;
  }

  .item {
    margin-bottom: 20px;
  }

</style>
