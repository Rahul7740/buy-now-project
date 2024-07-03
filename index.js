// show-filter
// close-btn
// fill-main-div

let openModel = document.querySelector(".show-filter");
let overlay = document.querySelector(".overlay")
let model = document.querySelector(".fill-main-div")
let close = document.querySelector(".close-btn")

openModel.addEventListener("click",()=>{
    model.classList.add("applynew")
    overlay.classList.add("applyoverlay")
})
close.addEventListener("click",()=>{
    model.classList.remove("applynew")
    overlay.classList.remove("applyoverlay")
})