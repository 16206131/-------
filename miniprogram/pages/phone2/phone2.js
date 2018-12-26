// miniprogram/pages/phone2/phone2.js
Page({

  data: {
    br: [{
      name: "br",
    }
    ],
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
})