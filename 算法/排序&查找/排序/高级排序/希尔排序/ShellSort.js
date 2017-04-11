//与插入排序类似，区别在于插入排序是与前一个值比较，二希尔排序是一定间隔的前一个值比较。多次以不同间隔排序，最后一次插入排序，即间隔1
function ShellSort(arr,gaps){
  var _arr=arr.slice();
  for(var i=0;i<gaps.length;i++){
    var gap=gaps[i];
    for(var j=gap;j<_arr.length;j++){
      var t=j;
      while(t>0&&_arr[t-gap]>_arr[t]){
        var temp=_arr[t-gap];
        _arr[t-gap]=_arr[t];
        _arr[t]=temp;
        t-=gap;
      }
    }
  }
  return _arr;
}

var arr=[3,4,1,2,6,5,3,7,9,7];
var gap=[5,3,1];
console.log(ShellSort(arr,gap))
