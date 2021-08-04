//Ex8-노드 삽입과 바꾸기
window.addEventListener("load", function () {
  var section = document.querySelector("#section8");
  var upBtn = section.querySelector(".up-button");
  var downBtn = section.querySelector(".down-button");
  var noticeLi = section.querySelector(".notice-list");
  var tbodyNode = noticeLi.querySelector("tbody");

  var currentNode = tbodyNode.querySelector("#target");

  upBtn.onclick = function () {
    var prevEleNode = currentNode.previousElementSibling;
    if (prevEleNode == null) {
      alert("더 이상 이동할 수 없습니다.");
      return;
    }

    //prevEleNode.insertAdjacentElement("beforebegin", currentNode);
    currentNode.insertAdjacentElement("afterend", prevEleNode);
    //tbodyNode.insertBefore(currentNode, prevEleNode);
  };
  downBtn.onclick = function () {
    var nextEleNode = currentNode.nextElementSibling;
    if (nextEleNode == null) {
      alert("더 이상 이동할 수 없습니다.");
      return;
    }

    //nextEleNode.insertAdjacentElement("afterend", currentNode);
    currentNode.insertAdjacentElement("beforebegin", nextEleNode);
    //tbodyNode.insertBefore(nextEleNode, currentNode);
  };
});

//Ex7-노드 복제와 템플릿 태그
window.addEventListener("load", function () {
  var notice = [
    { id: 5, title: "hayhay", regDate: "2019-01-01", writerId: "alpe", hit: 0 },
    { id: 6, title: "hoho", regDate: "2019-08-01", writerId: "alpe", hit: 20 },
  ];
  var section = document.querySelector("#section7");
  var cloneBtn = section.querySelector(".clone-button");
  var templateBtn = section.querySelector(".template-button");
  var noticeLi = section.querySelector(".notice-list");
  var cloneTbody = noticeLi.querySelector("tbody");

  cloneBtn.onclick = function () {
    var i = 0;
    for (i; i < 2; i++) {
      var cloneTr = cloneTbody.querySelector("tr").cloneNode(true);
      var tds = cloneTr.querySelectorAll("td");
      tds[0].textContent = notice[i].id;
      //tds[1].innerHTML = "<a href=" + notice[0].id + ">" + notice[0].title + "</a>";
      var aNode = tds[1].children[0];
      aNode.href = notice[i].id;
      aNode.textContent = notice[i].title;
      tds[2].textContent = notice[i].regDate;
      tds[3].textContent = notice[i].writerId;
      tds[4].textContent = notice[i].hit;
      cloneTbody.append(cloneTr);
    }
  };
  templateBtn.onclick = function () {
    var i = 0;
    for (i; i < 2; i++) {
      var template = section.querySelector("template");

      var clonetp = document.importNode(template.content, true);
      var tds = clonetp.querySelectorAll("td");
      tds[0].textContent = notice[i].id;
      tds[1].innerHTML =
        "<a href=" + notice[i].id + ">" + notice[i].title + "</a>";
      tds[2].textContent = notice[i].regDate;
      tds[3].textContent = notice[i].writerId;
      tds[4].textContent = notice[i].hit;
      cloneTbody.append(clonetp);
    }
  };
});

// EX-6 노드조작: 메뉴추가(createTextNode, Element)
window.addEventListener("load", function () {
  var section = document.querySelector("#section6");

  var titleInput = section.querySelector(".title-input");
  var addBtn = section.querySelector(".add-button");
  var delBtn = section.querySelector(".del-button");
  var menuListUI = section.querySelector(".menu-list");

  addBtn.onclick = function () {
    var title = titleInput.value;
    var liNode = document.createElement("li");
    var div = document.createElement("div");
    var hone = document.createElement("h1");
    menuListUI.append(liNode, div, hone);

    /*
		var title = titleInput.value;

		var html = '<a href="">' + title + " </a>";
		var liNode = document.createElement("li");
		liNode.innerHTML = html;

		menuListUI.appendChild(liNode);*/

    //menuListUI.innerHTML += '<li><a href="">' + title + "</a></li>";

    /*var title = titleInput.value;
		var txtNode = document.createTextNode(title);
		var aNode = document.createElement("a");
		aNode.href = "";
		var liNode = document.createElement("li");

		menuListUI.appendChild(liNode);
		liNode.appendChild(aNode);
		aNode.appendChild(txtNode);*/

    /*var title = titleInput.value;
		var txtNode = document.createTextNode(title);
		menuListUI.appendChild(txtNode);
    */
  };
  delBtn.onclick = function () {
    //var txtNode = menuList.childNodes[0];
    var liNode = menuListUI.children[0];
    //menuListUI.removeChild(liNode);
    liNode.remove();
  };
});

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

window.addEventListener("load", function () {
  var section = document.querySelector("#section-8-1");
  var getbtn = section.querySelector(".up-button");
  var printbtn = section.querySelector(".down-button");
  var dataURL;
  getbtn.onclick = function () {
    dataURL = JSON.parse(datas);
    window.alert("데이터를 읽었습니다.");
  };
  printbtn.onclick = function () {
    var target = section.children[2];
    var menus = document.createElement("span");
    target.append(menus);
    menus.innerText = dataURL[0];
  };
});
