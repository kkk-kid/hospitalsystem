<template>
  <div id="app">
      <router-view>
        <LoginPage></LoginPage>
      </router-view>
  </div>
</template>

<script>
//import HomePage from "@/views/home/HomePage"
import LoginPage from "@/views/login/LoginPage"

export default {
  name: 'App',
  components: {
    //HomePage,
    LoginPage
  },
}
</script>

<style>
  
  
</style>
