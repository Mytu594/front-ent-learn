## vue简介

### 1.什么是vue

官方给出的概念：Vue(读音/vju:/，类似于view)是一套**用于构建用户界面**的前端**框架**。

1.  构建用户界面
用vue往html页面中填充数据，非常的方便 
2.  框架 
   - 框架是一套现成的解决方案，程序员只能遵守框架的规范，去编写自己的业务功能！
   - vue的指令、组件（是对UI结构的复用）、路由、Vuex、vue组件库

### 2.Vue的特性

vue框架的特性，主要体现在如下两方面：

1. **数据驱动视图**
2. **双向数据绑定**

#### 2.1数据驱动视图

在使用了Vue的页面中，Vue会监听数据的变化，从而自动重新渲染页面的结构。示意图如下：

![](./images/image-20220617115533941.png#id=rjRAl&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

简单理解就是：数据的变化**会驱动视图**自动更新

**好处**：当页面数据发生变化时，页面会自动重新渲染！
**注意**：数据驱动视图是**单向的数据绑定**。

#### 2.2双向数据绑定

> 在网页中，form表单负责**采集数据**，Ajax负责**提交数据**。


- js数据的变化，会被自动渲染到页面上
- 页面上表单采集的数据发生变化的时候，会被vue自动获取到，并更新到js数据中

**好处**：开发者不再需要手动操作DOM元素，来获取表单元素最新的值！

#### 2.3 MVVM

**MVVM**是vue实现**数据驱动视图**和**双向数据绑定**的核心原理。MVVM指的是**M**odel、**V**ieW 和 **V**iew**M**odel,
它把每个HTML页面都拆分成了这三个部分

在MVVM概念中：

- **Model(数据源)**表示当前页面渲染时所依赖的数据源。
- **VieW(视图)**表示当前页面所渲染的DOM结构。
- **ViewModel(vue的实例)**，它是MVVM的核心。

### 3.Vue的版本

当前，Vue共有3个大版本，其中：

- **2.x版本的vue是目前企业级项目开发中的主流版本**
- 3.x版本的vue于2020-09-19发布，生态还不完善，尚未在企业级项目开发中普及和推广
- 1.x版本的vue几乎被淘汰，不再建议学习与使用

总结：

- **3.x版本的vue是未来企业级项目开发的趋势；**
- 2.x版本的vue在未来(1~2年内)会被逐渐淘汰；

## vue的基本使用

### 1.基本使用步骤

1. 导入vue.js的 script 脚本文件
2. 在页面中声明一个将要被vue所控制的DOM区域
3. 创建vm实例对象(vue实例对象)

## vue的指令与过滤器

### 1.指令的概念

**指令(Directives)**是vue为开发者提供的**模板语法**，用于辅**助开发者渲染页面的基本结构**。

vue中的指令**按照不同的用途**可以分为如下6大类：

1. **内容渲染**指令
2. **属性绑定**指令
3. **事件绑定**指令
4. **双向绑定**指令
5. **条件渲染**指令
6. **列表渲染**指令

**注意**：指令是vue开发中最基础、最常用、最简单的知识点。

#### 1.1内容渲染指令

**内容渲染指令**用来辅助开发者**渲染DOM元素的文本内容**。常用的内容渲染指令有如下3个：

- v-text
- {{}}
- v-html

#### 1. v-text

用法示例：

```html
<p v-text="username"></p>
<p v-text="gender">性别：</p>
```

`v-text`指令的缺点：会覆盖元素内部原有的内容！

#### 2. {{}}语法  （插值表达式）

vue提供的**{{}}**语法，专门用来解决V-tet会覆盖默认文本内容的问题。这种{}语法的专业名称是**插值表达式**（英文名为：Mustache)。

```html
<p>姓名：{{ username }}</p>
<p>性别：{{ gender }}</p>
```

{{}}插值表达式：在实际开发中用的最多，只是内容的占位符，不会覆盖原有的内容！

#### 3. v-html

**v-text**指令和**插值表达式**只能渲染**纯文本内容**。如果要把**包含HTML标签的字符串**渲染为页面的HTML元素，则需要用到v-html这个指令：

```html
<div v-html="info"></div>
```

`v-html`指令的作用：可以把带有标签的字符串，渲染成真正的HTML内容！

### 1.2属性绑定指令

#### v-bind:

注意：插值表达式只能用在元素的**内容节点**中，不能用在元素的**属性节点**中！

如果需要为**元素的属性**动态绑定**属性值**，则需要用到**v-bind**属性绑定指令。用法示例如下：

```html
<input type="text" v-bind:placeholder="tips" />
```

在vue中，可以使用`v-bind:`指令，为元素的属性动态绑定值：
简写是英文的 `:`

```html
<input type="text" :placeholder="tips" />
```

### 使用Javascript表达式

在vue提供的模板渲染语法中，除了支持**绑定简单的数据值**之外，还**支持Javascript表达式的运算**，例如：

```html
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}
<!-- 在使用v-bid属性绑定期间，如果绑定内容需要进行动态拼接，则字符串的外面应该包裹单引号，例如：-->
<div v-bind:id="'list-' + id"></div>
```

### 1.3事件绑定指令

#### v-on:

vue提供了**v-on事件绑定**指令，用来辅助程序员为DOM元素绑定事件监听。语法格式如下：

```html
<h3>count的值为：{{count}}</h3>
<!-- 语法格式为v-on:事件名称="事件处理函数的名称" -->
<button v-on:click="addCount">+1</button>
```

`**v-on:**`**指令可以被简写为**`**@**`

#### 事件对象$event(不常用)

```html
<div id="app">
    <p>count 的值是：{{ count }}</p>
    <button @click="add(1,$event)">+N</button>
</div>
```

```javascript
methods: {
    add(n, e) {
        this.count += n;
        console.log(e);
        if (this.count % 2 == 0) {
            e.target.style.backgroundColor = "skyblue";
        } else {
            e.target.style.backgroundColor = "";
        }
    },
}
```

#### 事件修饰符

在事件处理函数中调用`event.preventDefault()`或`event.stopPropagation()`是非常常见的需求。因此，vue提供了**事件修饰符**的概念，来辅助程序员更方便的**对事件的触发进行控制**。常用的5个事件修饰符如下：

| 事件修饰符 | 说明 |
| --- | --- |
| **.prevent** | **阻止默认行为**（例如：阻止a连接的跳转、阻止表单的提交等） |
| **.stop** | **阻止事件冒泡** |
| .capture | 以捕获模式触发当前的事件处理函数 |
| .once | 绑定的事件只触发1次 |
| .self | 只有在event.target是当前元素自身时触发事件处理函数 |


```html
<a href="www.baidu.com" @click.prevent="show">跳转到百度首页</a>
```

#### 按键修饰符

在监听**键盘事件**时，我们经常需要**判断详细的按键**。此时，可以为**键盘相关的事件**添加**按键修饰符**，例如：

.esc

.enter

### 1.4 双向绑定指令

vue提供了**v-model 双向数据绑定**指令，用来辅助开发者在**不操作DOM**的提下，**快速获取表单的数据**。

#### v-model指令

`v-model`可以使用的html标签

```html
<div id="app">
    <p>用户的名字是：{{ username }}</p>
    <input type="text" v-model="username" />
</div>
```

