<template>
  <div style="height:100%">
    <el-row>
      <el-col :span="24" class='center'><div>动火作业审批表</div></el-col>
    </el-row>
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

      <el-input
        type="textarea"
        :rows="3"
        resize='none'
        placeholder="请输入内容"
        v-model="input[0]">
      </el-input>

      <el-row>
        <el-col class="ii" :span='12'><el-col  :span='12'>审批人签字</el-col><el-col  :span='12' class="inp"><el-input v-model="input[1]" placeholder="请输入内容"></el-input></el-col></el-col>
        <el-col  class="ii" :span='12'><el-col  :span='12'>时间</el-col><el-col  :span='12' class="inp"><el-input v-model="input[2]" placeholder="请输入内容"></el-input></el-col></el-col>
        
      </el-row>
    </div>

    <el-button type="primary" round @click="agree()">同意审批</el-button>
    <el-button type="primary" round @click="disAgree()">驳回</el-button>
  </div>
</template>

<script lang="ts">
// import homeAside from "../components/home/aside.vue";
// import homeHeader from "../components/home/header.vue";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class definition extends Vue {
    textarea:string = ''
    input:any = []

    agree(){

      if(this.input[0] != '' && this.input[0] != undefined && this.input[1] != '' && this.input[1] != undefined){
        if(this.input[2] !='' && this.input[2] != undefined){
           this.$store.commit('editState',this.input)
            this.$router.push({path:'/operationControl/homework'})
        }else{
          var date = new Date();

          var year = date.getFullYear();
          var month = date.getMonth()+1;    //js从0开始取 
          var date1 = date.getDate(); 
          var hour = date.getHours(); 
          var minutes = date.getMinutes(); 
          var second = date.getSeconds();
          
          this.input[2] =  year+"-"+month+"-"+String(date1).padStart(2,'0')+" "+String(hour).padStart(2,'0')+":"+String(minutes).padStart(2,'0') +":"+ String(second).padStart(2,'0');

          this.$store.commit('editState',this.input)
          this.$router.push({path:'/operationControl/homework'})
        }
       
       
      }else{
        this.$message({
          showClose: true,
          message: '请正确填写资料',
          type: 'warning'
        });
      }
      
    }



};
</script>



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
  color: white;
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
    background: #092149;
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
    background: #092149
  }

  .el-col{
    border-right: 1px solid black;
    color: white;
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
    background: #042d5b;
  }
  



</style>


