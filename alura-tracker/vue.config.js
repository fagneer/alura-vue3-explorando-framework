
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new (require('webpack')).DefinePlugin({
        transpileDependencies: true
      })
    ]
  }
}
