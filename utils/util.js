var appData = getApp().data;
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 复杂对象的深拷贝
const deepCopy = obj => {
  let newObj = obj.constructor === Array ? [] : {};
  if (typeof obj !== 'object') {
    return;
  }
  for (let i in obj) {
    newObj[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i];
  }
  return newObj;
}

// 公共方法，打卡页面data和缓存dailyCheck数据结构的转换
// 【更新】只转换cards部分
const fromPageToStore = (page_data) => {
  // 将page_data深拷贝
  let page_copy = deepCopy(page_data),
      daily_cards = [];
  page_copy.map(item => {
    daily_cards.push({
      cardId: item.cardId,
      idx: item.idx,
      isChecked: item.isChecked,
      lastDays: item.lastDays
    });
  });
  // store_data[page_copy.date] = daily_cards;
  return daily_cards;
}

// 根据缓存数据返回页面data，注意idx要对应：注意只返回pageData.cards部分
const fromStoreToPage = (storeData) => {
  let storeCopy = deepCopy(storeData),
      globalCards = appData.static_cards,
      pageData = [];
  storeCopy.map((item) => {
    if (Object.keys(globalCards).indexOf(item.cardId+'') >= 0) {
      pageData.push({
        idx: item.idx,
        cardId: item.cardId,
        content: globalCards[item.cardId][0],
        isChecked: item.isChecked,
        isEditing: false,
        lastDays: item.lastDays,
        icon: '/static/icon/card/' + globalCards[item.cardId][1] + '-1.png'
      });
    }
  });
  // 根据缓存原有的idx排序，再调整为从0开始，和数组下标对应
  // pageData.sort((x,y) => x.idx-y.idx);
  // pageData.map((item, i) => {
  //   item['idx'] = i;
  // });
  return pageData;
}

//http方法请求接口数据
const http = (url, callback) => {
  wx.request({
    url: url, 
    header: {
      'Content-Type': 'application/json'
    },
    success: function(res) {
      callback(res.data);
    },
    fail: function(err) {
      console.log(err);
    }
  })
}

module.exports = {
  formatTime: formatTime,
  deepCopy: deepCopy,
  fromPageToStore: fromPageToStore,
  fromStoreToPage: fromStoreToPage,
  http: http
}
