var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")
main.addEventListener("mousemove",function(dets){
   crsr.style.left = dets.x+ "px"
})