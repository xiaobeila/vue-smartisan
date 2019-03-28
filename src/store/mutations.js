import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types';

Vue.use(Vuex);
const mutations = {
  // 选中的购物车
  [types.CHECKED_CARPANEL_DATA] (state, data) {
    let checkedCarPanelData = [];
    state.carPanelData.forEach((goods) => {
      if (goods.checked) {
        checkedCarPanelData.push(goods);
      }
    });
    return checkedCarPanelData;
  },

  // 加入购物车
  [types.ADD_CAR_PANEL_DATA] (state, data) {
    let bOff = true;
    state.carPanelData.forEach((goods) => {
      if (goods.sku_id === data[0].sku_id) {
        goods.count += data[1];
        if (goods.count > goods.limit_num) {
          goods.count -= data[1];
          state.maxOff = true;
          bOff = false;
          return;
        }
        bOff = false;
        state.ball.el = event.path[0];
        state.ball.show = true;
        state.ball.img = data[0].ali_image;
        state.carShow = true;
      }
    });
    if (bOff) {
      let goodsData = data[0];
      Vue.set(goodsData, 'count', data[1]);
      Vue.set(goodsData, 'checked', true);
      state.carPanelData.push(goodsData);
      state.carShow = true;
      state.ball.el = event.path[0];
      state.ball.show = true;
      state.ball.img = data[0].ali_image;
    }
  },
  // 删除购物车
  [types.DEL_CAR_PANEL_DATA] (state, id) {
    state.carPanelData.forEach((goods, index) => {
      if (goods.sku_id === id) {
        state.carPanelData.splice(index, 1);
      }
    });
  },
  // 显示购物车
  [types.SHOW_CAR] (state) {
    state.carShow = true;
  },
  // 隐藏购物车
  [types.HIDE_CAR] (state) {
    state.carShow = false;
  },
  // 修改小球状态
  [types.UPDATA_BALL] (state) {
    state.ball.show = false;
  }
};

export default mutations;
