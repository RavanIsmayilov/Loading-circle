var btn = document.querySelector(".btn")
var container = document.querySelector(".container")
var circle = document.querySelector(".circle")


btn.addEventListener("click", function(){

    circle.style.transform = "rotate(2160deg)"
    circle.style.transition = "5s ease-in-out"

})