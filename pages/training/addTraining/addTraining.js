// pages/training/addTraining/addTraining.js
const init_data = require('../../../static/data/init_data.js');
const bck_colors = ['#ccff99', '#81D4FA', '#ffff99', '#ffcc99', '#a1c4fd', '#AC92EC', '#fbc2eb']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    today: '',
    active_id: 1,       //当前激活的部位选项卡id，默认为0
    training_header: ['未完成今日训练', '已完成今日训练'],
    is_finish: false,
    rgt_bkg: '#eee',    //右侧列表的背景颜色
    body_parts: init_data.body_parts,
    part_selected: [],    //每个部位已选择的动作个数
    action_sets: init_data.action_sets,  // 二维数组，每个部位的动作列表
    picker_index_arr: init_data.picker_index_arr,     //所有动作的picker:value和is_select属性,通过index定位
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let today = new Date().getDay();
    let training_store = wx.getStorageSync('today_training'),
        part_selected = [0, 0, 0, 0, 0, 0, 0],
        picker_index_arr = this.data.picker_index_arr,
        is_finish = this.data.is_finish;
    if (training_store && training_store.today == today) {
      part_selected = training_store.part_selected;
      picker_index_arr = training_store.picker_index_arr;
      is_finish = training_store.is_finish;
    }
    
    this.setData({
      rgt_bkg: bck_colors[this.data.active_id-1],
      part_selected,
      picker_index_arr,
      today,
      is_finish
    });
  },

  // 点击上方完成训练
  finishTraining: function(e) {
    let is_finish = this.data.is_finish;
    this.setData({
      is_finish: !is_finish
    });
    // 将训练部位保存到缓存
    // if (wx.getStorageSync('week_training')) {
    //   let week_training = wx.getStorageSync('week_training');
    //   week_training[this.data.today] = is_finish ? [0, 0, 0, 0, 0, 0, 0] : this.data.part_selected;
    //   wx.setStorageSync('week_training', week_training);
    // }
  },

  changePicker: function(e) {
    let changeValue = e.detail.value,
      action_index = e.currentTarget.dataset.id;
    let { picker_index_arr, active_id } = this.data;
    picker_index_arr[active_id - 1][action_index].picker_index = changeValue;
    this.setData({
      picker_index_arr
    });
  },

  onSelectAction: function(e) {
    let select_idx = e.target.dataset.idx;
    let { picker_index_arr, active_id, part_selected } = this.data;
    let isSelect = picker_index_arr[active_id - 1][select_idx].is_select;
    
    picker_index_arr[active_id - 1][select_idx].is_select = !isSelect;
    part_selected[active_id - 1] += (isSelect ? -1 : 1);
    this.setData({
      picker_index_arr,
      part_selected
    });
    
  },

  changePart: function(e) {
    let change_part = e.currentTarget.dataset.id;
    this.setData({
      active_id: parseInt(change_part),
      rgt_bkg: bck_colors[change_part- 1],
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
    //返回上级页面，记录到缓存
    let today_training = wx.getStorageSync('today_training') || {};
    today_training['today'] = this.data.today;
    today_training['part_selected'] = this.data.part_selected;
    today_training['picker_index_arr'] = this.data.picker_index_arr;
    today_training['is_finish'] = this.data.is_finish;
    wx.setStorageSync('today_training', today_training);
    // 将训练部位保存到缓存
    if (wx.getStorageSync('week_training')) {
      let week_training = wx.getStorageSync('week_training');
      week_training[this.data.today] = this.data.is_finish ? this.data.part_selected : [0, 0, 0, 0, 0, 0, 0];
      wx.setStorageSync('week_training', week_training);
    }
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