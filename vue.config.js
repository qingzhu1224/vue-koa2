// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '^/serve/': {
        // http://10.9.66.106:8080/ 这样写不行诶
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '/serve': ''
        }
      }
    }
  }
}