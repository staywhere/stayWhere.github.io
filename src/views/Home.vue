<template>
  <el-container direction="vertical">
    <!-- <el-header style="display:none">Headder</el-header> -->
    <zxl-head :props-head="user"></zxl-head>
    <el-container>
      <aside-nav :props-nav="menus"></aside-nav>
      <el-container direction="vertical">
        <router-view />
        <zxl-footer></zxl-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style>
  @import 'https://www.layuicdn.com/layui/css/layui.css';
</style>
<style lang='scss'>
#app,
html,
body,
.el-container {
  margin: 0;
  padding: 0;
  height: 100%;
  min-width: 600px;
  text-align: left;
  font-size: 14px;
}
.el-main {
  margin: 10px;
  border: 1px solid #eee;
  padding: 0 !important;
  .el-breadcrumb {
    line-height: 46px;
    padding-left: 20px;
    border-bottom: 1px solid #eee;
  }
}
</style>
<style lang='scss' scoped>
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import zxlHead from "@/components/Head.vue";
import asideNav from "@/components/AsideNav.vue";
import zxlFooter from "@/components/Footer.vue";

export default {
  components: {
    zxlHead,
    asideNav,
    zxlFooter
  },
  data() {
    return {
      user: {},
      menus: {}
    };
  },
  created() {
    this.getInit();
  },
  mounted() {},
  computed: {},
  methods: {
    async getInit() {
      let res = await axios.get("/znmc/api/index/init",{});
        if (res.status == 200 && res.data.success) {
          this.user = res.data.data.user;
          this.menus = res.data.data.menus
        } else {
          this.$router.push({
            name: "login"
          });
        }
      
    }
    // getInit() {
    //   this.$axios.get("/znmc/api/index/init",{}).then((res) => {
    //     this.personData = res.data.code
    //   })
    // }
  }
};
</script>