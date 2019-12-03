<template>
  <div style="height:100%">
    <el-row>
      <el-col :span="6" class="pp"><div>工程名称：</div></el-col>
       <el-col :span="6"><div>动火作业</div></el-col>
      <el-col :span="6" class="pp"><div>施工单位：</div></el-col>
       <el-col :span="6"><div>仪峰安安</div></el-col>
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
      <div class="details">{{$store.state.opinion ? $store.state.opinion : ''}}</div>

      

      <el-row>
        <el-col class="ii" :span='12'><el-col  :span='12'>审批人签字</el-col><el-col  :span='12' class="inp"><div class="details">{{$store.state.name ? $store.state.name : ''}}</div></el-col></el-col>
        <el-col  class="ii" :span='12'><el-col  :span='12'>时间</el-col><el-col  :span='12' class="inp"><div class="details">{{$store.state.time ? $store.state.time : ''}}</div></el-col></el-col>
        
      </el-row>
    </div>
  </div>
</template>
<style lang="scss" scoped>

.el-row{
  border:1px solid black;
  border-right: none;
  border-bottom: none;
  font-size: 14px;
  &:nth-last-of-type(1){
     border-bottom:1px solid black;
  }
}


.detail{
  width: 100%;
  border: 1px solid black;
  border-bottom: none;
  color: black;
  box-sizing: border-box;
  font-size: 14px;
  &:nth-last-of-type(1){
    border-top: none;
  }
  >p{
    height: 40px;
    line-height: 40px;
    text-align: left;
    text-indent: 20px;
    background: white;
  }
  .details{
    width: 100%;
    text-align: left;
    padding-bottom: 15px;
    text-indent: 20px;
    >p{
      text-indent: 20px;
    }
  }
}
.el-button{
  margin-top: 20px;
}


.ii{
  border: none !important;
}
  .pp{
    background: white;
  }

  .el-col{
    border-right: 1px solid black;
    color: black;
    height: 40px;
    line-height: 40px;
    text-align: left;
    text-indent: 20px;
    &.inp{
      text-indent: 0px
    }
    // padding-left: 10px;
  }


  

  .center{
    text-align: center;
    font-weight:bold;
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

