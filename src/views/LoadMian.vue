<template>
  <el-main>
    <h1>html5无刷新改变url</h1>
    <div id="info" style="margin:30px 0;">
      页面真实地址:
      
    </div>
    <div>
    请输入要改变地URL字符串：<input id='url' type="text" />
    <button @click="changeURL();">点击无刷改变url</button>
    </div>
    <div style="color:red;margin-top:30px;">请使用支持html5的浏览器访问</div>
</el-main>
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
    // axios.get('/znmc/api/index/init', {
    //   params: {
    //     wd: 'axios拦截器的作用'
    //   }
    // }).then((res) => {
      
    // })
  },
  methods: {
        changeURL(){
        var url = document.getElementById('url').value;
        window.history.pushState({},0,'http://localhost:8080/#/sys/role');
      }
  },
}
</script>