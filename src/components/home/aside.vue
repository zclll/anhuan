<template>
  <div style="height: 100%; border-right: 1px solid #e6e6e6">
    <el-row>
      <el-col>
        <h5>作业管控</h5>
        <el-menu
          :default-active="this.$route.path"
          router
          style="opacity:100%;"
          background-color="transparent"
        >
          <el-menu-item index="/operationControl/definition">
            <template slot="title">
              <i class="el-icon-message"></i>作业定义列表
            </template>
          </el-menu-item>
          <el-menu-item disabled>
            <template slot="title">
              <i class="el-icon-message"></i>人员资格审查
            </template>
          </el-menu-item>
          <el-menu-item index="/operationControl/approval">
            <template slot="title">
              <i class="el-icon-message"></i>作业在线审批
            </template>
          </el-menu-item>
          <el-menu-item index="/operationControl/homework">
            <template slot="title">
              <i class="el-icon-message"></i>在线作业列表
            </template>
          </el-menu-item>
          <el-menu-item index="/operationControl/process" >
            <template slot="title">
              <i class="el-icon-message"></i>作业过程页面
            </template>
          </el-menu-item>
           <el-menu-item disabled>
            <template slot="title">
              <i class="el-icon-message"></i>作业评审分析
            </template>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class ExpertApproval extends Vue {}
</script>


<style lang="scss" scoped>
h5 {
  width: 100%;
  height: 50px;
  font-size: 18px;
  color: white;
  line-height: 50px;
 
}
.el-menu-item {
  color: white;
  &:hover{
    color: #409EFF;
  }
}

.el-menu-item.is-active{
  color: #409EFF
}

// .el-menu{
//   text-align: left
// }

.el-menu {
  border-right: none;
  text-align: center;
}
</style>
