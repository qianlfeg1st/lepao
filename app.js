import api from './api/index'
import config from './config'

App({

  onLaunch (e) {

    this.scene = e.scene
  },

  ...config,
  api,
})