
// const base = '/node/i'
// const base = 'http://local.djtest.cn:10001/node/i'
let base = 'https://zhuhao.ink/node/i'
// 开发环境
if (process.env.NODE_ENV === 'development') {
  base = 'http://local.djtest.cn:10001/node/i'
}
// 登录注册相关
export const LOGIN = base + '/login'
// Team相关
export const GET_MY_JOIN_TEAMS = base + '/getMyJoinTeams'
// 标签相关
export const GET_ALL_TAGS = base + '/getAllTags'
// 文章相关
export const CREATE_DOC = base + '/createDoc'