```javascript
const vm = new Vue({
    el: "#app",
    data: {
        username: "zhangsan",
    },
});
```

1.  input输入框 
   -  type="radio" 
   -  type="checkbox" 
   -  type="xxxx" 
2.  textarea文本区域 
3.  select下拉框 

**简单理解就是**：有value属性的标签就能用这个`v-model`

#### v-model指令的修饰符

**为了方便对用户输入的内容进行处理**，vue为 v-model 指令提供了3个修饰符，分别是：

| 修饰符 | 作用 | 示例 |
| --- | --- | --- |
| **.number** | 自动将用户的输入值转为数值类型 | <input v-model.number="age"/> |
| **.trim** | 自动过滤用户输入的首尾空白字符 | <input v-model.trim="msg"/> |
| .lazy | 在"change"时而非"input"时更新 | <input v-model.lazy="msg"/> |


```html
<input type="text" v-model.number="n1"> +
<input type="text" v-model.number="n2"> =
<span>{{ n1 + n2 }}</span>
```

### 1.5条件渲染指令

**条件渲染指令**用来辅助开发者**按需控制DOM的显示与隐藏**。条件渲染指令有如下两个，分别是：

-   
#### v-if

-   
#### v-show

```html
<div id="app">
    <p v-if="networkState === 200">请求成功 --- 被 v-if 控制</p>
    <p v-show="networkState === 200">请求成功 --- 被 v-show 控制</p>
</div>
```

1. `v-show`的原理是：动态为元素添加或移除`display:none`样式，来实现元素的显示和隐藏 
   - 如果要频繁的切换元素的显示状态，用V-show性能会更好
2. `v-if`的原理是：每次动态创建或移除元素，实现元素的显示和隐藏 
   - 如果刚进入页面的时候，某些元素默认不需要被展示，而且后期这个元素很可能也不需要被展示出来，此时`v-if`性能更好

**在实际开发中，绝大多数情况，不用考虑性能问题，直接使用v-if就好了！！！**

##### v-else-if

v-else-if指令，顾名思义，充当 v-if 的 "else-if块"，可以连续使用：

```html
<div v-if="type === 'A'">优秀</diV>
<div v-else-if="type === 'B'">良好</div>
<diV v-else-if="type === 'C'">一般</div>
<diV v-else>差</div>
```

注意：v-else-if 指令**必须配合** v-if 指令一起使用，否则它将不会被识别！

### 1.6列表渲染指令

#### v-for

vue提供了 `v-for` 列表渲染指令，用来辅助开发者**基于一个数组来循环渲染一个列表结构**。v-for指令需要使
用 **item in items** 形式的特殊语法，其中：

- items是**待循环的数组**
- item是**被循环的每一项**

**注意：**

**官方建议：**

- 只要用到了`v-for`指令，那么一定要绑定一个：key属性
- 而且，尽量把 id 作为 key 的值，即`:key="item.id"`
- 官方对key的值类型，是有要求的：字符串或数字类型
- key的值是干万不能重复的，否则会终端报错：Duplicate keys detected

**key的注意事项**

1. key的值只能是**字符串**或**数字**类型
2. key的值**必须具有唯一性**（即：key的值不能重复)
3. 建议把**数据项id属性的值**作为key的值（因为id属性的值具有唯一性）
4. 使用**index的值**当作key的值**没有任何意义**（因为index的值不具有唯一性)
5. 建议使用V-for指令时**一定要指定key的值**（既提升性能、又防止列表状态紊乱）

```javascript
data: {
	1ist:[ // 列表数据
        { id: 1, name: 'zs' },
        { id: 2, name: 'ls' }
}
```

```html
<u1>
	<li v-for="item in list">姓名是：{{ item.name }}</li>
</ul>
```

#### v-for中的索引

`v-for`指令还支持一个**可选的**第二个参数，即**当前项的索引**。语法格式为`(item, index) in items`,示例代码如下：

```javascript
data: {
	1ist:[ // 列表数据
        { id: 1, name: 'zs' },
        { id: 2, name: 'ls' }
    ]
}
```

```html
<ul>
	<li v-for="(item,index) in 1ist">索引是：{{index}}，姓名是：{{item.name}}</li>
</u1>
```

注意：v-for指令中的**item项**和**index索引**都是形参，可以根据需要进行**重命名**。例如`(user, i) in userlist`

### vue的指令与过滤器

#### 2.过滤器(vue3已经没有过滤器了)

**过滤器(Filters)**是vue为开发者提供的功能，常用于**文本的格式化**。过滤器可以用在两个地方：**插值表达式**
和**v-bind属性绑定**。
过滤器应该被添加在JavaScript表达式的**尾部**，由“**管道符**”进行调用，示例代码如下：

```html
<!-- 在双花括号中通过"管道符"调用 capitalize 过滤器，对 message 的值进行格式化 -->
<p>{{ message | capi }}</p>
<!-- 在 v-bind 中通过”管道符"调用formatId过滤器，对rawId的值进行格式化 -->
<div v-bind:id="rawId formatId"></div>
```

```javascript
const vm = new Vue({
    el: '#app',
    data: {
        message: 'hello vue.js'
    },
    filters: {
        // 注意：过滤器函数形参中的va1,永远都是“管道符前面的那个值
        capi(val) {
            // 字符串有charAt方法，这个方法接收索引值，表示从字符串中把索引对应的字符，获取出来
            const first = val.charAt(0).toUpperCase()
            // 字符串的slice方法，可以截取字符串，从指定索引往后截取
            const other = val.slice(1)
            // 强调：过滤器中，一定要有一个返回值
            return first + other
        }
    }
})
```

#### 过滤器的注意点

1. 要定义到filters节点下，本质是一个函数
2. 在过滤器函数中，一定要有return值
3. 在过滤器的形参中，就可以获取到管道符“前面待处理的那个值
4. 如果全局过滤器和私有过滤器名字一致，此时按照“就近原侧”，调用的是 私有过滤器

#### 2.2私有过滤器和全局过滤器

在filters节点下定义的过滤器，称为“**私有过滤器**”，因为它**只能在当前vm实例所控制的el区域内使用**。
如果希望**在多个Vue实例之间共享过滤器**，则可以按照如下的格式定义**全局过滤器**：

```javascript
// 全局过滤器-独立于每个vm实例之外
// Vue.filter()方法接收两个参数：
// 第1个参数，是全局过滤器的”名字”
// 第2个参数，是全局过滤器的”处理函数”
Vue.filter('capitalize',(str) => {
	return str.charAt(0).toUpperCase() + str.slice(1) + '~~'
})
```

#### 2.3连续调用多个过滤器

过滤器可以串联地进行调用，例如：

```html
<!-- 把message的值，交给filterA进行处理 -->
<!-- 把filterA处理的结果，再交给filterB进行处理 -->
<!-- 最终把fi1terB处理的结果，作为最终的值渲染到页面上 -->
{{ message | filterA | filterB }}
```

#### 2.4过滤器传参

过滤器的本质是JavaScript函数，因此可以接收参数，格式如下：

```html
<!-- arg1和arg2是传递给filterA的参数 -->
<p>{{ message | filterA(arg1,arg2) }}</p>
```

