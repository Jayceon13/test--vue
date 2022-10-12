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
        filename: 'apps.js',
    },

},
        filenameHashing: false,
}
)
