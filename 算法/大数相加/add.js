function add(num1,num2){
  var arr1=num1.toString().split('').reverse();
  var arr2=num2.toString().split('').reverse();
  var result=[];
  var len1=arr1.length;
  var len2=arr2.length;
  if(len1>len2){
    for(var i=0;i<len1-len2+1;i++){
      arr2.push('0');
    }
  }else if(len1<len2){
    for(var i=0;i<len2-len1+1;i++){
      arr1.push('0');
    }
  }

  var step_pre=0;
  for(var i=0;i<arr1.length;i++){
    var sum=parseInt(arr1[i])+parseInt(arr2[i])+step_pre;
    if(sum>9&&i!==arr1.length-1){
      var step=Math.floor(sum/10);
      sum=sum-step*10;
      step_pre=step;
    }else{
        step_pre=0;
    }
    result.push(sum.toString());
  }

  return result.reverse().join('')
}
console.log(add(123259432,344567));
