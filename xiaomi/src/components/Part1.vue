<template>
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
</style>
