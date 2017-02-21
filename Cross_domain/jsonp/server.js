var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');
http.createServer(function(req,res){
  var path=req.url;
  var params = url.parse(req.url, true).query;
  var data = {name:params.name,age:params.age};
  console.log(data);
  var script=params.callback+'('+JSON.stringify(data)+')';
  res.writeHead(200,{'content-Type':'text/plain'});
  res.end(script);


}).listen(3000);
