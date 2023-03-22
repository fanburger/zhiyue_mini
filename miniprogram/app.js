import {
  config
} from "./config";

App({
  checkLogin: function () {
    if (!this.globalData.userInfo) {
      wx.navigateTo({
        url: '/pages/login/login',
      });
    }
  },

  login: function () {
    wx.login({
      success: res => {
        wx.cloud.callFunction({
          name: 'login',
          data: {
            code: res.code
          },
          success: res => {
            console.log(res.result);
            wx.setStorageSync('userInfo', res.result.userInfo);
            this.globalData.userInfo = res.result.userInfo; // save to globalData
          },
          fail: err => {
            console.error(err);
          }
        });
      }
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
    this.globalData = {};
  }
});