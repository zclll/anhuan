<template>
  <div style="height: 100%; border-right: 1px solid #e6e6e6">
     <el-col>
       <h5>作业</h5>
    <el-menu :default-active="this.$route.path" router style="opacity:100%;" background-color="transparent">
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

 
}
</script>

<style lang="scss">

h5{
  width: 100%;
  height: 50px;
  font-size: 24px;
  color:white;
  line-height: 50px;
}
.el-menu-item{
  color: white
}

.el-menu{
  border-right: none
}

</style>
