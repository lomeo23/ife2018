# No.1 - 制作一个简单的菜单动画效果

>思路

+ 使用Transition
    通过js添加style属性，来实现动画效果

>笔记

+ 通过 div.style.color="red" 类似形式添加的内联样式，需要使用div.removeAttribute("style") 移除

+ 还可以使用Linear Gradients来实现

>不足

+ 想通过修改border颜色渐变来实现，没找到方法
+ 页面首次加载会有动画效果显示