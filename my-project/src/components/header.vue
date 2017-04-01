<template>
  <header style="background-color: #eef1f6">
    <div class="container">
  <el-menu :default-active="activeIndex1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <li class="logo">
      <a href="#" class="boss" data-mod="导航栏" data-action="看比赛logo"></a>
    </li>
    <el-menu-item index="1">看比赛</el-menu-item>
    <el-menu-item index="2">竞猜</el-menu-item>
    <el-menu-item index="3">社区</el-menu-item>
    <el-menu-item index="4">直播</el-menu-item>
  </el-menu>
    </div>
  </header>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex1: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
  .logo a{
    display: inline-block;
    font-weight: 700;
    background: url(../img/logo.png) no-repeat 0 50%;
    width: 160px;
    height: 63px;
    margin-right: 50px;
  }
  .logo{
    float: left;
    height: 60px;
    line-height: 60px;
    margin: 0;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    border-bottom: 5px solid transparent;
  }


</style>
