<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <!-- <home-header/> -->
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-primary " md-elevation="0">
          <!-- <img src="../assets/img/yfaa.png" width="50"> -->
          <h2>安全作业管控系统</h2>
        </md-toolbar>

        <home-aside/>
      </md-app-drawer>

      <md-app-content>
        <!-- <keep-alive> -->
          <router-view></router-view>
        <!-- </keep-alive> -->
        
      </md-app-content>

    </md-app>
  </div>
</template>

<script lang="ts">
import homeAside from "../components/home/aside.vue";
import homeHeader from "../components/home/header.vue";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: { homeAside, homeHeader }
})
export default class Home extends Vue {};
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
</style>