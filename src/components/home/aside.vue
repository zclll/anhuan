<template>
  <div>
     <el-col>
       <h5>作业</h5>
    <el-menu :default-active="this.$route.path" router  background-color="transparent">
      <el-menu-item index="/operationControl/definition" >
        <template slot="title"
          ><i class="el-icon-message" ></i>作业定义列表</template
        >
      </el-menu-item>
      <el-menu-item index="/operationControl/approval" >
        <template slot="title"
          ><i class="el-icon-message"></i>作业在线审批</template
        >
      </el-menu-item>
      <el-menu-item index="/operationControl/homework" >
        <template slot="title"
          ><i class="el-icon-message"></i>在线作业列表</template
        >
      </el-menu-item>
      <el-menu-item index="/operationControl/process" >
        <template slot="title"
          ><i class="el-icon-message"></i>作业过程页面</template
        >
      </el-menu-item>
    </el-menu>
    </el-col>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class ExpertApproval extends Vue {

  // handleOpen(a,b){
  //   console.log(a,b)
  // }

  // handleClose(){
  // }

  // foo(){
  //   this.$router.push({path:'/definition'})
  // }
 
}
</script>

<style lang="scss" scoped>





$list-width: 320px;

.aside-wrapper {
  height: calc(100vh - 184px);
  overflow-x: hidden;
  overflow-y: scroll;
  width: 240px;
}

.full-control {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
}

.list {
  width: $list-width;
}

.full-control > .md-list {
  width: $list-width;
  max-width: 100%;
  height: 400px;
  display: inline-block;
  overflow: auto;
  border: 1px solid rgba(#000, 0.12);
  vertical-align: top;
}

.control {
  min-width: 250px;
  display: flex;
  flex-direction: column;
  padding: 16px;
}
</style>
