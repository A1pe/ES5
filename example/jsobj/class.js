class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
  }
  sum() {
    return this.first + this.second;
  }
}
Person.prototype.mux = function () {
  return this.first * 2;
};

class PersonPlus extends Person {
  avg() {
    return this.sum() / 2;
  }
  mux() {
    return this.first * 5;
  }
}

let kim = new PersonPlus("Kim", 70, 20);
PersonPlus.prototype.mux = function () {
  return this.first * 3;
};
console.log(kim);
console.log(kim.sum());
console.log(kim.mux());

console.log(kim.avg());
