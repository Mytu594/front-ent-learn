1. 简单说一下微信扫码登录的业务逻辑
-  首先，微信用户向第三方应用发送登录请求，第三方应用就会去向微信开放平台请求一个微信二维码的登录授权。接着，微信开放平台就会向用户发出请求确认，当用户点击确认允许的时候，就会告知微信开放平台。此时，微信开放平台就会让页面重定向到第三方指定链接，并会在重定向url上带一个临时票据code。
- 前端开发将code传给后端处理，后端开发传递状态码指示前端人员后续的操作，积分商城有3种情况，分别是0（表示之前绑定过手机号），400（表示二维码失效，及code失效，例如之前扫过该二维码，过期等），407（表示第一次访问积分商城，微信还没和手机账号进行绑定）。
   1. 如果状态码是0的话
      1.  提示成功
      2.  本地存储token【后端利用code去向微信开放平台拿的】
      3. 更新登录状态
      4. 清除地址栏code
   2. 如果状态码是400的话
      1.  提示用户二维码已经失效
      2.  打开登录模态框 - 引导用户再重新扫码
   3. 如果状态码是407的话
      1.  提示用户再进行一次手机号登录 -- 关联微信
      2.  打开登录模态框 -  引导用户登录
      3. 先存储uuid
      4. 清除地址栏code
- 去到Login.vue中继续进行关联操作
   - 根据本地是否有uuid
      - 有，调用BindWXAPI({手机号，验证码，uuid})  绑定成功后 返回code0，并且把uuid删除了
      - 无，调用PhoneReginAPI(普通登录请求),绑定成功后 返回code0
   - 登录返回code0 表示登录成功
      1. 提示登录成功
      2. 本地存储token ，后续需要用到
      3. 自动关闭掉登录模态框
      4. topbar中登录按钮要变成购物车按钮。(登录状态)
      5. 把uuid删除了【已无用】
#### [#](http://106.52.243.61:5502/guide/questions/questions.html#_1-%E8%BF%99%E6%98%AF%E4%B8%AA%E4%BB%80%E4%B9%88%E7%B1%BB%E5%9E%8B%E7%9A%84%E9%A1%B9%E7%9B%AE-%E8%BF%99%E4%B8%AA%E9%A1%B9%E7%9B%AE%E9%87%87%E7%94%A8%E4%BA%86%E4%BB%80%E4%B9%88%E6%8A%80%E6%9C%AF%E6%A0%88)1. 这是个什么类型的项目,这个项目采用了什么技术栈

- 这是一个PC端大型企业电商项目，采用了Vue2.6全家桶技术栈实现的，包含了vue-cli、vuerouter、vuex、axios等，主要有注册登录、商品管理、分类、购物车、个人中心等模块。
#### [#](http://106.52.243.61:5502/guide/questions/questions.html#_2-%E9%A1%B9%E7%9B%AE%E4%B8%AD%E7%94%A8%E4%BB%80%E4%B9%88%E5%81%9A%E6%95%B0%E6%8D%AE%E8%AF%B7%E6%B1%82-%E6%9C%89%E6%B2%A1%E6%9C%89%E8%BF%9B%E8%A1%8C%E4%BB%80%E4%B9%88%E5%B0%81%E8%A3%85)2. 项目中用什么做数据请求,有没有进行什么封装

- 该项目使用了axios进行数据请求，为了方便组件使用，对axios进行了封装。
   - 为了统一设置请求的路径，设置baseUrl来统一接口服务器地址
   - 为了统一处理发送请求时，需要携带一些公共参数（如token)，添加请求拦截器
   - 为了统一处理服务器响应回的数据，需要对数据进行二次处理（如数据过滤、对状态码判断），添加响应拦截器
   - 为了统一管理接口地址，新建api.js来封装请求地址
#### [#](http://106.52.243.61:5502/guide/questions/questions.html#_3-%E9%A1%B9%E7%9B%AE%E4%B8%AD%E6%9C%89%E6%B2%A1%E6%9C%89%E4%BD%BF%E7%94%A8async-await-%E6%80%8E%E4%B9%88%E7%94%A8%E7%9A%84)3. 项目中有没有使用async+await,怎么用的

- 有使用，async+await是一个用同步思维解决异步问题的方案，有效避免回调地狱。
   - async是一个加在函数前的修饰符，被async定义的函数会默认返回一个Promise对象resolve的值。因此对async函数可以直接then，返回值就是then方法传入的函数。
   - await 也是一个修饰符，只能放在async定义的函数内。可以理解为等待。
      - await 修饰的如果是Promise对象：可以获取Promise中返回的内容（resolve或reject的参数），且取到值后语句才会往下执行；
      - 如果不是Promise对象：把这个非promise的东西当做await表达式的结果。
