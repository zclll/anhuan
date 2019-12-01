<template>
 <div>
   <el-container>
    <el-aside width="200px">
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



// .el-aside{
//   // width: 100%;
//   height: 100%;
// }
</style>