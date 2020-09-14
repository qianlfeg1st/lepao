import ajax from '../ajax'

// 创建订单
export const createOrder = opts => {

  return ajax.post({
    url: 'orderCreate/gas/order/create',
    ...opts,
  })
}

// 支付订单
export const payOrder = opts => {

  return ajax.post({
    url: 'orderCreate/gas/iot/pay',
    ...opts,
  })
}

// 获取订单详情
export const getOrderDetail = opts => {

  return ajax.post({
    url: `orderList/detail/find/${opts.orderId}`,
    ...opts,
  })
}

// 校验订单真实性
export const checkOrder = opts => {

  return ajax.post({
    url: 'orderList/detail/check',
    ...opts,
  })
}

// 获取大礼包列表
export const getGiftVoucherList = opts => {

  return ajax.post({
    url: `gas/gift/load/${opts.stationId}`,
    ...opts,
  })
}

// 获取大礼包详情
export const getGiftVoucherDetail = opts => {

  return ajax.post({
    url: `gas/gift/find/${opts.giftVoucherId}`,
    ...opts,
  })
}

// 创建大礼包订单
export const createGiftVoucherOrder = opts => {

  return ajax.post({
    url: 'gift/order/create',
    ...opts,
  })
}

// 创建大礼包订单查询
export const getGiftVoucherOrderResult = opts => {

  return ajax.post({
    url: `gift/order/query/${opts.orderId}`,
    ...opts,
  })
}

// 获取我的优惠券列表
export const getMyCouponList = opts => {

  return ajax.post({
    url: 'myVoucher/load',
    ...opts,
  })
}

// 大礼包支付订单
export const giftVoucherPay = opts => {

  return ajax.post({
    url: 'iot/gift/pay',
    ...opts,
  })
}

// 获取订单列表
export const getSelfOrderList = opts => {

  return ajax.post({
    url: 'orderList/list/iotLoad',
    ...opts,
  })
}

// 打印小票
export const getPrintParams = opts => {

  return ajax.post({
    url: `orderList/detail/iotPrint/${opts.id}`,
    ...opts,
  })
}
