<template>
  <li
    class="nav-cart"
    @mouseenter="showCarHandle"
    @mouseleave="hideCarHandle"
  >
    <a
      href="javascript:;"
      class="ball-rect"
      title="购物车"
    ></a>
    <!--根据class改变颜色-->
    <span
      class="cart-empty-num"
      :class="{'cart-num':count>0}"
    >
      <i>{{count}}</i>
    </span>
    <div
      class="nav-cart-wrapper"
      v-show="carShow"
    >
      <div class="nav-cart-list">
        <div
          class="empty"
          v-if="count<=0"
        >
          <h3>购物车为空</h3>
          <p>您还没有选购任何商品，现在前往商城选购吧!</p>
        </div>
        <div class="full">
          <div class="nav-cart-items">
            <ul>
              <li
                class="clear"
                v-for="(item,index) in carPanelData"
                :key="index"
              >
                <div class="cart-item js-cart-item cart-item-sell">
                  <div class="cart-item-inner">
                    <div class="item-thumb">
                      <img :src="item.ali_image+'?x-oss-process=image/resize,w_80/quality,Q_100/format,webp'">
                    </div>
                    <div class="item-desc">
                      <div class="cart-cell">
                        <h4>
                          <a href="/item/">{{item.title}}</a>
                        </h4>
                        <p class="attrs">
                          <span>{{item.spec_json.show_name}}</span>
                        </p>
                        <h6>
                          <span class="price-icon">¥</span><span class="price-num">{{item.price}}</span><span class="item-num">x {{item.count}}</span>
                        </h6>
                      </div>
                    </div>
                    <div
                      class="del-btn"
                      @click="delCarPanelHandle(item.sku_id)"
                    >删除</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="nav-cart-total">
            <p>共 <strong class="ng-binding">{{count}}</strong> 件商品</p>
            <h5>合计：<span class="price-icon">¥</span><span
                class="price-num ng-binding"
                ng-bind="cartMenu.totalPrice"
              >{{totle}}</span></h5>
            <h6>
              <a
                ng-href="http://www.smartisan.com/shop/#/cart"
                class="nav-cart-btn"
                href="http://www.smartisan.com/shop/#/cart"
              >去购物车</a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  data () {
    return {
    };
  },
  computed: {
    // 辅助函数
    ...mapState(['carPanelData', 'carShow']),
    ...mapGetters({
      count: 'totleCount',
      totle: 'totlePrice'
    })
    // 为了能够使用 `this` 获取局部状态，必须使用 `常规函数`
    // carPanelData () {
    //   return this.$store.state.carPanelData;
    // },
    // count () {
    //   return this.$store.getters.totleCount;
    // },
    // totle () {
    //   return this.$store.getters.totlePrice;
    // }
    // carShow () {
    //   return this.$store.state.carShow;
    // }
  },
  methods: {
    // 辅助函数
    ...mapMutations({
      delCarPanelHandle: 'DEL_CAR_PANEL_DATA'
    }),
    // 常规函数
    // delCarPanelHandle (id) {
    //   this.$store.commit('DEL_CAR_PANEL_DATA', id);
    // }
    showCarHandle () {
      clearTimeout(this.iTimer);
      this.$store.commit('SHOW_CAR');
    },
    hideCarHandle () {
      this.iTimer = setTimeout(() => {
        this.$store.commit('HIDE_CAR');
      }, 500);
    }
  }
};
</script>

<style scoped>
/*购物车*/

.nav-cart {
  margin-left: 21px;
  width: 61px;
}

.nav-cart > a {
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
}

.nav-cart > a:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 30px;
  height: 20px;
  background: url(../assets/images/account-icon.png) -150px -22px;
  background-size: 240px 107px;
}

.nav-cart:hover > a:before {
  background-position: 0 -22px;
}

.cart-empty-num {
  position: relative;
  margin-left: 31px;
  margin-top: -1px;
  min-width: 30px;
  text-indent: 0;
  line-height: 20px;
}

