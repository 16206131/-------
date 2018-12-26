// miniprogram/pages/yuyuePlane/yuyuePlane.js
Page({
  data:{
   name:"",
   contact:"",
   functions:""
  },
 recognizeWeixin: function(){
   wx.previewImage({
     urls: ["cloud://xiaoshistudio-91b7b2.7869-xiaoshistudio-91b7b2/szg/weixin.jpg"],
   })
 },
 formSubmit: function(e){
   const db=wx.cloud.database();
   const yuyuePlane=db.collection("yuyuePlane");
    this.data.name=e.detail.value.name;
    this.data.contact=e.detail.value.contact;
    this.data.functions=e.detail.value.functions;
   if (this.data.name.length!= 0 && this.data.contact.length != 0 && this.data.functions.length!=0)
   {
    yuyuePlane.add({
      data: {
        name: this.data.name,
        contact: this.data.contact,
        functions: this.data.functions
      },
      success: res => {
        wx.showToast({
          title: '预约成功',
        })
      },
      fail: res => {
        wx.showModal({
          icon:'none',
          title: '警告',
          content: '预约失败',
          showCancel:false
        })
      }
    })
   }
   else{
     wx.showModal({
       icon: 'none',
       title: '警告',
       content: '请完善信息！',
       showCancel: false
     })
   }
 }
})