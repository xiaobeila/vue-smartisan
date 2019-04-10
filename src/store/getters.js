// 统计购物车数量
export const totleCount = state => {
  let count = 0;
  state.carPanelData.forEach((goods) => {
    count += goods.count;
  });
  return count;
};

// 统计购物车价格
export const totlePrice = state => {
  let total = 0;
  state.carPanelData.forEach((goods) => {
    total += goods.price * goods.count;
  });
  return total;
};

// 统计购物车选中的数量
export const checkedCount = state => {
  let counta = 0;
  state.carPanelData.forEach((goods) => {
    if (goods.checked) {
      counta += goods.count;
    }
  });
  return counta;
};

// 统计购物车选中的价格
export const checkedTotle = state => {
  let total = 0;
  state.carPanelData.forEach((goods) => {
    if (goods.checked) {
      total += goods.price * goods.count;
    }
  });
  return total;
};

// 统计购物车全选中状态
export const allChecked = state => {
  let allChecked = true;
  state.carPanelData.map((goods) => {
    if (!goods.checked) {
      allChecked = false;
    }
  });
  return allChecked;
};

// 统计订单价格
export const paymentPrice = state => {
  let total = 0;
  if (state.provisionalOrder && state.provisionalOrder.items) {
    state.provisionalOrder.items.forEach((goods) => {
      total += goods.price * goods.count;
    });
  }
  return total;
};
