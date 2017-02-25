//1\2
// function sum(){
//   if(arguments.length==2){
//      return arguments[0]+arguments[1];;
//   }else if(arguments.length==1){
//     var a= arguments[0];
//     return function(){
//       return a+arguments[0];
//     }
//   }
// }
// sum.prototype.toString = function () {
// return this.s.toString();
// };
//
// console.log(sum(2)(3).toString());

//3
// var sum=(function(){
//   var list=[];
//   var s=0;
//   function add(){
//     t=[].slice.call(arguments);
//     s=s+t.reduce(function(p,n){
//       return p+n;
//     });
//     list=list.concat(t);
//     return add;
//   }
//   add.toString=function(){
//      return s.toString();
//   }
//   return add;
// })();
// // console.log(sum(2, 3).toString());
// console.log(sum(2)(3,4,5)(5)(6).toString());

//4\5
// var sum=(function(){
//   var list=[];
//   function add(){
//     if(arguments.length==0){
//       return list.reduce(function(p,n){
//         return p+n;
//        });
//     }
//     t=[].slice.call(arguments);
//     list=list.concat(t);
//     return add;
//   }
//   add.toString=function(){
//      return s.toString();
//   }
//   return add;
// })();
// // console.log(sum(2, 3).toString());
// console.log(sum(2)(3,4,5)(5)());

//6
function sum(){
  return [].reduce.call(arguments,function(a,b){return a+b});
}

var curry=function(func){
  var args=[].slice.call(arguments,1);
  function add(){
    if(arguments.length==0){
      return func.apply(this,args);
    }else{
      args=args.concat([].slice.call(arguments));
    }
    return add;
  }
  return add;
}
    console.log(curry(sum,1,2,3)(2,3)(4)())//16
