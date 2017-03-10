function optionalChaining(obj,chain){
  var _arr=chain.split('.')||[];
  if(obj){
    var first=_arr.shift();
    if(_arr.length<=0){
      return obj[first];
    }else{
        return optionalChaining(obj[first],_arr.join('.'));
    }
  }else{
    return undefined;
  }

}


var user={
  adress:{
    chain:'saa',
    no:{
      ss:'12'
    }
  }
}
console.log(optionalChaining(user,'adress.no.s'))
