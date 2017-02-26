//lazyman原理

//有一点类似柯里化，先利用链式调用，将所有的方法作为函保存一个数组task;最后在顺序调用。
//实现顺序调用的方法是 设计一个next方法获取下一个任务（应该调用谁了），每一个任务执行完就调用next获取下一个任务，直到任务全部执行（即task数组为空）
//什么时候开始调用： 利用setTimeout(func,0)的特点，它在当前loop结束之后立即执行。通过array.unshift获取第一个任务并执行，通过next即可顺序执行。

function lzm(name){
  this.task=[];
  var that=this;
  var fun=(function(name){
    return function(){
      console.log("hi "+name);
      that.next();
    }
  })(name);
  this.task.push(fun);
   setTimeout(this.next.bind(this),0);
}

lzm.prototype.next=function(){
  var fun=this.task.shift();
  if(fun){fun();}
}

lzm.prototype.eat=function(dinner){
  var that=this;
var fun=(function(dinner){
  return function(){
    console.log("eat "+dinner);
    that.next();
  }
})(dinner);

this.task.push(fun);
return this;
}

lzm.prototype.drink=function(drinking){
  var that=this;
  var fun=(function(drinking){
    return function(){
      console.log("drink "+drinking);
      that.next();
    }
  })(drinking);
  this.task.push(fun);
  return this;
}


lzm.prototype.sleep=function(time){
      var that=this;
  var fun=(function(time){
    return function(){
      setTimeout(function(){ console.log("sleep "+time+'s');that.next();},time*1000);
    }
  })(time);
  this.task.push(fun);
  return this;
}
  lzm.prototype.sleepFirst=function(time){
          var that=this;
    var fun=(function(time){
      return function(){
        setTimeout(function(){console.log("sleep "+time+'s');that.next();},time*1000);
      }
    })(time);

  this.task.unshift(fun);
  return this;
}


function lazyman(name){
  return new lzm(name);
}
lazyman("xhuanhuan").drink("milk").sleepFirst(4).eat("chicken");
