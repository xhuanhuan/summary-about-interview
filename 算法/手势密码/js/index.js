;(function(){
//-----------  变量部分 --------
/*
1. 创建画布，获取画布顶点坐标 canvas_position
2. 初始化两次密码存储变量 password1，password2
3. 输入状态变量 first，第一次true,第二次false
4. 模式状态变量 model，默认 check,即验证密码模式
*/
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var canvas_position={};
canvas_position.x=document.getElementById('myCanvas').offsetLeft;
canvas_position.y=document.getElementById('myCanvas').offsetTop;
var password1=[];
var password2=[];
var first=true;
var model='check';

//-------------- 执行部分 ------------
/*
1. 画密码圆
2. 绑定 touchmove、touchend 、touchstart事件
3. 模式选择
*/
draw_circle1();
document.getElementById('password_canvas').addEventListener('touchmove',throttle(touchmove,50));
document.getElementById('password_canvas').addEventListener('touchend',touchend);
document.getElementById('password_canvas').addEventListener('touchstart',touchstart);
document.getElementById('control').onclick=function(e){
  if(e.target.id==='set_password'){
    model='set';
    document.getElementById('note').innerHTML='请设置密码';
  }else if(e.target.id==='check_password'){
    model='check';
    document.getElementById('note').innerHTML='请输入密码';
  }
}

//-------------- 函数部分 ------------

//touchstart 事件回调函数
/*初始化密码数组：
  验证模式只使用 password1，将其清空；
  set模式：如果是第一次操作就清空 password1、password2，否则清空 password2
*/
function touchstart(){
  if(model==='check'){
    password1=[];
  }else if(first===true){
    password1=[];
    password2=[];
  }else{
      password2=[];
  }
}

//touchmove事件回调函数
//根据触点的当前位置判断选中的点，满足条件时push进数组，重绘画布
function touchmove(e){
  var old=+new Date();
  var x=e.touches[0].pageX-canvas_position.x;
  var y=e.touches[0].pageY-canvas_position.y;
  find_nearest(x,y);
  ctx.clearRect(0,0,300,300);
  draw_circle1();
  draw_circle2();
  draw_line(x,y);
}

//touchend事件回调函数
/*
set密码模式：
1. 密码长度不满5,重绘画布，样式红色保持,清空密码；
2. 第一次输入且密码长度满足要求，则切换到第二次开始输入；
3. 第二次输入且密码长度满足要求，对比两次输入:
   不等则样式红色保持，清空两次输入，并提示重新输入密码；
   相等则样式绿色保持，保存密码到 localStorage。
check密码模式：
1. 密码长度不满5,重绘画布，样式红色保持,清空密码；
2. 输入密码长度满足要求，与 localStorage中存储对比：
   不等则样式红色保持，清空输入，并提示重新输入密码；
   相等则样式绿色保持，并提示密码验证成功。
*/
function touchend(e){
  if(model==='set'){
    var password=(first===true)?password1:password2;
    if(password.length<5){//密码长度不满5
      drawCanvas('rgb(237,109,52)');
      clearCanvas(500);
      document.getElementById('note').innerHTML='至少输入5位数密码，请重新输入';
    }else if(first===true){//第一次密码输入满足条件
      drawCanvas();
      clearCanvas(500);
      first=false;
      document.getElementById('note').innerHTML='请再次输入密码';
    }else if(password1.join('')!==password2.join('')){//两次密码不一致，重新输入密码
      console.log(password1.join(''),password2.join(''));
      drawCanvas('rgb(237,109,52)');
      clearCanvas(500);
      first=true;
      document.getElementById('note').innerHTML='两次密码不一致，请重新输入';
    }else{//两次密码满足要求且输入一致
      drawCanvas('rgb(207,220,40)');
      clearCanvas(1000);
      localStorage.password=password1.join('');
      first=true;
      document.getElementById('note').innerHTML='密码设置成功！';
      setTimeout(function(){  document.getElementById('note').innerHTML='';},1000);
    }
  }else{
    if(password1.length<5){//密码长度不满5
      drawCanvas('rgb(237,109,52)');
      clearCanvas(500);
      document.getElementById('note').innerHTML='至少输入5位数密码，请重新输入';
    }else if(password1.join('')!==localStorage.password){//输入密码与存储的不一致
      drawCanvas('rgb(237,109,52)');
      clearCanvas(500);
      document.getElementById('note').innerHTML='密码错误，请重新输入';
    }else{
      drawCanvas('rgb(207,220,40)');
      clearCanvas(1000);
      document.getElementById('note').innerHTML='验证成功!';
      setTimeout(function(){  document.getElementById('note').innerHTML='';},1000)
    }
  }
}

//初始密码圆
function draw_circle1(){
  for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
      ctx.lineWidth=3;
    ctx.beginPath();
    ctx.arc(50+100*i, 50+100*j, 25, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.strokeStyle = 'rgb(180,190,207)';
    ctx.stroke();
   }
  }
}

//连线圆，根据密码数组的值根据密码数组的值推算圆心，进行画圆，默认白色，出错时为红色，成功时为绿色
//touchend 阶段有参数表示颜色信息，没有则默认白色
function draw_circle2(){
  var password=(first===true)?password1:password2;
  if(password.length>0){
    for(var i=0;i<password.length;i++){
      x=password[i]%3;
      y=(password[i]-x)/3;
      ctx.beginPath();
      ctx.arc(50+100*x, 50+100*y, 15, 0, 2 * Math.PI);
      ctx.closePath();
      if(arguments.length===0){
        ctx.fillStyle = 'white';
      }else{
        ctx.fillStyle = arguments[0];
      }
      ctx.fill();
    }
  }
}

//连线，根据密码数组的值推算圆心，将圆心连线，默认白色，出错时为红色，成功时为绿色
//touchmove 阶段的参数是触点的位置信息
//touchend 阶段的参数是颜色信息，没有输入则表示默认颜色白色
function draw_line(){
  var password=(first===true)?password1:password2;
  ctx.lineWidth=3;
  if(arguments.length===1){//只有颜色信息
    ctx.strokeStyle = arguments[0];
  }else{
    ctx.strokeStyle = 'white';
  }
  if(password.length>0){
    var x=password[0]%3;
    var y=(password[0]-x)/3;
    ctx.beginPath();
    ctx.moveTo(50+100*x,50+100*y);
    for(var i=1;i<password.length;i++){
      x=password[i]%3;
      y=(password[i]-x)/3;
      ctx.lineTo(50+100*x,50+100*y);
    }
    if(arguments.length>1){//只有位置信息
      ctx.lineTo(arguments[0],arguments[1]);
    }
    ctx.stroke();
    ctx.closePath();
  }
}

//touchend 对应的画布重绘:初始圆、选中圆，画线
//有参数表示颜色信息（红色/绿色），没参数则默认
function drawCanvas(){
  ctx.clearRect(0,0,300,300);
  draw_circle1();
  if(arguments.length>0){
    draw_circle2(arguments[0]);
    draw_line(arguments[0]);
  }else{
    draw_circle2();
    draw_line();
  }
}

//延迟清空画布
//在成功或失败时保持样式一定时间
function clearCanvas(time){
  setTimeout(function(){
    ctx.clearRect(0,0,300,300);
    draw_circle1();
  },time);
}

//函数节流
//控制 touchmove事件的回调频率
function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 50);
  var last,
      deferTimer;
  return function () {
    var context = scope || this;
    var now = +new Date,
        args = arguments;
    if (!last || now >= last + threshhold) {
      last = now;
      fn.apply(context, args);
    }
  }
}

//监控触点位置，获取触点进入的初始圆，若密码数组中不存在则 push 进数组
function find_nearest(x,y){
  var password=(first===true)?password1:password2;
  for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
      var s=Math.sqrt((50+100*i-x)*(50+100*i-x)+(50+100*j-y)*(50+100*j-y));
      if(s<25&&password.indexOf(j*3+i)===-1){//触点进入圆内且不是已经选过的点
        password.push(j*3+i);
      }
    }
  }
}

})();
