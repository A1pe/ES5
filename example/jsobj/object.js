let memberArray = ["eddy", "alpe", "chansoo"];
console.log("memberArray[1] :", memberArray[1]);
let memberObject = {
  manager: "eddy",
  developer: "alpe",
  designer: "chansoo",
};

console.log("memberObject.designer :", memberObject.designer);
console.log("memberObject['designer'] :", memberObject["designer"]);

memberObject.designer = "Kim";
console.log("memberObject.designer :", memberObject.designer);
console.log("memberObject['designer'] :", memberObject["designer"]);

delete memberObject.designer;
console.log("after delete memberObj.designer :", memberObject.designer);

//crud => 객체의 속성은 delete 키워드를 사용해야 한다.
