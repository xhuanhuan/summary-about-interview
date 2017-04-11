function max(a,b){
  return (a>b)?a:b;
}
//递归
// function bag1(value,size,capacity,n){
//   if(capacity==0||n===4){
//     return 0;
//   }else if(size[n]>capacity){
//     return bag1(value,size,capacity,n+1);
//   }else {
//     return max(bag1(value,size,capacity-size[n],n+1)+value[n],bag1(value,size,capacity,n+1));
//   }
// }
//
// var value=[40,50,90,120];
// var size=[3,5,7,8];
// var capacity=14;
// console.log(bag1(value,size,capacity,0))

//动态规划
function bag2(value,size,capacity,n){
  var temp=[];
  for(var i=0;i<=n;i++){
    temp[i]=[];
  }
  for(var i=0;i<=n;i++){
    for(var j=0;j<=capacity;j++){
      if(i===0||j===0){
        temp[i][j]=0;
      }else if(size[i-1]>j){
        temp[i][j]=temp[i-1][j];
      }else {
        temp[i][j]=max(temp[i-1][j-size[i-1]]+value[i-1],temp[i-1][j]);
      }
    }
  }
return temp[n][capacity];
}
var value=[4,5,10,11,13];
var size=[3,4,7,8,9];
var capacity=16;
console.log(bag2(value,size,capacity,5))
