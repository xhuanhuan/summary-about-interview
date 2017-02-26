// import _ from 'lodash';

function component () {
  var element = document.createElement('div');
  let arr=[1,2,3];
  element.innerHTML =  arr.map(item=>item+1).join(",")

  return element;
}

document.body.appendChild(component());
