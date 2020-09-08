import Vue from 'vue'
import { exit } from '../common/login'

export const handleResult = ({ status, data, message, tip = true }) => {
  if (status !== 0 && message && tip) {
    Vue.prototype.$message({
      type: 'error',
      message: message,
      onClose: () => {
        if (status === 401) {
          exit()
          window.location.reload()
        }
      }
    })
  }
  return data
}
