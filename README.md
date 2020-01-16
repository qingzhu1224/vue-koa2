# vue-koa2

### 第一步  vue create vue-koa2

### 第二步  安装axios


### proxy代理到开放接口， 访问不了

### 创建一个新文件serve, 安装koa2

### 代理问题
```
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
```

### koa-webpack-hot-middleware