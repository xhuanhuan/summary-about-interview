//  //链式调用1，jquery
// var myquery = function(){
//   return new _myquery(arguments[0]);
// };
// function _myquery(name){
//   this.name = name;
// };
// _myquery.prototype.eat = function(){
//   console.log(this.name+'is eating');
//   return this;
// };
// _myquery.prototype.drink = function(){
//   console.log(this.name+'is drinking');
//   return this;
// };
//
// myquery('xiaobo').eat().drink().eat().eat();


// 链式调用2 underscore;
// var _ = function(arr) {
//     this._value = [].slice.apply(arr);
//     for (var method in _) {
//         if (method !== 'chain') {
//             _.prototype[method] = (function(method) {
//                 return function() {
//                     var args  = [].slice.apply(arguments);
//                     args.unshift(this._value);
//                     if(method === 'map'){
//                         this._value = _[method].apply(this,args);
//                     }else {
//                       _[method].apply(this,args);
//                     }
//                     return this;
//                 }
//             })(method);
//         }
//     }
//     _.prototype.value = function(){
//       return this._value;
//     }
// }
var _ =function(arr) {
  this._value=[].slice.apply(arr);
};
_.forEach = function(array, fn) {
    array.forEach(function(v, i, array) {
        fn.apply(v, [v, i, array]);
    })
};
_.map = function(array, fn) {
    return array.map(function(v, i, array) {
        return fn.apply(v, [v, i, array]);
    })
}

_.chain = function(arr) {
    return new _(arr);
}
// _.prototype.map=function(){
//   var args=[].slice.apply(arguments);
//    args.unshift(this._value);
//    this._value=_.map.apply(this,args);
//   return this;
// }
// _.prototype.forEach=function(){
//   var args=[].slice.apply(arguments);
//    args.unshift(this._value);
//   _.forEach.apply(this,args)
//   return this;
// }

for(var item in _){
if(item!=="chain"){
  _.prototype[item]=(function(item){
    return function(){
      var args=[].slice.apply(arguments);
       args.unshift(this._value);
      if(item=="map"){
        this._value= _[item].apply(this,args);
      }else if(item=="forEach"){
        _[item].apply(this,args)
      }
      return this;
    }
  })(item)
}
}

var s=_.chain([1, 2, 3]).map(function(v){return v+1;}).forEach(function(v){console.log(v);});
 console.log(s._value);
// var a = [1, 2, 3];
// _.forEach(a, function(v){console.log(v);})
// console.log(_.map(a, function(v){return ++v;}))
// console.log(_.chain(a).map(function(v){return ++v;}).forEach(function(v){console.log(v);}).value())

// //lazyman
// var lazyman = function(name,age){
//   return new _mychain(name,age);
// };
//
// var _mychain = function(name,age){
//   this.name = name;
//   this.age = age;
//   this.task = [];
//   var self = this;
//   var fn = (function(n){
//     var name = n;
//     return function(){
//       console.log('my name is '+name);
//       self.next();
//     }
//   })(name);
//   this.task.push(fn);
//   setTimeout(function(){
//     self.next();
//   },0);
// };
// _mychain.prototype.next = function(){
//   var fn = this.task.shift();
//   fn && fn();
// };
// _mychain.prototype.sayage = function(){
//   var self = this;
//   var fn  = (function(age){
//     return function(){
//       console.log('my age is '+age);
//       self.next();
//     }
//   })(this.age);
//   this.task.push(fn);
//   return this;
// };
// _mychain.prototype.eat = function(name){
//   var self = this;
//   var fn  = (function(name){
//     return function(){
//       console.log('eat '+name);
//       self.next();
//     }
//   })(name);
//   this.task.push(fn);
//   return this;
// };
// _mychain.prototype.sleep = function(time){
//   var self = this;
//   var fn = (function(time){
//     return function(){
//       setTimeout(function(){
//         console.log('sleep for '+time+'s');
//         self.next();
//       },time*1000);
//     }
//   })(time);
//   this.task.push(fn);
//   return this;
// }
// _mychain.prototype.sleepFirst = function(time){
//   var self = this;
//   var fn = (function(time){
//     return function(){
//       setTimeout(function(){
//         console.log('sleep first for '+time+'s');
//         self.next();
//       },time*1000);
//     }
//   })(time);
//   this.task.unshift(fn);
//   return this;
// }
// lazyman('xiaobo',23).eat('lunch').eat('dinner').sleep(5).sleepFirst(2).sayage();
