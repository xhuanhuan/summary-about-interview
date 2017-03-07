//冒泡排序（升序）：两两比较，若前者比后者大则交换位置知道不再发生位置交换为止。
function bubble_Sort(arr){
  var _arr=arr.slice();
  var t=0;
  var len=arr.length;
  var flag=true;
  while(flag){
    flag=false;
  for(var i=0;i<len;i++){
    if(_arr[i]>_arr[i+1]){
      t=arr[i];
      _arr[i]=_arr[i+1];
      _arr[i+1]=t;
      flag=true;
    }
  }
  len--;
}
  return _arr;
}


var arr=[2,4,1,7,6,12,11,10,5,7,21,23,12];
var s=bubble_Sort(arr);
console.log(s);
