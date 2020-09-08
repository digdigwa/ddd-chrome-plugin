module.exports = {
  // 自定义构建输出目录
  outputDir: 'ddd-plugin',
  // mock及代理
  devServer: {
    disableHostCheck: true,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/node': {
        target: 'http://127.0.0.1:10001',
        changeOrigin: true,
        ws: false
      }
    }
  }
}
