const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  css: {
      extract: false,
  },
configureWebpack: {
    entry: { "index.html": "./public/index.html",

    },
    optimization: {
        splitChunks: false,
    },
    output: {
        filename: 'apps.js',
    },

},
}
)
