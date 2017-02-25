//jquery
function person(name){
  this.name=name;
}

person.prototype.eat = function () {
  console.log(this.name+" eating");
  return this;
};
person.prototype.drink = function () {
  console.log(this.name+" drinking");
  return this;
};

function myquery(name){
  return new person(name);
}
myquery("xhh").eat().drink().drink().eat();
