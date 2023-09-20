// alert("hello world")

const bodi = document.getElementById("bodi")
const button = document.querySelector("#button")
button.addEventListener('click', function(){
    bodi.classList.add("bg-slate-100");
})