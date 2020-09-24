<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="javascript:">目标全栈</a><span>|</span>
      <a href="javascript:">前端Vue</a><span>|</span>
      <a href="javascript:">后端C#</a>
    </div>
    <div class="copyright">Copyright ©2019 <span style="color:#FF6600">mi.futurefe.com</span> All Rights Reserved.</div>
  </div>
</template>

<script>
  export default {
    name: 'nav-footer'
  }
</script>

<style lang="scss" scoped>
  @import "../assets/scss/config.scss";

  .footer {
    height: 234px;
    border-top: 4px solid $colorA;
    background-color: $colorB;
    color: $colorD;
    font-size: $fontI;
    text-align: center;

    .footer-logo {
      margin-top: 46px;
      margin-bottom: 31px;

      img {
        width: 53px;
        height: 36px;
        margin-bottom: 13px;
      }
    }

    .footer-link {
      margin-bottom: 10px;

      a {
        color: #999999;
        display: inline-block;
      }

      span {
        margin: 0 10px;
      }
    }
  }
</style>
