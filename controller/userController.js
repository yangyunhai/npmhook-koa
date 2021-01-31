// const mysql = require('../middleware/mysql');
const redis = require('../middleware/redis');
// const userLogin=async (ctx)=>{
//    const data= await  mysql.query(`select * from webApp where code=${ctx.query.code}`);
//    ctx.data = data;
// }
const guid=()=> {
  return [0,0,0,0,0].map(()=>{
      return Math.random()*9|0
  }).join("")
}
const userLogin=async (ctx)=>{
   const data= await redis.get(ctx.request.body.userId);
   ctx.data = data==ctx.request.body.code?"true":"false";
}

const onRegister=async (ctx)=>{
    const value= await redis.get(ctx.request.body.code);
    if(value){
        ctx.data = value;
    }else{
        let code=guid();
        await redis.set(ctx.request.body.code,code);
        ctx.data = code;
    }
}

/** 导出函数 */
module.exports={
    userLogin,
    onRegister
};