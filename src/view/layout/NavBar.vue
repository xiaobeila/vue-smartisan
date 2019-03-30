<template>
  <div class="nav-sub">
    <div class="nav-sub-wrapper">
      <div class="container">
        <ul class="nav-list">
          <li>
            <router-link :to="{path: '/shop'}">首页</router-link>
          </li>
          <li><a href="javascript:;">手机</a></li>
          <li><a href="javascript:;">“足迹系列”手感膜</a></li>
          <li class="active"><a href="javascript:;">官方配件</a></li>
          <li><a href="javascript:;">周边产品</a></li>
          <li><a href="javascript:;">第三方配件</a></li>
          <li><a href="javascript:;">全部商品</a></li>
          <li><a href="javascript:;">服务</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/*次导航*/

.container {
  height: 100%;
  width: 1220px;
  margin: 0 auto;
}

.nav-sub {
  position: relative;
  z-index: 20;
  height: 90px;
}

.nav-sub-wrapper {
  padding: 31px 0;
  height: 28px;
  position: relative;
}

.nav-sub .nav-list {
  float: left;
  height: 28px;
  line-height: 28px;
}

.nav-sub .nav-list li {
  position: relative;
  float: left;
  padding-left: 2px;
}

.nav-sub .nav-list li:first-child {
  padding-left: 0;
}

.nav-sub .nav-list li:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 13px;
  width: 2px;
  height: 2px;
  background: #bdbdbd;
}

.nav-sub .nav-list li:first-child:before {
  display: none;
}

.nav-sub .nav-list li a {
  display: block;
  padding: 0 20px;
  color: #666;
}

.nav-sub .nav-list li:first-child a {
  padding-left: 10px;
}

.nav-sub .nav-list li.active a {
  font-weight: 700;
}

.nav-sub .nav-list li a:hover {
  color: #6b95ea;
}
</style>
