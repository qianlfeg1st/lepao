import ajax from '../ajax'

// 获取加油站详细
export const getStationDetail = opts => {

  return ajax.post({
    url: 'iot/detail/details',
    ...opts,
  })
}

// 获取加油站ID和名称
export const getStationName = opts => {

  return ajax.post({
    url: `iot/home/load/${opts.sn}`,
    ...opts,
  })
}
