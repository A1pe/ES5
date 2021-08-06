function Person(name, firstScore, secondScore) {
  this.name = name;
  this.age = 27;
  this.firstScore = firstScore;
  this.secondScore = secondScore;
}

Person.prototype.sum = function () {
  return "prototype : " + (this.firstScore + this.secondScore);
};

let kim = new Person("kim", 70, 20);
kim.sum = function () {
  return "this : " + (this.firstScore + this.secondScore);
};

let lee = new Person("lee", 50, 20);

console.log(kim.sum());
console.log(lee.sum());
