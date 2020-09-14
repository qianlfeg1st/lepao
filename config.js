// const env = 'dev'
// const env = 'pre'
const env = 'prod'

// 开发
const develop = {
  baseURL: 'https://app.happyrun.cn/master/hc2/',
  imageBaseUrl: 'https://step.oss-cn-hangzhou.aliyuncs.com/',
}

// 预发
const prepub = {
  baseURL: 'https://app.happyrun.cn/master/hc2/',
  imageBaseUrl: 'https://step.oss-cn-hangzhou.aliyuncs.com/',
}

// 线上
const production = {
  baseURL: 'https://app.happyrun.cn/master/hc2/',
  imageBaseUrl: 'https://step.oss-cn-hangzhou.aliyuncs.com/',
}

let urlConfig = {}

switch (env) {

  case 'dev':
    urlConfig = develop
    break

  case 'pre':
    urlConfig = prepub
    break

  case 'prod':
    urlConfig = production
    break

  default:
    urlConfig = develop
    break
}

export default {
  ...urlConfig,
  env,
  clientVersion: '1.0.0',
  scene: '',
}
