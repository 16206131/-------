// miniprogram/pages/references/references.js
Page({
 data:{
  color:"blue",
   br: [
     {
       name: 'br'
     }
   ],
 },
  download1: function(){
 
    this.setData({
      color:"green"
    });
     wx.cloud.downloadFile({
       fileID:'cloud://xiaoshistudio-91b7b2.7869-xiaoshistudio-91b7b2/资料/互补滤波与卡尔曼滤波对比.pdf',
      success:res=>{
       this.data.file = res.tempFilePath;
        wx.showLoading({
          title: '加载中',
          
        });
        setTimeout(function () {
          wx.hideLoading()
        }, 1000);
      
        wx.openDocument({
          filePath: res.tempFilePath,
        });
      },
      fail:res=>{
        wx.showModal({
          title: '警告',
          content: '下载失败',
        })
      }
    });
   },
  download2: function () {

    this.setData({
      color: "green"
    });
    wx.cloud.downloadFile({
      fileID: 'cloud://xiaoshistudio-91b7b2.7869-xiaoshistudio-91b7b2/资料/GPS模块原理图.pdf',
      success: res => {
        this.data.file = res.tempFilePath;
        wx.showLoading({
          title: '加载中',

        });
        setTimeout(function () {
          wx.hideLoading()
        }, 1000);

        wx.openDocument({
          filePath: res.tempFilePath,
        });
      },
      fail: res => {
        wx.showModal({
          title: '警告',
          content: '下载失败',
        })
      }
    });
  },
  download3: function () {

    this.setData({
      color: "green"
    });
    wx.cloud.downloadFile({
      fileID: 'cloud://xiaoshistudio-91b7b2.7869-xiaoshistudio-91b7b2/资料/04线性规划.pdf',
      success: res => {
        this.data.file = res.tempFilePath;
        wx.showLoading({
          title: '加载中',

        });
        setTimeout(function () {
          wx.hideLoading()
        }, 1000);

        wx.openDocument({
          filePath: res.tempFilePath,
        });
      },
      fail: res => {
        wx.showModal({
          title: '警告',
          content: '下载失败',
        })
      }
    });
  },
  download4: function () {

    this.setData({
      color: "green"
    });
    wx.cloud.downloadFile({
      fileID: 'cloud://xiaoshistudio-91b7b2.7869-xiaoshistudio-91b7b2/资料/SPSS与多元统计分析方法(较短).doc',
      success: res => {
        this.data.file = res.tempFilePath;
        wx.showLoading({
          title: '加载中',

        });
        setTimeout(function () {
          wx.hideLoading()
        }, 1000);

        wx.openDocument({
          filePath: res.tempFilePath,
          fileType:'doc'
        });
      },
      fail: res => {
        wx.showModal({
          title: '警告',
          content: '下载失败',
        })
      }
    });
  },
  download5: function () {

    this.setData({
      color: "green"
    });
    wx.cloud.downloadFile({
      fileID: 'cloud://xiaoshistudio-91b7b2.7869-xiaoshistudio-91b7b2/资料/SPSS与多元统计分析方法讲义.pdf',
      success: res => {
        this.data.file = res.tempFilePath;
        wx.showLoading({
          title: '加载中',

        });
        setTimeout(function () {
          wx.hideLoading()
        }, 1000);

        wx.openDocument({
          filePath: res.tempFilePath,
          fileType: 'pdf'
        });
      },
      fail: res => {
        wx.showModal({
          title: '警告',
          content: '下载失败',
        })
      }
    });
  },
  download6: function () {

    this.setData({
      color: "green"
    });
    wx.cloud.downloadFile({
      fileID: 'cloud://xiaoshistudio-91b7b2.7869-xiaoshistudio-91b7b2/资料/因子分析.ppt',
      success: res => {
        this.data.file = res.tempFilePath;
        wx.showLoading({
          title: '加载中',

        });
        setTimeout(function () {
          wx.hideLoading()
        }, 1000);

        wx.openDocument({
          filePath: res.tempFilePath,
          // fileType: 'pdf'
        });
      },
      fail: res => {
        wx.showModal({
          title: '警告',
          content: '下载失败',
        })
      }
    });
  },
  download7: function () {

    this.setData({
      color: "green"
    });
    wx.cloud.downloadFile({
      fileID: 'cloud://xiaoshistudio-91b7b2.7869-xiaoshistudio-91b7b2/资料/因子分析案例.doc',
      success: res => {
        this.data.file = res.tempFilePath;
        wx.showLoading({
          title: '加载中',

        });
        setTimeout(function () {
          wx.hideLoading()
        }, 1000);

        wx.openDocument({
          filePath: res.tempFilePath,
          fileType: 'doc'
        });
      },
      fail: res => {
        wx.showModal({
          title: '警告',
          content: '下载失败',
        })
      }
    });
  },
  download8: function () {

    this.setData({
      color: "green"
    });
    wx.cloud.downloadFile({
      fileID: 'cloud://xiaoshistudio-91b7b2.7869-xiaoshistudio-91b7b2/资料/主成分推导1.doc',
      success: res => {
        this.data.file = res.tempFilePath;
        wx.showLoading({
          title: '加载中',

        });
        setTimeout(function () {
          wx.hideLoading()
        }, 1000);

        wx.openDocument({
          filePath: res.tempFilePath,
           fileType: 'doc'
        });
      },
      fail: res => {
        wx.showModal({
          title: '警告',
          content: '下载失败',
        })
      }
    });
  },
  download9: function () {

    this.setData({
      color: "green"
    });
    wx.cloud.downloadFile({
      fileID: 'cloud://xiaoshistudio-91b7b2.7869-xiaoshistudio-91b7b2/资料/主成分分析.ppt',
      success: res => {
        this.data.file = res.tempFilePath;
        wx.showLoading({
          title: '加载中',

        });
        setTimeout(function () {
          wx.hideLoading()
        }, 1000);

        wx.openDocument({
          filePath: res.tempFilePath,
           fileType: 'ppt'
        });
      },
      fail: res => {
        wx.showModal({
          title: '警告',
          content: '下载失败',
        })
      }
    });
  },
  download10: function () {

    this.setData({
      color: "green"
    });
    wx.cloud.downloadFile({
      fileID: 'cloud://xiaoshistudio-91b7b2.7869-xiaoshistudio-91b7b2/资料/第70讲 OV2640摄像头实验-M4.ppt',
      success: res => {
        this.data.file = res.tempFilePath;
        wx.showLoading({
          title: '加载中',

        });
        setTimeout(function () {
          wx.hideLoading()
        }, 1000);

        wx.openDocument({
          filePath: res.tempFilePath,
          fileType: 'ppt'
        });
      },
      fail: res => {
        wx.showModal({
          title: '警告',
          content: '下载失败',
        })
      }
    });
  },
  download11: function () {

    this.setData({
      color: "green"
    });
    wx.cloud.downloadFile({
      fileID: 'cloud://xiaoshistudio-91b7b2.7869-xiaoshistudio-91b7b2/资料/bluetooth.c',
      success: res => {
        this.data.file = res.tempFilePath;
        wx.showLoading({
          title: '加载中',

        });
        setTimeout(function () {
          wx.hideLoading()
        }, 1000);

        wx.openDocument({
          filePath: res.tempFilePath,
          fileType: 'doc'
        });
      },
      fail: res => {
        wx.showModal({
          title: '警告',
          content: '下载失败',
        })
      }
    });
  },
  download12: function () {

    this.setData({
      color: "green"
    });
    wx.cloud.downloadFile({
      fileID: 'cloud://xiaoshistudio-91b7b2.7869-xiaoshistudio-91b7b2/资料/bluetooth.h',
      success: res => {
        this.data.file = res.tempFilePath;
        wx.showLoading({
          title: '加载中',

        });
        setTimeout(function () {
          wx.hideLoading()
        }, 1000);

        wx.openDocument({
          filePath: res.tempFilePath,
          fileType: 'doc'
        });
      },
      fail: res => {
        wx.showModal({
          title: '警告',
          content: '下载失败',
        })
      }
    });
  }
})