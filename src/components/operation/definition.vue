<template>
  <div style="height:100%">
    <el-table :data="tableData" height="100%" :row-class-name="tableRowClassName">
      style="width: 100%;">
      <el-table-column prop="id" label="作业编号"></el-table-column>
      <el-table-column prop="name" label="作业名称"></el-table-column>
      <el-table-column prop="type" label="作业类型"></el-table-column>
      <el-table-column prop="date" label="作业归属部门"></el-table-column>
      <el-table-column>
        <el-button style="background:'red'" >发起作业</el-button>
      </el-table-column>
      <el-table-column width="70">
        <template slot-scope="scope">
          <el-button icon="el-icon-s-tools" circle @click="edit(scope)"></el-button>
        </template>
      </el-table-column>
      <el-table-column width="70">
        <template slot-scope="scope">
          <el-button icon="el-icon-delete-solid" circle @click="del(scope)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="修改"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
      modal
      center
    >

    <el-form ref="form"  label-width="80px">
        <el-form-item label="作业名称:">
            <el-input v-model="input[0]"></el-input>
        </el-form-item>
        <el-form-item label="作业名称:">
             <el-select v-model="input[1]" placeholder="请选择"  style="width:100%">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="作业名称:">
            <el-input v-model="input[2]"></el-input>
        </el-form-item>
    </el-form>
      
          
    




      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sure()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
// import homeAside from "../components/home/aside.vue";
// import homeHeader from "../components/home/header.vue";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class definition extends Vue {
  tableData: any = [
    {
      id: "00026 0001 00 000     01     0001",
      name: "工艺调度作业",
      type: "随机作业",
      date: "安防部"
    },
    {
      id: "00026 0001 00 000     01     0012",
      name: "吊装作业",
      type: "随机作业",
      date: "安防部"
    },
    {
      id: "00026 0001 00 000     01     0023",
      name: "动火作业",
      type: "自由作业",
      date: "安防部"
    },
    {
      id: "00026 0001 00 000     01     0024",
      name: "动土作业",
      type: "随机作业",
      date: "安防部"
    },
    {
      id: "00026 0001 00 000     01     0030",
      name: "断路作业",
      type: "自由作业",
      date: "安防部"
    },
    {
      id: "00026 0001 00 000     01     0033",
      name: "高处作业",
      type: "自由作业",
      date: "安防部"
    },
    {
      id: "00026 0001 00 000     01     0055",
      name: "设备检修作业",
      type: "随机作业",
      date: "安防部"
    },
    {
      id: "00026 0001 00 000     01     0057",
      name: "盲板抽堵作业",
      type: "随机作业",
      date: "安防部"
    },
    {
      id: "00026 0001 00 000     01     0110",
      name: "受限空间作业",
      type: "自由作业",
      date: "安防部"
    },
    {
      id: "00026 0001 00 000     01     0115",
      name: "临时用电作业",
      type: "自由作业",
      date: "安防部"
    },
    {
      id: "00026 0001 00 000     01     0120",
      name: "特种设备特种环境作业",
      type: "自由作业",
      date: "安防部"
    }
  ];
  dialogVisible: Boolean = false;
  input:any = []
  index:string = ''

  options:any = [
    {
      value:'随机作业',
      label:'随机作业'
    },{
      value:'自由作业',
      label:'自由作业'
    }
  ]


  tableRowClassName(row: any) {
    if (row.rowIndex % 2 == 0) {
      return "row1";
    } else {
      return "row2";
    }
  }

  del(row: any) {
    this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    })
      .then(() => {
        this.tableData.splice(row.$index, 1);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "已取消删除"
        });
      });
  }

  handleClose(done: any) {
    this.$confirm("确认关闭？")
      .then(_ => {
        done();
      })
      .catch(_ => {});
  }


  edit(row:any){
    this.dialogVisible = true;
    this.index = row.$index
  }

  sure(){
    this.tableData[this.index].name = this.input[0]
    this.tableData[this.index].type = this.input[1]
    this.tableData[this.index].date = this.input[2]
    this.dialogVisible = false
     this.$message({
      type: "success",
      message: "修改成功!"
    });
  }
}
</script>
<style lang="scss">
.el-button {
  background: #4a95f6;
  color: white;
  border: none;
}
</style>

