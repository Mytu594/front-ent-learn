## 1. Vuex概述

Vuex是实现组件全局状态（数据）管理的一种机制，可以方便的实现组件之间数据的共享。

### 1.1 使用Vuex统一管理状态的好处

① 能够在vuex中集中管理共享的数据，易于开发和后期维护
② 能够高效地实现组件之间的数据共享，提高开发效率
③ 存储在vuex中的数据都是响应式的，能够实时保持数据与页面的同步

### 1.2 什么样的数据适合存储到Vuex中

一般情况下，只有组件之间共享的数据，才有必要存储到ux中；对于组件中的私有数据，依旧存储在组件
自身的data中即可。（但是在实际开发中，如果你想把全部数据存到vuex中也是可以的，具体方案具体分析）

## 2. Vuex的基本使用

[Vuex官方文档](https://vuex.vuejs.org/zh/)

### 1. 安装vuex依赖包

```
npm install vuex --save
```

### 2. 导入vuex包

```javascript
import Vuex from 'vuex'
Vue.use(Vuex)
```

### 3. 创建store对象

```javascript
const store = new Vuex.Store({
    // state 中存放的就是全局共享的数据
    state: { count:0 }
})
```

### 4. 将 store 对象挂载到 vue 实例中

```javascript
new vue ({
	el: '#app',
    // 将创建的共享数据对象，挂载到 Vue 实例中
    // 所有的组件，就可以直接从 store 中获取全局的数据了
	store,
	render: h => h(app)
})
```

## 3.Vuex的核心概念

### 3.1 核心概念概述

Vuex中的主要核心概念如下：

- State
- Mutation
- Action
- Getter

### 3.2 State

**State** 提供唯一的公共数据源，所有共享的数据都要统一放到Store的State中进行存储。

```javascript
// 创建store数据源，提供唯一公共数据
const store = new Vuex.Store ({
	state: { count:0 }
})
```

组件访问State中数据的**第一种方式**：

```javascript
this.$store.state.全局数据名称
```

组件访问State中数据的**第二种方式**：

```javascript
// 1.从 vuex 中按需导入 mapState 函数
import { mapstate } from 'vuex'
```

通过刚才导入的 mapState 函数，将当前组件需要的全局数据，映射为当前组件的computed计算属性：

```javascript
// 2.将全局数据，映射为当前组件的计算属性
computed: {
	...mapState (['count'])
}
// ...是展开运算符，就把全局的那些数据应视为当前组件的计算属性
```

### 3.3 Mutation

Mutation用于变更Store中的数据。

① 只能通过 mutation 变更 Store 数据，不可以直接操作 Store 中的数据：
② 通过这种方式虽然操作起来稍微繁琐一些，但是可以**集中监控所有数据的变化**。

```javascript
// 定义 Mutation
const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		add (state) {
			//变更状态
			state.count++
        }
    }
})
```

```javascript
// 触发mutation
methods: {
    handle1 () {
        // 触发 mutations 的第一种方式
        this.$store.commit ('add')
    }
}
```

可以在触发 mutations 时传递参数：

```javascript
// 定义 Mutation
const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		addN (state, step) {
			// 变更状态
			state.count += step
        }
    }
})
```

```javascript
// 触发mutation
methods: {
    handle2 () {
        // 在调用 commit 函数，
		// 触发 mutations 时携带参数
        this.$store.commit ('addN', 3)
    }
}
```

this.$store..commit(0是触发mutations的第一种方式，触发mutations的第二种方式：

```javascript
// 1.从 vuex 中按需导入 mapMutations 函数
import { mapMutations } from 'vuex'
```

```javascript
//2.将指定的 mutations 函数，映射为当前组件的 methods 函数
methods: {
	...mapMutations (['add', 'addN'])
}
```

### 3.4 Action

Action用于处理异步任务。
如果通过异步操作变更数据，必须通过 Action,而不能使用 Mutation,但是在 Action 中还是要通过触发 Mutation 的方式间接变更数据。

触发actions异步任务时携带参数：

```javascript
//定义Action
const store = new Vuex.Store
    // ...省略其他代码
    mutations: {
        add(state) {
        	state.count++
        },
        addN(state, step) {
        	state.count += step
        }
    },
    actions: {
        addAsync(context) {
            setTimeout (() => {
				context.commit ('add')
			}, 1000)
        },
		addNAsync(context, step) {
            setTimeout (() => {
				context.commit ('addN', step)
			}, 1000)
        }
    }
}
```

```javascript
//触发Action
methods: {
    handle() {
        // 触发 actions 的第一种方式
        this.$store.dispatch ('addAsync')
        // 触发actions时携带参数
        this.$store.dispatch('addNAsync', 5)
    }
}
```

this.$store.dispatch() 是触发 actions 的第一种方式，触发 actions 的**第二种方式**：

```javascript
// 1.从uex中按需导入mapActions函数
import { mapActions } from 'vuex'
```

通过刚才导入的 mapActions 函数，将需要的 actions 函数，映射为当前组件的 methods 方法：

```javascript
// 2.将指定的 actions 函数，映射为当前组件的 methods 函数
methods: {
	...mapActions (['addASync', 'addNASync'])
}
```

### 3.5 Getter

Getter 用于对 Store 中的数据进行**加工处理**形成新的数据。

① Getter 可以对 Store 中已有的数据加工处理之后形成新的数据，类似 Vue 的计算属性。
② Store 中数据发生变化，Getter 的数据也会跟着变化。

```javascript
const store = new Vuex.Store({
  state() {
    return {
      count: 0
    }
  },
  getters: {
    showNum: state => {
      return '当前最新的数量是【' + state.count + '】'
    }
  }
})
```

使用getters的**第一种方式**：

```javascript
this.$store.getters.名称
```

使用getters的**第二种方式**：

```javascript
import { mapGetters } from 'vuex'
computed: {
	...mapGetters(['showNum']）
}
```
