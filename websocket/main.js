
  var socket = io('http://localhost:8080');
  socket.on('message', function (data) {
    console.log(data);
    socket.emit('my other event', { hellow: 'xiaobo' });
  });

  setTimeout(function(){
    socket.emit('disconnect','hello')
  },5000)
