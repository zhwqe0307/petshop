<template>
  <div class="surprise">
    <div class="surpriseTop">
      <div class="left"><img src="../../common/img/suprice.png" alt=""></div>
      <div class="font">距本场结束</div>
      <div class="time">
        <span class="time1">00</span>
        <span class="time2">:</span>
        <span class="time3">00</span>
        <span class="time4">:</span>
        <span class="time5">00</span>
      </div>
      <div class="more"><img src="../../common/img/more.png" alt=""></div>
    </div>
    <div class="surpriseBottom">
      <div class="swipeWrapper" ref="imgWrapper">
        <div class="imgWrapper">
          <div class="one">
            <a href=""><img src="../../common/img/21.png" alt=""></a>
            <div class="price">
              <span>¥</span>
              <span>1.50</span>
            </div>
            <div class="decrease">
              <span>省￥13.50</span>
            </div>
          </div>
          <div class="two">
            <a href=""><img src="../../common/img/22.jpg" alt=""></a>
            <div class="price">
              <span>¥</span>
              <span>1.60</span>
            </div>
            <div class="decrease">
              <span>省￥14.40</span>
            </div>
          </div>
          <div class="three">
            <a href=""><img src="../../common/img/23.jpg" alt=""></a>
            <div class="price">
              <span>¥</span>
              <span>9.80</span>
            </div>
            <div class="decrease">
              <span>省￥88.20</span>
            </div>
          </div>
          <div class="four">
            <a href=""><img src="../../common/img/24.jpg" alt=""></a>
            <div class="price">
              <span>¥</span>
              <span>1.00</span>
            </div>
            <div class="decrease">
              <span>省￥9.00</span>
            </div>
          </div>
          <div class="five">
            <a href=""><img src="../../common/img/25.jpg" alt=""></a>
            <div class="price">
              <span>¥</span>
              <span>1.90</span>
            </div>
            <div class="decrease">
              <span>省￥17.10</span>
            </div>
          </div>
          <div class="six">
            <a href=""><img src="../../common/img/26.jpg" alt=""></a>
            <div class="price">
              <span>¥</span>
              <span>1.00</span>
            </div>
            <div class="decrease">
              <span>省￥9.00</span>
            </div>
          </div>
          <div class="seven">
            <a href=""><img src="../../common/img/27.jpg" alt=""></a>
            <div class="price">
              <span>¥</span>
              <span>3.00</span>
            </div>
            <div class="decrease">
              <span>省￥27.00</span>
            </div>
          </div>
          <div class="eight">
            <a href=""><img src="../../common/img/28.jpg" alt=""></a>
            <div class="price">
              <span>¥</span>
              <span>7.80</span>
            </div>
            <div class="decrease">
              <span>省￥70.20</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default{
    mounted(){
      this._initScroll()
    },
    methods:{
      _initScroll(){
        this.$nextTick(()=>{
          this.scroll=new BScroll(this.$refs.imgWrapper,{
            click:true,
            scrollX:true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .surprise
    height 190px
    width 100%
    .surpriseTop
      box-sizing border-box
      overflow hidden
      position relative
      height 60px
      padding 10px
      .left
        float left
        img
          height 24px
          width 105px
          margin-left -20px
      .font
        float left
        font-size 13px
        margin-left 8px
        margin-top 1px
        height 20px
        line-height 1.5
      .time
        height 24px
        box-sizing border-box
        margin-left 5px
        float left
        text-align center
        display inline-block
        line-height 1.9
        font-size 12px
        .time1
          border 1px solid #ddd
          padding 1px 2px
        .time2
          margin 0 3px
          font-weight 700
        .time3
          border 1px solid #ddd
          padding 1px 2px
        .time4
          margin 0 3px
          font-weight 700
        .time5
          border 1px solid #ddd
          padding 1px 2px
      .more
        float left
        position absolute
        top 2px
        right 4px
        font-size 14px
        img
          height 40px
    .surpriseBottom
      width 100%
      height 130px
      .swipeWrapper
        margin 0 auto
        height 130px
        white-space nowrap
        overflow hidden
        img
          width 84px
        .imgWrapper
          width 900px
          .price
            color red
            font-size 14px
            margin-top 5px
            margin-bottom 5px
            text-align center
          .decrease
            font-size 12px
            color: #999
          .one
            float left
            margin-right 10px
            width 98px
            height 100%
            text-align center
          .two
            float left
            margin-right 10px
            width 98px
            height 100%
            text-align center
          .three
            float left
            margin-right 10px
            width 98px
            height 100%
            text-align center
          .four
            float left
            margin-right 10px
            width 98px
            height 100%
            text-align center
          .five
            float left
            margin-right 10px
            width 98px
            height 100%
            text-align center
          .six
            float left
            margin-right 10px
            width 98px
            height 100%
            text-align center
          .seven
            float left
            margin-right 10px
            width 98px
            height 100%
            text-align center
          .eight
            float left
            margin-right 10px
            width 98px
            height 100%
            text-align center

</style>
