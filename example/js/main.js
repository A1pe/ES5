//window.onload = function () {
window.addEventListener("load", function () {
  var btnPrint = document.getElementById("btn-print");
  // 함수 정의 및 작성 부분 지역화를 함.

  var add = function (x, y) {
    return x + y;
  };

  btnPrint.onclick = function () {
    var x, y;
    x = prompt("x 값을 입력하세요.", 0);
    y = prompt("y 값을 입력하세요.", 0);

    x = parseInt(x);
    y = parseInt(y);
    btnPrint.value = x + y;
  };
});
