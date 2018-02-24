// pages/daily/addcard/addcard.js
var appData = getApp().data;
const utils = require('../../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icons: [],
    isConfirm: false,
    content: '',
    icon_id: '',
    date: '',
    show_modal: false,
    modal_text: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let date = options.date;
    let icons = [];
    for (let i = 1; i <= 32; i++) {
      let item = { id: i };
      item['src'] = '/static/icon/card/' + i;
      item['isSelect'] = false;
      icons.push(item);
    }
    this.setData({ icons, date });
  },

  //输入框失去焦点（bindblur回调函数可以响应键盘回车事件）
  handleBlur: function (e) {
    let content = e.detail.value.trim();
    if (content) {
      this.setData({ content });
    }
  },

  // 输入框获得焦点，将确认图标变暗
  handleFocus: function (e) {
    this.setData({
      isConfirm: false
    })
  },

  // 点击确认图标处理函数 
  confirmInput: function (e) {
    this.setData({
      isConfirm: true
    });
   
    let {content, icon_id} = this.data;
    console.log(content, icon_id, 'content%%%%');
    if (!content || !icon_id) {
      console.log('show alert modal!');
      this.setData({
        show_modal: true,
        modal_text: !content ? '内容不能为空喔~' : '别忘了选一个喜欢的图标~'
      });
      setTimeout(() => {
        this.setData({
          show_modal: false,
          isConfirm: false,
          icon_id: '',
          modal_text: ''
        });
      }, 4000);
      return;
    }
    // 更新全局card数据，同时返回页面时更新当日打卡绑定的数据
    let globalCards = appData.static_cards,
      keys = Object.keys(globalCards).sort(),
      key = parseInt(keys[keys.length-1]) + 1;
    globalCards[key] = [content, icon_id+''];
    // 修改上级页面的渲染数据
    let pages = getCurrentPages();
    let prePage = pages[pages.length - 2];
    let cards = prePage.data.cards;
    // 将新增元素添加到card的第一位
    cards.splice(0, 0, {
      idx: 0,
      cardId: key,
      content: content,
      isChecked: false,
      lastDays: 0,
      isEditing: false,
      icon: '/static/icon/card/' + icon_id + '-1.png'
    });
    cards.map((item, i) => {
      item['idx'] = i;
    });
    prePage.setData({ cards });
    // 更新缓存
    let hist_store = wx.getStorageSync('dailyCheck');
    hist_store[this.data.date] = utils.fromPageToStore(cards);
    // let new_store = utils.fromPageToStore(prePage.data);
    // Object.assign(hist_store, new_store);
    wx.setStorageSync('dailyCheck', hist_store);
    wx.navigateBack();
  },

  // 点击图片选择
  handleImgSel: function (e) {
    let icon_id = parseInt(e.currentTarget.dataset.id);
    let icons = this.data.icons;
    if(this.data.icon_id) {
      icons[this.data.icon_id - 1]['isSelect'] = false;
    }
    icons[icon_id - 1]['isSelect'] = true;
    this.setData({ icon_id, icons });
  },

  // 点击图片取消
  handleImgCancel: function (e) {
    let icon_id = parseInt(e.currentTarget.dataset.id);
    let icons = this.data.icons;
    icons[icon_id - 1]['isSelect'] = false;
    this.setData({ 
      icon_id: '',
      icons
    });
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

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})