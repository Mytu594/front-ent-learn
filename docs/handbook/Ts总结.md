```typescript
ts: typescript ,是js的超集。 ts= js + 类型约束 + 新特性
   目的：保证编译时类型判断。


   ts:   ts ---> 编译成 tsc xxx.ts --> xxx.js
         tsc -init
         tsc -p tsconfig.json --watch 
         //暂时使用 node xxx.js 
         //使用html ，引入
   
   类型约束：
       let 变量名：类型 = 值；
       function 函数名(参数名:类型):返回值类型{}
       （参数名：类型)=>返回值类型    
       接口内： （参数名：类型):返回值类型     
       
    原始类型： number string boolean undefined null symbol
    非原始类型：
        对象：object Object {}   
        数组：数据类型[] Array<> [元组]
        字面量： 字面意思 1 “zhangsan'
        联合类型：或者 | 组合类型
        交叉类型：与 & 合并类型 
        any: 任意类型  不会做类型检查
        unknown： 任意类型 会做类型检查
        void: 空 用在函数返回值 无返回值。
        never :永不 函数无法执行完成 （抛出异常，死循环）
        接口：
            interface{
                属性名：类型;
                [k:string]:any;
                [k:number]:any;
                (参数):返回值; 
            }
            继承 extends 同名 缺省? 只读readonly
        类型别名：
            type 名称 = 类型    
        函数：
            function 函数名(参数：类型)：返回值类型{ }
            const 函数名 = (参数：类型)=>返回值类型。
```
```typescript
interface 和type的区别？
  大多数场景相同。
  *1、接口允许同名 类型别名不可以
  2、类型别名支持联合和交叉类型定义
  3、使用type可以得到接口属性内的类型
```

