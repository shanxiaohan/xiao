// pages/training/training.js
const wxCharts = require('../../utils/wxcharts.js');
var pieChart = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    today: 0,
    is_empty: true,
    chartTitle: '本周训练部位',
    week_training: [],
    part_sum: [],
    series: [{
      name: '体能',
      data: 0,
      color: '#AC92EC'
    }, {
      name: '胸',
      data: 1,
      color: '#81D4FA',
      // format
    }, {
      name: '背',
      data: 1,
      color: '#ffff99',
      // format
    }, {
      name: '肩',
      data: 0,
      color: '#ffcc99',
      // format
    }, {
      name: '臂',
      data: 1,
      color: '#a1c4fd',
      // format
    }, {
      name: '臀腿',
      data: 0,
      color: '#ccff99',
      // format
    }, {
      name: '腰腹',
      data: 0,
      color: '#fbc2eb',
      // format
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    // 先从Storage中取数据
    let today = new Date().getDay();
    let week_training = wx.getStorageSync('week_training') || [];
    if (!wx.getStorageSync('week_training') || week_training.length === 0) {
      for (let i = 0; i < 7; i++) {
        week_training.push(Array(7).fill(0));
      }
      wx.setStorageSync('week_training', week_training);
    }
    let part_sum = [];
    for (let i = 0; i < 7; i++) {
      let daily_sum = 0;
      for (let item of week_training) {
        daily_sum += item[i];
      }
      part_sum.push(daily_sum)
    }
    this.setData({
      week_training,
      today,
      part_sum
    });
    let chart_width = 320;
    try {
      chart_width = wx.getSystemInfoSync().windowWidth;
    } catch (e) {
      console.log(e, 'getSystemInfoSync failed!')
    }


    let series = this.data.series;
    //Trick：如果统计结果全部为0则显示时全部置为1，不改变Storage的真实值
    let trick_sum = part_sum.reduce((x, y) => x + y);
    let is_empty = trick_sum === 0;
    this.setData({
      is_empty
    });
    let format = function () {
      return this.name + '(' + (is_empty ? 0 : this.data) + ')';
      // return this.name + '(' + this.data + ')';
    };
    for (let i = 0; i < 7; i++) {
      series[i].data = (trick_sum === 0) ? 1 : part_sum[i];
      series[i].format = format;
    }

    pieChart = new wxCharts({
      animation: true,
      canvasId: 'pieCanvas',
      type: 'pie',
      series,
      width: chart_width,
      height: 320,
      dataLabel: true,
      background: '#3d3744',
      extra: {
        legendTextColor: '#ffffff',
        pie: {
          offsetAngle: -60
        }
      },
      title: {
        name: '本周训练部位分布',
        color: '#ffffff'
      }
    });

  },

  tapPlanBox: function (e) {
    wx.navigateTo({
      url: './addTraining/addTraining',
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('Hide111****');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload111****');
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