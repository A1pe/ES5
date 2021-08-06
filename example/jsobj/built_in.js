console.log("MathPi :", Math.PI);
console.log("Math.random() :", Math.random());
console.log("Math.floor(3.9) :", Math.floor(3.9));

// Math 객체를 이용한 기능을 사용.

const MyMath = {
  PI: 3.141592,
  random: () => Math.random(),
  floor: (target) => Math.floor(target),
};
// 객체는 키와 밸류의 짝일뿐이다. 밸류가 함수의 리턴이라면 키값으로 함수를 호출하는 것과 동일한
// 동작을 할 것이다.

console.log("MyMathPi :", MyMath.PI);
console.log("MyMath.random() :", MyMath.random());
console.log("MyMath.floor(3.1) :", MyMath.floor(3.1));
// 객체의 키값에 소괄호를 추가하지 않는다면 함수를 호출하는 시작점을 레퍼런스로 해서
// 실행되지 않은 함수를 리턴 할 것이다.
