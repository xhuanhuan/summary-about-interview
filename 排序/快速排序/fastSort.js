//快速排序：每次以第一个为基准，比它小放左边、大放右边，然后左右两块分别以自己的第一个元素为基准比较，以此类推，直到只有一个元素时截止。
function fast_Sort(arr){
  var left=[];
  var right=[];
  var result=[];

  arr.forEach(function(item,index){
    if(index>0){
      if(item<arr[0]){
        left.push(item);
      }else{
        right.push(item);
      }
    }
  });

  if(arr.length<=1){
    result=arr;
  }else{
    result=fast_Sort(left).concat(arr[0]).concat(fast_Sort(right));
  }

  return result;
}


var arr=[2,4,1,7,6];
var s=fast_Sort(arr);
console.log(s);
