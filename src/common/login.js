import cookie from '../utils/cookie'
/**
 * 登录相关封装
 */
const D_TOKEN = 'dToken'
const D_ID = 'dId'
const D_AVATAR = 'dAvatar'

// 退出登录
export const exit = function () {
  cookie.set(D_TOKEN, '')
  cookie.set(D_ID, '')
  cookie.set(D_AVATAR, '')
  // 跳转到首页
  window.location.href = location.origin
}

// 获取登录信息
export const getLoginInfo = function () {
  return {
    token: cookie.get(D_TOKEN) || '',
    id: cookie.get(D_ID) || '',
    avatar: cookie.get(D_AVATAR) || 0
  }
}

// 设置登录信息
export const setLoginInfo = function ({ token, id, avatar }) {
  cookie.set(D_TOKEN, token)
  cookie.set(D_ID, id)
  cookie.set(D_AVATAR, avatar)
}

// 登录状态更新头像
export const updateAvatar = function (avatar) {
  cookie.set(D_AVATAR, avatar)
}
