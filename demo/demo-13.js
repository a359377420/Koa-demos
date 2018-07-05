const Koa = require('koa')

const compose = require('koa-compose')

const app = new Koa()

const main = ctx => {
    ctx.response.body = "Hello World"
}

const logger = (ctx,next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`)
    next()
}

const middlewares = compose([logger,main])

app.use(middlewares)

app.listen(9000)