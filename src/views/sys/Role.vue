<template>
  <el-main>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 筛选 -->
    <div class="suffix">
      <div class="el-input-suffix">
        <label>状态:</label>
        <el-input placeholder="请输入内容" v-model="input1"></el-input>
      </div>
      <div class="el-input-suffix el-select">
        <label>角色名称:</label>
        <el-select v-model="select" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="el-input-suffix">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
    </div>

    <!-- 表格 -->
    <div class="zxl-from">
      <el-card class="box-card">
        <!-- 功能按钮 -->
        <div class="box-head">
          <el-button type="primary" size="mini">新增</el-button>
          <el-button type="primary" size="mini">修改</el-button>
          <el-button type="primary" size="mini">删除</el-button>
          <el-button type="primary" size="mini">刷新</el-button>
          <div style="float:right;display:inline-block">
            <el-popover placement="bottom" title="列筛选" trigger="click">
              <el-checkbox-group v-model="checkList" @change="zxlFilter">
                <el-checkbox
                  v-for="item in tableList"
                  :key="item.label"
                  :label="item.label"
                >{{item.value}}</el-checkbox>
              </el-checkbox-group>
              <el-button size="small" slot="reference">
                <i class="el-icon-arrow-down el-icon-menu"></i>
              </el-button>
            </el-popover>
          </div>
        </div>
        <el-table :data="tableData.data" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"></el-table-column>
          <template v-for="item in tableList">
            <el-table-column
              :key="item.id"
              :prop="item.label"
              :label="item.value"
              v-if="uncheckList[item.label]"
            ></el-table-column>
          </template>
          <!-- <el-table-column prop="name" label="名称" v-if="uncheckList.name"></el-table-column>
          <el-table-column prop="status.name" label="状态" v-if="uncheckList.status"></el-table-column>
          <el-table-column prop="description" label="描述" v-if="uncheckList.description"></el-table-column>
          <el-table-column prop="createUser.name" label="创建人" v-if="uncheckList.createUser"></el-table-column>
          <el-table-column
            prop="createTime"
            label="创建时间"
            v-if="uncheckList.createTime"
          ></el-table-column>
          <el-table-column prop="updateUser.name" label="最后修改人" v-if="uncheckList.updateUser"></el-table-column>
          <el-table-column prop="updateTime" label="最后修改时间" v-if="uncheckList.updateTime"></el-table-column>-->
        </el-table>
      </el-card>
    </div>
  </el-main>
</template>

<style lang="scss">
.el-main {
  .suffix {
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    .el-input-suffix {
      display: inline-block;
      margin-right: 6px;
      label {
        padding: 0 15px;
      }
      .el-input {
        width: 180px;
      }
    }
    .el-select {
      .el-input {
        width: 100px;
      }
    }
  }
  .zxl-from {
    .el-button + .el-button {
      margin-left: 1px;
    }
    .el-checkbox {
      display: block;
      margin-bottom: 6px;
    }
  }
}
</style>

<style lang="scss" scoped>
.box-head {
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
}
</style>
<script>
const tableData = {
  code: "0000",
  msg: "操作成功",
  data: [
    {
      id: 1,
      name: "超级管理员",
      status: { id: "1", name: "启用" },
      description: "超级管理员拥有所有权限,不要更改",
      createUser: null,
      createTime: 1577321233000,
      updateUser: { id: "3", name: "超级管理员" },
      updateTime: 1578624929000
    },
    {
      id: 5,
      name: "测试角色",
      status: { id: "2", name: "已停用" },
      description: "测试一下",
      createUser: { id: "3", name: "超级管理员" },
      createTime: 1577759334000,
      updateUser: { id: "3", name: "超级管理员" },
      updateTime: 1585634907000
    },
    {
      id: 6,
      name: "硬件软件开发",
      status: { id: "1", name: "启用" },
      description: "硬件应用程序开发人员",
      createUser: { id: "3", name: "超级管理员" },
      createTime: 1579054148000,
      updateUser: { id: "3", name: "超级管理员" },
      updateTime: 1579054148000
    },
    {
      id: 7,
      name: "超管测试",
      status: { id: "1", name: "启用" },
      description: "测试一下",
      createUser: { id: "3", name: "超级管理员" },
      createTime: 1585016401000,
      updateUser: { id: "3", name: "超级管理员" },
      updateTime: 1585016475000
    },
    {
      id: 8,
      name: "测试角色1",
      status: { id: "1", name: "启用" },
      description: "",
      createUser: { id: "3", name: "超级管理员" },
      createTime: 1585636816000,
      updateUser: { id: "3", name: "超级管理员" },
      updateTime: 1585636816000
    }
  ],
  success: true,
  count: 5
};

import { gettableList } from "../../../static/js/utils";

export default {
  data() {
    return {
      input1: "",
      options: [
        {
          value: "选项1",
          label: "11111"
        },
        {
          value: "选项2",
          label: "222"
        }
      ],
      select: "",
      tableData: tableData,
      tableList: [
        {
          label: "name",
          value: "名称"
        },
        {
          label: "status",
          value: "状态"
        },
        {
          label: "description",
          value: "描述"
        },
        {
          label: "createUser",
          value: "创建人"
        },
        {
          label: "createTime",
          value: "创建时间"
        },
        {
          label: "updateUser",
          value: "最后修改人"
        },
        {
          label: "updateTime",
          value: "最后修改时间"
        }
      ],
      checkListOne: ["name", "status", "description", "createTime"], // 列表初始化显示列
      checkList: [],
      uncheckList: {},
      multipleSelection: [] //选中数据
    };
  },
  created() {
    this.tableData.data = gettableList(this.tableList, this.tableData.data);
  },
  mounted() {
    this.zxlFilter();
  },
  methods: {
    zxlFilter: function(val) {
      // //初始化数据
      if (val == undefined) {
        for (let index in this.tableList) {
          let table = this.tableList[index];
          this.checkList.push(table.label);
          this.uncheckList[table.label] = false;
        }
      }

      // 数据准备
      for (let item in this.uncheckList) {
        this.uncheckList[item] = false;
      }
      //数据处理
      for (let index in this.checkList) {
        let name = this.checkList[index];
        if (name in this.uncheckList) {
          this.uncheckList[name] = true;
        }
      }
      // 初始显示
      if (val == undefined) {
        for (let item in this.uncheckList) {
          this.uncheckList[item] = false;
        }
        for (let index in this.checkListOne) {
          let name = this.checkListOne[index];
          if (name in this.uncheckList) {
            this.uncheckList[name] = true;
          }
        }
        this.checkList = this.checkListOne;
      }
      this.$forceUpdate(); //列表强制刷新
    },
    handleSelectionChange(val) {
      console.log(val)
    }
  },
  computed: {}
};
</script>