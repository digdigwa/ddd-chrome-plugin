import { handleResult } from './result'
import http from './http'
import * as API from './api.js'

// 获取当前用户加入的团队列表
export async function getMyJoinTeams () {
  const { status, data, message } = await http({ url: API.GET_MY_JOIN_TEAMS, method: 'get' })
  return handleResult({ status, data, message })
}
