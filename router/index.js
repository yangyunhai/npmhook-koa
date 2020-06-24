const Router = require('koa-router');
//安装` 格式：模块名称Controller
const cityController = require('../controller/cityController');
const router = new Router();
//广告商赞助
router.get('/index', async (ctx, next) => {
  ctx.body = '<code>摩卡小哥哥</code>';
});
//城市查询
router.get('/api/queryByCode', cityController.queryByCode); 
module.exports=router;