let memberArray = ["eddy", "alpe", "chansoo"];
console.group("array loop");
let i = 0;
while (i < memberArray.length) {
  console.log(i, memberArray[i]);
  i = i + 1;
}
console.groupEnd("array loop");

console.group("object loop");
let memberObject = {
  manager: "eddy",
  developer: "alpe",
  designer: "chansoo",
};

for (i in memberObject) {
  console.log(i, memberObject[i]);
  // 객체의 프로퍼티(속성)은 맵과 유사한 방식으로 동작한다. >> 이름와 값의 연결로 이루어져있다.
}

console.groupEnd("object loop");
