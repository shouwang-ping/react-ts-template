# 备注
- npm run build 同于 npx webpack
# config `webpack配置文件`
webpack.config.js
## devtool
- 控制 是否如何生成 source map
## devServer 开发服务器
## plugins插件
- HtmlWebpackPlugin
- CleanWebpackPlugin
- webpack
   - .NamedModulesPlugin() 方法
   - .HotModuleReplacementPlugin() 方法
## loader
- css
   - css-loader
   - style-loader
- 图片
- 字体
- 数据
   - NodeJS, JSON默认支持
   - CSV, TSV, XML
      - csv-loader
      - xml-loader
# package.json
- main.js 发布npm包
- scripts 脚本
- 依赖包
   - webpack-dev-server 一个简单的 web 服务器，并且能够实时重新加载
# tsconfig.json
- ts解析loader 
- ts配置文件 不可少
# eslintec.json
- `代码校验`eslint配置文件
# jest.config.js
- `测试`配置文件
# dist 打包目录

## 1 ts的编译方式
- ts-loader 编译的时候可以进行类型检查
- babel-loader @babel/preset-typescript  不能进行类型检查

## 2.lint
- tslint 进行ts代码检查一的
- eslint 这个是社区比较通用的
- 现在typescript官方慢慢废弃tslint,eslint


1. thunk middleware 
2. redux 仓库ts类型
3. 后端ts接口实现