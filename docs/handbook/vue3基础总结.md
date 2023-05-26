![](https://cdn.nlark.com/yuque/0/2023/jpeg/1128524/1676212069312-34f81129-b3fc-4855-a6cd-894556a985cc.jpeg)
```html
<!--课堂回顾
          工具关键字： 
          extends  继承 判断类型
          infer    根据参数推断类型
          keyof    获取到所有的类型 name | age | number
          in       获取集合中多个类型 name  age number 
          类型体操（类型编程）
          Partial<T> 将所有属性编程可缺省
          type MyPartial<T>{
             [K in keyof T]? : T[K]
          }


          ----
          vue3 :  组合式API  Proxy
                  vue-cli  --webpack (vue2,vue3 )
                  vite (vue3 ,react)


          setup() : 
                在组件创建完成之前执行 
                不能获取到this 
                模板中要用到的属性或者方法需要return        
           响应式API：
                ref(简单数据类型/对象数据类型)   .value
                reactive(对象数据类型)
                toRef(对象，属性)
                toRefs(对象)     


                const user = reactive({})
                user.xxx = xx 
                user = {}  //失去响应性
                user = reactive({}); //失去响应性


                解决1： const data = reactive({user:{}})
                       data.user = xxxx
                       const user = ref({})
                       user.value = {}
          setup语法糖：
                简化代码
                顶层定义变量都可以直接在template中使用
                import导入的内容也是可以的。 
          计算属性：
               computed(()=>{
                  return xxx;
               })      
               computed({
                  get(){return xxx},
                  set(val){}
               })
          生命周期：
               setup()
               onBeforeMount()
               onMounted()  
               onBeforeUpdate()
               onUpdated()
               onBeforeUnMount()
               onUnMounted()
               onActiveted()
               onDeactivated()  
          获取dom
               第一步给元素设置ref属性  ref="aaa"
               const aaa = ref(null);
               aaa.value         
     -->
```
