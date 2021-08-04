function jn(person) {
  person = "jay";
}
var o2 = "kim";
// 함수에 인수를 넣으면 인수에 있는 값을 복사해서 순서대로 args라는 map에 넣음
// 복사된 인수는 프리미티브 타입이라면 원본에 영향을 미치지 못함
// 즉 프리미티브 타입을 넣으면 불변성이 유지됨
// 만약 고친 값을 가지고 싶다면 리턴시키면 될 것임.

function fn(person) {
  person.name = "lee";
}
var o1 = { name: "kim" };
// 하지만 넣은 인수가 레퍼런스 타입이라면, 복사된 값 자체가 원본의 객체를 가리키므로
// 해당 속성을 고칠려고 하면 불변성이 깨짐.

console.log(fn(o1)); // name : kim
console.log(jn(o2)); // name : lee

function fl(person) {
  person = Object.assign({}, person);
  person.name = "lee";
  return person;
}
// 만약 복제된 레퍼런스 타입(person 매개변수 또는 args[0])을 assin 메서드를 이용하여
// 새로운 객체를 생성한다면, 기존의 객체는 불변성을 유지할 수 있다.

var jl = fl(o1);

console.log(jl); // name: kim
console.log(fn(o1)); // name: lee
