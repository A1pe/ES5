console.group("함수선언 및 호출테스트");
function C() {
  return "This is function C";
}
// 함수 선언식

console.log("C함수명 출력 => C :", C);
// 함수명만 불렀다. 이는 콜백함수다.

console.log("C함수 실행 => C() :", C(), "\n");
// C 함수를 실행시켰다

console.groupEnd();

/***************************************************************/

console.group("생성자 함수 선언 및 객체생성 테스트");

function A(name) {
  this.name = name;
}
// 선언문만 있는 모습의 A함수를 만들었다. 이는 생성자 함수다.

console.log("A함수명 출력 => A :", A);
// 실행시키면 콜백함수처럼 보인다.

console.log("A함수 실행 => A('kim') : ", A("kim"));

let B = new A("kim");
console.log("B객체 생성후 출력 => B : ", B);
console.log("B객체 생성후 age 속성 출력 => B.age : ", B.age);

A.prototype.age = 36;
console.log("age 속성을 A.prototype에 기입후 B 출력 => B : ", B);
console.log("age 속성을 A.prototype에 기입후 B 출력 => B.age : ", B.age);

let D = new A("Lee");
console.log("새로운 객체 생성후 출력 => D : ", D);
console.log("새로운 객체 생성후 출력 => D.age : ", D.age);
console.groupEnd();
