<template>
  <el-table
    :data="tableData"
    height="597"
    style="width: 100%;">
    <el-table-column
      prop="date"
      label="作业编号"
      >
    </el-table-column>
    <el-table-column
      prop="name"
      label="作业名称"
      >
    </el-table-column>
    <el-table-column
      prop="address"
      label="作业类型"
      >
      
    </el-table-column>
     <el-table-column
      prop="date"
      label="作业归属部门"
      >
    </el-table-column>
     <el-table-column
      width="50"
      >
      <el-button icon="el-icon-s-tools" circle></el-button>
    </el-table-column>
     <el-table-column
        width="50" 
      >
        <el-button icon="el-icon-delete-solid" circle></el-button>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
// import homeAside from "../components/home/aside.vue";
// import homeHeader from "../components/home/header.vue";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class definition extends Vue {
      tableData:any =  [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },{
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },]
      
    
};
</script>

<style lang="scss">
   .el-table__header th, .el-table__header tr {
  background:transparent;
  color: white;
}
.el-table--enable-row-hover .el-table__body tr:hover>td{
  background: transparent !important;
}
.el-pager li.active {
  color: #080909;
  cursor: default;
  background-color: #17B3A3;
  border-radius: 2px;
}
.el-table th, .el-table tr {
  background-color: transparent;
}
.el-table th, .el-table tr,.el-table td{
  background-color: transparent;
}
.el-table th:hover, .el-table tr:hover{
  color: #4A95F6;
  background-color: darkgray!important;
}
.el-table--striped .el-table__body tr.el-table__row--striped.current-row td,
.el-table__body tr.current-row>td, .el-table__body tr.hover-row.current-row>td,
.el-table__body tr.hover-row.el-table__row--striped.current-row>td,
.el-table__body tr.hover-row.el-table__row--striped>td, .el-table__body tr.hover-row>td {
    color: #4A95F6;
    background-color: darkgray!important;
}


.el-table, .el-table__expanded-cell{
    background: transparent;
   
}
</style>