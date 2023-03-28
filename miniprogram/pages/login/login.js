const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    password: '',
    isLogin: true,
    policyChecked: false,
    inputCustomStyle: 'border-radius: 66rpx;border: 6rpx solid #86D6DD;box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.1);'
  },

  login: function () {
    wx.switchTab({
      url: '/pages/home/home'
    })
  },

  switchType: function () {
    this.setData({
      isLogin: !this.data.isLogin
    })
  },

  swPolicyChecked: function () {
    this.setData({
      policyChecked: !this.data.policyChecked
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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