function binary_search(arr,target){
  if(len===1&&_arr[0]!==target){
    return -1;
  }else if(len===1&&_arr[0]===target){
    return 0;
  }else{
    var _arr=arr.slice().sort((a,b)=>{return a-b;});
    var len=_arr.length;
    //  var index=Math.floor((len-1)/2);//二分法
    //  var index=Math.floor((target-_arr[0])/(_arr[len-1]-_arr[0])*(len-1));//插值法
    //斐波那契查询 mid = low + F[k-1] - 1
    var n=0,index;
    while(len>F(n)-1){
      ++n;
    }
    index=F(n-1)-1;

    console.log(index)
    if(_arr[index]<target){
       return index+1+binary_search(_arr.slice(index+1),target);
    }else if(_arr[index]===target){
      return index;
    }else{
       return binary_search(_arr.slice(0,index-1),target);
    }
  }
}

//斐波拉契
function F(n){
  if(n<2){
    return n;
  }else{
    return F(n-1)+F(n-2);
  }
}
var arr=[1,2,3,5,5,7,8,9,12,13,15,16,18,23,24,25];
var index=binary_search(arr,5)
console.log(index);
