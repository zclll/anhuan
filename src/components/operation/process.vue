<template>
  <div style="height:100% ;">
    <el-container style="height:100%">
      <el-main style="height:100%;overflow:hidden scroll;">
        <div class="title">
          动    火    作   业
          <span>(作业编号)</span>
        </div>
        <div class="content content1">
          <h1>作业人员资格审批</h1>
          <el-row>
            <el-col style="color:green" class="btn">审批通过</el-col>
          </el-row>
        </div>
        <div class="content content2">
          <h1>作业审批</h1>
          <el-button type="primary" icon="el-icon-view" class="btns" @click="view()">查看表格</el-button>
          <el-row>
            <el-col class="btn">
              审批人：{{people}}
            </el-col>
          </el-row>
          
              <el-dialog
                title="动火作业审批表"
                :visible.sync="dialogVisible"
                width="60%">
                <biao></biao>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">关 闭</el-button>
                </span>
              </el-dialog>

        </div>
        <div class="content content3">
          <h1>作业执行</h1>
        
          <buzhu v-for='(item) in buzhuData' :key="item.title" :title="item.title" :content="item.content"></buzhu>
          
 
        </div>
        <div class="content content4">
          <h1>作业结束</h1>
           <buzhu v-for='(item) in buzhuData' :key="item.title" :title="item.title" :content="item.content"></buzhu>
          
        </div>
      </el-main>
      <el-aside style="width:250px ; padding-left:20px;height:100%;">
        <div style="height:100%;border-left:1px solid white;box-sizing:border-box">
          <el-row>
            <el-col :span="24">
              <h5>作业人员</h5>
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="transparent"
                
              >
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>作业员</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>主管领导</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>安检员</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                 <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>现场指挥员</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="4-1">选项1</el-menu-item>
                    <el-menu-item index="4-2">选项2</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="5">
                  <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>专家</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="5-1">选项1</el-menu-item>
                    <el-menu-item index="5-2">选项2</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="6">
                  <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>观察员</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="6-1">选项1</el-menu-item>
                    <el-menu-item index="6-2">选项2</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="7">
                  <template slot="title">
                    <i class="el-icon-setting"></i>
                    <span>监察监护员</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="7-1">选项1</el-menu-item>
                    <el-menu-item index="7-2">选项2</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </div>
      </el-aside>



   
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
.el-row {
  color: white;
  font-size: 14px;
  &::before,::after{
    display: none;
  }
  // padding-right: 20px;
}

.btn{
  padding: 15px 0;
}


.el-main {
  min-width: 70%;
  padding: 0px;
}

.el-submenu {
  color: white;
  span {
    color: white;
  }
}

.el-menu-item {
  color: white;
}

.el-menu-item.is-active{
  color: #409EFF
}


h5 {
  width: calc(100% - 10px);
  height: 50px;
  font-size: 18px;
  color: white;
  line-height: 50px;
  text-align: center;
  box-sizing: border-box;
  // padding-right: 10px;
}

.el-menu {
  text-align: left;
  border-right: none;
  color: white;
}

.title {
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  color: white;
  border: 1px solid black;
  border-bottom: none;
  box-sizing: border-box;
  // padding-top: 10px;
  background: #042d5b;
  span {
    font-size: 14px;
  }
}

.content {
  box-sizing: border-box;
  border: 1px solid black;
  border-bottom: none;
  &:last-of-type {
    border-bottom: 1px solid black;
  }
  h1 {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    // padding-top: 5px;
    color: white;
    
    background: #042d5b;
    
  }
}

.btns{
  background: transparent;
  color: white;
  border: none;
  // padding-top: 15px;
  &:hover{
    color: yellow;
  }
}




</style>
<script lang="ts">
import biao from "@/components/biao/biao.vue";
import buzhu from "@/components/action/buzhou.vue"
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components:{biao,buzhu}
})
export default class definition extends Vue {
  isCollapse: any = true;
  dialogVisible:boolean = false;
  people:string= '鲁振宇'
  view(){
    this.dialogVisible = true;
  }


  buzhuData:any = [
    {
      title:'作业（3-1）',
      content:'使用气焊、气割动火作业时，乙炔瓶应直立放置；氧气瓶与乙炔气瓶间距不应小于5 m，二者与动火作业地点不应小于10 m，并不得在烈日下曝晒。'
    },{
       title:'作业（3-2）',
      content:'凡有可燃物构件的凉水塔、脱气塔、水洗塔等内部进行动火作业时，应采取防火隔绝措施。动火期间距动火点30 m内不得排放各类可燃气体；距动火点15 m内不得排放各类可燃液体；不得在动火点10 m范围内及用火点下方同时进行可燃溶剂清洗或喷漆等作业；'
    },{
      title:'作业（3-3）',
      content:'动火人应参与风险危害因素辨识和安全措施的制定，确认相关安全措施的落实情况及动火地点和时间，若发现不具备安全条件时不得进行动火作业，应随身携带《作业证》；监火人负责动火现场的监护与检查，发现异常情况应立即通知动火人停止动火作业，及时联系有关人员采取措施，坚守岗位，不准脱岗；在动火期间，不准兼做其它工作，当发现动火人违章作业时应立即制止；'
    },{
      title:'作业（3-4）',
      content:'拆除管线的动火作业，应先查明其内部介质及其走向，并制定响应的安全防火措施。在生产、使用、储存氧气的设备上进行动火作业，氧含量不得超过21%。五级风以上天气，原则上禁止露天作业，因生产需要确需动火作业时，动火作业应升级管理。'
    },{
      title:'作业（3-5）',
      content:'动火部位负责人对所属生产系统在动火过程中的安全负责。参与制定、负责落实动火安全措施，负责生产与动火作业的衔接，检查、确认《作业证》审批手续，对手续不完备的《作业证》应及时制止动火作业，在动火作业中，生产系统如有紧急或异常情况，应立即通知停止动火作业；'
    }
    
  ]


  created(){
    if(this.$store.state.opinion){
      this.people = this.$store.state.opinion
    }
  }


}
</script>

