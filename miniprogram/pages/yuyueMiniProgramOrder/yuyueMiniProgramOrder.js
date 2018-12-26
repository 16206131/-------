// miniprogram/pages/yuyueMiniProgramOrder/yuyueMiniProgramOrder.js
Page({
  data: {
    name: "",
    contact: "",
    serviceType: "",
    poc: "",
    requirement: ""

  },
  recognizeWeixin: function () {
    wx.previewImage({
      urls: ["cloud://xiaoshistudio-91b7b2.7869-xiaoshistudio-91b7b2/szg/weixin.jpg"],
    })
  },
  formSubmit: function (e) {
    const db = wx.cloud.database();
    const yuyueMiniProgramOrder = db.collection("yuyueMiniProgramOrder");
    this.data.name = e.detail.value.name;
    this.data.contact = e.detail.value.contact;
    this.data.serviceType = e.detail.value.serviceType;
    this.data.poc = e.detail.value.poc;
    this.data.requirement = e.detail.value.requirement;
    if (this.data.name.length != 0 && this.data.contact.length != 0 && this.data.serviceType.length != 0 && this.data.poc.length != 0 && this.data.requirement.length != 0) {
      yuyueMiniProgramOrder.add({
        data: {
          name: this.data.name,
          contact: this.data.contact,
          serviceType: this.data.serviceType,
          poc: this.data.poc,
          requirement: this.data.requirement
        },
        success: res => {
          wx.showToast({
            title: '预约成功',
          })
        },
        fail: res => {
          wx.showModal({
            icon: 'none',
            title: '警告',
            content: '预约失败',
            showCancel: false
          })
        }
      })
    }
    else {
      wx.showModal({
        icon: 'none',
        title: '警告',
        content: '请完善信息！',
        showCancel: false
      })
    }
  }
})