let kim = { name: "kim", first: 10, second: 20 };
let lee = { name: "lee", first: 10, second: 10 };

function sum() {
  return this.first + this.second;
}

sum.call(kim);
