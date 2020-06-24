//json数据源
const cityData = require('../public/json/cityData.json');
/** 数据结构配置对象 */
const defaultConfig={
    leveSize0:0,
    leveSize1:0,
    leveSize2:0,
    leveSize3:0
};
let gLeveConfig={
    ...defaultConfig,
    leveMax:3, //此处的最大层级3是和defaultConfig同步的
    gForNum:0  //计数变量
};
/**
 * 服务启动的第一次根据原始数据，
 * 生成一个类型层级的深度的配置对象
 * @param {*} json   数据源json
 */
const getLevelConfig=(json)=>{
    let config={...defaultConfig};
    json.map((item)=>{
      config[`leveSize${item.level}`]++;
    })
    return config;
}
/**
 * 获取当前查询code的最大深度
 * @param {*} code 
 * @param {*} childrenDepth 
 */
const getMaxLevel=(code,childrenDepth)=>{
    let level=0
    for (let i=0,l=cityData.length; i<l; i++){
        //因为是已查询的code为根，所以需要加上跟的层级
        if (code==cityData[i].parentCode){
            return cityData[i].level+Number(childrenDepth)
        }
    }
    return level
}
/**
 * 获取当前code下的层级树数据
 * @param {*} data       数据源对象
 * @param {*} code       查询code
 * @param {*} maxLevel   最大遍历层级
 */
const getCodeJson=(data,code, maxLevel)=>{
    let json=[];
    for (let i=0; i<data.length; i++){
        //遍历变量++
        getLevelConfig.gForNum++ 
        //判断是否遍历次数是否等于数据本身的总数大小
        if(getLevelConfig.gForNum>=gLeveConfig[`leveSize${maxLevel}`]){
            return json;
        }
        //如果code相同代表是查询数据列
        if (code===data[i].parentCode){
            let childrendata=data[i];
            childrendata.children=[];
            //如果当前层级level 小于查询code 父节点的level则为正确数据
            if (childrendata.level<maxLevel){
                childrendata.children=getCodeJson(data,childrendata.code, maxLevel)
            }
            json.push(childrendata)
        }
    }
    return json
}
/**
 * 初始化查询函数
 */
const inintQuery=()=>{
    //生成数据接口配置对象
    const config=getLevelConfig(cityData);
    //更新全局对象
    gLeveConfig=Object.assign(gLeveConfig,config);
}
/**
 * 查询当前code下城市json数据
 * @param {*} ctx   当前作用域上下文对象
 */
 const queryByCode=async (ctx)=>{
    getLevelConfig.gForNum=0;
    const childrenDepth=ctx.query.childrenDepth||config.maxLevel;
    const code=ctx.query.code||"";
    const maxLevel=getMaxLevel(code,childrenDepth)
    const data=getCodeJson(cityData,code, maxLevel)
    console.log("深度是："+childrenDepth)
    console.log("最大level层级是："+maxLevel)
    console.log("计算变量是gForNum:"+getLevelConfig.gForNum)
    ctx.data = data;
}

/***初始化查询功能，服务启动的时候加载在内存 */
inintQuery();
/** 导出函数 */
module.exports={
    queryByCode
};