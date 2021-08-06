function Person(name, age) {
  this.name = name;
  this.age = age;
}

let kim = new Person("kikm", 27);

Person.prototype.clazz = function () {
  return "this is func";
};

console.log(kim.clazz());
console.log(Person.clazz());
