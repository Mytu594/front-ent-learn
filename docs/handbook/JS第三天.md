# 1 循环的结束语句
**break: 结束循环(根据需求进行条件判断)**
**continue:跳过当次循环继续执行下次循环(根据需求进行条件判断)**
# 2 数组

1. 数组(Array)：一组数据的集合，存储在单个变量下
2. 创建数组
   1. 利用字面量创建数组

var arr = [ ];  //创建一个空数组

   2. 利用new创建数组

var arr= new Array();

3. 数组中可以存放任意类型的数据，如字符串、数字、布尔值等
4. 获取数组元素
   1. 数组的索引（下标）
   2. 数组名[索引号]
5. 遍历数组
   1. 遍历：从头到尾扫一遍
   2. 数组的长度：arr.length
6. 数组中新增元素
   1. 通过修改索引号，追加数组元素
   2. 通过修改length长度
```javascript
 数组 字面量定义一个数组
// var arr = [];
// 对数组进行数据项的添加  0,1,2
// arr[0] = 10;
// 添加一个20的数据项
// arr[1] = 20;
// arr[2] = 30;
// arr[1] = null;
// 删除数据项(一般不这么用)
// delete arr[1];
// console.log(arr);
// 打印第一个数据项
// console.log(arr[0]);
// length数组的长度
// console.log(arr.length);
// 数组有默认值  我不知道有多少个  要想给数组添加数据项  使用以下方式
// arr[arr.length] = 1;//相当于给arr[0]进行赋值
// arr[arr.length] = 2;//相当于给arr[1]进行赋值
// arr[arr.length] = 3;//相当于给arr[2]进行赋值
// arr[arr.length] = 4;//相当于给arr[3]进行赋值
// arr[arr.length] = 5;//相当于给arr[4]进行赋值
// arr[arr.length] = 6;//相当于给arr[5]进行赋值
// console.log(arr);
```
# 3 函数

1. 定义：函数是封装了一段可以被重复执行调用的代码段，目的：让大量代码可以重复使用

       // 函数分类: 1.预定义函数 2.自定义函数
        // 如何定义一个函数 function 关键词
        // 语法：function 函数名(){}

2. 使用分两步： 声明函数 和 调用函数
   1. 声明函数

function 函数名(){
// 函数体
}

      - function声明函数的关键字，全部小写
      - 函数是做某件事，一般以动词命名
      - 函数不调用 自己不执行
   2. 调用函数

函数名（）;

   3. 函数的封装:
      1. 就是把一个或者多个功能通过函数的方式封装起来，对外只提供一个简单的函数接口

3. 参数：分为形参和实参，可以利用函数的参数实现函数重复不同的代码

 function 函数名（形参1，形参1，，....){
}
 函数名（实参1，实参1，，....);
a. 函数参数可以有，也可以没有，个数不限
b. 函数参数个数不匹配

   - 1.相同个数，正常输出
   -  2.实参多于形参，会取得形参的个数
   - 3.实参少于形参，num2是undefined,最终结果是NaN

4. 返回值return
- return语句表示结束函数
- return后面有值返回给调用者，想要拿到对应的返回值直接打印调用本身，或者将调用者赋值给一个变量
- return后面的代码不被执行
- return只能返回一个值
- 函数没有return返回undefined
- break/continue/return的区别
   - break:结束当前循环体(for、while)
   - continue:跳出本次循环，继续执行下次循环
   - return:不仅可以跳出循环，还能返回return语句中的值，同时还可以结束当前的函数体内的代码


# 4  一些内置方法
### Date是一个构造函数，必须使用new来调用创建日期对象
1.使用Date，如果没有参数，返回当前系统的时间
var now= new Date( );
console.log(now);
2．参数常用写法:
2022-09-21 22:02 日期格式化
a. getFullYear()︰获取当年
b. getMonth():获取当月(O-11)
c. getDate():获取当天日期
d. getDay:获取星期几(周日0到周六6)
e. getHours():获取当前小时
f. getMinutes():获取当前分钟
g. getSeconds():获取当前秒钟
4.获取日期的总的毫秒形式（从1970年1月1日开始计算)
a. valueOf( )
b.getTime( )
var date = new Date();
console.log(date.valueOf));console.log(date.getTime());
b.简单写法
var date = +new Date();
+new Date()返回的是总的毫秒数
c.H5新增
console.log(Date.now());
时间戳转化为时分秒
d = parselnt(总秒数/60/60/24);/计算天数
h = parselnt(总秒数/60/60%24);计算小时
m = parseInt(总秒数/60%60);计算分数
s= parselnt(总秒数%60);计算当前秒数]
### String 字符串.split(指定分隔符)
```javascript
var str = '12,88,72,6';
// 以逗号为分隔符，分割字符串，得到一个数组
var arr = str.split(',');
console.log(arr); // 输出 ['12','88','72','6']
```

![](https://cdn.nlark.com/yuque/0/2022/jpeg/1128524/1663950681237-5fb1756e-da6f-412a-92f3-11e834db99fa.jpeg)
![](https://cdn.nlark.com/yuque/0/2022/jpeg/1128524/1663950681237-5fb1756e-da6f-412a-92f3-11e834db99fa.jpeg)
