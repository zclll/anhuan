<template>
 <div style="height: 100%;">
   <el-container style="height: 100%;">
    <el-aside width="200px" style="height: 100%; over-flow: hidden scroll;"> 
      <homeAside></homeAside>
    </el-aside>
    <el-main>
     
         <router-view/>

    </el-main>
  </el-container>
 </div>
</template>

<script lang="ts">
import homeAside from "../components/home/aside.vue";

import { Component, Prop, Vue } from "vue-property-decorator";


@Component({
  components: { homeAside }
})
export default class operationControl extends Vue {};
</script>

<style lang="scss" scoped>
.md-app {
  height: calc(100vh - 120px);
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
  border-right: 1px solid #d8dce5;
  height:100%
}

.md-content {
  border: none;
  overflow: hidden scroll;
}
h2{
    width: 100%;
    height: 100%;
    text-align: centerl;
}

.el-main{
  padding: 0px 40px;
  padding-right: 20px;
}


/* 
// .el-aside{
//   // width: 100%;
//   height: 100%;
// } */
</style>

<style lang="scss">
.el-table__header th, .el-table__header tr {
  background:#042d5b !important;
  color: white;
}

// .el-table__body th, .el-table__body tr {
//   background:transparent;
//   color: white;
// }

.el-table::before{
  background: none;
}



// .el-table__header-wrapper{
//   border-top: 1px solid #EBEEF5;
// }

.el-table--enable-row-transition .el-table__body td{
  color: white;
  border: none
}

.el-table--enable-row-hover .el-table__body tr:hover>td{
  background: transparent !important;
  // color: white
}
.el-pager li.active {
  color: #080909;
  cursor: default;
  background-color: #17B3A3;
  border-radius: 2px;
}


.el-table th, .el-table tr {
  background-color: transparent;
  border: none !important;
}
.el-table th, .el-table tr,.el-table td{
  background-color: transparent;

}
.el-table th:hover, .el-table tr:hover{
  color: #4A95F6;
  // background-color: darkgray!important;
}
.el-table th:hover td, .el-table tr:hover td{
  color: #4A95F6;
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

.el-table__body-wrapper::-webkit-scrollbar {
  width: 6px; // 横向滚动条
  height: 6px; // 纵向滚动条 必写
}

.el-table__body-wrapper::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 3px;
}

  .el-table .row1{
     background: #092149;
  }
  .el-table .row2{
      
       background: #042d5b;
  }

</style>