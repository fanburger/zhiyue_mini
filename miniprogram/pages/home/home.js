// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeTab: 'book',

    // static content
    rules: [],

    // style variable
    roomStyle: {
      full: 'border: 2rpx solid #FFE5E5;background: #FFF5F5;',
      nfull: 'border: 2px solid #EEEEEE;background: #FFFFFF;'
    }
  },

  setRules() {
    let rules = []
    let titles = ['信用分规则', '选座规则', '签到规则', '座位保留规则', '预约设置', '选座设置', '监督机制', '图书馆开馆时间']
    let contents = ['初始信用分100分，按时使用图书馆资源则加1分，出现违规行为则相应扣分，分数越高，系统各类优先权越高',
      '我们提供自选座位的方式；自选座位失败则随机选座；若图书馆资源不足，将根据信用分优先分配',
      '按照预约时间到达图书馆签到，在离开图书馆时签退；未按照预约时间签到将扣除信用分1分',
      '申请座位保留，座位在40分钟内状态不变，超时则扣除信用分1分',
      '开馆前，可提前7个小时预定',
      '退座1分钟后可再次选座',
      '通过图书馆放置的小型蓝牙发射器，搜索附近的蓝牙设备以确认用户是否在场；若超过15分钟未检测到且未申请座位保留，则将该座位状态变为空闲中并扣除用户信用分1分',
      '7：00-22：30'
    ]

    for (let index = 0; index < titles.length; index++) {
      const element = titles[index];
      rules.push({
        title: titles[index],
        content: contents[index]
      })
    }

    this.setData({
      rules: rules
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setRules()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})