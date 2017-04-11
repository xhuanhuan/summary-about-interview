//每次将当前位置与前一个值比较，满足条件交换位置 继续向前比较，否则移步下一节点

function InsertSort(arr){
  var _arr=arr.slice();
  for(var i=1;i<_arr.length;i++){
    var j=i;
    while(j>0&&_arr[j-1]>_arr[j]){
      var temp=_arr[j-1];
      _arr[j-1]=_arr[j];
      _arr[j]=temp;
      j--;
    }
  }
  return _arr;
}
var arr=[2,3,5,4,1,4,3,6,7,2];
console.log(InsertSort(arr))
