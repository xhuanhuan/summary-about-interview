//jq的extend深浅拷贝
function copy(deep,obj1,obj2){
  for(propName in obj2){
    if(typeof(obj2[propName])==="object"&&deep){    //属性值为object时递归
        obj1[propName]=copy(deep,obj1[propName]||obj2[propName] instanceof Array?[]:{},obj2[propName]);
    }else{
      obj1[propName]=obj2[propName];//属性值不是object则直接复制
    }
}
return obj1;
}

//深复制
function deepcopy(obj){
  var o=obj instanceof Array?[]:{};
  for(var propname in obj){
    if(typeof(obj[propname])==="object"){
        o[propname]=deepcopy(obj[propname]);
    }else{
        o[propname]=obj[propname];
    }
  }
  return o;
}

//将嵌套数组整合成一个数组
function toArray(arr){
var o=[];
  arr.forEach(function(item){
    if(item instanceof Array){
        o=o.concat(toArray(item));
    }else{
      o.push(item);
    }
  });
  return o;
}


//test
var object1 = {
    apple: 0,
    banana: {
        weight: 52,
        price: 100,
        type:{
          info:{
            index:9
          }
        }
    },
    arr:[1,3,3,5,4,2,4,5],
    cherry: 97
};
var object2 = {
    banana: {
        price: 200,
        type:{
          long:20,
          short:10,
        }
    },
    arr:[1,2,3,5,4,{name:'xhh',age:'21'}],
    durian: 100,
    arr2:[1,2,3,[1,2,3]]
};
// object1=copy(true,object1,object2);
// console.log(object1);
// object2.arr2[0]=20;
// console.log(object1);

//
// var obj=deepcopy(object1);
// console.log(obj)
// object1.arr[0]=20;
// console.log(obj)

// var s=toArray([],[1,2,3]);
var s=toArray([1,2,3,[4,5],6,[7,8,[0,0,0],9],[10,11,12],13]);
console.log(s)
