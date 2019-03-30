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
