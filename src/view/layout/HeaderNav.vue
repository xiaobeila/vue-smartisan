<template>
  <div id="header">
    <div class="nav-global">
      <div class="container">
        <h1 class="nav-logo">
          <router-link :to="{path: '/shop'}"></router-link>
        </h1>
        <ul class="nav-aside">
          <li class="nav-user">
            <a href="javascript:;">个人中心</a>
            <!--active-->
            <div class="nav-user-wrapper">
              <div class="nav-user-list">
                <dl class="nav-user-avatar">
                  <dd><span class="ng-scope"></span></dd>
                  <dt class="ng-binding">+86 138****9453</dt>
                </dl>
                <ul>
                  <li class="order"><a href="javascript:;">我的订单</a></li>
                  <li class="support"><a href="javascript:;">售后服务</a></li>
                  <li class="coupon"><a href="javascript:;">我的优惠</a></li>
                  <li class="information"><a href="javascript:;">账户资料</a></li>
                  <li class="address"><a href="javascript:;">收货地址</a></li>
                  <li class="logout"><a href="javascript:;">退出</a></li>
                </ul>
              </div>
            </div>
          </li>
          <!--active-->
          <car-panel></car-panel>
        </ul>
        <ul class="nav-list">
          <li><a href="javascript:;">在线商城</a></li>
          <li><a href="javascript:;">坚果 Pro</a></li>
          <li><a href="javascript:;">Smartisan M1 / M1L</a></li>
          <li><a href="javascript:;">Smartisan OS</a></li>
          <li><a href="javascript:;">欢喜云</a></li>
          <li><a href="javascript:;">应用下载</a></li>
          <li><a href="javascript:;">官方论坛</a></li>
        </ul>
      </div>
    </div>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import NavBar from './NavBar';
import CarPanel from 'components/CarPanel';
export default {
  name: 'HeaderNav',
  components: {
    NavBar,
    CarPanel
  }
};

</script>

<style scoped>
@import "../../assets/css/header.css";
</style>
