const socket = io("http://localhost:8000");

let box = document.querySelectorAll(".progress-box");

let modifyWidth = function (box, width = 0) {
  box.style.width = width + "%";
};

let updateData = (data) => {
  let votingPolls = data.votingPolls;
  let totalVoting = data.totalVoting;
  box.forEach((boxChild, i) => {
    let value = boxChild.childNodes.item(1).childNodes.item(1).textContent;
    let vote = votingPolls[value];
    let width = Math.round((vote / totalVoting) * 100);
    modifyWidth(boxChild.childNodes.item(3).childNodes.item(0), width);
    if(width === null || width === undefined || totalVoting === 0){
      boxChild.childNodes.item(1).childNodes.item(3).textContent = 0 +"%";
    } else {
      boxChild.childNodes.item(1).childNodes.item(3).textContent = width +"%";
    }
  });
};

box.forEach((boxChild) => {
  boxChild.addEventListener("click", () => {
    let value = boxChild.childNodes.item(1).childNodes.item(1).textContent;
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




