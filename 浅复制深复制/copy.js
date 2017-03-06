function copy(deep,obj1,obj2){
  for(propName in obj2){
      if(obj1[propName]==="undefined"||!deep){//属性不存在 or 浅复制 时直接复制
        obj1[propName]=obj2[propName];
      }else{//深复制
          if(typeof(obj1[propName])==="object"&&typeof(obj2[propName])==="object"){    //属性值为object时递归
              obj1[propName]=copy(deep,obj1[propName],obj2[propName]);
          }else{
            obj1[propName]=obj2[propName];//属性值不是object则直接复制
          }
      }
    }
return obj1;
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
    durian: 100
};
object1=copy(true,object1,object2);
console.log(object1);
