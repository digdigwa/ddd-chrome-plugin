import { handleResult } from './result'
import http from './http'
import * as API from './api.js'

// 创建文档
export async function createDoc (param) {
  const { status, data, message } = await http({ url: API.CREATE_DOC, param, method: 'post' })
  return handleResult({ status, data, message })
}
