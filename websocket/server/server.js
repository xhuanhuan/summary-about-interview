// 需要HTTP 模块来启动服务器和Socket.IO
var http= require('http'), io= require('socket.io');

// 在8080端口启动服务器
var server= http.createServer(function(req, res){
  // 发送HTML的headers和message
  res.writeHead(200,{ 'Content-Type': 'text/html' });
  res.end('<h1>Hello Socket Lover!</h1>');
});
server.listen(8080);

// 创建一个Socket.IO实例，把它传递给服务器
var socket= io.listen(server);
var a = 10;
var timer = function(){
  console.log(a);
  socket.emit('message', { hello: 'xhuanhuan' });
}
var that = socket;
socket.on('connection', function (socket) {
//   var a=5;
//   // var time = setInterval(timer,1000);
//   socket.emit('message', { hello: 'xhuanhuan' });
//   socket.on('my other event', function (data) {
//     console.log(data);
//   });
//   // setTimeout(function(){
//   //   socket.emit('message', { hello: 'xhuanhuan' });
//   // },5000);
//   // socket.on('disconnect', function () {
//   //   clearInterval(time);
//   // });
});
setTimeout(function(){
  socket.emit('message', { hello: 'xiaoma' });
},1000);
