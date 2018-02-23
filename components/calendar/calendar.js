// components/calendar/calendar.js
const month_en = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 从外部传入的属性，和data共同渲染组件，注意必须有type属性
    // calendar: {
    //   type: Object,
    //   observer: function(newVal, oldVal) {

    //   }
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
    calendar: {},
    show_modal: false
  },

  attached: function() {
    this._initCalendar();
  },

  // relations: {
  //   '../modal/modal': {
  //     type: 'child',
  //     linked: function(target) {

  //     }
  //   }
  // },

  /**
   * 组件的方法列表
   */
  methods: {
    _initCalendar: function () {
      let nowDate = new Date();
      let year = nowDate.getFullYear();
      let month = nowDate.getMonth() + 1;
      let date = nowDate.getDate();
      let days = this._calDays(year, month, date);
      let calendar = {
        month,
        year,
        date,
        title: month_en[month - 1],
        days
      };
      // console.log(calendar);
      this.setData({
        calendar
      });
    },

    _calDays: function(year, month, date) {
      //当前月份的总天数
      let total_days = new Date(year, month, 0).getDate();
      // 当前月份第一天是周几
      let first_day = (new Date(Date.UTC(year, month - 1, 1)).getDay()) % 7;
      // 计算当前月历的总行数
      let total_rows = Math.ceil((first_day + total_days) / 7);
      let days = Array.from({ length: total_rows }, () => []);  // ES6-Array.from()构造列表
      let cur_year = new Date().getFullYear(),
        cur_month = new Date().getMonth() + 1;
      // 填充第一天之前的空格
      for (let i = 0; i < first_day; i++) {
        days[0].push({
          type: "empty"
        });
      }
      // 填充整月的天数
      for (let i = 1; i <= total_days; i++) {
        let row = Math.floor((i + first_day - 1) / 7),
          col = (i + first_day - 1) % 7,
          type = 'future';
        if (year < cur_year || month < cur_month) {
          type = 'past';
        } else if (year == cur_year && month == cur_month && i < date) {
          type = 'past';
        }
        else if (year == cur_year && month == cur_month && i == date) {
          type = 'now';
        }
        //TODO：从缓存中判断是否有当天的打卡情况
        let current_checked = false,
          check_store = wx.getStorageSync('dailyCheck');
        let cur_date = year + '-' + (month < 10 ? ("0" + month) : month) + '-' + (i < 10 ? ("0" + i) : i);
          if (check_store && check_store[cur_date]) {
            let current_store = check_store[cur_date];
            for (let i = 0; i < current_store.length; i++) {
              if (current_store[i]['isChecked']) {
                current_checked = true;
                break;
              }
            }
          }
        days[row][col] = {
          type,
          "date": i,
          "degree": "0",
          current_checked
        };
      }
      // 填充最后一行的空白
      let last_days = 7 * total_rows - first_day - total_days;
      for (let i = 0; i < last_days; i++) {
        days[total_rows - 1].push({
          type: "empty"
        });
      }
      // console.log(days, 'calendar days***');
      return days;
      
    },

    preMonth: function(e) {
      this._updateCalendar(-1);
    },

    nextMonth: function (e) {
      this._updateCalendar(1);
    },

    _updateCalendar: function(opt) {
      let year = this.data.calendar.year,
        month = this.data.calendar.month,
        date = this.data.calendar.date;
      year = (month == 1 && opt == -1) ? year - 1 : year;
      year = (month == 12 && opt == 1) ? year + 1 : year;
      month = (month + opt) % 12;
      month = (month == 0) ? 12 : month;
      let days = this._calDays(year, month, date);
      this.setData({
        "calendar.year": year,
        "calendar.month": month,
        "calendar.days": days,
        "calendar.title": month_en[month - 1]
      });
    },

    dailyCheckin: function (e) {
      let { pos, date, degree, type } = e.currentTarget.dataset;
      // let [, month, day] = date.split('-');   //ES6-空占位符
      if(type === 'future') {
        this.setData({
          show_modal: true
        });
        setTimeout(() => {
          this.setData({
            show_modal: false
          });
        }, 4000);
        // wx.showToast  ({
        //   title: '不能给未来打卡哦~ 请耐心等待！',
        // })
        return;
      }
      wx.navigateTo({
        url: '../daily/daily?date=' + date + '&type=' + type,
      })
    },
  }
})
