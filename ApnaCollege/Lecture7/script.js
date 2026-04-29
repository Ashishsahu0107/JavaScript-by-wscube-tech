let header1 = document.querySelector(".heading");

header1.onClick = () => {
    header1.innerText;
    console.log(header);
}


let button = document.querySelector("#btn");
let div = document.querySelector("div");

button.addEventListener("click", () => {
    console.log("click me")
});



div.addEventListener("click", (evt) => {
    div.style.backgroundColor = "red";
    console.log(evt);
    console.log(evt.type);
});
div.removeEventListener("click", (evt) => {
    div.style.backgroundColor = "black";
    console.log(evt);
    console.log(evt.type);
});


