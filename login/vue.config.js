const path = require('path');

module.exports = {
  publicPath: '/',
  outputDir: process.env.NODE_OUTPUT_PATH || 'dist',
  lintOnSave: true,
  filenameHashing: true,
  productionSourceMap: false,
  devServer: {
    port: 8081,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  configureWebpack: {
    output: {
      library: process.env.VUE_APP_FRONTEND,
      libraryTarget: 'umd',
    },
    externals: {
      'vue': 'Vue',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter',
      'sh-pc': 'ShPc',
      'sh-sdk': 'ShSdk',
    }
  },
  chainWebpack: config => {
    config.optimization.delete('splitChunks');
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "less",
      patterns: [
        path.resolve(__dirname, "src/assets/css/variables.less")
      ]
    }
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: process.env.NODE_ENV === 'production' ? { ignoreOrder: true } : false,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${path.join(__dirname, './src/assets/css/variables.less')}";`
        }
      },
    },
    // 启用 CSS modules for all css / pre-processor files.
    // requireModuleExtension: false
  },
}