<template>
    <div class="system">
        <el-container>
            <el-header><h1>系统维护</h1></el-header>
            <el-main>
                <el-card class="box-card">
                    <div class="text item" @click="goPage('/staffinfo')">
                        职工表
                    </div>
                </el-card>
                <el-card class="box-card">
                    <div class="text item" @click="goPage('/changeitemsfee')">
                        各项目收费标准
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
  name: 'SystemPage',
  methods: {
    goPage(target) {
      this.$router.push(target)
      console.log(target)
    }
  },
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
