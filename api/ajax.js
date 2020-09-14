import toast from '../utils/toast'
import config from '../config'

// POST GET 请求

class Ajax {

  // 响应拦截

  response (e) {

    const { res, resolve, callback, that, reject } = e

    if (+res.statusCode === 201 || +res.statusCode === 403) { // 未登录

      getApp().login(that, callback)
    }

    if (+res.statusCode === 200) { // 已登录

      if(res.data.status === true) {

        resolve(res.data)
      } else {

        if (res.data.message) {

          toast(res.data.message)
        }

        resolve(res.data)
      }
    }

    if (+res.statusCode !== 200 && +res.statusCode !== 203 && +res.statusCode !== 403) {

      toast('服务器暂时失联')
      reject(res)
    }
  }

  request (e) { // 请求拦截器

  }

  ajax({
    url = "localhost",
    data = {},
    method = 'POST',
    success = null,
    fail = null,
    that = null,
    complete = null,
    callback = null,
  } = {}) {

    this.request(url) // 拦截请求

    return new Promise((resolve, reject) => {

      const app = getApp()

      console.log('url', config.baseURL + url)

      wx.request({
        url: config.baseURL + url,
        data,
        header: {
          wxx_access_token: wx.getStorageSync('accessToken'),
          timeOffset: new Date().getTimezoneOffset() * 60 * (-1),
          wxx_type: 'hc_wxx',
          wxx_version: app.clientVersion,
        },
        method,
        dataType: 'json',
        success: res => {

          console.log('success request', url, res, data)

          this.response({ // 拦截响应
            res,
            callback,
            that,
            resolve,
            reject,
          })
        },
        fail: res => {

          console.log('fail request', url, res, data)

          toast('服务器暂时失联')

          // 失败
          reject(res)
        },
        complete: res => {

        }
      })
    })
  }

  get({
    url = 'localhost',
    data = {},
    success = null,
    fail = null,
    complete = null,
    callback = null,
    that = null,
  } = {}) {

    return this.ajax({
      url,
      data,
      method: 'GET',
      success,
      fail,
      complete,
      callback,
      that,
    })
  }

  post({
    url,
    data = {},
    success = null,
    fail = null,
    complete = null,
    callback = null,
    that = null
  } = {}) {

    return this.ajax({
      url,
      data,
      method: 'POST',
      success,
      fail,
      that,
      complete,
      callback
    })
  }

}

export default new Ajax()