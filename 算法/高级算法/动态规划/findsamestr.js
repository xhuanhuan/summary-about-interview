function findSameStr(str1,str2){
  var temp=[];
  var max=0;
  var index=0;
  for(var i=0;i<=str1.length;i++){
    temp[i]=[];
  }

  for(var i=0;i<=str1.length;i++){
    for(var j=0;j<=str2.length;j++){
      if(j===0||i===0){
        temp[i][j]=0;
      }else if(str1[i-1]===str2[j-1]){
        temp[i][j]=temp[i-1][j-1]+1;
      }else{
          temp[i][j]=0;
      }

      if(temp[i][j]>max){
        max=temp[i][j];
        index=i;
      }
    }
  }
  if(max===0){
    return '';
  }else{
    return str1.split('').slice(index-max,index).join('');
  }
}

console.log(findSameStr('have','cavave'));
