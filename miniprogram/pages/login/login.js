const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  login: function () {
    wx.login({
      success: res => {
        wx.cloud.callFunction({
          name: 'userManager',
          data: {
            type: 'login',
            phone: '',
            password: ''
          },
          success: res => {
            let {
              code,
              msg,
              data
            } = res.result
            if (code) {
              wx.showToast({
                title: '无法登录',
                icon: 'error'
              })
            }
            wx.setStorageSync('openid', data.openid);
            app.globalData.openid = data.openid;
          },
          fail: err => {
            console.error(err);
          }
        });
      },
      fail: err => {
        console.log(err);
      }
    });
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