let plugins = []
// 生产模式使用 transform-remove-console 插件
if (process.env.NODE_ENV === 'production') {
  plugins.push("transform-remove-console")
}
module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset"
  ],
  plugins
}
