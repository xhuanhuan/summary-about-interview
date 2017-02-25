var a=10;
function test(){
  console.log(a)
  console.log(arguments.callee);
}
function test2(){
  var a=5;
  test();
};
test2();
