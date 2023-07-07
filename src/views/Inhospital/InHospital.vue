<template>
   <div class="InHospital">
      <el-container>
          <el-header><h1>入院管理</h1></el-header>
          <el-main>
              <el-card class="box-card">
                  <div class="text item" @click="goPage('/inhospro')">
                        办理住院手续
                  </div>
              </el-card>
              <el-card class="box-card">
                  <div class="text item" @click="goPage('/hosrecords')">
                        建立住院病历
                  </div>
              </el-card>
              <el-card class="box-card">
                  <div class="text item" @click="goPage('/deposit')">
                        收取押金
                  </div>
              </el-card>
              <el-card class="box-card">
                  <div class="text item" @click="goPage('/pregform')">
                        病人登记表
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
