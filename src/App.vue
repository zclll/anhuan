<template>
  <div id="app">
    <h6 class="name"> 仪峰安安五位一体安环服务云平台</h6>
    <ul class="title">
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
        <p>危险源管理系统</p> 
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
    <div class="main">
      <router-view/>
    </div>

    

    
  </div>
</template>



<style lang="scss">
@import url(~@/assets/scss/second.scss);
*{
   margin: 0;
    padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
  overflow:  scroll hidden;
}

#app { 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background: url(~@/assets/img/bg.png);
  // background-size: 100% 100%;
  height: 100%;
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

@import url(~@/assets/scss/index.scss);
h6{
  height: 46px;
  line-height: 46px;
  margin: 0;
  padding: 0;
  font-size: 28px;
  color: rgb(0,222,225);
  // background: url(./assets/img/title.png);
  // background-size: 100% 100%
  border-top:40px solid transparent;
  border-bottom:20px solid transparent;
  // margin-bottom: 30px;
}

ul{
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 10px
}

li{
  list-style: none;
  width: calc(100%/6 - 20px);
  // flex: 1;
  margin:0 10px;
  cursor: pointer;
  line-height: 60px;
  font-size: 16px;
  font-family:   sans-serif;
  font-weight: bold;
  margin: 0;
  padding: 0;
  position: relative;
  transition: all 0.5s;
  transform:scale(1);
  &:hover{
    transform: scale(1.2)
  }
  span{
    display: block;
    width: 100%;
    height: 100%;
    // border:2px solid pink;
    position: absolute;
    box-sizing: border-box;
  }
  p{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    // background: pink;
    transition: all 0.2s;
    // &:hover{
      // top: -5px;
      // left: -5px;
    // }
  }
}



.main{
  width: 1400px;
  margin: 40px auto;
  padding: 0;
  height: calc(100vh - 266px);
  // height: 100%;
}


</style>
