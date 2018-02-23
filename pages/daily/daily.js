// pages/daily/daily.js
const utils = require('../../utils/util.js');
var appData = getApp().data;

// const defaultData = {
//   cards:  [{
//     idx: 0,       //代表当前card在页面的显示位置
//     cardId: 1,    //代表globalData中的卡片实体
//     content: '早起',
//     isChecked: false,
//     isEditing: false,
//     lastDays: 0,
//     icon: '/static/icon/card/6-1.png'
//   }]
// };
Page({

  /**
   * 页面的初始数据
   * - 设置页面的初始打卡数据;
   * - 第一次加载小程序，进入当日打卡页面，默认使用defaultData打卡页面，后续编辑再更新；
   * - 当天第一次进入打卡页面(type为now)：缓存中没有该date下的数据，取最新一条的lastDays，以及默认isChecked为false；
   * - 对于'past'类型的日期不可编辑，只提供显示（不可以补打卡~）；
   * - 对于'future'类型的日期，不能进入该页面；
   */
  data: {
    date: '',
    type: '',
    cards: [],
    isEditing: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { date, type } = { ...options };  // ES6-对象的解构赋值
    this.setData({
      date,
      type
    });
  },

  // 点击打卡，改变状态，同时更新缓存
  tapCheck: function (e) {
    let idx = e.currentTarget.dataset.idx;
    let { date, type, cards } = this.data;
    if (type !== 'now') {
      console.log('不能补打卡喽&&&&&');
      return;
    }
    let isChecked = !!!cards[idx].isChecked,
      lastDays = cards[idx].lastDays,
      key1 = 'cards[' + idx + '].isChecked',
      key2 = 'cards[' + idx + '].lastDays',
      storage = wx.getStorageSync('dailyCheck');
    lastDays += (isChecked) ? 1 : -1;
    this.setData({
      [key1]: isChecked,
      [key2]: lastDays
    });
    let direct = isChecked ? -1 : 0;
    this.dropDone(idx, direct);
    storage[date] = utils.fromPageToStore(this.data.cards);
    wx.setStorageSync('dailyCheck', storage);
  },

  /**
   * @direct：表示将目标移动的位置，0表示添加到头部（取消打卡），-1表示添加到尾部（完成打卡）
   */
  dropDone: function (target, direct = 0) {
    let cards = this.data.cards;
    let cut = cards.splice(target, 1);
    cards = (direct === 0) ? cut.concat(cards) : cards.concat(cut);
    cards.map((item, i) => {
      item['idx'] = i;
    });
    console.log(cards, '******cards****test');
    this.setData({ cards });
  },

  //点击新增打卡页面
  addCard: function (e) {
    let date = this.data.date;
    wx.navigateTo({
      url: './addcard/addcard?date=' + date,
    });
  },

  // 点击编辑打卡页面
  editCard: function (e) {
    // 每个card内的isEditing和外部的同名属性保持一致
    let isEditing = !this.data.isEditing;
    let cards = this.data.cards.map(item => {
      item['isEditing'] = isEditing;
      return item;
    });
    this.setData({
      isEditing,
      cards
    });
    // ---和缓存保持同步，否则再次进入页面一直保持isEditing的状态
    // 这里不更新缓存了，当进入页面加载数据时手动将storage中的isEditing设置为false，保证每次进入页面都不是编辑的状态
  },

  // 删除某个card，首先对appData全局变量做修改
  // 只将当天的缓存修改，past不做修改
  tapDel: function (e) {
    let { date, cards } = this.data;
    // delete appData.static_cards[e.target.dataset.cardid];
    // 调整idx和数组下标保持一致，注意map方法的第二个参数表示数组下标
    // 注意filter方法不会对原数组改变
    cards = cards.filter(item => item.cardId != e.target.dataset.cardid);
    cards.map((item, i) => {
      item['idx'] = i;
    });
    this.setData({ cards });
    // 修改当天的storage
    let storage = wx.getStorageSync('dailyCheck');
    storage[date] = utils.fromPageToStore(cards);
    wx.setStorageSync('dailyCheck', storage);
  },

  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 从添加打卡页面跳转回来执行onShow回调方法，不会执行onLoad方法
    let { date, type } = this.data;
    let initData = { date, type, cards: [] };
    let globalCards = utils.deepCopy(appData.static_cards),
      cards_num = appData.cards_num;     // 注意深拷贝，否则改变全局变量的引用
    let storage = wx.getStorageSync('dailyCheck'),
      history = Object.keys(storage).sort().filter(d => d <= date).splice(-1)[0];
    // 首先判断是否第一次加载该页面，缓存中不存在'dailyCheck'的记录
    if (!storage || !history) {
      console.log("!!!No dailyCheck Storage!!!");
      // 根据全局card实体生成页面的init-data
      // 默认生成cards_num个data
      for (let idx = 0; idx < cards_num; idx++) {
        initData.cards.push({
          cardId: idx + 1,
          idx: idx,
          content: globalCards[idx + 1][0],
          isChecked: false,
          isEditing: false,
          lastDays: 0,
          icon: '/static/icon/card/' + globalCards[idx + 1][1] + '-1.png'
        });
      }
      storage = storage || {};    //!!!!!!!!!!!!!!!!!!
      storage[date] = utils.fromPageToStore(initData.cards);
      wx.setStorageSync('dailyCheck', storage);
    } else {
      // 判断是否存在当天的缓存
      let cur_data = storage[date];
      if (cur_data) {
        // 从缓存取出当天数据
        initData.cards = utils.fromStoreToPage(cur_data);
        // console.log(utils.fromStoreToPage(initData.cards), 'testtest&&&&&');
      } else {
        // 该日期下无缓存数据：取最近一条数据，将所有的isChecked初始化为false其余不变
        // [Note]: 对象的无序性是否对更新数据有影响= =对日期排序
        let recent_data = utils.deepCopy(storage[history]);
        recent_data.map(item => {
          item.isChecked = false;
        });
        storage[date] = recent_data;
        wx.setStorageSync('dailyCheck', storage);
        initData.cards = utils.fromStoreToPage(recent_data);
      }
    }
    console.log(initData, 'initData******');
    this.setData({ ...initData });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  }
})