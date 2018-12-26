// miniprogram/pages/yuyueMiniProgramTrain/yuyueMiniProgramTrain.js
Page({
  data: {
    name: "",
    contact: "",
    job: "",
    address: "",
    requirement: ""

  },
  recognizeWeixin: function () {
    wx.previewImage({
      urls: ["cloud://xiaoshistudio-91b7b2.7869-xiaoshistudio-91b7b2/szg/weixin.jpg"],
    })
  },
  formSubmit: function (e) {
    const db = wx.cloud.database();
    const yuyueMiniProgramTrain = db.collection("yuyueMiniProgramTrain");
    this.data.name = e.detail.value.name;
    this.data.contact = e.detail.value.contact;
    this.data.job = e.detail.value.job;
    this.data.address = e.detail.value.address;
    this.data.requirement = e.detail.value.requirement;
    if (this.data.name.length != 0 && this.data.contact.length != 0 && this.data.job.length != 0 && this.data.address.length != 0 && this.data.requirement.length != 0) {
      yuyueMiniProgramTrain.add({
        data: {
          name: this.data.name,
          contact: this.data.contact,
          job: this.data.job,
          address: this.data.address,
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