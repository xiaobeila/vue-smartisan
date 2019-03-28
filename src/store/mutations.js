import * as types from './mutation-types';

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
    if (bOff) {
      let goodsData = data[0];
      goodsData.count = data[1];
      goodsData.checked = true;
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
  }
};

export default mutations;
