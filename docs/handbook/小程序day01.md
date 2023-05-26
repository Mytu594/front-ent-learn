day01今天讲了什么？
一、小程序简介
① 小程序的下载
② 创建一个小程序：AppID
③ 工作台的常用区域： 
1.格式化配置（format On Save）
2.打开热重载
3.三个常用区域：模拟器、编辑器、调试器
4.模拟器的手机型号 
5.控制台【跟谷歌差不多】
6.终端   
④ 4种文件类型
.json .wxml .wxss .js
⑤JSON配置
1.app.json(全局配置）
😀“pages”: 小程序所有页面的路径
😀“tabBar”：底部tab 
    “list”:    [{"pagePath","text",""iconPath","selectedIconPath"}]   
    “color”文字颜色 “selectedColor”选中颜色 “position”位置（上、下）
    “backgroundColor”背景色 “borderStyle”上边框颜色
😀“window”: 界面表现
    “backgroundTextStyle”加载点风格（light、dark）
    “navigationBarBackgroundColor”加载区背景颜色
    “navigationBarTitleText”导航标题
    “navigationBarTextStyle”导航栏标题颜色 (black、white)
2.page.json（局部配置）
页面独立属性，如顶部颜色、是否允许下拉刷新，没有单独的window属性

二、叁大模块
①WXML模板【HTML】
1:【view像div，独占一行】【text像span，一行显示多个】
2:【image组件】默认320px*240px；mode属性设置裁剪、缩放；widthFix的高度设置失效
②WXCC样式【CSS】
1:尺寸单位rpx【设计稿要求750px:1rpx=1px】
2:同一个选择器，局部比全局权重高
③JS逻辑交互【JS】
1:app.js设置全局globalData，必须注册App();
2:page.js注册页面Page();

三、数据绑定
1:数据来自Page.js的data中
🎈文本渲染用双花括号{{msg}}
🎈属性值也是用双花括号id="{{id}}" 否则是字符串
🎈数据路径 显示对象的某一属性值或数组的某一下标值{{obj.name}}

三、数据绑定
1:数据来自Page.js的data中
🎈文本渲染用双花括号{{msg}}
🎈属性值也是用双花括号id="{{id}}" 否则是字符串
🎈数据路径 显示对象的某一属性值或数组的某一下标值{{obj.name}}
⚒注意：id属性，data-xx 自定义属性 ,其他属性都没有显示在真实节点的属性里，例如a="1"无效 data-a="1"才有效

![](https://cdn.nlark.com/yuque/0/2022/jpeg/1128524/1670165633206-a8e24180-cdf0-44cb-a549-524b0f07889c.jpeg)
![](https://cdn.nlark.com/yuque/0/2022/jpeg/1128524/1670259693859-d4110ce8-4911-4681-8ca9-b6d5b95d3599.jpeg)
![](https://cdn.nlark.com/yuque/0/2022/jpeg/1128524/1670511722589-00ec55b6-2b40-439b-8746-12e8a5b42df8.jpeg)
![](https://cdn.nlark.com/yuque/0/2022/jpeg/1128524/1670522533409-9e7ea0a3-8217-4154-868f-c4179939cd8b.jpeg)
