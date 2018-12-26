// miniprogram/pages/miniProgram/miniProgram.js
Page({
  data: {
    br: [
      {
        name: 'br'
      }
    ]
  },
  yuyueMiniProgramOrder: function () {
    wx.navigateTo({
      url: '../yuyueMiniProgramOrder/yuyueMiniProgramOrder',
    })
  },
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '15070891995',
    })
  },
  phone1: function(){
    wx.navigateTo({
      url: '../phone1/phone1',
    })
  },
  phone2: function () {
    wx.navigateTo({
      url: '../phone2/phone2',
    })
  },
  phone3: function () {
    wx.navigateTo({
      url: '../phone3/phone3',
    })
  },
  phone4: function () {
    wx.navigateTo({
      url: '../phone4/phone4',
    })
  },
  phone5: function () {
    wx.navigateTo({
      url: '../phone5/phone5',
    })
  },
  phone6: function () {
    wx.navigateTo({
      url: '../phone6/phone6',
    })
  },
})