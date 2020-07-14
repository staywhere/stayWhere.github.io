<template>
  <el-header>
    <div class="zxl-logo">{{ logo }}</div>
    <div class="top-nav">
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ propsHead.name }}
          <i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="show()">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
export default {
  data() {
    return {
      logo: "小巨人智能设备运营管理平台"
    };
  },
  props: ["propsHead"],
  mounted() {
    
  },
  methods: {
    // loginOut() {
    //   this.$axios.get("/znmc/api/login/loginOut", {}).then(res => {
    //     if (res.data.success) {
    //       this.$store.commit('loginOut');
    //       this.$router.push("/login");
    //     }
    //   });
    // }
  },
  watch: {
    // propsHead(newData, oldData) {
    //   console.log(newData)
    // }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.el-header {
  line-height: 60px;
  background-color: #23262e;
  .zxl-logo {
    float: left;
    color: #009688;
    font-size: 16px;
  }
  .top-nav {
    float: right;
  }
  .el-dropdown {
    display: block;
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s;
    -moz-animation: all 0.3s;
    -webkit-animation: all 0.3s;
    -o-animation: all 0.3s;
    cursor: pointer;
    > span {
      display: block;
    }
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
