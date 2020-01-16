const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
  let url = ctx.url
  console.log('url-----', url)
  ctx.body = {
    list: [{ name: 'yqz', id: '123' }, {
      name: 'fsl', id: '456'
    }]
  }
})

app.listen(3000, () => {
  console.log('[demo] request get is starting at port 3000')
})