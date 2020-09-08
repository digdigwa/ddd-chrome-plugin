/* eslint-disable no-undef */
// 此段代码会注入到当前页面中，监听消息获取页面相关信息
chrome.extension.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.action === 'GET_CUR_PAGE_INFO') {
      const title = document.getElementsByTagName('title')[0].textContent
      const descriptionEl = document.querySelectorAll('meta[name=description]')[0]
      // 获取描述信息
      const description = descriptionEl ? descriptionEl.getAttribute('content') : title
      sendResponse({
        title: title.trim(),
        href: location.href,
        description: description.trim()
      })
    }
  }
)
