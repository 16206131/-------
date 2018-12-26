// miniprogram/pages/miniProgramTrain/miniProgramTrain.js
Page({
  data: {
    br: [
      {
        name: 'br'
      }
    ]
  },
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '15070891995',
    })
  },
  purchaseItems: function () {
    wx.navigateTo({
      url: '../purchaseItems/purchaseItems',
    })
  },
  yuyueMiniProgramTrain: function () {
    wx.navigateTo({
      url: '../yuyueMiniProgramTrain/yuyueMiniProgramTrain',
    })
  },
  miniReferences: function () {
    wx.navigateTo({
      url: '../miniReferences/miniReferences',
    })
  }
})