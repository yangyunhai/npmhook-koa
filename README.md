<center>

## 前端进阶    你我同行

这里是 **虎克小哥哥** 的博客，一起前端进阶,前端之路你我同行！

<br/>

## 前端进阶系列博文

### 工具/设计模式系列
* [推荐11款开发中超实用的工具](https://juejin.im/post/5ef06774f265da02df1e28f1)
* [高级前端必会的十个函数-专栏](https://juejin.im/post/5ed33bb0f265da76c67c99cd)
* [手把手教你项目中使用：JavaScript设计模式](https://juejin.im/post/5ec508b1e51d4578671681c8)

### Vue3.0系列
* [vue3.0从0到1实战电商管理系统（第一天）](https://juejin.im/post/5eae5d92e51d451b2e03255c)
* [vue3.0实战从0到1实战电商管理系统（第二天）](https://juejin.im/post/5eaead656fb9a0438d4060be)
* [vue3.0实战从0到1实战电商管理系统（第三天）](https://juejin.im/post/5eb0d6dde51d454de20d7a80)
* [vue3.0实战电商系统：高解耦式mock 订单列表查询（第四天）](https://juejin.im/post/5eb2d7bdf265da7bb708be3d)

### 学习资料系列
* [五一长假学习不断，吐血整理前端进阶资料](https://juejin.im/post/5eac032cf265da7c0856ec88)

### 个人项目脚手架系列
* [React+TS+Dva+Ant 个人项目脚手架](https://juejin.im/post/5e6e50536fb9a07ccc4607e6)


### 面试题系列
* 你我同行，待更新

### 算法系列
* 你我同行，待更新

<br/>


## 其他链接
* [我的掘金](https://juejin.im/user/57e4aed05bbb50005d4581b9)
<br/>


## 交流

我是虎克小哥哥，公众号「前端人」作者，跟着我**一起前端进阶**。坚持连续学习20年！

如果你也是在前端进阶，欢迎关注我的公众号，公众号回复[[加群](#)]即可加群一起学习 ![image](https://user-gold-cdn.xitu.io/2020/6/24/172e5d959f1576b1?imageView2/2/w/480/h/480/q/85/interlace/1)



我的个人微信：欢迎一起学习。

![image](https://user-gold-cdn.xitu.io/2020/5/31/172692493c45cb13?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)



###  本项目说明部分
#### 相关文档
> [mongoose 文档](https://mongoosejs.com/)
#### 开发时的环境变量
> 注意 Windows 的环境变量配置为 set NODE_ENV=production
> 注意 Linxs 的环境变量配置为 export NODE_ENV=production

### 配置
- 基本配置: 在 "/config" 文件夹下
- 普通配置信息可以在 "/controller" 中相关目录下自行配置

### 开发功能
1. 中间件 Middleware： 洋葱模型的一层
> 约定： 中间件接受两个参数，第一个参数为ctx，第二个参数为next。next起了传递控制模型的作用，必须调用。

2. 控制器 Controller：负责解析用户的输入，处理后返回相应的结果。
> 接收参数、参数校验、渲染模板等，调用Service进行业务处理。

3. 服务 Service：复杂业务场景下用于做业务逻辑封装的一个抽象层。
> 第三方服务调用、数据库操作等，保持业务逻辑的独立性

4. 模型 Models：mongodb 表结构模型
> 规定了 Collections 的结构及属性