function Element(tagName,props,children){
  this.tagName=tagName;
  this.props=props;
  this.children=children;
}
Element.prototype.render = function () {
  var props=this.props||{};
  var children=this.children||[];

  var El=document.createElement(this.tagName);

  for(propName in props){
    El.setAttribute(propName,props[propName]);
  }

  children.forEach(function (child) {
    var childEl = (child instanceof Element)
      ? child.render() // 如果子节点也是虚拟DOM，递归构建DOM节点
      : document.createTextNode(child) // 如果字符串，只构建文本节点
    El.appendChild(childEl)
  })

  return El;
};

function EL(tagName,props,children){
  var el= new Element(tagName,props,children);
  return el;
}
function addDOM(){
  var ul=EL('ul',{'id':'myul'},[EL('li',{'class':'myli'},['item1']),EL('li',{'class':'myli'},['item2'])]);
  document.body.appendChild(ul.render());
  console.log(ul)
}
