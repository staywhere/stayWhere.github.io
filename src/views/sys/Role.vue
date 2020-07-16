<template>
  <el-main>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 筛选 -->
    <div class="suffix">
      <div class="el-input-suffix">
        <label>角色名称:</label>
        <el-input v-model="searchName" placeholder="请输入内容"></el-input>
      </div>
      <div class="el-input-suffix el-select">
        <label>状态:</label>
        <el-select v-model="status" clearable placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="el-input-suffix">
        <el-button type="primary" icon="el-icon-search" @click="getData()">搜索</el-button>
      </div>
    </div>

    <!-- 表格 -->
    <div class="zxl-from">
      <el-card class="box-card">
        <!-- 功能按钮 -->
        <div class="box-head">
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-circle-plus-outline"
            @click="addBtn"
          >新增</el-button>
          <el-button type="primary" size="mini" icon="el-icon-edit" @click="editBtn">修改</el-button>
          <el-button type="primary" size="mini" icon="el-icon-delete" @click="delBtn">删除</el-button>
          <el-button type="primary" size="mini" icon="el-icon-refresh" @click="refreshBtn">刷新</el-button>
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
        <el-table v-loading="loading" :data="tableData" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"></el-table-column>
          <template v-for="item in tableList">
            <el-table-column
              :key="item.id"
              :prop="item.label"
              :label="item.value"
              v-if="uncheckList[item.label]"
            ></el-table-column>
            <!-- <el-table-column
              :key="item.id"
              :prop="item.label"
              :label="item.value"
              v-if="uncheckList[item.label]"
            ></el-table-column>-->
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
        <el-pagination
          background
          :page-sizes="pageSizes"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @prev-click="pageNow--, getData()"
          @next-click="pageNow++, getData()"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        ></el-pagination>
      </el-card>
    </div>
    <!-- 添加 -->
    <el-dialog title="添加字典" :visible.sync="dialogVisible.addVisible" class="add-form">
      <el-form label-width="80px" ref="addForm" :model="addForm" :rules="rules">
        <el-form-item label="名称" prop="name">
          <el-input auto-complete="off" placeholder="请填写角色名称" v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="addForm.status" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="描述">
          <el-input
            auto-complete="off"
            type="textarea"
            :rows="3"
            placeholder="请输入内容"
            v-model="addForm.description"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="add('addForm')">保存</el-button>
      </div>
    </el-dialog>
    <!-- 修改 -->
    <el-dialog title="修改字典" :visible.sync="dialogVisible.editVisible" class="edit-form">
      <el-form label-width="80px" ref="editForm" :model="editForm" :rules="rules">
        <el-form-item label="名称" prop="name">
          <el-input auto-complete="off" placeholder="请填写角色名称" v-model="editForm.name"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="editForm.status" clearable placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="描述">
          <el-input
            auto-complete="off"
            type="textarea"
            :rows="3"
            placeholder="请输入内容"
            v-model="editForm.description"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="edit('editForm')">保存</el-button>
      </div>
    </el-dialog>
  </el-main>
</template>

<script>
import { gettableList } from "../../../static/js/utils";

