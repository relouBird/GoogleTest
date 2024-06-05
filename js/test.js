const socket = io("http://localhost:8000");

// Ceci est fichier test...
//--------------------------------------------------

let data1;

socket.on("update-message", (data) => {
  data1 = data;
});

let inp = document.querySelector("input");

document.querySelector(".test").addEventListener("click", () => {
    if(inp.value !== "" || inp.value !== " "){
        socket.emit("message", inp.value);
        inp.value = "";
    }
});

let test2 = document.querySelector(".test2").addEventListener("click", () => {
  console.log(data1);
});
