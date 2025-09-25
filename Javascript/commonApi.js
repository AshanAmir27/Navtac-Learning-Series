let heading = document.getElementsByTagName("h1");
heading[0].style.color='blue';
heading[0].style.background='red';
let createParaBtn = document.getElementById("createPara");
let button = document.getElementById("btn");
let text = button.getAttribute("onclick")
document.getElementById("demo").innerHTML = text;
let paragraph = document.getElementById("paragraph");

button.addEventListener("click", ()=>{
    paragraph.innerHTML="i am Ashan Amer";
})

createParaBtn.addEventListener("click", ()=>{
const para = document.createElement("p");
para.setAttribute("style","background-color:red;")
para.innerText = "new paragraph added";
document.body.appendChild(para);
})

const myFunction = ()=> {
    console.log("hello world");
    
}

const buttonurl = document.getElementById("url");

const myUrl = ()=>{
    window.open("https://www.w3schools.com");
}