const Koa = require('koa')

const app =new Koa()

const main = ctx => {
    ctx.response.status = 404;
    ctx.response.body = "Page not found"
}

app.use(main)

app.listen(9000)