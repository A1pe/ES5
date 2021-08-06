console.group("함수선언 및 호출테스트");
let B = function () {
  return "this is functuon B";
};
// 함수 표현식 + 선언식

console.log("B변수 출력 => B : ", B);
// B변수에는 함수의 주소가 있다. 콜백함수다.

console.log("B변수에 있는 함수 실행 => B() : ", B(), "\n");
// B변수에 있는 함수를 실행시켰다.

console.groupEnd();

console.group("생성자 함수 선언 및 객체생성 테스트");

let A = function (name) {
  this.name = name;
};

console.log("A변수 출력 => A : ", A);
console.log("A변수에 있는 함수 실행 => A() : ", A("Kim"));

let C = new A("Lee");

console.log("C 객체 생성후 출력 => C : ", C);
console.log("C 객체 생성후 age 속성 출력 => C.age : ", C.age);

A.prototype.age = 35;
console.log("age 속성을 A.prototype에 기입후 C 출력 => C : ", C);
console.log("age 속성을 A.prototype에 기입후 C 출력 => C.age : ", C.age);

let D = new A("Lee");
console.log("새로운 객체 생성후 출력 => D : ", D);
console.log("새로운 객체 생성후 출력 => D.age : ", D.age);
console.groupEnd();
