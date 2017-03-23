//递归
function Fn(n){
  if(n<2){
    return n;
  }else{
    return Fn(n-1)+Fn(n-2);
  }
}
console.log(Fn(22))//8
console.log(Fn(8))//21

//迭代
function f(n){
  if(n<2){
    return n;
  }
var s1=0;
var s2=1;
var sum=0;
for(var i=2;i<=n;i++){
  sum=s1+s2;
  s1=s2;
  s2=sum;
}
return sum;
}
console.log(f(22));
