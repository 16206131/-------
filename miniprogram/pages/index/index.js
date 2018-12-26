// pages/index/.js
const app = getApp()
Page({
  data:{
    nodes:[{
      name:'div',
      attrs:{
        style:'margin:270px;'
      }
    }
     
    ],
    br: [{
      name: 'br'
    }

    ],
  danmuList: [
      {
        text: '欢迎来到小石工作室',
        color: '#ff0000',
        time: 1
      },
      {
        text: '缔造国内主流，诚心诚意与您合作',
        color: '#ff00ff',
        time: 3
      },
      {
        text: '定制开发无人机',
        color: '#ff0000',
        time: 10
      },
    {
      text: '无人机培训',
      color: 'rgb(44, 80, 41)',
      time: 15
    },
    {
      text: '定制网站',
      color: '#ff0000',
      time: 20
    },
    {
      text: '网站培训',
      color: 'rgb(21, 255, 0)',
      time: 25
    },
    {
      text: '软件工程精品课程辅导',
      color: 'rgb(183, 0, 255)',
      time: 30
    },
    {
      text: '小程序定制',
      color: 'rgb(255, 196, 0)',
      time: 35
    },
    {
      text: '微信公众号定制',
      color: 'rgb(0, 255, 55)',
      time: 40
    },
    {
      text: '期待与您合作，首单享受八五折优惠',
      color: 'aqua',
      time: 45
    }


      ]

    
  },
  planeOrder: function()
  {
  
     wx.navigateTo({
       url: '../planeOrder/planeOrder'
     })

   
  },
  planeTrain: function () {

    wx.navigateTo({
      url: '../planeTrain/planeTrain'
    })

  },
  webOrder: function () {

    wx.navigateTo({
      url: '../webOrder/webOrder'
    })
  },
  webTrain: function () {

    wx.navigateTo({
      url: '../webTrain/webTrain'
    })
  },
  miniProgramOrder: function () {

    wx.navigateTo({
      url: '../miniProgram/miniProgram'
    })
  },
  miniProgramTrain: function () {

    wx.navigateTo({
      url: '../miniProgramTrain/miniProgramTrain'
    })
  },
  publicNoOrder: function () {

    wx.navigateTo({
      url: '../publicNoOrder/publicNoOrder'
    })
  },
  AI: function () {

    wx.navigateTo({
      url: '../AI/AI'
    })
  },
  courseTeach: function () {

    wx.navigateTo({
      url: '../courseTeach/courseTeach'
    })
  },
  showCar: function(){
    wx.navigateTo({
      url: '../phone1/phone1',
    })
  },
  showFurniture: function(){
    wx.navigateTo({
      url: '../phone2/phone2',
    })
  },
  showHotel: function(){
    wx.navigateTo({
      url: '../phone3/phone3',
    })
  },
  showEdu: function(){
    wx.navigateTo({
      url: '../phone4/phone4',
    })
  },
  seeMoreProduct: function(){
    wx.navigateTo({
      url: '../moreProduct/moreProduct',
    })
  },
  aboutUs: function(){
    wx.navigateTo({
      url: '../aboutUs/aboutUs',
    })
  }

})