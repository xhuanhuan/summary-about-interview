Array.prototype.unique1=function(){
  var _arr=this.slice();
  var del=[];
  for(var i=0;i<_arr.length;i++){
    if(_arr.indexOf(_arr[i])!==_arr.lastIndexOf(_arr[i])){
      del.push(_arr[i]);
      _arr.splice(i,1);
      i--;
    }
  }
  return _arr;
}

Array.prototype.unique2=function(){
  var _arr=this.slice();
  var obj={};
  var arr=[];
  _arr.forEach(item=>obj[item]='true');
  for(var key in obj){
    arr.push(parseInt(key));
  }
  return arr;
}

var arr=[1,2,2,3,4,5,6,6,7,8,8,9,0,8];
console.log(arr.unique2())



//--------------------------------------
function mySort() {
    var tags = new Array();//使用数组作为参数存储容器
    tags=[].slice.call(arguments).sort((a,b)=>{return a-b;})
    return tags;//返回已经排序的数组
}
var result = mySort(50,11,16,32,24,99,57,100);//传入参数个数不确定
console.log(result);
//-------------------------