#### [#](http://106.52.243.61:5502/guide/questions/questions.html#_4-%E7%AE%80%E5%8D%95%E8%AF%B4%E4%B8%80%E4%B8%8B%E7%9F%AD%E4%BF%A1%E9%AA%8C%E8%AF%81%E7%99%BB%E5%BD%95%E7%9A%84%E4%B8%9A%E5%8A%A1%E9%80%BB%E8%BE%91)4. 简单说一下短信验证登录的业务逻辑

1. 先验证手机号格式是否正确 
2. 再验证滑动板块是否验证成功【插件实现】
   1. 官方文档
   2. 下载插件 npm i xxxxx
   3. 引入插件 main.js 
   4. 使用组件（官网案例）
   5. 修改的参数，更新样式 。 /deep/
3. 以上都正确就请假axios发送验证码请求,发送请求成功后,开始60秒倒计时，禁用按钮
4. 获取验证码后点击登录按钮，对用户输入的验证码和后台发送过来的信息比对是否一致，一致则登录成功
#### [#](http://106.52.243.61:5502/guide/questions/questions.html#_5-%E7%AE%80%E5%8D%95%E8%AF%B4%E4%B8%80%E4%B8%8B%E5%BE%AE%E4%BF%A1%E6%89%AB%E7%A0%81%E7%99%BB%E5%BD%95%E7%9A%84%E4%B8%9A%E5%8A%A1%E9%80%BB%E8%BE%91)5. 简单说一下微信扫码登录的业务逻辑

- 参考上文
- 渲染微信扫码的步骤：
   1. 在public文件里面的index.html引入微信官方文件 
   2. Login.vue组件里面，加id="weixin"的容器, 并new一下第一步导入的对象（复制官网代码）
   3. 修改二维码默认样式，需要通过工具包data-url.js文件，将css文件转换base64格式，粘贴到官方提供微信组件里面的 href属性中
#### [#](http://106.52.243.61:5502/guide/questions/questions.html#_6-%E7%AE%80%E5%8D%95%E6%8F%8F%E8%BF%B0%E4%B8%80%E4%B8%8B%E5%A6%82%E4%BD%95%E5%B0%81%E8%A3%85%E6%8F%90%E7%A4%BA%E7%BB%84%E4%BB%B6)6. 简单描述一下如何封装提示组件

- 背景：项目中多处使用alert提示，就很有必要对提示组件进行封装
- 简述：导入相关样式，使用vuex来协助管理是否显示隐藏、提示内容、提示类型等状态，利用actions方法实现自动关闭效果，利用tranction标签实现淡入淡出的动画效果。
- 具体操作参考以下笔记：

         1. 项目中在App.vue中引入Toast.vue 
         2. 复制基本样式结构
         3. 引入字体样式 （public.less) 
         [打开页面检查是否正常显示Toast组件]
         控制提示框显示和隐藏  v-show="是否显示提示框"
         多个组件都可能会修改 是否显示提示框 ，隐藏将是否显示提示框 变量存储到vuex中。
         4. 去vuex中添加showToast ，新增 isShowToast
          （回忆三个步骤）
         5.App.vue中获取vuex中变量isShowToast
           mapState({组件内的属性名:state=>state.模块名.属性名})
         6.拿Login.vue测试，显示出提示框，自动隐藏
           调用 changeIsShowToast 方法 显示 改为true  ，
           隐藏就是false
         [测试能够弹出提示信息以及自动关闭提示信息]
         需求：不同的地方调用时提示不同的信息。显示不同的提示图标
         1. 将需要变化的数据存放在vuex中
            提示信息 toastMsg
            提示信息 toastType: success,danger,warning 
         2. Toast.vue中获取vuex中数据。
            根据toastType 动态绑定样式。
         3. Login.vue中传递msg和type
            this.changeIsShowToast({
                isshow:true,
                msg:'请输入正确的手机号码',
                type:'danger'
            });
         [检查提示框组件内容，可以根据vuex中数据显示不同的信息]   
         需求：优化在显示提示框方法中自动关闭提示框
         1. actions里增加方法
            方法内调用mutations显示提示框，2s后又调用mutations关闭提示框
         2. Login组件中，删除之前的changeIsShowToast方法的调用
            改为直接调用actions内的方法
