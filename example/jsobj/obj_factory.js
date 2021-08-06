const kim = {
  name: "kim",
  age: 27,
  firstScore: 99,
  secondScore: 88,
  sumScore: function () {
    return this.firstScore + this.secondScore;
  },
};
const lee = {
  name: "lee",
  age: 24,
  firstScore: 66,
  secondScore: 55,
  sumScore: function () {
    return this.firstScore + this.secondScore;
  },
};

console.log("kim.sum() :", kim.sumScore());
console.log("lee.sum() :", lee.sumScore());

let thisday = new Date("2021-08-05");
console.log("thisday.getFullYear() : ", thisday.getFullYear());

function Person() {
  this.name = "kim";
  this.age = 27;
  this.firstScore = 99;
  this.secondScore = 88;
  this.sumScore = function () {
    return this.firstScore + this.secondScore;
  };
}
let owner = new Person();

function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
  this.day = arguments[4];
}
console.log(new Car("KIA", "sonata", 2021, owner, 2121));