.cart-empty-num i {
  font-style: normal;
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background: #969696;
  background-image: linear-gradient(#a4a4a4, #909090);
  box-shadow: inset 0 0 1px #838383, 0 1px 2px #838383;
}

.cart-num i {
  background: #eb746b;
  background-image: linear-gradient(#eb746b, #e25147);
  box-shadow: inset 0 0 1px rgba(255, 255, 255, 0.15),
    0 1px 2px rgba(255, 255, 255, 0.15);
}

.nav-cart-wrapper {
  /* display: none; */
  position: absolute;
  right: 0;
  padding-top: 18px;
  /* opacity: 0; */
  top: 18px;
  z-index: 30;
  width: 360px;
}

.nav-cart-wrapper:before {
  position: absolute;
  content: " ";
  background: url(../assets/images/account-icon.png) no-repeat -49px -43px;
  -webkit-background-size: 240px 107px;
  background-size: 240px 107px;
  width: 20px;
  height: 8px;
  right: 34px;
  top: 10px;
  z-index: 11;
}

.nav-cart.active .nav-cart-wrapper {
  display: block;
  top: 18px;
  opacity: 1;
  visibility: visible;
}

.nav-cart-list {
  position: relative;
  z-index: 10;
  background: #fff;
  border: 0 solid rgba(255, 255, 255, 0.01);
  border-radius: 8px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.06), 0 20px 40px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

.nav-cart-list .empty {
  overflow: hidden;
  height: 134px;
  padding-top: 180px;
  background: url(../assets/images/cart-empty.png) center 90px no-repeat;
  background-size: auto 62px;
  text-align: center;
}

.nav-cart-list .empty h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 7px;
}

.nav-cart-list .empty p {
  font-size: 12px;
  color: #bcbcbc;
}

.nav-cart-list .full {
  border-radius: 8px;
  overflow: hidden;
}

.nav-cart-list .nav-cart-items {
  max-height: 665px;
  overflow-x: hidden;
  overflow-y: auto;
}

.nav-cart-list .cart-item {
  height: 120px;
  width: 100%;
  overflow: hidden;
  border-top: 1px solid #f0f0f0;
}

.nav-cart-list .cart-item:first-child {
  border-top: none;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
}

.nav-cart-list .cart-item-inner {
  height: 80px;
  padding: 20px;
  position: relative;
}

.nav-cart-list .item-thumb {
  position: relative;
  float: left;
  width: 80px;
  height: 80px;
  border-radius: 3px;
}

.nav-cart-list .item-thumb:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  border: 1px solid #f0f0f0;
  border: 0 solid transparent;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
  border-radius: 3px;
}

.nav-cart-list .item-thumb img {
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 3px;
  overflow: hidden;
}

.nav-cart-list .item-desc {
  margin-left: 98px;
  display: table;
  width: 205px;
  height: 80px;
}

.nav-cart-list .cart-cell {
  display: table-cell;
  vertical-align: middle;
}

.nav-cart-list .item-desc h4,
.nav-cart-list .item-desc h4 a {
  color: #000;
}

.nav-cart-list .item-desc h4 {
  width: 185px;
  overflow: hidden;
  word-break: keep-all;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 10px;
}

.nav-cart-list .item-desc .attrs {
  font-size: 0;
}

.nav-cart-list .item-desc .attrs span {
  position: relative;
  /* display: inline-block; */
  margin-right: 20px;
  font-size: 14px;
  line-height: 14px;
  color: #999;
}

.nav-cart-list .item-desc .attrs span:last-child {
  margin-right: 0;
}

.nav-cart-list .item-desc h6 {
  color: #cacaca;
  font-size: 12px;
  line-height: 14px;
  margin-top: 20px;
}

.nav-cart-list .del-btn {
  cursor: pointer;
  display: none;
  overflow: hidden;
  width: 20px;
  height: 20px;
  position: absolute;
  right: 20px;
  top: 50%;
  margin-top: -11px;
  background: url(../assets/images/account-icon.png) -50px -60px no-repeat;
  background-size: 240px 107px;
  text-indent: -9999em;
}

.nav-cart-list .cart-item:hover .del-btn {
  display: block;
}

.nav-cart-list .del-btn:hover {
  background-position: -75px -60px;
}

.nav-cart-list .nav-cart-total {
  position: relative;
  padding: 20px;
  height: 40px;
  background: #fafafa;
  border-top: 1px solid #f0f0f0;
  border-radius: 0 0 8px 8px;
  box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.5),
    0 -3px 8px rgba(0, 0, 0, 0.04);
  background: linear-gradient(#fafafa, #f5f5f5);
}

.nav-cart-list .nav-cart-total p {
  margin-bottom: 4px;
  line-height: 16px;
  font-size: 12px;
  color: #c1c1c1;
}

.nav-cart-list .nav-cart-total h5 {
  line-height: 20px;
  font-size: 14px;
  color: #6f6f6f;
}

.nav-cart-list .nav-cart-total h5 span {
  font-size: 18px;
  color: #de4037;
  display: inline-block;
  font-weight: 700;
}

.nav-cart-list .nav-cart-total h5 span:first-child {
  font-size: 12px;
  margin-right: 5px;
}

.nav-cart-list .nav-cart-total h5 span {
  font-size: 18px;
  color: #de4037;
  display: inline-block;
  font-weight: 700;
}

.nav-cart-list .nav-cart-total h6 {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 108px;
}

.nav-aside .nav-cart-btn {
  display: block;
  height: 38px;
  background: #688fe8;
  background: linear-gradient(#688fe8, #5079e1);
  border: 1px solid #5c81e3;
  border-radius: 6px;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 3px rgba(0, 0, 0, 0.2);
  line-height: 38px;
  text-align: center;
  color: #fff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.15);
}
</style>
