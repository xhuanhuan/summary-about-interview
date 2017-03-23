### this依赖于函数的调用方式，是在函数执行的时候确定的，大概有以下几种情况
1. 作为函数调用，this一般指向了全局，浏览器下就是window,Node中是一个global对象，具体内部没有深究
2. 作为对象的方法调用，this指向了对象本身，此处有一点需要注意：
   类似setTimeout(obj.func,1000)的回调（事件的回调也是一样）,这种情况下，相当于将obj.func赋值给了一个函数，真正执行的时候是作为函数进行的调用，这种情况下this还是指向了全局，可以采用bind,或者匿名函数包裹的方法来达到this的正确指向。
3. 作为构造器调用，this其实是一个返回值，这里的this比较特殊
   构造器的内部原理可以这么理解：
   1. 创建一个空对象，var this = {};
   2. 构造函数的原型赋值给空对象的原型 this.prototype = Func.prototype;
   3. 执行构造函数，this.name = name;this.age = age等类似操作
   4. **如果没有显示返回值**，新创建的对象将作为构造器的返回值进行返回，也就是return this
4. call,apply,bind
   可以在回调函数中强制指定上下文，也就是this
5. 在onclick,change,touchstart等事件所触发的回调中，this指向了事件的绑定者,这个时候有一个情况，就是事件委托，要注意的是，即便是在委托的情况下，this也是指向被委托元素，也就是被委托的父类元素自己，而不是event.target这个事件真正的触发者

### 箭头函数的this
箭头函数不遵循以上的任何一种规则，它采用的是词法规则，我可以这样来解释：
每个函数执行时都会创建一个执行上下文，包括这样几个方面：外层作用域链、变量对象、还有绑定this。箭头函数就是去掉绑定this这一步，他的this和arguments都是来自于外层作用域链（词法作用域）。所以，我们判断箭头函数的this的指向时，需要看他定义时的外层作用域，并且谨记，js只有全局作用域和函数作用域，不要被对象的情况迷惑。

```js
var obj={
  name:'xhuanhuan',
  sayName1:function(){
  (()=>{console.log(this.name)})();//外层个作用域为函数，该函数的this指向obj
  },
  sayName:()=>console.log(this.name)//外层作用域为全局
}
obj.sayName()//undefined
obj.sayName1()//xhuanhuan
```
