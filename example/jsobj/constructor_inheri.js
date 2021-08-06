function Person(age, first) {
  this.age = age;
  this.first = first;
}

Person.prototype.plus = function () {
  return this.age + this.first;
};

const kim = new Person(30, 20);

function PersonPlus(age, first, second) {
  Person.call(this, age, first);
  this.second = second;
}

PersonPlus.prototype.sum = function () {
  return this.age + this.first + this.second;
};
PersonPlus.prototype.__proto__ = Person.prototype;

const lee = new PersonPlus(40, 20, 35);

console.log(lee.plus());
console.log(lee.sum());
