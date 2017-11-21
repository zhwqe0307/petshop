<template>
  <div>
    <div class="headerWrap">
      <div class="header">
        <div class="top">
          <div class="main">
            <span>狗狗站</span>
            <span>|</span>
            <span>重庆</span>
            <img src="../../common/img/header.png" alt="">
            <a href=""><input type="search" placeholder="搜索商品和品牌"><span>
            <img src="../../common/img/search.png" alt=""></span>
            </a>
            <a href=""><img src="../../common/img/mydope.png" alt=""></a>
          </div>
        </div>
        <div class="bottom">
          <ul>
            <li>首页</li>
            <li>服饰城</li>
            <li>狗狗主粮</li>
            <li>医疗保健</li>
            <li>零食玩具</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .headerWrap
    height 86px
    .header
      height 86px
      width 100%
      background #ffffff
      position fixed
      left 0
      top 0
      z-index 100
      .top
        padding 5px 10px
        height 51px
        box-sizing border-box
        .main
          color: #898989
          font-size 14px
          margin 8px 0
          img
            height 12px
            width 12px
          a
            position relative
            overflow hidden
            span
              position absolute
              margin-top 6px
              right 6px
          input
            width 219px
            height 25px
            margin-left 2px
            background: #e9e9e9
            border-radius 4px
            font-size 13px
            text-indent: 10px
            color: #bcbcbc

      .bottom
        height 35px
        width 100%
        min-width 320px
        ul
          white-space nowrap
          overflow hidden
          display flex
          li
            float left
            width 74.5px
            line-height 36px
            text-align center
            font-size 14px
</style>
