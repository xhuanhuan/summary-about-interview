import './part.html'
import './style.css'
var e1=require('./part.html');
function component1 () {
  var element = document.createElement('div');
  let arr=[1,2,3];
  element.innerHTML =  arr.map(item=>item*3).join(",")
  return element;
}
function component2 () {
  var element = document.createElement('div');
  element.innerHTML = e1;
  return element;
}
document.body.appendChild(component1());
document.body.appendChild(component2());
