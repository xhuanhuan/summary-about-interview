//堆排序，每次产生最大堆，返回第一个数即最大数出列。依次类推，得到排序结果。
function dui_Sort(arr){
  if(arr.length===1){return arr[0];}
  var _arr=arr.slice();
  var o=[];
  // var len=_arr.length;
  // while(o.length<len){//迭代
  var flag=true;
  while(flag){//最大堆
    flag=false;
    for(var i=0;2*i+1<_arr.length;i++){
      var current = _arr[i];
      var left = _arr[2*i+1];
      var right = _arr[2*i+2];
      //change
      if(right==="undefined"){//只有一个子节点
        if(current<left){
          _arr[2*i+1]=current;
           _arr[i]=left;
        }
      }else{//有两个子节点
        if(current<Math.max(left,right)){
          flag=true;
          if(right<left){
             _arr[2*i+1]=current;
              _arr[i]=left;
          }else{
            _arr[2*i+2]=current;
             _arr[i]=right;
          }
        }
      }
    }
  }
  // o.unshift(_arr.shift);
  // }
  // return o;
return o.concat(_arr.shift()).concat(dui_Sort(_arr));
}

var arr=[1,4,3,5,2,6,5,4,6,7,8,9,4,5];
console.log(dui_Sort(arr))
