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
        <a href="" class="logo"><img src="../../static/image/logo/logo.png" alt=""></a>
        <div class="navbar_center">
          <ul class="navlist">
            <li>
              <a href="">
                <span>小米</span>
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
            <a href=""></a>
            <a href=""></a>
          </div>
          <input type="submit" class="search-btn">
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
  .navbar_main.fn-clear
    display inline
    height 100px
    .navbar_left
      float left
      width 62px
      margin-top 22px
      display inline
    .navbar_center
      display inline
      width 850px
      height 100px
      ul.navlist
        width 850px
        height 100px
        display inline
        float left
        li
          display inline
          float left
          list-style none
    .navbar_right
      float right
      width 296px
      height 50px
</style>