```javascript
// 过滤器处理函数的形参列表中：
// 第一个参数：永远都是”管道符“前面待处理的值
// 从第二个参数开始，才是调用过滤器时传递过来的arg1和arg2参数
Vue.filter('filterA', (msg, arg1, arg2) => {
	// 过滤器的代码逻辑...
})
```

### 总结

1.  vue的**基本使用步骤** 
   -  导入vue.js文件 
   -  new Vue() 构造函数，得到vm实例对象 
   -  声明 el 和 data 数据节点 
   -  MVVM的对应关系 
2.  vue中常见**指令的基本用法** 
   -  插值表达式、v-bind、v-on、v-if 和 v-else 
   -  v-for 和  :key、v-model 

### watch侦听器

#### 1.什么是watch侦听器

**watch侦听器**允许开发者监视数据的变化，从而**针对数据的变化做特定的操作**。

```html
<div id="app">
    <input type="text" v-model="username">
</div>
```

```javascript
const vm = new Vue({
    el: '#app',
    data: { username: '' },
    watch: {
        // 监听username值的变化
        // newVal是“变化后的新值”，oldVal是“变化之前的旧值”
        username(newVal, oldVal) {
    		console.log(newVal, oldVal)
        }
    }
})
```

```javascript
watch: {
	// 定义对象格式的侦听器
	username: {
		// 侦听器的处理函数
		handler(newVal, oldVal) {
			console.log(newVal, oldVal)
		},
        // immediate选项的默认值是false
        // immediate的作用是：控制侦听器是否自动触发一次！
		immediate: true
        // 开启深度监听，只要对象中任何一个属性变化了，都会触发“对象的侦听器
        deep: true
    }
}
```

#### 2.immgdiate选项

默认情况下，组件在初次加载完毕后不会调用watch侦听器。如果想让watch侦听器立即被调用，则需要使用immediate选项。

#### 3.deep选项

如果watch侦听的是一个对象，如果对象中的属性值发生了变化，则无法被监听到。此时需要使用deep选项

#### 4.监听对象单个属性的变化

如果**只想监听对象中单个属性的变化**，则可以按照如下的方式定义wtch侦听器：

```javascript
const vm = new Vue({
	el: '#app',
	data: {
		info: { username: 'admin' }
	},
	watch: {
		'info.username': {
			handler(newVal) {
				console.log(newVal)
			}
		}
	}
})
```

### 计算属性

#### 1.什么是计算属性

计算属性指的是**通过一系列运算**之后，最终得到一个**属性值**。
**这个动态计算出来的属性值**可以被模板结构或 methods 方法使用。示例代码如下：

```html
<style>
    .box {
        width: 200px;
        height: 200px;
        border: 1px solid #ccc;
    }
</style>
<div id="app">
    <div>
        <span>R：</span>
        <input type="text" v-model.number="r">
    </div>
    <div>
        <span>G：</span>
        <input type="text" v-model.number="g">
    </div>
    <div>
        <span>B：</span>
        <input type="text" v-model.number="b">
    </div>
    <hr>

    <!-- 专门用户呈现颜色的 div 盒子 -->
    <div class="box" :style="{ backgroundColor: rgb }">
        {{ rgb }}
    </div>
    <button @click="show">按钮</button>
</div>
```

```javascript
var vm = new Vue({
    el: '#app',
    data: {
        // 红色  绿色  蓝色
        r: 0, g: 0,  b: 0
    },
    methods: {
        show() { console.log(this.rgb) }
    },
    computed: {
        rgb() { return `rgb(${this.r},${this.g},${this.b})` }
    }
});
```

特点：

1. 定义的时候，要被定义为方法”
2. 在使用计算属性的时候，当普通的属性使用即可

好处：

1. 实现了代码的复用
2. 只要计算属性中依赖的数据源变化了，则计算属性会自动重新求值

### axios

**axios**(发音：艾克C奥斯)是前端圈最火的、**专注于数据请求**的库。

#### axios的基础语法

axios的基本语法如下：

```javascript
axios({
	method: '请求的类型',
	url: '请求的URL地址'
}).then((result) => {
	//.then用来指定请求成功之后的回调函数
	//形参中的result是请求成功之后的结果
})
```

```javascript
axios({
    // 请求方式
    method: 'GET',
    // 请求的地址
    url: 'http://www.liulongbin.top:3006/api/getbooks',
    // URL 中的查询参数(get)
    params: {},
    // 请求体参数(post)
    data: {}
}).then(function (result) {
    console.log(result);
})
```

axios在请求到数据之后，在真正的数据之外，套了一层壳。

```javascript
// axios
{
    config:{},
    data:{真实的数据},
    headers:{},
    request:{),
    status:XXX,
    statusText:''
}
// 接口服务器发过来的数据
{
    status:'',
	msg:'',
	data:[]
}
```

结合async和await调用axios和使用解构赋值

```javascript
document.querySelector("#btnPost").addEventListener("click", async function () {
    // 如果调用某个方法的返回值是 Promise 实例，则前面可以添加 await !
    // await 只能用在被 async “修饰”的方法中
    const result = await axios({
        methosd: 'POST',
        url: 'http://www.liulongbin.top:3006/api/getbooks',
        data: {
            name: 'zs',
            age: 20
        }
    })
    console.log(result);
})
document.querySelector("#btnGet").addEventListener("click", async function () {
    // 解构赋值的时候，使用：进行重命名
    // 1.调用 axios 之后，使用 async/await 进行简化
    // 2.使用解构赋值，从 axios 封装的大对象中，把 data 属性解构出来
    // 3.把解构出来的 data 属性，使用 冒号 进行重命名，一般都重命名为 { data: res }
    const { data: res } = await axios({
        methosd: 'GET',
        url: 'http://www.liulongbin.top:3006/api/getbooks'
    })
    console.log(res.data);
})
```

### 单页面应用程序

#### 1.什么是单页面应用程序

**单页面应用程序**（英文名：**S**ingle **P**age **A**pplication)简称SPA,顾名思义，指的是**一个Web网站中只有唯一的一个HTML页面**，所有的功与交互都在这唯一的一个页面内完成。

### vue-cli

#### 2.什么是vue-cli

**vue-cli 是 Vue.js开发的标准工具**。它简化了程序员基于 webpack 创建工程化的 Vue 项目的过程。

引用自 vue-cli 官网上的一句话：
程序员可以**专注在撰写应用上**，而不必**花好几天去纠结** webpack 配置的问题。

