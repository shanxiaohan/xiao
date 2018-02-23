// pages/fittime/fittime.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles: [{
      icon: 'https://xiaohan77.cn/icon/1.jpg',
      cover: 'https://xiaohan77.cn/img/200044018/cover.png',
      name: 'Keep',
      title: '女版简易健身计划',
      date: '2018年01月12日',
      fileid: 200044018
    }, {
      icon: 'https://xiaohan77.cn/icon/2.jpg',
      cover: 'https://xiaohan77.cn/img/200049612/cover.png',
      name: '硬派健身',
      title: '【Oh-hard】硬派塑身攻略之如何因目标设计划？（男女通吃~）',
      date: '2017年11月12日',
      fileid: 200049612
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let pagelist_url = 'https://xiaohan77.cn/getPageList/0/10';
    util.http(pagelist_url, (data) => {
      if (data) {
        this.setData({
          articles: data.data.articles
        });
      }
    });
  },

  onScrollLower: function(event) {
    let cur_count = parseInt(this.data.articles.length);
    let pagelist_url = 'https://xiaohan77.cn/getPageList/' + (cur_count+10)+'/10';
    util.http(pagelist_url, (data) => {
      if (data) {
        let new_data = this.data.articles.concat(data.data.articles);
        this.setData({
          articles: new_data
        });
      }
      wx.showNavigationBarLoading();
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

  getDetail: function(event) {
    let fileid = event.currentTarget.dataset.fileid;
    console.log(fileid, '*****');
    wx.navigateTo({
      url: 'detail/detail?fileid=' + fileid,
    })
  }
})