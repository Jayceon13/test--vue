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
        chainWebpack: config => {
            config.module.rule('vue').uses.delete('cache-loader');
            config.module.rule('js').uses.delete('cache-loader');
            config.module.rule('ts').uses.delete('cache-loader');
            config.module.rule('tsx').uses.delete('cache-loader');
}}
)
