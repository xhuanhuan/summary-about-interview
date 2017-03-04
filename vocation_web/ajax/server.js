var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');

// var str='<form method="post" action="http://localhost:3000/">'+
// '<label>姓名</label><input name="name">'+
// '<label>年齡</label><input name="age">'+
// '<button>submit</button>'+
// '</form>';

http.createServer(function(req, res){
  if(req.method==='GET'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf8','Access-Control-Allow-Origin':'*'});
        //处理get请求，并将结果传递给客户端
        var params = url.parse(req.url, true).query;
        res.write("姓名：" + params.name);
        res.write("<br>");
        res.write("年齡：" + params.age);
        res.end();
  }
  else{
    var body = "";
    req.on('data', function (chunk) {
      body += chunk;
    });
    req.on('end', function () {
       body=JSON.parse(body);
      //  body = querystring.parse(body);
       res.writeHead(200, {'Content-Type': 'text/html; charset=utf8','Access-Control-Allow-Origin':'*'});
      //  res.end(util.inspect(body));
        if(body.name&&body.age) {
            res.write("name:" + body.name);
            res.write("<br>");
            res.write("age:" + body.age);
        } else {
            res.write("wrong");
        }
         res.end();
      });
  }

}).listen(3000);
