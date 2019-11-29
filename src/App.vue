<template>
  <div id="app">
    <h6> 仪峰安安五位一体安环服务云平台</h6>
    <ul>
      <li>
        <span class="line"></span>
        <p>安全作业管控系统</p>
      </li>
      <li>
        <span class="line"></span>
        <p>生产调度系统</p>
      </li>
      <li title="智能巡检系统（门禁系统）">
        <span class="line"></span>
        <p>智能巡检系统</p>
      </li>
      <li title="重大危险源管理以及风险评估系统">
        <span class="line"></span>
        <p>重大危险源管理...</p> 
      </li>
      <li>
        <span class="line"></span>
        <p>重点设备数据系统</p>
      </li>
      <li>
        <span class="line"></span>
        <p>GIS系统</p>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<style lang="scss" scoped>
  h6{
  height: 80px;
  line-height: 80px;
  margin: 0;
  padding: 0;
  font-size: 40px
}

ul{
  width: 1170px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}

li{
  list-style: none;
  flex: 1;
  cursor: pointer;
  line-height: 40px;
  font-size: 16px;
   font-family:   sans-serif;
   font-weight: bold
}

</style>
