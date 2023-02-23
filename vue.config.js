const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  runtimeCompiler: true,
  // chainWebpack: (config) => {
  //   config.resolve.alias.set('@', path.resolve(__dirname, './public/Json/'))
  // },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       additionalData: `
  //         @import "./node_modules/bootstrap/scss/_variables.scss";
  //         @import "./node_modules/bootstrap/scss/_mixins.scss";
  //       `
  //     }
  //   }
  // }
})
