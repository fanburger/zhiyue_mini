import {
  config
} from "./config";

App({
  checkLogin: function () {
    try {
      let openid = wx.getStorageSync('openid')
      this.globalData.openid = openid
      return true
    } catch (err) {
      console.log('Unable to obtain openid.');
    }

    wx.navigateTo({
      url: '/pages/login/login',
    });
  },

  globalData: {},

  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        env: config.env
      });
    }
    this.checkLogin()
    this.globalData = {};
  }
});