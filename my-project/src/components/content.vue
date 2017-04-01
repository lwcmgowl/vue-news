<template>
  <div class="main-cnt">
    <div class="page-container page-component">
      <div class="el-row">
        <div class=" el-col el-col-24 el-col-sm-4">
          <el-menu default-active="hot" class="el-menu-vertical-demo siderbar" v-bind:router="true">
            <el-menu-item index="hot"><i class="el-icon-star-on"></i> 热门</el-menu-item>
            <el-menu-item index="nba"><img src="../img/nba-logo-new_f2d752.png" alt="" width="14px" height="18px">NBA
            </el-menu-item>
            <el-menu-item index="cba"><img src="../img/cba.jpg" alt="" width="14px" height="14px">CBA</el-menu-item>
            <el-menu-item index="pl"><img src="../img/yc.jpg" alt="" width="14px" height="14px">英超</el-menu-item>
            <el-menu-item index="laliga"><img src="../img/lfp.jpg" alt="" width="14px" height="14px">西甲</el-menu-item>
            <el-menu-item index="seriea"><img src="../img/seriea.jpg" alt="" width="14px" height="14px">意甲
            </el-menu-item>
            <el-menu-item index="ucl"><img src="../img/champions.jpg" alt="" width="14px" height="14px">欧冠
            </el-menu-item>
            <el-menu-item index="bundesliga"><img src="../img/bundesliga.jpg" alt="" width="14px" height="14px">德甲
            </el-menu-item>
            <el-menu-item index="l1"><img src="../img/ligutil.jpg" alt="" width="14px" height="14px">法甲</el-menu-item>
            <el-menu-item index="nhl"><img src="../img/nhl.jpg" alt="" width="14px" height="14px">NHL</el-menu-item>
            <el-menu-item index="ncaa"><img src="../img/ncaa.jpg" alt="" width="14px" height="14px">NCAA</el-menu-item>
            <el-menu-item index="nfl"><img src="../img/nfl.jpg" alt="" width="14px" height="14px">NFL</el-menu-item>
            <el-menu-item index="afc"><img src="../img/asl.jpg" alt="" width="14px" height="14px">亚冠</el-menu-item>
            <el-menu-item index="csl"><img src="../img/csl.jpg" alt="" width="14px" height="14px">中超</el-menu-item>
            <el-menu-item index="esports"><img src="../img/dingjing.png" alt="" width="14px" height="14px">电竞</el-menu-item>
            <el-menu-item index="others"><i class="el-icon-menu"></i>综合</el-menu-item>
            <el-menu-item index="wcp-eu"><img src="../img/worldcup.jpg" alt="" width="14px" height="14px">欧洲世预赛
            </el-menu-item>
            <el-menu-item index="wcp-as"><img src="../img/worldcup.jpg" alt="" width="14px" height="14px">亚洲世预赛
            </el-menu-item>
            <el-menu-item index="wcp-sa"><img src="../img/worldcup.jpg" alt="" width="14px" height="14px">南美世预赛
            </el-menu-item>
          </el-menu>
        </div>
        <div class="el-col el-col-24  el-col-sm-20">
          <section class="content">
            <router-view></router-view>
          </section>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    }
  }
</script>
<style>
  img {
    margin-right: 10px;
    vertical-align: text-bottom;
  }
  .siderbar .is-active {
    color: #20a0ff;
    border-left: 4px solid;
    background: #ddf0ff;
  }
  .content{
   margin-left: 6px;
  }
</style>
