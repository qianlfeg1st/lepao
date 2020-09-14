import ajax from '../ajax'

// 登录
export const login = opts => {

  return ajax.get({
    url: 'wxx/code2',
    ...opts,
  })
}