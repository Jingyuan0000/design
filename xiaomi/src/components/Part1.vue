<template>
  <div class="homepage">
    <div class="topbar">
      <div class="topbar_main r">
        <div class="topbar_left">
          <a href="https://www.mi.com/index.html">小米商城</a>
          <span class="separate">|</span>
          <a href="https://www.miui.com/">MIUI</a>
          <span class="separate">|</span>
          <a href="https://iot.mi.com/index.html">loT</a>
          <span class="separate">|</span>
          <a href="https://i.mi.com">云服务</a>
          <span class="separate">|</span>
          <a href="https://jr.mi.com/index.html?from=micom&t=1529569073565">金融</a>
          <span class="separate">|</span>
          <a href="https://youpin.mi.com/">有品</a>
          <span class="separate">|</span>
          <a href="https://xiaoai.mi.com/">小爱开放平台</a>
          <span class="separate">|</span>
          <a href="https://b.mi.com/?client_id=180100031058&masid=17409.0358">政企服务</a>
          <span class="separate">|</span>
          <a href="">Select Region</a>
        </div>
        <div class="topbar_right">
          <a href="">登陆</a>
          <span class="separate">|</span>
          <a href="">注册</a>
          <span class="separate">|</span>
          <a href="">消息通知</a>
          <span class="separate">|</span>
          <div class="topbar--cart">
            <a href="">
              <img src="https://static.mi.com/cart/" alt="">购物车</a>
          </div>

        </div>
      </div>
    </div>

    <div class="navbar">
      <div class="navbar_main r">
        <div class="navbar_left">
          <a href="" class="logo"><img src="../../static/image/logo/logo.png" alt=""></a>
        </div>
        <div class="navbar_center">
          <ul class="navlist">
            <li>
              <a href="">
                <span>小米手机</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>红米</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>电视</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>笔记本</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>盒子</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>新品</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>路由器</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>智能硬件</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>服务</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>社区</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="navbar_right">
          <input type="search" class="item-search">
          <div class="hotwords">
            <a href="">小米8</a>
            <a href="">小米MIX 2S</a>
          </div>
          <a href=""><img src="../../static/image/logo/search.png" alt=""></a>
        </div>
      </div>
    </div>
  </div>

</template>
<style lang="stylus">
.wrap
  width 1226px
.topbar
  display block
  position relative
  height 40px
  background #333
  color #b0b0b0
  // font-size 14px
  font 12px / 1.5 'Helvetica Neue', Helvetica, Arial, 'Microsoft Yahei', 'Hiragino Sans GB', 'Heiti SC', 'WenQuanYi Micro Hei', sans-serif
  line-height 40px
  .topbar_main, a
    color #b0b0b0
  .topbar_left
    float left
    display inline
  .topbar_right
    float right
    display inline
  .topbar--cart
    float right
    background #424242
    text-align center
    width 120px
  .separate
    margin 0 0.5em
    color #424242
.navbar
  // display block
  .navbar_main
    height 100px
    .navbar_left
      float left
      width 62px
      height 55px
      margin-top 22px
      margin-right 10px
      background red
    .navbar_center
      width 820px
      height 88px
      float left
      background blue
      padding 12px 0 0 30px
      a
        display block
        padding 26px 10px 38px
        color #333
        font-size 16px
        float left
      ul.navlist
        float left
        li
          float left
          list-style none
    .navbar_right
      float right
      width 296px
      height 50px
      margin-top 25px
      background orange
      .item-search
        float left
        width 245px
        height 50px
        padding 0 10px
        border 1px solid #e0e0e0
        position relative
        .hotwords
          position absolute
          top 14px
          right 100px
          z-index 2
          text-align right
          width 124.05px
          height 21px
          a
            // display inline-block
            float left
            color #757575
            font-size 12px
            margin-left 5px
            padding 0 5px
            background #eee
            // font 14px / 1.5 'Helvetica Neue', Helvetica, Arial, 'Microsoft Yahei', 'Hiragino Sans GB', 'Heiti SC', 'WenQuanYi Micro Hei', sans-serif
        .search-btn
          position absolute
          right 0
          top 0
          z-index 2
          width 52px
          height 50px
          border 1px solid #e0e0e0
          font-size 24px
          line-height 24px
          background #fff
          color #616161
          outline 0
</style>
