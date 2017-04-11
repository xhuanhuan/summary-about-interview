// function score(){
//     var num=5;
//     var info=[];
//     var score=0;
//     for(var i=0;i<num;i++){
//         var temp='12 1 0,15 0 0,12 1 1,12 1 0,16 1 0'.split(',');
//         temp.forEach(function(item){
//         item=item.split(' ');
//         item=item.map(function(it){
//           return parseInt(it);
//         });
//           info.push(item);
//         });
//
//     }
//     console.log(info);
//     for(var i=0;i<num;i++){
//         if(info[i][1]){
//             if(info[i][2]){
//                 score+=30;
//             }else if(find(info[i][0],i)){
//                 score+=5;
//             }else{
//                 score+=10;
//             }
//
//         }
//     }
//
//   console.log(score);
//   function find(target,L){
//    for(var j=0;j<L;j++){
//        if(info[j][0]===target&&info[j][1]){
//            return true;
//        }
//    }
//     return false;
// }
// }
// score();
// Math.sum([1,2,3,4])




    var number=10;
    var hotel=[];
    var str='4 4 5 3 4,3 3 3 3 3,5 4 4 3 5,5 5 5 5 5,5 2 4 3 4,4 4 5 3 4,4 2 5 3 4,4 3 5 3 4,3 4 4 3 1,4 2 5 3 4';
    var arr=str.split(',');
    for(var i=0;i<number;i++){
        var temp=arr[i].split(' ').sort(function(a,b){return a-b;});
        var t={};
        t[0]=i;
        t[1]=parseInt(temp[0]);
        t[2]=average(temp);
        hotel.push(t);
    }
  console.log(hotel);
	hotel=fast_Sort(hotel);
    console.log(hotel);
    var str='';
    hotel.forEach(function(item){
        str=str+item[0]+' ';
    });
    str=str.slice(0,-1);
    console.log(str)

 function fast_Sort(arr){
  var left=[];
  var right=[];
  var result=[];
  var target=arr[0];
  arr.forEach(function(item,index){
    if(index>0){
      if(item[1]>target[1]||item[1]==target[1]&&item[2]>target[2]){
        left.push(item);
      }else{
        right.push(item);
      }
    }
  });

  if(arr.length<=1){
    result=arr;
  }else{
    result=fast_Sort(left).concat(target).concat(fast_Sort(right));
  }
  return result;
}

 function average(arr){
  var sum=0;
    arr.forEach(function(item){
         sum+=parseInt(item);
     });
    return (sum/5).toFixed(1);
  }
