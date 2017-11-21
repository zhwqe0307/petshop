<template>
  <div id="app">
  <div class="footer">
    <ul class="footerContent">
      <li class="first">
        <router-link to="/firsts">
          <a href=""></a>
        </router-link>
      </li>
      <li class="second">
        <router-link to="/types">
          <a href=""></a>
        </router-link>
      </li>
      <li class="third">
        <router-link to="/carts">
          <a href=""></a>
        </router-link>
      </li>
      <li class="four">
        <router-link to="/myPets">
          <a href=""></a>
        </router-link>
      </li>
    </ul>
  </div>
  <router-view></router-view>
  </div>
</template>

<script>


export default {

  components: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixins.styl"
  .footer
    border-1px(#e7e7e7)
    height 50px
    width 100%
    position fixed
    left 0
    bottom 0
    z-index 100
    background: #ffffff
    ul>li
      width 25%
      height 45px
      float left
      a
        display block
        height 40px
        width 42px
        margin 0 auto
        margin-top 8px
    .footerContent
      .first>a
        background url("./common/img/11.png") no-repeat
        background-position -4px -12px
      .second>a
        background url("./common/img/2.png") no-repeat
        background-position: -8px -12px
      .third>a
        background url("./common/img/3.png") no-repeat
        background-position: -10px -13px
      .four
        background url("./common/img/4.png") no-repeat
        background-position: 13px -6px

</style>
