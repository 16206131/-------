// miniprogram/pages/planeTrain/planeTrain.js
Page({
  data: {
    br: [
      {
        name: 'br'
      }
    ]
  },
 purchaseItems: function () {
    wx.navigateTo({
      url: '../purchaseItems/purchaseItems',
    })
  },
  yuyuePlaneTrain: function () {
    wx.navigateTo({
      url: '../yuyuePlaneTrain/yuyuePlaneTrain',
    })
  },
  references: function(){
    wx.navigateTo({
      url: '../references/references',
    })
  }
})