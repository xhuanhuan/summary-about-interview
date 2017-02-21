
//原型
console.log("============= prototype ============");
function SuperType(){
      this.property=true;
    }
    SuperType.prototype.getSuperValue=function(){
      return this.property;
    }
    function SubType(){
      this.Subproperty=false;
    }
    SubType.prototype=new SuperType();
    SubType.prototype.getSubValue=function(){
      return this.Subproperty;
    }
    var instance=new SubType();
    var s=instance.getSuperValue();
    console.log(s);//true

//parseInt()
console.log("============= parseInt() ============");
console.log(parseInt("1234blue")); //returns 1234
console.log(parseInt("0xA")); //returns 10
console.log(parseInt("22.5")); //returns 22
console.log(parseInt("blue")); //returns NaN
console.log(parseInt("AF", 16)); //returns 175
console.log(parseInt("10", 2)); //returns 2
console.log(parseInt("10", 8)); //returns 8
console.log(parseInt("10", 10)); //returns 10
//parseFloat()
console.log("============= parseFloat() ============");
console.log(parseFloat("1234blue")); //returns 1234.0
console.log(parseFloat("0xA")); //returns 0
console.log(parseFloat("22.34.5")); //returns 22.34
console.log(parseFloat("blue")); //returns NaN

console.log("============= RegExp ============");
var s='12ew.fe3.53b'.match(/\d+\.?\d+/g)[0];
console.log(typeof(s));
console.log(parseFloat(s));
console.log(typeof(parseFloat(s)));

console.log("============= 随机排序 ============");
var arr = [1,2,3,4,5,6,7,8,9,10];
 function randomSort2(arr){
   var tempArr=[];
   while(arr.length>0){
     var index=Math.random()*arr.length;
     tempArr.push(arr.splice(index,1)[0]);
   }
   return tempArr;
 }
 console.log(randomSort2(arr));
 //
 var arr = [1,2,3,4,5,6,7,8,9,10];
arr.sort(function(){
    return Math.random() - 0.5;
})
console.log(arr);

console.log("============= 继承 ============");
//构造继承
function SuperType(){
  this.colors=['green','red','blue'];
}
function SubType(){
  SuperType.call(this);
}
var intance1=new SuperType();
intance1.colors.push('black');
console.log(intance1.colors);//['green','red','blue','black'];

var intance2=new SubType();
console.log(intance2.colors);//['green','red','blue'];
//原型继承
function object(o){
  function F(){}
  F.prototype=o;
  return new F();
}
var person={
  name:"Nicholas",
  friends:["Shelly","Court","Van"]
};
//var anotherperson=Object.create(person,{name:{value:"Greg"}});
var anotherperson=object(person);
anotherperson.name="Greg";
anotherperson.friends.push("Rob");
console.log(anotherperson.name);
console.log(person.friends);

var yetanotherperson=object(person);
yetanotherperson.name="Linda";
//var yetanotherperson=Object.create(person,{name:{value:"Linda"}});
yetanotherperson.friends.push("Barbie");
console.log(yetanotherperson.name);
console.log(person.friends);
//实例继承
function dwn(s) {
    console.log(s);
}
function MyDate() {
  var instance = new Date();   //instance是一个新创建的日期对象
  instance.printDate = function(){//对日期对象instance扩展printDate()方法
      dwn(instance.toLocaleString());
  }
      return instance;   //将instance作为构造函数的返回值返回
 }
var date = new MyDate();
dwn(date.toGMTString());
date.printDate();
dwn(date instanceof MyDate);  //false
dwn(date instanceof Date);    //true
//拷贝继承
function Point(dimension)
     {
            this.dimension = dimension;
    }

    var Point2D = function(x,y)
    {
            this.x = x;
            this.y = y;
    }

Point2D.extend = function()
    {
        var p = new Point(2);
        for(var each in p)   //将对象的属性进行一对一的复制。
        {
             //this[each] = p[each];
             this.prototype[each] = p[each];
        }
    }
