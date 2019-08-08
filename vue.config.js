const path = require('path')

const isProd = process.env.NODE_ENV === 'production'
const isLib = process.env.VUE_APP_BUILD_MODE === 'lib'
const resolve = dir => path.join(__dirname, dir)

const setChainWebpack = config => {
  // 修改默认目录简写
  config.resolve.alias
    .set('@', path.resolve('app'))
  // 添加对 app 目录的支持
  config.module
    .rule('js')
    .include
      .add('/app')
      .end()
    .use('babel')
    .loader('babel-loader')
  // 设置 svg-sprite-loader
  config.module
    .rule('svg')
    .exclude
      .add(resolve('src/assets/img'))
      .end()
  config.module
    .rule('icons')
    .test(/\.svg$/)
    .include
      .add(resolve('src/assets/img'))
      .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'icon-[name]'
    })
    .end()
  if (isProd) {
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
}

const setConfigureWebpack = config => {
  // 将 vue 设置为外部依赖
  let externals = [
    {
      vue: 'vue'
    }
  ]
  return isLib ? { externals } : {}
}

module.exports = {
  publicPath: './',
  pages: {
    index: {
      entry: resolve('app/main.js')  // 修改默认打包文件入口
    }
  },
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => setChainWebpack(config),
  configureWebpack: config => setConfigureWebpack(config),
  css: {
    extract: false
  },
  devServer: {
    port: 8181,
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
