<template>
  <div style="height:100%">
    <el-row>
      <el-col :span="24"><div>动火作业审批表</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div>工程名称：*****</div></el-col>
      <el-col :span="12"><div>施工单位：*****</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div class="pp">申请动火单位</div></el-col>
      <el-col :span="6"><div>中太建设集团股份有限公司</div></el-col>
      <el-col :span="6"><div class="pp">动火班组</div></el-col>
      <el-col :span="6"><div>焊工班</div></el-col>
    </el-row>
    <el-row>
        <el-col :span="6"><div class="pp">动火部分</div></el-col>
        <el-col :span="6"><div>塔吊钢筋</div></el-col>
        <el-col :span="6"><div class="pp">动火作业级别及种类</div></el-col>
        <el-col :span='6' class="ii">
            <el-col :span="8"><div>三</div></el-col>
            <el-col :span="8"><div class="pp">级动火</div></el-col>
            <el-col :span="8"><div>电焊</div></el-col>
        </el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div class="pp">动火作业</div></el-col>
      <el-col :span="18">2019年9月8日 - 2019年10月11日</el-col>
    </el-row>

    <div class="detail">
      <p>动火原因、防火的主要安全措施和设备的消防器材</p>
      <div class="details">
        <p>动火原因：</p>
        <p>1、塔吊钢筋焊接</p>
        <p>防火的主要安全措施和配备的消防器材</p>
        <p>1、电焊工戴好防护面具，戴好绝缘手套，穿绝缘鞋</p>
        <p>2、作业现场易燃易爆物品清楚到安全区域</p>
        <p>3、准备灭火器及消防沙、铲</p>
      </div>

      <el-row>
        <el-col class="ii" :span='8'><el-col  :span='12'>监护人签名</el-col><el-col  :span='12'>鲁振宇</el-col></el-col>
        <el-col  class="ii" :span='8'><el-col  :span='12'>申请人签字</el-col><el-col  :span='12'>鲁振宇</el-col></el-col>
        <el-col  class="ii" :span='8'><el-col  :span='12'>时间</el-col><el-col  :span='12'>2019-05-06</el-col></el-col>
      </el-row>
    </div>

    <div class="detail">
      <p>审批意见</p>

      <el-input
        type="textarea"
        :rows="3"
        resize='none'
        placeholder="请输入内容"
        v-model="input[0]">
      </el-input>

      <el-row>
        <el-col class="ii" :span='12'><el-col  :span='12'>审批人签字</el-col><el-col  :span='12'><el-input v-model="input[1]" placeholder="请输入内容"></el-input></el-col></el-col>
        <el-col  class="ii" :span='12'><el-col  :span='12'>时间</el-col><el-col  :span='12'><el-input v-model="input[2]" placeholder="请输入内容"></el-input></el-col></el-col>
        
      </el-row>
    </div>

    <el-button type="primary" round>同意审批</el-button>
    <el-button type="primary" round>驳回</el-button>
  </div>
</template>
<style lang="scss" scoped>

.detail{
  width: 100%;
  border: 1px solid black;
  color: white;
  >p{
    height: 40px;
    line-height: 40px;
    text-align: left;
    text-indent: 2rem;
    background: #092149;
  }
  .details{
    width: 100%;
    text-align: left;
    padding-bottom: 15px;
    text-indent: 2rem;
  }
}
.el-button{
  margin-top: 20px;
}


.ii{
  border: none !important;
}
  .pp{
    background: #092149
  }

  .el-col{
    border: 1px solid black;
    color: white;
    height: 40px;
    line-height: 40px;
  }

  



</style>
<script lang="ts">
// import homeAside from "../components/home/aside.vue";
// import homeHeader from "../components/home/header.vue";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class definition extends Vue {
    textarea:string = ''
    input:any = []
};
</script>

