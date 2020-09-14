/**
 * 弱提示
 */
export default (title, duration = 2000, icon = 'none') => {

  wx.showToast({
    title,
    icon,
    duration
  })
}