const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  runtimeCompiler: true,
  // chainWebpack: (config) => {
  //   config.resolve.alias.set('@', path.resolve(__dirname, './public/Json/'))
  // },

})
