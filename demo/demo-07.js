const Koa = require('koa')
const serve = require('koa-static')
const path = require('path')

const app =new Koa()

const main = serve(path.join(__dirname));

app.use(main)

app.listen(9000)