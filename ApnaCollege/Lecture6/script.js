
let heading = document.querySelector(".my-heading");
let para = document.querySelector("p");


console.dir(heading);


let button = document.querySelector("#btn");

console.dir(button);

let res =  button.tagName;
console.dir(res)


let result1 =  button.innerHTML;
console.dir(result1)

// let result2 = heading.innerText = 'renderText';
const renderedText = heading.innerText = 'Ashish sahu';




let result3 = para.textContent;
console.dir(result3)

let divs = document.querySelectorAll(".box");
let index = 0;
for(div of divs){
    div.innerText = `this is my ${index} div`;
    index++;
};

para.style.backgroundColor = "red"
para.style.fontSize = "25px";




// let divs = document.querySelectorAll(".box");

// divs[0].innerText = "first unique text";
// divs[1].innerText = "second unique text";
// divs[2].innerText = "third unique text";







