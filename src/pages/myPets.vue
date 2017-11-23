<template>
  <div>
    <div class="mpHeader">
      <div class="top">
        <a href=""></a>
        <div class="login">注册</div>
      </div>
      <div class="mLogo">
        <img src="../common/img/logo.png" alt="">
      </div>
      <div class="select">
        <ul>
          <li>
            <a href="##">普通登录</a>
            <i></i>
          </li>
          <li><a href="##">手机动态密码登录</a></li>
        </ul>
      </div>
    </div>
    <div class="login1" v-show="isShow" @click="toggleShow">
      <div class="input">
        <ul>
          <li>
            <span></span>
            <input type="text" placeholder="手机号/邮箱/用户名">
          </li>
          <li>
            <span></span>
            <input type="text" placeholder="输入密码">
          </li>
        </ul>
      </div>
      <div class="ignore">
        <a href="">忘记密码？</a>
      </div>
      <div class="button">
        <a href="">登 录</a>
      </div>
      <div class="otherLogin">
        <div class="font">
          合作网站登录
        </div>
        <ul>
          <li><img src="../common/img/91.png" alt=""></li>
          <li><img src="../common/img/92.png" alt=""></li>
        </ul>
      </div>
    </div>
    <div class="login2" v-show="!isShow" @click="toggleShow">
      <div class="input">
        <ul>
          <li>
            <span></span>
            <input type="text" placeholder="已注册的手机号">
          </li>
          <li>
            <span></span>
            <input type="text" placeholder="请输入图片内容">
          </li>
          <li>
            <span></span>
            <input type="text" placeholder="动态密码">
          </li>
        </ul>
      </div>
      <div class="ignore">
        <a href="">忘记密码？</a>
      </div>
      <div class="button">
        <a href="">登 录</a>
      </div>
      <div class="otherLogin">
        <div class="font">
          合作网站登录
        </div>
        <ul>
          <li><img src="../common/img/91.png" alt=""></li>
          <li><img src="../common/img/92.png" alt=""></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        isShow:true
      }
    },
    methods:{
      toggleShow(){
        this.isShow=!this.isShow
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mpHeader
    height 178px
    width 100%
    background url("../common/img/loginbg.png") no-repeat
    background-size 100% 100%
    .top
      height 50px
      width 100%
      box-sizing border-box
      padding 0 10px
      line-height 50px
      text-align center
      a
        position absolute
        left 5px
        top 12px
        padding-top  16px
        display inline-block
        box-sizing border-box
        width 22px
        height 20px
        background url("../common/img/back.png") no-repeat
        background-size 26px 25px
      .login
        position absolute
        right 10px
        color white
        font-size 16px
    .mLogo
      height 84px
      box-sizing border-box
      padding 10px 0 20px
      text-align center
      img
        margin-top 2px
        width 20%


    .select
      height 44px
      background-color rgba(255,255,255,0.3)
      ul>li
        position relative
        font-size 15px
        float left
        width 50%
        height 44px
        text-align center
        line-height 44px
        a
          color white
        i
          display block
          width 0
          height 0
          border-left 10px solid transparent
          border-right 10px solid transparent
          border-bottom 10px solid #fff
          position absolute
          bottom 0
          left 0
          right 0
          margin auto
  .login1
    height 410px
    background: #ffffff
    .input
      height 92px
      box-sizing border-box
      margin 0 15px 8px 15px
      padding 0 1.6%
      ul>li
        line-height 1.5
        padding 12px 0 12px 30px
        border-bottom #e2e2e2 solid 1px
        input
          display block
          height 21px
          width 100%
          font-size 15px
          border none
          padding 0
          color #666
          font-family "Microsoft Yahei",tahoma,arial
          outline none
    .ignore
      line-height 1.7
      text-align center
      height 20px
      box-sizing border-box
      padding-left 5px
      padding-right 5px
      a
        padding-right 15px
        color: #898989
        font-size 14px
        float: right
    .button
      background: #ffffff
      padding-top 5px
      height 40px
      text-align center
      line-height 2.6
      a
        letter-spacing 5px
        height 100%
        border-radius 5px
        background #2ec975
        font-size 15px
        display block
        box-sizing border-box
        margin 0 4%
        color white
    .otherLogin
      height 114px
      padding-top 100px
      .font
        height 20px
        box-sizing border-box
        margin-top 5px
        color #d7d7d7
        text-align center
      ul
        box-sizing border-box
        height 94px
        padding 25px 0
        li
          height 100%
          float left
          width 33.33%
          box-sizing border-box
          padding 0 32px
          img
            height 100%
            width 100%

  .login2
    height 455px
    background: #ffffff
    .input
      height 138px
      box-sizing border-box
      margin 0 15px 8px 15px
      padding 0 1.6%
      ul>li
        line-height 1.5
        padding 12px 0 12px 30px
        border-bottom #e2e2e2 solid 1px
        input
          display block
          height 21px
          width 100%
          font-size 15px
          border none
          padding 0
          color #666
          font-family "Microsoft Yahei",tahoma,arial
          outline none
    .ignore
      line-height 1.7
      text-align center
      height 20px
      box-sizing border-box
      padding-left 5px
      padding-right 5px
      a
        padding-right 15px
        color: #898989
        font-size 14px
        float: right
    .button
      background: #ffffff
      padding-top 5px
      height 40px
      text-align center
      line-height 2.6
      a
        letter-spacing 5px
        height 100%
        border-radius 5px
        background #2ec975
        font-size 15px
        display block
        box-sizing border-box
        margin 0 4%
        color white
    .otherLogin
      height 114px
      padding-top 100px
      .font
        height 20px
        box-sizing border-box
        margin-top 5px
        color #d7d7d7
        text-align center
      ul
        box-sizing border-box
        height 94px
        padding 25px 0
        li
          height 100%
          float left
          width 33.33%
          box-sizing border-box
          padding 0 32px
          img
            height 100%
            width 100%

</style>
