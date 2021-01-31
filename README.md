## 合成西瓜

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