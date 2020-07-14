<template>
  <el-aside>
    <el-menu>
      <el-submenu v-for="navs in propsNav" :key="navs.id" :index="navs.id.toString()">
        <template slot="title">
          <!-- <i class="layui-icon">&#xe60c;</i> -->
          {{ navs.name }}
        </template>
        <el-menu-item
          v-for="navsChild in navs.children"
          :key="navsChild.id"
          :index="navsChild.id.toString()"
          @click="goDetail(navsChild.path)"
        ><i class="layui-icon" v-html='navsChild.icon'></i> {{ navsChild.name }}</el-menu-item>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["propsNav"],
  methods: {
    goDetail(str) {
      this.$router.push({
        name: str
      })
    }
  },
  watch: {
    // propsNav(newData, oldData) {
    //   console.log(newData)
    // }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.el-aside {
  width: 200px !important;
  background-color: #393d49;
  .el-menu {
    border-right: 0;
    background-color: #000;
    text-align: left;
    .el-submenu__title,
    .el-menu-item {
      color: rgba(255, 255, 255, 0.7);
      transition: all 0.3s;
      -moz-animation: all 0.3s;
      -webkit-animation: all 0.3s;
      -o-animation: all 0.3s;
      cursor: pointer;
      height: 44px;
      line-height: 44px;
      i {
        color: rgba(255, 255, 255, 0.7);
        transition: all 0.3s;
        -moz-animation: all 0.3s;
        -webkit-animation: all 0.3s;
        -o-animation: all 0.3s;
      }
      &:hover {
        color: rgba(255, 255, 255, 1);
        background-color: #4e5465;
        i {
          color: rgba(255, 255, 255, 1);
        }
      }
      &.is-active {
        color: #fff;
        background-color: #009688;
      }
      .el-submenu__icon-arrow {
        position: absolute;
        margin-top: -10px;
        font-size: 18px;
      }
      .el-icon-arrow-down {
        &::before {
          content: "\e790";
        }
      }
    }
  }
}
</style>
