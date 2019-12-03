<template>
  <el-table :data="tableData" height="100%"  style="width: 100%;max-height=100%" :row-class-name="tableRowClassName">>
    <el-table-column>
      <template slot-scope="scope">
        <!-- <img src="~@/assets/img/operation_type_fire.png" alt=""> -->
        <img :src="findPng(scope)"/>
      </template>
      
    </el-table-column>

    <el-table-column prop="name" label="作业名称" >
  </el-table-column>
    <el-table-column prop="time" label="作业发起时间" ></el-table-column>
    <el-table-column prop="people" label="作业负责人"></el-table-column>
    <el-table-column prop="state" label="作业阶段"></el-table-column>
    <el-table-column prop="endTime" label="作业结束时间" ></el-table-column>
    <el-table-column prop="evaluation" label="作业评价" ></el-table-column>
    <el-table-column width="70">
        <template slot-scope="scope">
          <el-button icon="el-icon-view" circle @click="view(scope)"></el-button>
        </template>
      </el-table-column>
  </el-table>
</template>

<script lang="ts">
// import homeAside from "../components/home/aside.vue";
// import homeHeader from "../components/home/header.vue";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class definition extends Vue {
  tableData: any = [
    {
      name: "动火作业",
      time: "2019-05-18 09:40:20",
      people: "胡思佳",
      icon: "el-icon-date",
      state: "作业准备"
    },
    {
      name: "高处作业",
      time: "2019-05-18 09:04:24",
      people: "卢定国",
      icon: "el-icon-circle-check",
      state: "作业结束",
      endTime:"2019-06-01 12:35:23",
      evaluation:'正常完成作业'
    },
    {
      name: "型煤系统停车",
      time: "2019-03-09 12:10:38",
      people: "皮敬东",
      icon: "el-icon-date",
      state: "作业审批"
    },
    {
      name: "型煤系统开车",
      time: "2019-03-09 11:41:31",
      people: "鲁振宇",
      icon: "el-icon-loading",
      state: "作业运行"
    },
    {
      name: "动火作业",
      time: "2019-05-17 11:23:20",
      people: "鲁振宇",
      icon: "el-icon-date",
      state: "作业准备"
    },
    {
      name: "型煤系统开车",
      time: "2019-05-17 11:23:20",
      people: "鲁振宇",
      icon: "el-icon-date",
      state: "作业准备"
    },{
      name: "动火作业",
      time: "2019-05-17 11:23:20",
      people: "鲁振宇",
      icon: "el-icon-date",
      state: "作业准备"
    }
    ,{
      name: "动火作业",
      time: "2019-05-17 11:23:20",
      people: "鲁振宇",
      icon: "el-icon-date",
      state: "作业准备"
    },{
      name: "动火作业",
      time: "2019-05-17 11:23:20",
      people: "鲁振宇",
      icon: "el-icon-date",
      state: "作业准备"
    },{
      name: "动火作业",
      time: "2019-05-17 11:23:20",
      people: "鲁振宇",
      icon: "el-icon-date",
      state: "作业准备"
    }
  ];


  imgArray:any = [
    require('@/assets/img/operation_type_fire.png'),
    require('@/assets/img/operation_type_high_place.png'),
    require('@/assets/img/operation_type_technics_schedule.png'),
  ]


  findPng(x:any){
    if(x.row.name == '动火作业'){
      return this.imgArray[0]
    }else if(x.row.name == '高处作业'){
      return this.imgArray[1]
    }else if(x.row.name == '型煤系统停车' || x.row.name == '型煤系统开车'){
      return this.imgArray[2]
    }else {
      return this.imgArray[2]
    }
  }

   tableRowClassName(row:any){

    if(row.rowIndex % 2 == 0){
      return 'row1'
    }else{
      return 'row2'
    }
  }

  created(){
    if(this.$store.state.opinion){
      this.tableData.unshift({
            name: '动火作业',
            time: this.$store.state.time,
            people: "鲁振宇",
            state: "作业准备"
      })
    }
  }

  view(){
    this.$router.push({path:'/operationControl/process'})
  }

}
</script>

<style lang="scss" scoped>

.el-table img{
  width: 36px;
  height: 36px;
}


.el-table__body-wrapper::-webkit-scrollbar {
  width: 6px; // 横向滚动条
  height: 6px; // 纵向滚动条 必写
}

.el-table__body-wrapper::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 3px;
}


.el-button {
    background: #4a95f6;
    color: white;
    border: none;
  }
</style>