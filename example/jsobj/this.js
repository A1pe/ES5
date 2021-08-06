const kim = {
  name: "kim",
  age: 27,
  firstScore: 99,
  secondScore: 88,
  sum: function () {
    return this.firstScore + this.secondScore;
  },
};
// this 키워드를 사용할 때는 조심해야한다. es6 기반의 arrow func는 이 키워드를 지원하지 않는다.
console.log(kim.sum());
