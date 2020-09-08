import { handleResult } from './result'
import http from './http'
import * as API from './api.js'

// 登录
export async function login (param) {
  const { status, data, message } = await http({ url: API.LOGIN, param, method: 'post' })
  return handleResult({ status, data, message })
}
