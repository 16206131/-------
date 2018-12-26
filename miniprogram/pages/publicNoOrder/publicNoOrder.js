// miniprogram/pages/publicNoOrder/publicNoOrder.js
Page({
  data: {
    br: [
      {
        name: 'br'
      }
    ]
  },
  yuyuePublicNoOrder: function () {
    wx.navigateTo({
      url: '../yuyuePublicNoOrder/yuyuePublicNoOrder',
    })
  },
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '15070891995',
    })
  }
})