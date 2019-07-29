const path = require('path')

const isProd = process.env.NODE_ENV === 'production'
const resolve = dir => path.join(__dirname, dir)

const setChainWebpack = config => {
  // 移除 eslint 对 src/plugins 目录校验
  // config.module
  //   .rule('eslint')
  //   .exclude
  //   .add('/src/plugins')
  //   .end()
  //   .end()
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
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => setChainWebpack(config),
  // configureWebpack: config => setConfigureWebpack(config),
  devServer: {
    port: 8181,
    open: true
  }
}
