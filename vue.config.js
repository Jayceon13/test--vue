const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    html:{
        extract: false,
    },
  css: {
      extract: false,
  },
configureWebpack: {
    optimization: {
        splitChunks: false,
    },
},
})
