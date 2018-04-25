# 1.2 用webpack4 / parcel快速搭建开发san helloworld

###搭建过程

> 基础配置
```
npm install -g webpack          #全局安装webpack
npm init                        #初始化
npm install --save-dev webpack  #安装webpack包
```

+ 添加dist和examples文件夹来区分生产和开发模式
+ 添加config文件夹和build文件夹
+ 根目录下添加index.html,examples下添加index.js入口文件

> examples/index.js
```
function component() {
  var element = document.createElement('div');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());
```

> index.html
```
<!doctype html>
<html>
  <head>
    <title>Getting Started</title>
    <script src="https://unpkg.com/lodash@4.16.6"></script>
  </head>
  <body>
    <script src="./src/index.js"></script>
  </body>
</html>
```
