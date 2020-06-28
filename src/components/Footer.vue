<template>
        <el-footer>
          <!-- Footer content -->
          {{ copyright }}
        </el-footer>
        

        <!-- <el-main>
          <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </el-main> -->
</template>

<script>
export default {
  data() {
    return {
      copyright: '©Copyright 2019-2020  小巨人智能畜牧研发中心'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
  .el-footer {
    height: 44px!important;
    line-height: 44px;
    background-color: #eee;
    font-size: 14px;
  }
</style>
