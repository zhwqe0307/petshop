<template>
  <div>
    <div class="shopTop">
      <a href="" class="a1"><img src="../common/img/back.png" alt=""></a>
      <span>购物车</span>
      <a href="" class="a2"><img src="../common/img/QRCode.png" alt=""></a>
    </div>
    <div class="shopBottom">
      <div class="picture">
        <div class="f1">
        <img src="../common/img/gouwuche.png" alt="">
        </div>
      </div>
      <span>购物车是空的</span>
      <div class="button">
        <a href="" class="a1">去逛逛</a>
        <a href="" class="a2">我的收藏</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .shopTop
    position relative
    background #ffffff
    height 50px
    border-bottom 1px solid #f3f3f3
    line-height 50px
    text-align center
    font-size 18px
    .a1
      position absolute
      top 3px
      left 6px
      display inline-block
      width 22px
      height 20px
      img
        width 100%
        height 100%
    .a2
      position absolute
      top 3px
      right 12px
      display inline-block
      width 22px
      height 20px
      img
        width 100%
        height 100%
  .shopBottom
    width 100%
    height 298px
    text-align center
    .picture
      text-align center
      height 170px
      .f1
        margin 50px auto 20px
        box-sizing border-box
        display inline-block
        img
          height 100px
          width 100px


    span
      color #dbdbdb
      font-size 16px
      width 100%
    .button
      height 40px
      margin-top 20px
      a
        border-radius 5px
        height 40px
        line-height 40px
        display inline-block
        width 100px
        border 1px solid #999


</style>
