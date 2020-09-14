const app = getApp()

Page({

  data: {

  },

  onLoad () {

    this.login()
  },

  login () {

    wx.login({
      success: async e => {

        if (!e.code) return

        const res = await app.api.common.login({
          data: {
            code: e.code,
            status_code: 0,
            sceneValue: app.scene,
            page: getCurrentPages().slice(-1)[0].route,
          }
        })

        if (res.error) return

        wx.setStorageSync('accessToken', res.successAccessToken)
      },
      fail: e => {

        console.log('wx.login-fail', e)
      }
    })
  }

})
