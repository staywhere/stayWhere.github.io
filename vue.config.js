'use strict'

const path = require('path')

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following method:
// port = 9527 npm run dev OR npm run dev --port = 9527
const port = process.env.port || process.env.npm_config_port || 9527 // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  // 部署应用时的基本 URL
  // publicPath: process.env.NODE_ENV === 'production' ? '192.168.60.110:8080' : '192.168.60.110:8080',
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: 'index.html',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    https: true,
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/proxy': {
        target: 'http://testapp.51vfang.cn',
        changeOrigin: true,
        pathRewrite: {
          '^/proxy': '/'
        },
        secure: false
      }
    }
  },
  chainWebpack (config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    // types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
  }
}

function addStyleResource (rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        // 需要全局导入的sass
        path.resolve(__dirname, './src/assets/css/common.scss')
      ]
    })
}
