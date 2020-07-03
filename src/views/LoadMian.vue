<template>
  <el-main>{{ welcome }}</el-main>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
  data() {
    return {
      welcome: '欢迎进入'
    }
  },
  created() {
    axios.get('/znmc/api/index/init', {
      params: {
        wd: 'axios拦截器的作用'
      }
    }).then((res) => {
      
    })
  },
}
</script>