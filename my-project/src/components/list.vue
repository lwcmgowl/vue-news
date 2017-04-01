<template>
  <div>
    <div>

      <el-card class="box-card" v-show="on.length">
        <div slot="header" class="clearfix">
          <span style="line-height: 36px;">正直播</span>
        </div>
        <div v-for="o in on" class="text item">
          <a href="#" class="boss kbs-list-item">
            <ul class="inline color-gray6 t16 list-bg js-list-item post-game type-video icon2 type-reset" v-bind:class="o.matchType==4?activeClass :''">
              <li class="li-item1 color-gray5 t14">
                <i class="icon-vip-logo t18"><i class="path1"></i><i class="path2"></i><i class="path3"></i><i
                  class="path4"></i><i class="path5"></i></i>
                <span>{{o.matchDesc}}</span>
              </li>
              <li class="li-item2">{{o.startTime.substring(5, 16)}}


              </li>
              <li class="li-item3 overflow js-team has-hover" tid="20" cid="100000">
                <img class="lazy" title="" data-original=""
                     :src="o.leftBadge" style="display: inline;">
                <span :title="o.leftName">{{o.leftName}}
            </span>
              </li>
              <li class="li-item6 t14">
                <span class="video with-text"><i class="el-icon-share"></i>看直播</span>
              </li>
            </ul>
          </a>

        </div>
      </el-card>
    </div>
    <div>
      <el-card class="box-card" v-bind:class="on.length?top :''">
        <div slot="header" class="clearfix">
          <span style="line-height: 36px;">已结束</span>
        </div>
        <div v-for="o in after" class="text item">
          <a href="#" class="boss kbs-list-item">
            <ul class="inline color-gray6 t16 list-bg js-list-item post-game type-video icon2 type-reset" v-bind:class="o.matchType==4?activeClass :''">
              <li class="li-item1 color-gray5 t14">
                <i class="icon-vip-logo t18"><i class="path1"></i><i class="path2"></i><i class="path3"></i><i
                  class="path4"></i><i class="path5"></i></i>
                <span>{{o.matchDesc}}</span>
              </li>
              <li class="li-item2">{{o.startTime.substring(5, 16)}}


              </li>
              <li class="li-item3 overflow js-team has-hover" tid="20" cid="100000">
                <img class="lazy" title="76人" data-original="http://mat1.gtimg.com/sports/nba/logo/1602/20.png"
                     :src="o.leftBadge" style="display: inline;">
                <span :title="o.leftName">{{o.leftName}}
            </span>
              </li>
              <li class="li-item4 t18 color-blue2 vs-game">{{o.leftGoal}}-{{o.rightGoal}}


              </li>
              <li class="li-item5 vs-game js-team has-hover" tid="19" cid="100000">
            <span :title="o.rightName">{{o.rightName}}
            </span>
                <img class="lazy" title="" data-original="http://mat1.gtimg.com/sports/nba/logo/1602/19.png"
                     :src="o.rightBadge" style="display: inline;">
              </li>
              <li class="li-item6 t14">
                <span class="video with-text"><i class="el-icon-share"></i>视频集锦</span>
                <span class="reset with-text js-reset"><i class="el-icon-date"></i>比赛回放</span>
              </li>
            </ul>
          </a>

        </div>
      </el-card>
    </div>
    <div class="pre">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="line-height: 36px;">未开始</span>
        </div>
        <div v-for="o in pre" class="text item">

          <a href="#" class="boss kbs-list-item">
            <ul class="inline color-gray6 t16 list-bg js-list-item post-game type-video icon2 type-reset pre" v-bind:class="o.matchType==4 ?activeClass :''">
              <li class="li-item1 color-gray5 t14">
                <i class="icon-vip-logo t18"><i class="path1"></i><i class="path2"></i><i class="path3"></i><i
                  class="path4"></i><i class="path5"></i></i>
                <span>{{o.matchDesc}}</span>
              </li>
              <li class="li-item2">{{o.startTime.substring(5, 16)}}


              </li>
              <li class="li-item3 overflow js-team has-hover" tid="20" cid="100000">
                <img class="lazy" title="" data-original="http://mat1.gtimg.com/sports/nba/logo/1602/20.png"
                     :src="o.leftBadge" style="display: inline;">
                <span :title="o.leftName">{{o.leftName}}
            </span>
              </li>
              <li class="li-item4 t18 color-blue2 vs-game">{{o.leftGoal==0?'':''}}-{{o.rightGoal==0?'':''}}


              </li>
              <li class="li-item5 vs-game js-team has-hover" tid="19" cid="100000">
            <span :title="o.rightName">{{o.rightName}}
            </span>
                <img class="lazy" title="" data-original="http://mat1.gtimg.com/sports/nba/logo/1602/19.png"
                     :src="o.rightBadge" style="display: inline;">
              </li>
              <li class="li-item6 t14">
                <span class="video with-text"><i class="el-icon-time"></i>预约直播</span>
              </li>
            </ul>
          </a>



        </div>
      </el-card>

    </div>
  </div>
