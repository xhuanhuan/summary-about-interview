//快速排序：每次以第一个为基准，比它小放左边、大放右边，然后左右两块分别以自己的第一个元素为基准比较，以此类推，直到只有一个元素时截止。
// function fast_Sort(arr){
//   var left=[];
//   var right=[];
//   var result=[];
//
//   arr.forEach(function(item,index){
//     if(index>0){
//       if(item<arr[0]){
//         left.push(item);
//       }else{
//         right.push(item);
//       }
//     }
//   });
//
//   if(arr.length<=1){
//     result=arr;
//   }else{
//     result=fast_Sort(left).concat(arr[0]).concat(fast_Sort(right));
//   }
//
//   return result;
// }

function fast_Sort(_arr){
  var arr=_arr.slice();
  var t=0;
  var x=arr[t];
  var ii=t+1;
  var jj=arr.length-1;
  while(ii!==jj){
    for(var j=arr.length-1;j>t;j--){
      if(arr[j]<arr[t]){
        arr[t]=arr[j];
        jj=j;
         break;
      }
    }
    for(var i=t+1;i<arr.length;i++){
      if(arr[i]>=arr[t]){
        arr[j]=arr[i];
        ii=i;
        t=i;console.log(t)
        break;
      }
    }
  }
  //  arr[t]=x;
return arr;
}
var arr=[2,4,1,7,6,8,6,4,9,1];
var s=fast_Sort(arr);
console.log(s);
