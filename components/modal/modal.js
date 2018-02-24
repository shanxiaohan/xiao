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
    modalText: {
      type: String,
      value: '不能对未来打卡哦~'
    },
    headIcon: {
      type: String,
      value: '/static/icon/modal.png'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    modal: {
      // head_icon: '/static/icon/modal.png',
      // modal_text: '不能对未来打卡哦~',
      modal_footer: ''
    },
    show_modal: true,
    animation_img: {},
    animation_modal: {}
  },

  // relations: {
  //   '../modal/modal': {
  //     type: 'parent',
  //     linked: function (target) {

  //     }
  //   }
  // },

  attached: function () {
    console.log(this.data.modalText, this.data.headIcon);
    // show-modal
    setTimeout(() => {
      let showModalAnimation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
      }).rotate(360).step()
        .scale(2, 2).opacity(0.2).step()
        .scale(1, 1).opacity(1).step()
        .export();
      this.setData({
        animation_img: showModalAnimation
      });
    }, 500);

    // disappear-modal
    // setTimeout(() => {
    //   // let disappear_animation = wx.createAnimation({
    //   //   duration: 1000,
    //   //   timingFunction: 'ease',
    //   // }).translateX(500).step().export();
    //   // this.setData({
    //   //   animation_modal: disappear_animation
    //   // });
    // }, 3000);
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showModalAnimation: function () {
      // .scale(2, 2).rotate(180).step()
      // .opacity(0.2).step()
      // .opacity(1).step()
    },

  }
})