中文官网：[https://cli.vuejs.org/zh/](https://cli.vuejs.org/zh/)

#### 3. vue-cli 安装和使用

vue-cli 是 npm 上的一个**全局包，使用 npm install 命令**，即可方便的把它安装到自己的电脑上：
`npm install -g @vue/cli`

通过-g安装的就叫全局包

`vue --version`或者`vue -V`来检测是否安装成功

基于 Vue-cli 快速生成工程化的 Vue 项目：

1. `vue create 项目的名称`，会进入第一个页面
2. 然后选择Manually select features，也就是最后一个
3. 选择Babel和CSS Pre-processors
4. 选择vue2或者vue3
5. 选择Less
6. 选择In dedicated config files（把Babel、ESlint等插件的配置项，放到自己独立的配置文件中）

```
.文件目录
├── node_modules 
├── public
│   ├── favicon.ico: 页签图标
│   └── index.html: 主页面
├── src
│   ├── assets: 存放静态资源
│   │   └── logo.png
│   │── component: 存放组件
│   │   └── HelloWorld.vue
│   │── App.vue: 汇总所有组件
│   └── main.js: 入口文件
├── .gitignore: git版本管制忽略的配置
├── babel.config.js: babel的配置文件
├── package.json: 应用包配置文件 
├── README.md: 应用描述文件
└── package-lock.json: 包版本控制文件
```

#### 4.vue项目中src目录的构成：

1. **assets 文件夹**：存放项目中用到的静态资源文件，例如：css 样式表、图片资源
2. **components 文件夹**：程序员封装的、可复用的组件，都要放到 components 目录下
3. **main.js** 是项目的入口文件。整个项目的运行，要先执行 main.js

#### 5.vue项目的运行流程

在工程化的项目中，vue要做的事情很单纯：通过 **main.js**把 **App.vue** 渲染到 **index.html** 的指定区域中。

其中：

1. **App.Vue** 用来编写待渲染的**模板结构**
2. **index.html** 中需要预留一个 **el 区域**
3. **main.js** 把App.vue渲染到了 index.html 所预留的区域中

### vue组件

#### 1.什么是组件化开发

**组件化开发**指的是：根据**封装**的思想，**把页面上可重用的UI结构封装为组件**，从而方便项目的开发和维护。

#### 2.Vue中的组件化开发

vue 是一个**支持组件化开发**的前端框架。
vue中规定：**组件的后缀名**是 **.vue** 。之前接触到的 App.vue 文件本质上就是一个 vue 的组件。

#### 3.vue组件的三个组成部分

每个.vue组件都由3部分构成，分别是：

- **template** -> 组件的**模板结构**
- **script** -> 组件的 **javaScript 行为**
- **style** -> 组件的**样式**

#### 4.组件之间的父子关系

组件在被封装好之后，**彼此之间是相互独立的**，不存在父子关系
在**使用组件**的时候，**根据彼此的嵌套关系**，形成了父子关系、兄弟关系

##### 4.1使用组件的三个步骤

步骤1：使用import语法**导入需要的组件**

```javascript
import Left from '@/components/Left.vue'
```

步骤2：使用**components**节点注册组件

```javascript
export default {
	components:
		Left
	}
}
```

步骤3：**以标签形式**使用刚才注册的组件

```html
<div class="box">
	<Left></Left>
</div>
```

##### 4.2通过components注册的是私有子组件

例如：
在**组件A**的components节点下，注册了**组件F**。
则组件F只能用在组件A中；不能被用在**组件C**中。s

##### 4.3注册全局组件

在vue项目的**main.js**入口文件中，通过**Vue.component()**方法，可以注册全局组件。示例代码如下：

#### 5.组件的props

pops是组件的**自定义属性**，在**封装通用组件**的时候，合理地使用props可以极大的**提高组件的复用性**！
它的语法格式如下：

```javascript
export default {
    // props是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值
    // props:['自定义属性A', '自定义属性B', '其它自定义属性...']，
    props: ["init"],
    data() {
        return { };
    }
}
```

##### 5.1 props是只读的

vue规定：组件中封装的自定义属性是**只读的**，程序员**不能直接修改**props的值。否则会直接报错

要想修改props的值，可以**把props的值转存到data中**，因为data中的数据都是可读可写的！

```javascript
props: ["init"],
    data() {
    return {
        count: this.init,
    };
}
```

##### 5.2 props 的 default 默认值

在声明自定义属性时，可以通过**default**来**定义属性的默认值**。示例代码如下：

```javascript
props: {
    init: {
        default: 0,
    },
}
```

##### 5.3 props的type值类型

在声明自定义属性时，可以通过**type**来**定义属性的值类型**。示例代码如下：

```javascript
props: {
    init: {
        default: 0,
        type: Number,
    },
}
```

Number | Boolean | String | Array | Object

##### 5.4 props的required必填项

```javascript
props: {
    init: {
        default: 0,
        type: Number,
        required: true,
    },
}
```

##### 6.组件之间的样式冲突问题

默认情况下，**写在.vue组件中的样式会全局生效**，因此很容易造成**多个组件之间的样式冲突问题**。

导致组件之间样式冲突的根本原因是：

1. 单页面应用程序中，所有组件的DOM结构，都是基于**唯一的index.html页面**进行呈现的
2. 每个组件中的样式，都会**影响整个index.html页面**中的DOM元素

##### 6.1scoped属性原理

为每个组件分配唯一的自定义属性，在编写组件样式时，通过属性选择器来控制样式的作用域，示例代码如下：

```
.container[data-v-0001] {
	border:1px solid red;
}
```

##### 6.2 style节点的scoped属性

为了提高开发效率和开发体验，vue为**style节点**提供了**scoped**属性，从而防止组件之间的样式冲突问题：

```html
<style scoped></style>
```

##### 6.3  /deep/样式穿透

如果给当前组件的style节点添加了scoped属性，则**当前组件的样式对其子组件是不生效的**。如果想让某些样式对子组件生效，可以使用**/deep/深度选择器**。

```html
<style lang="less" scoped>
    .title {
		color: blue;/*不加/deep/时，生成的选择器格式为.title[data-v-052242de]*/
    }
    /deep/ .title {
		color: blue;/*加上/deep/时，生成的选择器格式为[data-v-052242de] .title
	}
</style>
```

### 组件的生命周期

#### 1.生命周期&生命周期函数

**生命周期**(Life Cycle)是指一个组件从**创建**->**运行**->**销毁**的整个阶段，**强调的是一个时间段**。

**生命周期函数**：是由vue框架提供的**内置函数**，会伴随着组件的生命周期，**自动按次序执行**。

注意：生命周期强调的是时间段，生命周期函数强调的是时间点。

#### 3.组件生命周期函数的分类

new Vue()

| 组件创建阶段 | 组件运行阶段 | 组件销毁阶段 |
| --- | --- | --- |
| beforeCreate(创建之前)
created(创建完成)
beforeMount(渲染之前)
mounted(渲染完成) | beforeUpdate(更新之前)
updated(更新完成) | beforeDestroy(销毁之前)
destroyed(销毁完成) |
| 组件生命周期的第1个阶段 | 组件生命周期的第2个阶段 | 组件生命周期的第3个阶段 |


#### 4.生命周期图示

可以参考vue官方文档给出的“生命周期图示”，进一步理解组件生命周期执行的过程：
https://cn.vuejs.org/v2/guide/instance.html#生命周期图示

![](./images/image-20220619223028850.png#id=jgOGH&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

##### beforeCreate

创建阶段的第1个生命周期函数，不常用。

##### created

created生命周期函数，非常常用。
经常在它里面，调用methods中的方法，请求服务器的数据。
并且，把请求到的数据，转存到data中，供template模板渲染的时候使用！

##### beforeMount

创建阶段的第3个生命周期函数，不常用。

##### mounted

非常常用

如果要操作当前组件的 DOM,最早只能在 mounted 阶段执行

##### beforeUpdate

##### updated

当数据变化之后，为了能够操作到最新的D0M结构，必须把代码写到 updated 生周期函数中

beforeUpdate和updated函数最少执行0次，最多执行N次

##### beforeDestroy

##### destroyed

不常用

### 组件之间的数据共享

#### 1.组件之间的关系

在项目开发中，组件之间的**最常见的关系**分为如下两种：

①父子关系
②兄弟关系

#### 2.父子组件之间的数据共享

父子组件之间的数据共享又分为：

1. **父 -> 子**共享数据
2. **子 -> 父**共享数据

##### 2.1父组件向子组件共享数据

父组件向子组件共享数据需要使用自定义属性。

```javascript
// 父组件
<Son :msg="message" :user="userinfo"></Son>
data() {
    return {
        message: "hello vue.js",
        userinfo: { name: "zs", age: 20 },
    };
}
```

```html
// 子组件
<template>
    <div class="son">
        <h5>Son 组件</h5>
        <p>父组件传递过来的msg值是：{{ msg }}</p>
        <p>父组件传递过来的user值是：{{ user }}</p>
    </div>
</template>
props: ["msg", "user"]
```

##### 2.2子组件向父组件共享数据

子组件向父组件共享数据使用自定义事件。示例代码如下：

```javascript
// 父组件
// 2.
<Son @numchange="getNewCount"></Son>
export default {
    data() {
        return {
            countFromSon: 0,
        };
    },
    methods: {
        // 3.
        getNewCount(val) {
            this.countFromSon = val;
            console.log(this.countFromSon);
        },
    }
}
```

```javascript
// 子组件
export default {
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        add() {
            this.count += 1;
            // 1. 修改数据时，通过$emit()触发自定义事件
            this.$emit("numchange", this.count);
        },
    },
}
```

##### 3.兄弟组件之间的数据共享

在vue2.x中，兄弟组件之间数据共享的方案是EventBus。

**EventBus的使用步骤**

①创建**eventBus.js**模块，并向外共享一个**Vue的实例对象**
②在数据**发送方**，调用**bus.$emit**( '事件名称'，要发送的数据 )方法**触发自定义事件**
③在数据**接收方**，调用**bus.$on**( '事件名称'，事件处理函数 )方法**注册一个自定义事件**

兄弟组件A (数据发送方)：

```javascript
// 1.导入eventBus.js模块
import bus from "./eventBus.js";
export default {
    data() {
        return {
            str: 'Hello World',
        };
    },
    methods: {
        send() {
            // 2. 通过eventBus来发送数据
            bus.$emit("share", this.str);
        },
    },
}
```

eventBus.js：

```javascript
import Vue from "vue";
// 向外共享Vue的实例对象
export default new Vue()
```

兄弟组件C (数据接收方)：

```javascript
import bus from "./eventBus.js";
export default {
    data() {
        return {
            msgFromLeft: "",
        };
    },
    created() {
        bus.$on("share", (val) => {
            console.log(val);
            this.msgFromLeft = val;
        });
    },
}
```

**EventBus的使用步骤2**

main.js

```javascript
new Vue({
    render: (h) => h(App),
    // 全局事件总线$bus配置
    beforeCreate() {
        Vue.prototype.$bus = this
    }
}).$mount('#app')
```

发送方：

```javascript
this.$bus.$emit('methodName', data)
```

接收方：

```javascript
this.$bus.$on('methodName', (data) => {
    console.log(data);
})
```

## 总结复习：

[https://www.bilibili.com/video/BV1zq4y1p7ga?p=116&spm_id_from=pageDriver&vd_source=34b0bdbad0a078013ba5dac171fc5bfc](https://www.bilibili.com/video/BV1zq4y1p7ga?p=116&spm_id_from=pageDriver&vd_source=34b0bdbad0a078013ba5dac171fc5bfc)

### ref引用

jquery  牛逼  简化了程序员操作DOM的过程

Vue优势：MVVM在Vue中，程序员不需要操作DOM。程序员只需要把数据维护好即可！（数据驱动视图）
结论：在vue项目，墙裂不建议大家安装和使用jQuery！！！

假设：在vue中，需要操作DOM了，需要拿到页面上某个DOM元素的引用，此时怎么办？

#### 1.什么是ref引用

ref 用来辅助开发者在**不依赖于jQuery的情况下**，获取DOM元素或组件的引用。

每个vue的组件实例上，都包含一个**$refs对象**，里面存储着对应的DOM元素或组件的引用。默认情况下，
**组件的$refs指向一个空对象**。

#### 3.使用ref引用组件实例

如果想要使用ref引用页面上的组件实例，则可以按照如下的方式进行操作：

#### 6.this.$nextTick(cb)方法

组件的`$nextTick(cb)`方法，会把cb回调**推迟到下一个DOM更新周期之后执行**。

通俗的理解是：等组件的DOM更新完成之后，再执行cb回调函数。从而能保证cb回调函数可以操作到最新的DOM元素。

```javascript
// 修改数据
vm.msg = 'Hello'
// DOM 还没有更新
Vue.nextTick(function () {
	// DOM 更新了
})


// 作为一个 Promise 使用 (2.1.0 起新增，详见接下来的提示)
Vue.nextTick()
    .then(function () {
    	// DOM 更新了
	})
```

### 动态组件

#### 1.什么是动态组件

动态组件指的是**动态切换组件的显示与隐藏**。

#### 2.如何实现动态组件渲染

vue提供了一个内置的<component>组件，专门用来实现动态组件的渲染。示例代码如下：

```javascript
data() {
	// 1. 当前要渲染的组件名称
    return {
        // comName 表示要展示的组件的名字
        comName: "Left",
    };
}

<!-- 2. 通过s属性，动态指定要渲染的组件 -->
<component :is="comName"></component>

// 3.点击按钮，动态切换组件的名称
<button @click="comName = 'Left'">展示 Left</button>
<button @click="comName = 'Right'">展示 Right</button>
```

#### 3. 使用keep-alive保持状态

keep-alive可以把内部的组件进行缓存，而不是销毁组件

默认情况下，切换动态组件时**无法保持组件的状态**。此时可以使用vue内置的**<keep-alive>**组件保持动态组件的状态。示例代码如下：

```html
<keep-alive>
    <component :is="comName"></component>
</keep-alive>
```

#### 4.keep-alive对应的生命周期函数

当组件被**缓存**时，会自动触发组件的 **deactivated** 生命周期函数。
当组件被**激活**时，会自动触发组件的 **activated** 生命周期函数。

```javascript
export default {
    created() { console.log('组件被创建了') },
    destroyed() { console.log('组件被销毁了') },

    activated() { console.log('Left 组件被激活了') },
    deactivated() { console.log('Left 组件被缓存了') }
}
```

#### 5. keep-alive 的 include 属性

**include**属性用来指定：只有名称匹配的组件**会被缓存**。多个组件名之间使用**英文的逗号**分隔：

```html
<keep-alive include="Left">
    <component :is="comName"></component>
</keep-alive>
```

通过 **exclude** 属性指定哪些组件**不需要被缓存**

**不要同时使用 include 和 exclude 这两个属性**

#### 拓展

如果在“声明组件”的时候，没有为组件指定name名称，则组件的名称默认就是“注册时候的名称”

当提供了name属性之后，组件的名称，就是name属性的值

对比：

1. 组件的“注册名称”的主要应用场景是：以标签的形式，把注册好的组件，渲染和使用到页面结构之中
2. 组件声明时候的“name”名称的主要应用场景：结合<keep-alive>标签实现组件缓存功能；以及在调试工具中看到组件的name名称

### 插槽

#### 1.什么是插槽

**插槽(slot)**是vue为**组件的封装者**提供的能力。允许开发者在封装组件时，把**不确定的、希望由用户指定的部分**定义为插槽。

vue 官方规定：每一个slot插槽，都要有一个name名称
如果省略了 slot 的 name 属性，则有一个默认名称叫做 default

默认情况下，在使用组件的时候，提供的内容都会被填充到名字为 default 的插槽之中

1. 如果要把内容填充到指定名称的插槽中，需要使用 v-slot: 这个指令
2. v-slot: 后面要跟上插槽的名字
3. v-slot: 指令不能直接用在元素身上，必须用在 template 标签上
4. template 这个标签，它是一个虚拟的标签，只起到包裹性质的作用，但是不会被渲染为任何实质性的 html 元素
5. v-slot: 指令的简写形式是 #

```html
<Left>
    <template #default>
        <p>这是在 Left 组件的内容区域，声明的 p 标签</p>
    </template>
</Left>
```

#### 2.体验插槽的基础用法

在封装组件时，可以通过**<slot>**元素**定义插槽**，从而**为用户预留内容占位符**。示例代码如下：

```html
<template>
  <div class="right-container">
    <h3>Right 组件</h3>
    <!-- 通过 slot 标签，为用户预留内容占位符（插槽） -->
    <slot></slot>
  </div>
</template>
```

使用：

```html
<Right>
    <!-- 在使用 MyCom1 组件时，为插槽指定具体的内容 -->
    <p>~~~用户自定义的内容~~~</p>
</Right>
```

##### 2.1没有预留插槽的内容会被丢弃

如果在封装组件时**没有预留任何<slot>插槽**，则用户提供的任何**自定义内容**都**会被丢弃**。

##### 2.2 后备内容

封装组件时，可以为预留的<slot>插槽提供**后备内容**（默认内容)。如果组件的使用者没有为插槽提供任何
内容，则后备内容会生效。示例代码如下：

```html
<template>
    <div class="right-container">
        <h3>Right 组件</h3>
        <slot>这是后备内容</slot>
    </div>
</template>
```

#### 3.  具名插槽

<slot>或<slot name="default">为默认插槽

<slot name="title">这种 name 不为 **default** 的插槽为具名插槽

如果在封装组件时**需要预留多个插槽节点**，则需要为每个<slot>插槽指定**具体的name名称**。这种**带有具体**
**名称的插槽**叫做“具名插槽”。示例代码如下：

```html
<div class="right-container">
    <h3>Right 组件</h3>
    <header>
        <!-- 我们希望把页头放这里 -->
        <slot name="header"></slot>
    </header>
    <main>
        <!-- 我们希望把主要内容放这里 -->
        <slot name="main"></slot>
    </main>
    <footer>
        <!-- 我们希望把页脚放这里 -->
        <slot name="footer"></slot>
    </footer>
  </div>
```

##### 3.1为具名插槽提供内容

在向具名插槽提供内容的时候，我们可以在一个**<template>**元素上使用**v-slot**指令，并以v-slot的参数的
形式提供其名称。示例代码如下：

##### 3.2具名插槽的简写形式

跟V-on和v-bind一样，v-slot也有缩写，即把参数之前的所有内容(**v-slot:**)替换为字符**#**。例如==v-slot:header
可以被重写为#==header:

```html
<Right>
    <template v-slot:header>
        <h3>一首诗</h3>
    </template>
    <template #main>
        <div>
            <p>啊，大海，全是水。</p>
            <p>啊，蜈蚣，全是腿。</p>
            <p>啊，辣椒，净辣嘴。</p>
        </div>
    </template>
    <template #footer>
        <div>作者：彬锅果</div>
    </template>
</Right>
```

#### 4. 作用域插槽

在封装组件的过程中，可以为预留的<slot>插槽绑定props数据，这种**带有props数据的<slot>**叫做“**作用**
**域插槽**”。

##### 4.1使用作用域插槽

可以使用v-slot:的形式，接收作用域插槽对外提供的数据。示例代码如下：

##### 4.2解构插槽Prop

作用域插槽对外提供的数据对象，可以使用**解构赋值**简化数据的接收过程。示例代码如下：

Article:

```html
<template>
    <div class="article-container">
        <!-- 文章的标题 -->
        <div class="header-box">
            <slot name="title"></slot>
        </div>
        <!-- 文章的内容 -->
        <div class="content-box">
            <!-- 在封装组件时，为预留的<slot>提供属性对应的值，这种用法，叫做“作用域插槽” -->
            <slot name="content" msg="hello vue.js"></slot>
        </div>
        <!-- 文章的作者 -->
        <div class="footer-box">
            <slot name="author"></slot>
        </div>
    </div>
</template>
```

App:

```html
<template>
    <div class="app-container">
        <h1>App 根组件</h1>
        <hr />
        <Article>
            <template #title>
                <h3>一首诗</h3>
            </template>
            <template #content="scope">
                <div>
                    <p>啊，大海，全是水。</p>
                    <p>啊，蜈蚣，全是腿。</p>
                    <p>啊，辣椒，净辣嘴。</p>
                    <p>{{ scope.msg }}</p>
                </div>
            </template>
            <template #author>
                <div>作者：彬锅果</div>
            </template>
        </Article>
    </div>
</template>
```

### 自定义指令

#### 1.什么是自定义指令

vue官方提供了 v-text、v-for、v-model、v-if 等常用的指令。除此之外 vue 还允许开发者自定义指令。

#### 2.自定义指令的分类

vue中的自定义指令分为两类，分别是：

- **私有**自定义指令
- **全局**自定义指令

#### 3.私有自定义指令

在每个 vue 组件中，可以在 **directives** 节点下声明**私有自定义指令**。示例代码如下：

```javascript
directives: {
    // 定义名为color的指令，指向一个配置对象
    color: {
        // 当指令第一次被绑定到元素上的时候，会立即触发 bind 函数（vue3是mounted）
        // 形参中的 el 表示当前指令所绑定到的那个 DOM 对象
        bind(el) {
            el.style.color = 'red';
        }
    }
}
```

#### 4.使用自定义指令

在使用自定义指令时，需要加上 **v-** 前缀。示例代码如下：

```html
<!-- 声明自定义指令时，指令的名字是 co1or -->
<!-- 使用自定义指令时，需要加上 v- 指令前缀 -->
<h1 v-color>App组件</h1>
```

#### 5.为自定义指令动态绑定参数值

在 template 结构中**使用自定义指令**时，可以通过等号(=)的方式，为当前指令**动态绑定参数值**：

```javascript
data() {
    return {
        color: "pink",
    }
}
```

在使用指令时，动态为当前指令绑定参数值color

```html
<h1 v-color="color">App组件</h1>
```

#### 6.通过binding获取指令的参数值

在声明自定义指令时，可以通过形参中的**第二个参数**，来接收指令的参数值：

```javascript
directives: {
    color: {
        bind(el, binding) {
            // 通过 binding 对象的 .value 属性，获取动态的参数值
            el.style.color = binding.value;
        }
    }
}
```

#### 7.update函数

bind函数（vue3是mounted）**只调用1次**：当指令第一次绑定到元素时调用，**当DOM更新时bind函数不会被触发**。**update**函数（vue3是updated）会在**每次DOM更新时**被调用。示例代码如下：

```javascript
directives: {
    color: {
        // 当指令第一次被绑定到元素时被调用
        bind(el, binding) {
            el.style.color = binding.value;
        },
        // 每次 DOM 更新时被调用
        update(el, binding) {
            el.style.color = binding.value;
        }
    }
}
```

#### 8.函数简写

如果 **bind** 和 **update** 函数中的**逻辑完全相同**，则**对象格式**的自定义指令可以简写成**函数格式**：

```javascript
directives: {
    // 在 bind 和 update 时，会触发相同的业务逻辑
    color(el, binding) {
        el.style.color = binding.value;
    }
}
```

#### 9.全局自定义指令

全局共享的自定义指令需要通过"Vue.directive()”进行声明，示例代码如下：

```javascript
Vue.directive('color', {
  bind(el, binding) {
    el.style.color = binding.value
  },
  update(el, binding) {
    el.style.color = binding.value
  }
})
```

```javascript
// 简写
Vue.directive('color', function (el, binding) {
  el.style.color = binding.value
})
```

### 把axios挂载到Vue的原型上并配置请求路径

main.js:

```javascript
// 全局配置 axios 的请求根路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3006'
// 把 axios 挂载到V ue.prototype 上，供每个 .vue 组件的实例直接使用
Vue.prototype.$http = axios
// 今后，在每个 .vue 组件中要发起请求，直接调用 this.$http.xxx
// 但是，把 axios 挂载到 Vue 原型上，有一个缺点：不利于 API 接口的复用！
```

Left:

```javascript
// import axios from 'axios'
export default {
    methods: {
        async getInfo() {
            const { data: res } = await this.$http.get('/api/get')
            console.log(res)
        }
    }
}
```

## 路由

### 前端路由的概念与原理

#### 1. 什么是路由

路由（英文：router）就是**对应关系**。

#### 2. SPA与前端路由

SPA指的是一个Wb网站只有唯一的一个HTML页面，**所有组件的展示与切换**都在这唯一的一个页面内完成。
此时，**不同组件之间的切换**需要通过**前端路由**来实现。

结论：在SPA项目中，**不同功能之间的切换**，要**依赖于前端路由**来完成！

#### 3. 什么是前端路由

通俗易懂的概念：**Hash地址**与**组件**之间的**对应关系**。

#### 4. 前端路由的工作方式

① 用户**点击了**页面上的**路由链接**
② 导致了**URL地址栏**中的**Hash值**发生了变化
③ **前端路由监听了到Hash地址的变化**
④ 前端路由把当前**Hash地址对应的组件**渲染都浏览器中

结论：前端路由，指的是**Hash地址**与**组件之间**的**对应关系**！

#### 5. 实现简易的前端路由

步骤1：通过<component>标签，结合comName动态渲染组件。

### vue-router 的基本用法

#### 1. 什么是 vue-router

**vue-router**是vue.js官方给出的**路由解决方案**。它只能结合vue项目进行使用，能够轻松的管理SPA项目
中组件的切换。

vue-router3.x（vue2）的官方文档地址：[https://router](https://router)..vuejs.org/zh/
vue-router4.x（vue3）的官方文档地址：[https://next.router.vuejs.org/](https://next.router.vuejs.org/)

#### 2.vue-router安装和配置的步骤

1. 安装vue-router包
2. 创建路由模块
3. 导入并挂载路由模块
4. 声明路由链接和占位符

##### 2.1在项目中安装 vue-router

在vue2的项目中，安装Vue-router的命令如下：

`npm i vue-router@3.5.2 -S`

在vue3的项目中，只能安装并使用Vue-router4.x。安装的命令如下：

`npm install vue-router@next -S`

##### 2.2创建路由模块

在src源代码目录下，新建 **router/index.js** 路由模块，并初始化如下的代码：

```javascript
// 1. 导入 Vue 和 VueRouter 的包
import Vue from 'vue'
import VueRouter from 'vue-router'

// 2. 调用 Vue.use() 函数，把 VueRouter 安装为 Vue 的插件
// Vue.use() 函数的作用，就是来安装插件的
Vue.use(VueRouter)

// 3. 创建路由的实例对象
const router = new VueRouter()

// 4. 向外共享路由的实例对象
export default router
```

##### 2.3导入并挂载路由模块

在 src/main.js 入口文件中，导入并挂载路由模块。示例代码如下：

```javascript
import Vue from 'vue'
import App from './App.vue'
// 1.导入路由模块，目的：拿到路由的实例对象
// import router from '@/router/index.js'
// 在进行模块化导入的时候，如果给定的是文件夹，则默认导入这个文件夹下，名字叫做 idex.js 的文件
import router from '@/router'

new Vue({
  render: h => h(App),
  // 2.挂载路由模块
  // router: router
  // 可以简写为
  router
}).$mount('#app')
```

##### 2.4声明路由链接和占位符

在src/App.Vue组件中，使用vue-router提供的<router-link>和<router-view>声明路由链接和占位符：

```html
<template>
  <div class="app-container">
    <h1>App2 组件</h1>
    <!-- 1. 当安装和配置了 vue-router 后，就可以使用 router-link 来替代普通的a链接了 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/movie">电影</router-link>
    <router-link to="/about">关于</router-link>
    <hr />
    <!-- 2. 只要在项目中安装和配置了vue-router,就可以使用 router--view 这个组件了 -->
    <!-- 它的作用很单纯：占位符 -->
    <router-view></router-view>
  </div>
</template>
```

#### 3.声明路由的匹配规则

在 src/router/index.js 路由模块中，通过**routes数组**声明路由的匹配规则。示例代码如下：

```javascript
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'

const router = new VueRouter({
    // routes 是一个数组，作用：定义“hash地址”与“组件”之间的对应关系
    routes:[
        // 路由规则
        { path: '/home', component: Home },
        { path: '/movie', component: Movie },
        { path: '/about', component: About }
    ]
})
```

### vue-router的常见用法

#### 1.路由重定向

**路由重定向**指的是：用户在访问**地址A**的时候，**强制用户跳转**到地址C,从而展示特定的组件页面。
通过路由规则的**redirect**属性，指定一个新的路由地址，可以很方便地设置路由的重定向：

```javascript
const router = new VueRouter({
    routes:[
        // 重定向的路由规则
        { path: '/', redirect: '/home' },
        // 路由规则
        { path: '/home', component: Home },
        { path: '/movie', component: Movie },
        { path: '/about', component: About }
    ]
})
```

#### 2.嵌套路由

通过路由实现**组件的嵌套展示**，叫做嵌套路由。

点击**父级路由链接**显示模板内容

1. 模板内容中又有**子级路由链接**
2. 点击**子级路由链接**显示**子级模板内容**

#### 3.1声明子路由链接和子路由占位符

在**About.vue**组件中，声明tab1和tab2的**子路由链接**以及**子路由占位符**。示例代码如下：

```html
<template>
    <div class="about-container">
        <h3>About 组件</h3>
        <!-- 1. 子级路由链接 -->
        <router-link to="/about/tab1">tab1</router-link>
        <router-link to="/about/tab2">tab2</router-link>
        <hr />
        <!-- 2. 子级路由占位符 -->
        <router-view></router-view>
    </div>
</template>
```

#### 3.2通过children属性声明子路由规则

在src/router./index.js路由模块中，导入需要的组件，并使用**children属性**声明子路由规则：

```javascript
import Tab1 from '@/components/tabs/Tab1.vue'
import Tab2 from '@/components/tabs/Tab2.vue'

const router = new VueRouter({
    routes:[
        { 
            path: '/about',
            component: About,
            // 默认展示tab1
            redirect: '/about/tab1',
            // 1. 通过children属性，嵌套声明子级路由规则
            children: [
                // 2.
                { path: 'tab1', component: Tab1 },
                { path: 'tab2', component: Tab2 }
            ] 
        }
    ]
})
```

#### 4.1动态路由的概念

动态路由指的是：把Hash地址中**可变的部分**定义为**参数项**，从而**提高路由规则的复用性**。
在vue-router中使用英文的冒号( : )来定义路由的参数项。示例代码如下：

```javascript
{ path: '/movie/:id', component: Movie }
```

#### 4.2$route.params参数对象

在**动态路由**渲染出来的组件中，可以使用`this.$route.params`对象访问到**动态匹配的参数值**。

```html
<template>
    <div class="movie-container">
        <!-- this.$route 是路由的“参数对象” -->
        <!-- this.$router 是路由的“导航对象” -->
        <h3>Movie 组件 --- {{ $route.params.id }}</h3>
        <button @click="showThis">打印 this</button>
    </div>
</template>

<script>
export default {
    name: 'Movie',
    methods: {
        showThis() {
            console.log(this)
        }
    }
}
</script>
```

#### 4.3使用props接收路由参数

**为了简化路由参数的获取形式**，vue-router允许在**路由规则**中**开启props传参**。示例代码如下：

```javascript
// 1、在定义路由规则时，声明props:true选项，
// 即可在Movie组件中，以props的形式接收到路由规则匹配到的参数项
{ path: '/movie/:id', component: Movie, props: true }
```

```html
<template>
    <div class="movie-container">
        <!-- 3、直接使用props中接收的路由参数 -->
        <h3>Movie 组件 --- {{ id }}</h3>
    </div>
</template>

<script>
export default {
    // 2、使用props接收路由规则中匹配到的参数项
    props: ['id']
}
</script>
```

##### 注意1：在hash地址中，/ 后面的参数项，叫做“路径参数”

在路由“参数对象”中，需要使用this.$route.params来访问路径参数

##### 注意2：在hash地址中，? 后面的参数项，叫做“查询参数”

在路由“参数对象”中，需要使用this.$route.query来访问查询参数

##### 注意3：在this.$route中，path只是路径部分；fullPath是完整的地址

例如：
/movie/2?name=zs&age=20 是 fullPath的值
/movie/2 是 path的值

#### 5.声明式导航&编程式导航

在浏览器中，**点击链接**实现导航的方式，叫做**声明式导航**。例如：
● 普通网页中点击**<a>**链接、vue项目中点击**<router-link>**都属于声明式导航

在浏览器中，**调用API方法**实现导航的方式，叫做**编程式导航**。例如：
● 普通网页中调用**location.href**跳转到新页面的方式，属于编程式导航

#### 5.1vue-router中的编程式导航API

vue-router提供了许多编程式导航的APl,其中最常用的导航API分别是：

①this.$router.**push**('hash地址')

- 跳转到指定hash地址，并**增加**一条历史记录

②this.$router.**replace**('hash地址')

- 跳转到指定的hash地址，并**替换掉当前的**历史记录

③this.$router.**go**(数值n)

- 实现导航历史前进、后退

#### 5.2 Srouter.push

调用this.$router.push()方法，可以跳转到指定的hash地址，从而展示对应的组件页面。示例代码如下：

```html
<template>
    <div class="home-container">
        <h3>Home 组件</h3>
        <hr />
        <button @click="gotoLk">跳转到 电影1 页面</button>
    	<button @click="gotoLk2">跳转到 电影1 页面 replace 方法</button>
    </div>
</template>
<script>
export default {
    name: 'Home',
    methods: {
        gotoLk() {
            this.$router.push('/movie/1')
        },
        gotoLk2() {
            this.$router.replace('/movie/1')
        }
    }
}
</script>
```

#### 5.3 Srouter.replace

调用this.$router.replace()方法，可以跳转到指定的hash地址，从而展示对应的组件页面。

#### 5.4 Srouter.go

调用this.$router.go()方法，可以在浏览历史中前进和后退。示例代码如下：

#### 5.5 $router.go的简化用法

在实际开发中，一般只会前进和后退一层页面。因此Vue-router提供了如下两个便捷方法：
① **$router.back()**

- 在历史记录中，**后退**到上一个页面

② **$router.forward()**

- 在历史记录中，**前进**到下一个页面

```html
<template>
  <div class="movie-container">
    <h3>Movie 组件 --- {{ $route.params.id }} --- {{ id }}</h3>
    <button @click="goback">go 后退</button>
    <button @click="$router.back()">back 后退</button>
    <button @click="$router.forward()">forward 后退</button>
  </div>
</template>
<script>
export default {
    name: 'Movie',
    props: ['id'],
    methods: {
        goback() {
            this.$router.go(-1)
        }
    }
}
</script>
```

#### 6. 导航守卫

**导航守卫**可以**控制路由的访问权限**。示意图如下：

![](./images/image-20220623170034683.png#id=TLMXO&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=none&title=)

#### 6.1全局前置守卫

每次发生路由的**导航跳转**时，都会触发**全局前置守卫**。因此，在全局前置守卫中，程序员可以对每个路由进行**访问权限**的控制

#### 6.2守卫方法的3个形参

**全局前置守卫**的回调函数中接收3个形参，格式为：

```javascript
const router = new VueRouter({ ... })

// 为 router 实例对象，声明全局前置导航守卫
// 只要发生了路由的跳转，必然会触发 beforeEach 指定的 function 回调函数
router.beforeEach((to, from, next) => {
  // to 表示将要访问的路由的信息对象
  // from 表示将要离开的路由的信息对象
  // next() 函数表示放行的意思
  next()
})
```

#### 6.3next函数的3种调用方式

当前用户**拥有**后台主页的访问权限，直接放行：next()
当前用户**没有**后台主页的访问权限，**强制其跳转到登录页面**：next('/login')
当前用户**没有**后台主页的访问权限，**不允许跳转到后台主页**：next(false)

#### 6.4控制后台主页的访问权限

```javascript
router.beforeEach((to, from, next) => {
    if (to.path === '/main') {
        const token = localStorage.getItem('token')
        if (token) {
            // 访问的是后台主页，且有 token 的值
            next()
        } else {
            // 访问的是后台主页，但是没有 token 的值
            next('/login')
        }
    } else {
        // 访问的不是后台主页，直接放行
        next()
    }
})
```
