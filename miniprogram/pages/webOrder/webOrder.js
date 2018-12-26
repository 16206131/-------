// miniprogram/pages/webOrder/webOrder.js
Page({
  data: {
    br: [
      {
        name: 'br'
      }
    ]
  },
  yuyueWebOrder: function(){
    wx.navigateTo({
      url: '../yuyueWebOrder/yuyueWebOrder',
    })
  },
  call: function(){
    wx.makePhoneCall({
      phoneNumber: '15070891995',
    })
  }
})