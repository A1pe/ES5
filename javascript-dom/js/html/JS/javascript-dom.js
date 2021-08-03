//EX:5 Element Node의 attribute 변경
window.addEventListener("load", function () {
  var section5 = document.querySelector("#section5");
  var inputBox = section5.children[1];
  var imgBox = section5.children[2];

  var userInput = inputBox.children[0];
  var btn = inputBox.children[1];

  var imgSrc = imgBox.children[0];

  btn.onclick = function () {
    imgSrc.src = userInput.value;
    imgSrc.className = "imgClazz";
  };
});

//EX:4 ChildNodes를 이용한 노드선택
window.addEventListener("load", function () {
  var section4 = document.querySelector("#section4");
  var box = section4.querySelector(".box");
  var input1 = box.children[0];
  var input2 = box.children[1];

  input1.value = "hello";
  input2.value = "world";
});

//EX:3 Selectors API level 1
window.addEventListener("load", function () {
  var section3 = document.getElementById("section3");
  var nodeTag = section3.querySelectorAll("input");
  // 함수 정의 및 작성 부분 지역화를 함.

  nodeTag[2].onclick = function () {
    xValue = parseInt(nodeTag[0].value);
    yValue = parseInt(nodeTag[1].value);
    // 값을 읽어옴
    nodeTag[3].value = xValue + yValue;
    // 값을 대입해줌.
  };
  // 버튼 이벤트에 따른 동작요구
});

//EX:2 노드 엘리먼트 선택법 개선
window.addEventListener("load", function () {
  var section2 = document.getElementById("section2");
  var inputls = section2.getElementsByTagName("input");
  // 함수 정의 및 작성 부분 지역화를 함.

  inputls[2].onclick = function () {
    var xValue = parseInt(inputls[0].value);
    var yValue = parseInt(inputls[1].value);
    // 값을 읽어옴
    inputls[3].value = xValue + yValue;
    // 값을 대입해줌.
  };
  // 버튼 이벤트에 따른 동작요구
});

//EX:1 계산기 프로그램
window.addEventListener("load", function () {
  var btnAdd = document.getElementById("btn-add");
  var textResult = document.getElementById("txt-result");
  var textX = document.getElementById("txt-x");
  var textY = document.getElementById("txt-y");
  // 함수 정의 및 작성 부분 지역화를 함.

  btnAdd.onclick = function () {
    var xValue = parseInt(textX.value);
    var yValue = parseInt(textY.value);
    // 값을 읽어옴
    textResult.value = xValue + yValue;
    // 값을 대입해줌.
  };
  // 버튼 이벤트에 따른 동작요구
});
