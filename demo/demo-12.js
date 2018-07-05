const Koa = require('koa')
const fs = require('fs.promised')

const app = new Koa()

const main = async function (ctx, next) {
    ctx.response.type = 'html';
    ctx.response.body = await fs.readFile('./demo/template.html', 'utf8');
  };

app.use(main)

app.listen(9000)