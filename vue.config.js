const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
      extract: false,
  },
configureWebpack: {
    optimization: {
        splitChunks: false,
    },
    output: {
        filename: 'apps.js?1.0.1',
    },

},
}
)
