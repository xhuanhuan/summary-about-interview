//
//选出最小值与第一个数交换，然后从第二个数开始选择最小值与其交换，直至最后一个数为止
function SelectSort(arr){
  var _arr=arr.slice();
  var index=0;
  var t;
  while(index<_arr.length){
    var min=_arr[index];
    for(var i=index+1;i<_arr.length;i++){
      if(_arr[i]<min){
        min=_arr[i];
        t=i;
      }
    }
    var temp=_arr[index];
    _arr[index]=min;
    _arr[t]=temp;
    index++;
  }
  return _arr;
}
var arr=[3,2,5,6,2,1,6];
console.log(IsertSort(arr))