export default {
  data() {
    return {
      pageNow: 1,
      pageSize: 10,
      pageSizes: [10, 20, 50, 100],
      total: 0,
      searchParam: {},
      options: [
        {
          value: "1",
          label: "启用"
        },
        {
          value: "2",
          label: "已停用"
        }
      ],
      status: "",
      searchName: "",
      loading: false,
      tableData: [],
      tableList: [
        {
          label: "id",
          value: "id"
        },
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
      multipleSelection: [], //选中数据
      dialogVisible: {
        addVisible: false,
        editVisible: false
      },
      addForm: {
        todoType: "add",
        id: "",
        name: "",
        description: "",
        status: ""
      },
      editForm: {
        todoType: "edit",
        id: "",
        name: "",
        description: "",
        status: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入名字",
            trigger: "blur"
          }
        ],
        status: [
          {
            required: true,
            message: "请选择状态",
            trigger: "change"
          }
        ]
      },
      select: [],
      selectIds: [1,2]
    };
  },
  created() {
    this.getData();
    this.zxlFilter(); //初始化须显示的列
  },
  mounted() {},
  methods: {
    getData() {
      this.loading = true;
      axios
        .post("/znmc/api/role/list", {
          pageNow: this.pageNow,
          pageSize: this.pageSize,
          status: this.status,
          likeName: this.searchName
        })
        .then(res => {
          setTimeout(() => {
            this.total = res.data.count;
            this.tableData = gettableList(this.tableList, res.data.data);
            this.loading = false;
          }, 500);
        });
    },

    zxlFilter(val) {
      // 根据字段显示相应内容
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
      //选中数据
      return (this.select = val);
    },
    handleCurrentChange(val) {
      this.pageNow = val;
      this.getData();
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getData();
    },
    addBtn() {
      this.dialogVisible.addVisible = true;
      // 重置表单
      if (this.$refs["addForm"] !== undefined) {
        this.$refs["addForm"].resetFields();
      }
    },
    editBtn() {
      if (this.select.length > 1) {
        this.$message({
          message: "修改操作只能选择一条",
          type: "error",
          offset: 300
        });
      } else if (this.select.length < 1) {
        this.$message({
          message: "请选择一行要修改的属性",
          type: "warning",
          offset: 300
        });
      } else {
        this.dialogVisible.editVisible = true;
        // console.log(this.select);
        // 重置表单
        this.editForm.id = this.select[0].id;
        this.editForm.name = this.select[0].name;
        this.editForm.description = this.select[0].description;
        if (this.select[0].status == "启用") {
          this.editForm.status = "1";
        } else {
          this.editForm.status = "2";
        }
        console.log(this.select);
      }
    },
    delBtn() {
      this.selectIds = [];
      this.select.forEach(value => {
        this.selectIds.push(value.id);
      });
      this.$confirm("是否确定要删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          let res = await this.$axios.post(
            "/znmc/api/role/del",
            {
              ids: JSON.stringify(this.selectIds)
            }
          );
          if (!res.data.success) {
            this.$message({
              message: res.data.msg,
              type: "error",
              offset: 300
            });
            if (res.data.code == "0401") {
              this.$router.push("/login");
            }
          } else {
            this.$message({
              message: res.data.msg,
              type: "success",
              offset: 300
            });
            this.getData();
          }
        })
        .catch(() => {
          // this.$message({
          //   type: "info",
          //   message: "已取消删除"
          // });
        });
    },
    refreshBtn() {
      this.getData();
    },
    add(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // let res = await new Promise()
          let res = await this.$axios.post("/znmc/api/role/add", this.addForm);
          if (res.status == 200 && res.data.success) {
            this.dialogVisible.addVisible = false;
            this.$message({
              message: res.data.msg,
              type: "success",
              offset: 300
            });
            this.getData();
          } else if (res.status == 200 && !res.data.success) {
            this.$message({
              message: res.data.msg,
              type: "warning",
              offset: 300
            });
          } else {
            this.$router.push("/login");
          }
        }
      });
    },
    edit(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // let res = await new Promise()
          let res = await this.$axios.post(
            "/znmc/api/role/edit",
            this.editForm
          );
          if (res.status == 200 && res.data.success) {
            this.dialogVisible.editVisible = false;
            this.$message({
              message: res.data.msg,
              type: "success",
              offset: 300
            });
            this.getData();
          } else if (res.status == 200 && !res.data.success) {
            this.$message({
              message: res.data.msg,
              type: "warning",
              offset: 300
            });
          } else {
            this.$router.push("/login");
          }
        }
      });
    }
  },
  computed: {}
};
</script>


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
  }
}
.el-popover {
  .el-checkbox {
    display: block;
    margin-bottom: 6px;
  }
}
.add-form {
  .el-dialog {
    width: 35%;
    .el-dialog__body {
      width: 80%;
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