Point2D.extend();
    //console.log(Point2D.dimension);
    console.log(Point2D.prototype.dimension);

//每三位加一个小数点
function commafy(num){
  return num&&num.toString().replace(/(\d)(?=(\d{3})+\.)/g,function($1,$2){
    return $2+',';
  });
}
var s=commafy(124320493.211);
console.log(s);


console.log("============= 创建对象 ============");
//工厂模式
function createPerson(name,age,job){
  var o=new Object();
  o.name=name;
  o.age=age;
  o.job=job;
  o.sayName=function(){console.log(this.name);};
  return o;
}
var person1=createPerson('xiaohuan',25,'student');
console.log(person1);
//构造函数模式
function Person(name,age,job){
  this.name=name;
  this.age=age;
  this.job=job;
  this.sayName=function(){console.log(this.name);};
}
var person1=new Person('xiaohuan',25,'student');
var person2=new Person('xiaohuan',25,'student');
console.log(person1 instanceof Person);//true
console.log(person1 instanceof Object);//true
var o=new Object();
Person.call(o,'xiaobo',23,'student');
console.log(o);//{ name: 'xiaobo', age: 23, job: 'student', sayName: [Function] }
console.log(person1.sayName===person2.sayName);
//原型模式
function Person_y(){}
Person_y.prototype={
  name:"Nicholas",
  age:27,
  job:"Software Engineer",
  friends:["Shelly","Court"],
  sayName:function(){console.log(this.name);}
}
var person1=new Person_y();
var person2=new Person_y();
console.log(person1.sayName===person2.sayName);//true
console.log(person1.friends===person2.friends)//true
person1.friends.push("xiaohuan");
console.log(person1.friends===person2.friends)//true
//原型+构造函数模式
function Person(name,age,job){
  this.name=name;
  this.age=age;
  this.job=job;
  this.friends=["Shelly","Court"];
}
Person.prototype={
  constructor:Person,
  sayName:function(){console.log(this.name);}
};
var person1=new Person('xiaohuan',25,'student');
var person2=new Person('xiaobo',23,'student');
person1.friends.push("nana");
console.log(person1.friends===person2.friends)//false
console.log(person1.sayName===person2.sayName)//true

//this
var x = 2;
function test(){
　　this.x = 1;
}
var o = new test();　console.log(x); //2
test();　console.log(x); //1

var name="nana";
var obj={
  name:"xiaohuan",
  sayName:function(){
    console.log(this.name);//xiaohuan

    var self=this;
    function sayName1(){
      console.log(self.name);//xiaohuan
      console.log(this.name);//nana
    }
    sayName1();
  }
}
obj.sayName();//xiaohuan nana

//eval()
var str="{name:'xiaohuan'}";
var obj =eval('('+ str +')');
console.log(typeof(obj));

//['1','2','3'].map(parseInt)
var s=['1','2','3'].map(function(str){
  return parseInt(str);
});
console.log(s);

//判断对象类型
var arr=[1,2,3,4];
console.log(arr.constructor());

var is ={
types : ["Array", "Boolean", "Date", "Number", "Object", "RegExp", "String", "Window", "HTMLDocument"]
};
for(var i = 0, c; c = is.types[i ++ ]; ){
is[c] = (function(type){
return function(obj){
return Object.prototype.toString.call(obj) == "[object " + type + "]";
};
})(c);
}
console.log(is.Array([])); // true
console.log(is.Date(new Date)); // true
console.log(is.RegExp(/reg/ig)); // true

//new
function Base(){this.name='xiaohuan';};
Base.prototype.age = 20;
//var obj=new Base();
//等价于
var obj  = {};
obj.__proto__ = Base.prototype;
Base.call(obj)
console.log(obj);

//Json
var str='{"name":"xiaohuan","age":27}';
//var obj =eval('('+ str +')');
var obj = $.parseJSON(str);
//var obj = JSON.parse(str);
console.log(obj)
