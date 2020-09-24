module.exports = {
  devServer: {
    // 自动打开浏览器
    open: true,
    port: 8888,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
  }
}
