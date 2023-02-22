const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  runtimeCompiler: true,
  // chainWebpack: (config) => {
  //   config.resolve.alias.set('@', path.resolve(__dirname, './public/Json/'))
  // },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
        `
        // data: `
        //   @import "@/styles/_variables.scss";
        //   @import "@/styles/_mixins.scss";
        // `
      }
    }
  }
})
