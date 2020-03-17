let _this = this

wx.downloadFile({

  url: _this.data.maskUsageUrl,
  success: function (res) {

    if (res.statusCode === 200) {

      wx.saveImageToPhotosAlbum({

        filePath: res.tempFilePath,
        success: (data) => {

          _this.setData({
            saveLoading: false
          })

          wx.showToast({
            title: '保存成功',
            icon: 'success',
            duration: 1000
          })
        },
        fail: (error) => {
          if (err.errMsg === "saveImageToPhotosAlbum:fail auth deny") {

            console.log("用户一开始拒绝了，我们想再次发起授权")

            wx.openSetting({
              success(settingdata) {

                console.log(settingdata)
                if (settingdata.authSetting['scope.writePhotosAlbum']) {

                  console.log('获取权限成功，给出再次点击图片保存到相册的提示。')

                  _this.setData({
                    saveLoading: false
                  }, () => {

                    showNoneToast('请重新保存')
                  })

                } else {

                  console.log('获取权限失败，给出不给权限就无法正常使用的提示')

                  _this.setData({
                    saveLoading: false
                  }, () => {

                    showNoneToast('保存失败，未获取到您的权限')
                  })
                }
              }
            })
          }
        }
      })
    }
  },
  fail: function (error) {

    _this.setData({
      saveLoading: false
    }, () => {

      showNoneToast('保存失败, 请稍后再试')
    })
  }
})