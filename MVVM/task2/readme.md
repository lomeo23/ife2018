# 1.2 用webpack4 / parcel快速搭建开发san helloworld

## 搭建过程

> 基础配置
```
npm install -g webpack          #全局安装webpack
npm init -y                     #初始化
npm install --save-dev webpack  #安装webpack包
```

+ 添加examples和dist文件夹来区分生产和开发模式
+ 添加config文件夹和build文件夹
+ examples下添加main.js入口文件

> 安装其他包
```
npm install --save-dev style-loader css-loader
npm install --save-dev url-loader
npm install --save-dev babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env webpack
npm install --save-dev clean-webpack-plugin
npm install --save-dev webpack-dev-server
npm install --save-dev webpack-merge
npm install --save-dev html-webpack-plugin
npm install --save-dev uglifyjs-webpack-plugin
```