</template>

<script>
  export default {
    data() {

      return {
        on: [],
        after: [],
        pre: [],
        activeClass:'not-vs',
        top:'top'
      }
    },
    mounted(){
      this.$http.jsonp("http://matchweb.sports.qq.com/kbs/hotMatchList?callback=getHotMatchList&_="+new Date().getTime()).then(
        function (res) {
          // 处理成功的结果
          this.on = res.body.data.on;
          this.after = res.body.data.after;
          this.pre=res.body.data.pre;
        }, function (res) {
          console.log(res)
          // 处理失败的结果
        }
      );
    }
  }
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    /*padding: 8px 0;*/
    border-top: 1px solid #eee;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .pre {
    margin-top: 34px;
  }

  /*.inline > li {*/
    /*display: inline-block;*/
  /*}*/

  .kbs-list-item ul .li-item3 img, .kbs-list-item ul .li-item5 img {
    height: 40px;
    vertical-align: middle;
    margin-right: 18px;
  }

  .el-card__body {
    padding: 0px !important;
  }

  .el-card__body .item:first-child {
    border-top: none;
  }

  .kbs-list-item ul {
    width: 818px;
    height: 59px;
    line-height: 58px;
    word-spacing: -6px;
    position: relative;
    cursor: pointer;
    margin: 0;
  }

  .kbs-list-item ul .li-item1 {
    width: 130px;
    padding-left: 43px;
  }

  .kbs-list-item ul li {
    padding: 0;
    word-spacing: 0;
  }

   ul.inline > li {
    display: inline-block;
  }

  .color-gray5 {
    color: #999;
  }

  .t14 {
    font-size: 14px;
  }

  .kbs-list-item ul .li-item2 {
    width: 128px;
    vertical-align: bottom;
  }

  .kbs-list-item ul .li-item3 {
    width: 148px;
  }

  .kbs-list-item ul.post-game .li-item4 {
    color: #3374e0;
  }

  .kbs-list-item ul .li-item4 {
    width: 80px;
    height: 28px;
    text-align: center;
    vertical-align: middle;
    line-height: 28px;
    display: inline-block;
  }

  .t18 {
    font-size: 18px;
  }

  .t16 {
    font-size: 16px;
  }

  .kbs-list-item ul .li-item5 {
    text-align: right;
  }

  .kbs-list-item ul .li-item5 {
    width: 148px;
  }

  .kbs-list-item ul.post-game .li-item6 {
    color: #3374e0;
  }

  .kbs-list-item ul.icon2 .li-item6 {
    line-height: 24px;
  }

  .kbs-list-item ul .li-item6 {
    width: 156px;
    position: absolute;
    right: 0;
    line-height: 48px;
    padding: 5px 0;
  }

  .li-item6 span {
    display: block;
    text-align: right;
  }

  .color-gray6 {
    color: #555;
  }

  .kbs-list-item ul .li-item6 [class^=el-icon] {
    vertical-align: -1px;
    margin-left: 50px;
    margin-right: 3px;
  }
  .kbs-list-item ul.not-vs .li-item3 {
    width: 370px;
  }
  ul.not-vs .li-item4{
    display: none;
  }
  .kbs-list-item ul .li-item5 img {
    margin-right: 0;
    margin-left: 18px;
  }
  .not-vs .li-item6{
    line-height: 48px !important;
  }
  .pre .li-item6{
    line-height: 48px !important;
  }
  .text.item:hover{
    background-color:#FAFAFA;
  }
  .top{
    margin-top:34px;
  }
  .kbs-list-item ul .li-item3 span{
    width: 80px;
    display: inline-block;
    vertical-align: middle;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .kbs-list-item ul.not-vs .li-item3 span {
    width: 300px;
  }
</style>
