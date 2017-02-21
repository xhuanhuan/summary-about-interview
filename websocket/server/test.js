var a=10;
function test(){
  console.log(a);
}
(function test3(){
  var a = 5;

  test();
})()
