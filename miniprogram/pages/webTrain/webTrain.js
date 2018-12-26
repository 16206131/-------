// miniprogram/pages/webTrain/webTrain.js
Page({
  data: {
    br: [
      {
        name: 'br'
      }
    ]
  },
  yuyueWebTrain: function () {
    wx.navigateTo({
      url: '../yuyueWebTrain/yuyueWebTrain',
    })
  },
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '15070891995',
    })
  }
})