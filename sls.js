const Koa = require('koa');
const path = require('path');
const views = require('koa-views');
const koaBody = require('koa-body');
const static = require('koa-static');
const onerror = require('koa-onerror');
const router = require('./router');
const config = require('./config');
const app = new Koa();
const redis = require('./middleware/redis');
//启动mongo连接  如果自己下载下来没有安装可以注释这个
//注册公共请求头
app.use(async (ctx, next)=> {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200; 
  } else {
    await next();
  }
});
//注册静态资源和页面路由
app.use(koaBody({
    multipart: true,
    formidable: {keepExtensions: true,maxFileSize: 2000*1024*1024}
  }))
  .use(static(__dirname + '/public'))
  .use(views(path.join(__dirname, '/views'), {
    options: {settings: {views: path.join(__dirname, 'views')}},
    map: {'ejs': 'ejs'},
    extension: 'ejs'
}))
//正常的接口查询
app.use(async (ctx, next)=>{
  await next();
  ctx.body = {
    code: 200,
    data: ctx.data || {},
    message: ctx.msg || "SUCCESS"
  }
})
//注册路由
app.use(router.routes()).use(router.allowedMethods())
//抛出错误
onerror(app, {engine: 'ejs',template: __dirname + '/error.ejs'});
//记录错误日志
app.on("error",(err, ctx)=>{  
   console.error(`
    --------------- error -----------------
    timestamp: ${new Date().toISOString()}
    ctx.request.method : ${ctx.request.method}
    ctx.request.path   : ${ctx.request.href}
    ctx.request.query  : ${JSON.stringify({...ctx.request.query})}
    ctx.request.body   : ${JSON.stringify({...ctx.request.body})}
    ${err.stack}
    ------------------------------------
  `);
}); 
//开启监听
console.log(`+>+>+>+>+>+  服务启动成功，端口: ${config.port}, 当前环境为: ${config.env}  +>+>+>+>+>+`);
// app.listen(config.port); //serverless规范
module.exports = app;