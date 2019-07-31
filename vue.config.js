const path = require('path')

const isProd = process.env.NODE_ENV === 'production'
const resolve = dir => path.join(__dirname, dir)

const setChainWebpack = config => {
  // 目录简写对应
  config.resolve.alias
    .set('@', path.resolve('app'))
    .set('~', path.resolve('src'))
  // 添加对 app 目录的支持
  config.module
    .rule('js')
    .include
      .add('/app')
      .end()
    .use('babel')
    .loader('babel-loader')
  /**
   * 清除性能警告
   * entrypoint size limit (244 KiB)
   * asset size limit (244 KiB)
   */
  config.performance
    .set('maxEntrypointSize', 2500000)
    .set('maxAssetSize', 2000000)
  // 压缩代码
  config.optimization.minimize(true)
}

const setConfigureWebpack = config => {
  let plugins = []
  return isProd ? {
    plugins
  } : {}
}

module.exports = {
  outputDir: resolve('/lib'),
  pages: {
    index: {
      entry: 'app/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => setChainWebpack(config),
  // configureWebpack: config => setConfigureWebpack(config),
  css: {
    extract: false
  },
  devServer: {
    port: 8181,
    open: true
  }
}
