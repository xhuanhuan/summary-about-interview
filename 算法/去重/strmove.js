function strmove(){
  var arr=[].slice.call(arguments);
  var _arr=arr.map(function(item){
    var len=item.length;
    item=item.split('');
      console.log(item);
    for(var i=0;i<len;i++){
      if(item[i]>='A'&&item[i]<='Z'){
        var ch=item[i];
        item.splice(i,1);
        item.push(ch);
        i--;len--;
      }
    }
    return item.join('');
  });
  if(_arr.length===1){
  return  _arr[0];
  }
  return _arr;
}
//test
// var arr=strmove('xfdsTVYHgtDmlysKQzHePLukXyYTYCeW');
// console.log(arr)

//差最大和最小的倍数

function cha(){
  var arr=[].slice.call(arguments).sort((a,b)=>a-b);
  var obj={};
  arr.forEach(function(item){
    if(obj[item]){
      obj[item]=obj[item]+1;
    }else{
      obj[item]=1;
    }
  })
  var a=obj[arr[0]];
  var b=obj[arr[1]];
  var c=obj[arr[arr.length-1]];
  return [a*b,a*c];
}
console.log(cha(6,45,12,45,32,5,6))
