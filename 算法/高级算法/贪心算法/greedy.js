function bag(value,weight,size,capacity,n){
  var left=capacity;
  var result=0;
  for(i=n-1;i>=0,left>0;i--){
    if(size[i]<left){
      result+=value[i];
      left-=size[i];
    }else{
      result+=weight[i]*left;
      left=0;
    }
  }
return result;
}
var value=[12,25,42,70,120]
var size=[3,5,7,10,15];
var weight=[4,5,6,7,8];
var capacity=16;
console.log(bag(value,weight,size,capacity,5));
