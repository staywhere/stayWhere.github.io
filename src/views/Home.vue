<template>
  <el-container direction="vertical">
    <!-- <el-header style="display:none">Headder</el-header> -->
    <zxl-head :props-head="personData.data.user"></zxl-head>
    <el-container>
      <aside-nav :props-nav="personData.data.menus"></aside-nav>
      <el-container direction="vertical">
        <router-view />
        <zxl-footer></zxl-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

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
import asideNav from "@/components/asideNav.vue";
import zxlFooter from "@/components/Footer.vue";

const personData = {
  code: "0000",
  msg: null,
  data: {
    user: {
      id: 3,
      name: "超级管理员",
      account: "admin",
      pwd: "E10ADC3949BA59ABBE56E057F20F883E",
      phone: "18888888888",
      mark: "超级管理员拥有所有权限,不要修改",
      status: 1,
      permissionIds: [
        1,
        2,
        18,
        19,
        20,
        21,
        3,
        25,
        26,
        27,
        4,
        28,
        29,
        30,
        93,
        94,
        95,
        96,
        5,
        7,
        41,
        42,
        43,
        44,
        48,
        49,
        50,
        45,
        51,
        52,
        80,
        81,
        46,
        53,
        54,
        47,
        97,
        8,
        59,
        60,
        61,
        62,
        83,
        84,
        85,
        98,
        99,
        9,
        10,
        63,
        64,
        65,
        11,
        66,
        67,
        68,
        12,
        77,
        78,
        79,
        13,
        86,
        87,
        88,
        89,
        90,
        91,
        14,
        69,
        70,
        71,
        15,
        72,
        73,
        74,
        75,
        76
      ],
      permissionURIs: [
        "sys/role",
        "sys/user",
        "sys/dictionary",
        "device/product/list",
        "device/device/list",
        "company/company/list",
        "company/farm/list",
        "company/house/list",
        "company/device/list",
        "company/monitor/list",
        "company/user/list",
        "/role/add",
        "/role/edit",
        "/role/del",
        "/role/permission/set",
        "/sys/user/add",
        "/sys/user/edit",
        "/sys/user/del",
        "/dictionary/add",
        "/dictionary/edit",
        "/dictionary/del",
        "/product/add",
        "/product/edit",
        "/product/del",
        "/product/sysParam/add",
        "/product/sysParam/edit",
        "/product/sysParam/del",
        "/product/property/add",
        "/product/property/del",
        "/product/warn/event/add/{productId}",
        "/product/warn/event/del",
        "/device/info/add",
        "/device/info/edit",
        "/device/info/del",
        "/device/info/import",
        "/company/add",
        "/company/edit",
        "/company/del",
        "/farm/add",
        "/farm/edit",
        "/farm/del",
        "/monitorDevice/add",
        "/monitorDevice/edit",
        "/monitorDevice/del",
        "/cuser/add",
        "/cuser/edit",
        "/cuser/del",
        "/house/add",
        "/house/edit",
        "/house/del",
        "/product/property/edit",
        "/product/property/import",
        "/houseDeviceProperty/getPropertyValue",
        "/deviceWarnState/getValue",
        "/product/sysParam/deviceParam",
        "/houseDevice/add",
        "/houseDevice/edit",
        "/houseDevice/del",
        "/houseDeviceProperty/getPropertyValue",
        "/deviceWarnState/getValue",
        "/product/sysParam/deviceParam",
        "/sys/regionalHead",
        "/sys/regionalHead/add",
        "/sys/regionalHead/edit",
        "/sys/regionalHead/del",
        "/aliThingModel/set",
        "device/otafirmware/list",
        "/otafirmware/del"
      ]
    },
    menus: [
      {
        id: 1,
        pid: 0,
        name: "系统管理",
        path: null,
        icon: null,
        sort: 100,
        children: [
          {
            id: 2,
            pid: 1,
            name: "角色管理",
            path: "sys/role",
            icon: "&#xe770;",
            sort: 110,
            children: []
          },
          {
            id: 3,
            pid: 1,
            name: "用户管理",
            path: "sys/user",
            icon: "&#xe66f;",
            sort: 120,
            children: []
          },
          {
            id: 4,
            pid: 1,
            name: "数据字典",
            path: "sys/dictionary",
            icon: "&#xe656;",
            sort: 130,
            children: []
          },
          {
            id: 93,
            pid: 1,
            name: "区域负责人管理",
            path: "/sys/regionalHead",
            icon: "&#xe770;",
            sort: 347,
            children: []
          }
        ]
      },
      {
        id: 5,
        pid: 0,
        name: "设备管理",
        path: null,
        icon: null,
        sort: 200,
        children: [
          {
            id: 7,
            pid: 5,
            name: "产品管理",
            path: "device/product/list",
            icon: "&#xe653;",
            sort: 240,
            children: []
          },
          {
            id: 8,
            pid: 5,
            name: "设备信息管理",
            path: "device/device/list",
            icon: "&#xe665;",
            sort: 290,
            children: []
          },
          {
            id: 98,
            pid: 5,
            name: "固件升级",
            path: "device/otafirmware/list",
            icon: "&#xe756;",
            sort: 330,
            children: []
          }
        ]
      },
      {
        id: 9,
        pid: 0,
        name: "企业管理",
        path: null,
        icon: null,
        sort: 300,
        children: [
          {
            id: 10,
            pid: 9,
            name: "企业信息管理",
            path: "company/company/list",
            icon: "&#xe663;",
            sort: 310,
            children: []
          },
          {
            id: 11,
            pid: 9,
            name: "农场管理",
            path: "company/farm/list",
            icon: "&#xe68e;",
            sort: 320,
            children: []
          },
          {
            id: 12,
            pid: 9,
            name: "栏舍管理",
            path: "company/house/list",
            icon: "&#xe66a;",
            sort: 330,
            children: []
          },
          {
            id: 13,
            pid: 9,
            name: "设备管理",
            path: "company/device/list",
            icon: "&#xe665;",
            sort: 340,
            children: []
          },
          {
            id: 14,
            pid: 9,
            name: "监控管理",
            path: "company/monitor/list",
            icon: "&#xe628;",
            sort: 350,
            children: []
          },
          {
            id: 15,
            pid: 9,
            name: "用户管理",
            path: "company/user/list",
            icon: "&#xe66f;",
            sort: 360,
            children: []
          }
        ]
      }
    ]
  },
  success: true
};
export default {
  components: {
    zxlHead,
    asideNav,
    zxlFooter
  },
  data() {
    return {
      personData: personData
    };
  },
  mounted() {},
  computed: {}
};
</script>