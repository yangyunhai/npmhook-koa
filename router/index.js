const Router = require('koa-router');
//安装` 格式：模块名称Controller
const userController = require('../controller/userController');
const router = new Router();
router.get('/index', async (ctx, next) => {
  ctx.body = '<code>摩卡小哥哥</code>';
});
router.post('/api/h5/login', userController.userLogin); 
router.post('/api/h5/onRegister', userController.onRegister); 
module.exports=router;