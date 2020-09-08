/* eslint-disable no-undef */
export const getCurPageInfo = function () {
  return new Promise((resolve, reject) => {
    try {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        // 发送一个copy消息出去
        chrome.tabs.sendMessage(tabs[0].id, { action: 'GET_CUR_PAGE_INFO' }, (response) => {
          // 这里的回调函数接收到了要抓取的值，获取值得操作在下方content-script.js
          resolve(response)
        })
      })
    } catch (error) {
      reject(error)
    }
  })
}
