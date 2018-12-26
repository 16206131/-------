// miniprogram/pages/planeOrder/planeOrder.js
Page({

  data:{
    br:[
      {
        name:'br'
      }
    ]
  },
  planeSuccessfulCase: function(){
    wx.navigateTo({
      url: '../planeSuccessfulCase/planeSuccessfulCase',
    })
  },
  yuyuePlane: function () {
    wx.navigateTo({
      url: '../yuyuePlane/yuyuePlane',
    })
  },
  pay: function(){
    wx.requestPayment({
      timeStamp: 'new Date()',
      nonceStr: '123',
      package: 'prepay_id=123',
      signType: 'MD5',
      paySign: '',
    })
  }
})