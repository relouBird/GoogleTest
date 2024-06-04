const socket = io("http://localhost:8000");

let box = document.querySelectorAll(".progress-box");

let modifyWidth = function (box, width = 0) {
  box.style.width = width + "%";
};

let updateData = (data) => {
  let votingPolls = data.votingPolls;
  let totalVoting = data.totalVoting;
  box.forEach((boxChild, i) => {
    let value = boxChild.childNodes.item(1).textContent;
    let vote = votingPolls[value];
    let width = Math.round((vote / totalVoting) * 100);
    modifyWidth(boxChild.childNodes.item(3).childNodes.item(0), width);
  });
};

box.forEach((boxChild) => {
  boxChild.addEventListener("click", () => {
    let value = boxChild.childNodes.item(1).textContent;
    // console.log(value);
    socket.emit("send-vote", value);
  });
});

socket.on("receive-vote", (data)=>{
  updateData(data)
});

socket.on("update", (data)=>{
  updateData(data)
});



// box.forEach((boxChild, i) => {
//   boxChild.addEventListener("click", () => {
//     if (i === 0) {
//       valueTab = [valueTab[0] + 1, valueTab[1]];
//     } else if (i === 1) {
//       valueTab = [valueTab[0], valueTab[1] + 1];
//     }
//     console.log(valueTab);
//     box.forEach((boxChild, j) => {
//       let data = (valueTab[j] / (valueTab[0] + valueTab[1])) * 100;
//       console.log(data);
//       modifyWidth(
//         boxChild.childNodes.item(3).childNodes.item(0),
//         Math.round(data)
//       );
//     });
//   });
// });

// console.log(box);
