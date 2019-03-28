const state = {
  carPanelData: [],
  receiveInfo: [{
    'name': '王某某',
    'phone': '13811111111',
    'areaCode': '010',
    'landLine': '64627856',
    'provinceId': 110000,
    'province': '北京市',
    'cityId': 110100,
    'city': '市辖区',
    'countyId': 110106,
    'county': '海淀区',
    'add': '上地十街辉煌国际西6号楼319室',
    'default': true,
    'checked': true
  }, {
    'name': '李某某',
    'phone': '13811111111',
    'areaCode': '010',
    'landLine': '64627856',
    'provinceId': 110000,
    'province': '北京市',
    'cityId': 110100,
    'city': '市辖区',
    'countyId': 110106,
    'county': '海淀区',
    'add': '上地十街辉煌国际东6号楼350室',
    'default': false,
    'checked': false
  }],
  provisionalOrder: [],
  orderData: [],
  maxOff: false,
  carShow: false,
  ball: {
    show: false,
    el: null,
    img: ''
  }
};

export default state;
