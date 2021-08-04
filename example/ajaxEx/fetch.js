window.addEventListener("load", () => {
  const h1Tag = document.querySelector("h1");
  const webTag = h1Tag.querySelector("a");
  const lis = document.querySelectorAll("li");
  const htmlTag = lis[0].querySelector("a");
  const cssTag = lis[1].querySelector("a");
  const jsTag = lis[2].querySelector("a");
  const target = document.querySelector("#target");
  const name = document.querySelector("h2");

  function relenderText(content, type) {
    fetch("ajax/" + content).then((response) => {
      response.text().then((text) => {
        name.textContent = type;
        target.textContent = text;
      });
    });
  }

  cssTag.addEventListener("click", () => relenderText("css", "CSS"));
  htmlTag.addEventListener("click", () => relenderText("html", "HTML"));
  jsTag.addEventListener("click", () =>
    relenderText("javascript", "JavaScript")
  );
  webTag.addEventListener("click", () => relenderText("main", "Web"));
});
