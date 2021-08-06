let superObj = {
  superVal: "super",
};

let subObj = {
  subVal: "sub",
};

subObj.__proto__ = superObj;

console.log(subObj.subVal);
console.log(subObj.superVal);

subObj.superVal = "sub";

console.log(superObj.superVal);
console.log(subObj.superVal);

let thirdObj = Object.create(superObj);
thirdObj.thirdVal = "third";

console.log(thirdObj.thirdVal);
console.log(thirdObj.superVal);

let kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};
let lee = {
  name: "lee",
  first: 10,
  second: 10,
};
lee.__proto__ = kim;
let jack = Object.create(kim);
jack.name = "jack";
jack.first = 20;
jack.second = 5;
jack.avg = function () {
  return jack.sum() / 2;
};
console.log(kim.sum());
console.log(lee.sum());
console.log(jack.avg());
