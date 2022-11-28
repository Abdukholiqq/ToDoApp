 let elInput = document.getElementById("text");
let elPlus = document.querySelector(".plus");
let elNumbers = document.querySelector(".numbers");
let elClear = document.querySelector(".clear");
let elTexts = document.querySelector(".texts");
let elForm = document.querySelector("form")

let arr = []


elForm.addEventListener("submit", (e)=> {
    e.preventDefault();
    arr.push(elInput.value)
elTexts.textContent = ''
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const titletext = document.createElement("h4");
        titletext.textContent = element
        elTexts.appendChild(titletext);       
    }
  
    elNumbers.textContent = arr.length
    elInput.value = "";
});
elClear.addEventListener("click", ()=>{
    arr = []
    elTexts.textContent = "";
    elNumbers.textContent = arr.length;
})