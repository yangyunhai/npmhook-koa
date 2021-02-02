// const mysql = require('../middleware/mysql');
const redis = require('../middleware/redis');
// const userLogin=async (ctx)=>{
//    const data= await  mysql.query(`select * from webApp where code=${ctx.query.code}`);
//    ctx.data = data;
// }
const newGuid=()=> {
  let time=new Date().getTime().toString();
  return time.substring(time.length-7,time.length-1);
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
        let code=newGuid();
        await redis.set(ctx.request.body.code,code);
        await redis.set(code,code);
        ctx.data = code;
    }
}

/** 导出函数 */
module.exports={
    userLogin,
    onRegister
};