#### [#](http://106.52.243.61:5502/guide/questions/questions.html#_7-%E8%BF%99%E4%B8%AA%E9%A1%B9%E7%9B%AE%E4%B8%AD%E4%BD%A0%E6%98%AF%E5%A6%82%E4%BD%95%E4%BF%9D%E5%AD%98%E7%99%BB%E5%BD%95%E7%94%A8%E6%88%B7%E6%95%B0%E6%8D%AE%E7%9A%84)7. 这个项目中你是如何保存登录用户数据的
#### [#](http://106.52.243.61:5502/guide/questions/questions.html#_8-%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E7%BB%84%E4%BB%B6%E9%87%8D%E8%BD%BD)8. 如何实现组件重载
#### [#](http://106.52.243.61:5502/guide/questions/questions.html#_9-%E8%AF%B7%E7%AE%80%E5%8D%95%E6%8F%8F%E8%BF%B0vue%E5%A6%82%E4%BD%95%E6%B8%B2%E6%9F%93%E5%AF%8Chtml%E6%96%87%E6%9C%AC%E5%AD%97%E7%AC%A6%E4%B8%B2-%E4%BE%8B%E5%A6%82-p-%E8%BF%99%E6%98%AFp%E6%A0%87%E7%AD%BE-p)9. 请简单描述Vue如何渲染富html文本字符串(例如:<p>这是p标签</p>)
#### [#](http://106.52.243.61:5502/guide/questions/questions.html#_10-%E8%AF%B7%E7%AE%80%E5%8D%95%E6%8F%8F%E8%BF%B0%E7%94%A8vue%E5%AE%9E%E7%8E%B0tab%E6%A0%8F%E5%88%87%E6%8D%A2%E7%9A%84%E5%9F%BA%E6%9C%AC%E9%80%BB%E8%BE%91)10. 请简单描述用vue实现tab栏切换的基本逻辑
#### [#](http://106.52.243.61:5502/guide/questions/questions.html#_11-%E8%AF%B7%E7%AE%80%E5%8D%95%E6%8F%8F%E8%BF%B0%E4%BD%A0%E6%89%80%E5%AE%8C%E6%88%90%E7%9A%84%E5%8A%A0%E5%85%A5%E8%B4%AD%E7%89%A9%E8%BD%A6%E6%B5%81%E7%A8%8B%E4%BB%A5%E5%8F%8A%E8%B4%AD%E7%89%A9%E8%BD%A6%E7%9A%84%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD)11. 请简单描述你所完成的加入购物车流程以及购物车的基本功能
#### [#](http://106.52.243.61:5502/guide/questions/questions.html#_12-%E8%AF%B7%E7%AE%80%E5%8D%95%E6%8F%8F%E8%BF%B0%E5%A6%82%E4%BD%95%E5%A4%84%E7%90%86404%E9%A1%B5%E9%9D%A2)12. 请简单描述如何处理404页面
#### [#](http://106.52.243.61:5502/guide/questions/questions.html#_13-%E8%AF%B7%E7%AE%80%E5%8D%95%E6%8F%8F%E8%BF%B0%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E6%BB%9A%E5%8A%A8%E5%88%B0%E5%BA%95%E9%83%A8%E5%8A%A0%E8%BD%BD%E6%9B%B4%E5%A4%9A)13. 请简单描述如何实现滚动到底部加载更多
#### [#](http://106.52.243.61:5502/guide/questions/questions.html#_14-%E8%BF%99%E4%B8%AA%E9%A1%B9%E7%9B%AE%E4%B8%AD%E6%9C%89%E4%BD%BF%E7%94%A8%E5%88%B0vuex%E5%90%97-%E6%98%AF%E6%80%8E%E4%B9%88%E4%BD%BF%E7%94%A8%E7%9A%84)14. 这个项目中有使用到Vuex吗,是怎么使用的
#### [#](http://106.52.243.61:5502/guide/questions/questions.html#_15-%E8%AF%B7%E7%AE%80%E5%8D%95%E6%8F%8F%E8%BF%B0vue%E9%A1%B9%E7%9B%AE%E4%B8%AD%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AE%E8%B7%A8%E5%9F%9F)15. 请简单描述Vue项目中如何配置跨域
#### [#](http://106.52.243.61:5502/guide/questions/questions.html#_16-%E8%AF%B7%E7%AE%80%E5%8D%95%E6%8F%8F%E8%BF%B0vue%E9%A1%B9%E7%9B%AE%E4%B8%AD%E5%A6%82%E4%BD%95%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)16. 请简单描述Vue项目中如何配置环境变量
#### [#](http://106.52.243.61:5502/guide/questions/questions.html#_17-%E4%BD%A0%E6%8E%A5%E8%A7%A6%E8%BF%87-vue-router-%E9%87%8C%E7%9A%84%E5%87%A0%E7%A7%8D%E5%AF%BC%E8%88%AA%E9%92%A9%E5%AD%90-%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)17. 你接触过 vue-router 里的几种导航钩子？有什么区别？
#### [#](http://106.52.243.61:5502/guide/questions/questions.html#_18-%E9%A1%B9%E7%9B%AE%E4%B8%ADtab%E5%88%87%E6%8D%A2%E6%95%88%E6%9E%9C%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0)18. 项目中tab切换效果如何实现
