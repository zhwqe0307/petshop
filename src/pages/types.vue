<template>
  <div class="typesContent">
    <div class="choose">
      <router-link to="/types/fenlei"><div class="left"><span class="f1">分类</span></div></router-link>
      <router-link to="/types/pinpai"><div class="right"><span class="f2">品牌</span></div></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .typesContent
    background #e7e7e7
    height 100%
    .choose
      background: #ffffff
      position fixed
      left 0
      right 0
      top 0
      z-index 10
      height 40px
      text-align center
      line-height 40px
      border-bottom 1px solid #cbcbcb
      font-size 13px
      .left
        text-align right
        float left
        width 50%
        box-sizing border-box
        padding-right 5%
      .right
        text-align left
        float left
        width 50%
        box-sizing border-box
        padding-left 5%
      .f1
        color red
        border-bottom 2px solid #ed4044
      span
        padding 0 4px
        display inline-block
        height 40px
</style>
