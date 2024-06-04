let box = document.querySelectorAll(".progress-box");

let valueTab = [0, 0];

let modifyWidth = function (box, width) {
  box.style.width = width + "%";
};

box.forEach((boxChild, i) => {
  boxChild.addEventListener("click", () => {
    if (i === 0) {
      valueTab = [valueTab[0] + 1, valueTab[1]];
    } else if (i === 1) {
      valueTab = [valueTab[0], valueTab[1] + 1];
    }
    console.log(valueTab);
    box.forEach((boxChild, j) => {
      let data = (valueTab[j] / (valueTab[0] + valueTab[1])) * 100;
      console.log(data);
      modifyWidth(
        boxChild.childNodes.item(3).childNodes.item(0),
        Math.round(data)
      );
    });
  });
});

console.log(box);
