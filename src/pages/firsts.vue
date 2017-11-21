<template>
  <div>
    <petHeader></petHeader>
    <div class="cotent" ref="sWrapper">
      <div class="mainWrapper">
        <div class="slide">
          <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../common/img/5.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../common/img/6.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../common/img/7.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../common/img/8.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../common/img/666.jpg" alt=""></mt-swipe-item>
          </mt-swipe>
        </div>
        <split></split>
        <div class="boxes">
          <ul>
            <li><a href=""><img src="../common/img/a.png" alt=""></a></li>
            <li><a href=""><img src="../common/img/b.png" alt=""></a></li>
            <li><a href=""><img src="../common/img/c.png" alt=""></a></li>
            <li><a href=""><img src="../common/img/d.png" alt=""></a></li>
            <li><a href=""><img src="../common/img/e.png" alt=""></a></li>
            <li><a href=""><img src="../common/img/f.png" alt=""></a></li>
            <li><a href=""><img src="../common/img/g.jpg" alt=""></a></li>
            <li><a href=""><img src="../common/img/h.jpg" alt=""></a></li>
          </ul>
        </div>
        <split></split>
        <surprise></surprise>
        <div class="hotClass">
          <div class="imgTop">
            <a href=""><img src="../common/img/30.png" alt=""></a>
          </div>
          <div class="imgBottom">
            <div class="left">
              <a href=""><img src="../common/img/31.png" alt=""></a>
            </div>
            <div class="right">
              <img src="../common/img/32.png" alt="">
              <img src="../common/img/33.png" alt="">
            </div>
          </div>
        </div>
        <split></split>
        <div class="vediosContent">
          <div class="vediosTop">
            <div class="img1"><img src="../common/img/34png.png" alt=""></div>
            <div class="img2"><img src="../common/img/more.png" alt=""></div>
          </div>
          <div class="vediosBottom">
            <div><img src="../common/img/37.png" alt=""></div>
            <div class="textContent">
              <div class="text1">夜空中最亮的星</div>
              <div class="text2">
                <span></span>
                <span>7397</span>
                <span class="devide">|</span>
                <span>02:20</span>
              </div>
            </div>
          </div>
        </div>
        <split></split>
        <div class="tryContent">
          <div class="tryTop">
            <div class="img1"><img src="../common/img/35.png" alt=""></div>
            <div class="img2"><img src="../common/img/more.png" alt=""></div>
          </div>
          <div class="tryBottom">
            <img src="../common/img/38.png" alt="">
          </div>
        </div>
        <split></split>
        <div class="goodSell">
          <div><img src="../common/img/41.png" alt=""></div>
        </div>
        <div class="singleDiv">
          <div class="top">
            <span class="fontLeft">谷登新品</span>
            <span class="fontRight">5折限量</span>
          </div>
          <div class="bottom">
            <img src="../common/img/42.png" alt="">
          </div>
        </div>
        <div class="singleDiv">
          <div class="top">
            <span class="fontLeft">NexGard尼可信</span>
          </div>
          <div class="bottom">
            <img src="../common/img/43.png" alt="">
          </div>
        </div>
        <div class="singleDiv">
          <div class="top">
            <span class="fontLeft">冠能</span>
            <span class="fontRight">满399送智能碗</span>
          </div>
          <div class="bottom">
            <img src="../common/img/44.png" alt="">
          </div>
        </div>
        <div class="singleDiv">
          <div class="top">
            <span class="fontLeft">优卡</span>
            <span class="fontRight">只为爱宠卓越表现</span>
          </div>
          <div class="bottom">
            <img src="../common/img/45.png" alt="">
          </div>
        </div>
        <div class="singleDiv">
          <div class="top">
            <span class="fontLeft">临期不改好货本质</span>
            <span class="fontRight">进口好货，低至1折！</span>
          </div>
          <div class="bottom">
            <img src="../common/img/46.png" alt="">
          </div>
        </div>
        <div class="judgeDiv">
          <div class="text">
            <img src="../common/img/36.png" alt="">
            <span>好评率99.64%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import petHeader from '../components/header/header.vue'
  import split from '../components/split/split.vue'
  import surprise from '../components/surprise/surprise.vue'
  export default{
    components:{
      petHeader,
      split,
      surprise
    },
    mounted(){
      this._initScroll()
    },
    methods:{
      _initScroll(){
        this.$nextTick(()=>{
          const scroll=new BScroll(this.$refs.sWrapper,{
            click:true
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../common/stylus/mixins.styl"
  .cotent
    padding-top 10px
    height 590px
    width 100%
    .mainWrapper
      width 100%
      height 3000px
      .slide
        width 100%
        height 160px
        img
          width 100%
          height 100%
      .boxes
        width 100%
        height 175px
        li
          float left
          width 25%
        img
          width 100%
          height 100%
      .hotClass
        .imgTop
          height 40px
          img
            width 100%
            height 100%
        .imgBottom
          border-1px(#e7e7e7)
          display flex
          height 190px
          .left
            width 42.53%
            img
              height 100%
              width 100%
          .right
            font-size 0
            width 57.33%
            img
              width 100%
              height 50%

      .vediosContent
        .vediosTop
          position relative
          overflow hidden
          box-sizing border-box
          padding-top 10px
          height 62px
          text-align center
          .img1
            img
              height 100%
              width 50%
              margin 0 auto
          .img2
            position absolute
            right 0
            top 6px
            width 100px
            height 62px
            text-align right
            img
              height 100%
        .vediosBottom
          height 268px
          img
            width 100%
          .textContent
            box-sizing border-box
            height 58px
            width 100%
            color: #999
            font-size: 12px
            padding: 10px
            text-align: center
            .text1
              color: #333
              margin-bottom 8px
            .text2
              .devide
                margin-right 6px
                margin-left 6px
      .tryContent
        .tryTop
          position relative
          overflow hidden
          box-sizing border-box
          padding-top 10px
          height 62px
          text-align center
          .img1
            img
              height 100%
              width 50%
              margin 0 auto
          .img2
            position absolute
            right 0
            top 6px
            width 100px
            height 62px
            text-align right
            img
              height 100%
        .tryBottom
          height 155px
          img
            width 100%
      .goodSell
        height 62px
        text-align center
        img
          width 50%
      .singleDiv
        border-1px(#e7e7e7)
        height 197px
        .top
          line-height 1.6
          height 44px
          padding 10px
          box-sizing border-box
          .fontLeft
            font-size 15px
            font-family: 'Microsoft Yahei',-apple-system-font,Helvetica Neue,sans-serif
          .fontRight
            color: #999
            font-size: 12px
            margin-left: 5px
        .bottom
          height 153px
          img
            width 100%
            height 100%
      .judgeDiv
        position relative
        height 45px
        text-align center
        img
          width auto
          height 45px
        span
          color: #999
          font-size 12px
          position absolute
          top 17px
          right 10px
</style>
