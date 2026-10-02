// // 4 pillars of DOM
// // 1. selecctoin of element in html
// {/* <script>
//     var a = document.querySelector("#input")
//     console.log(a)
//     </script> */}

// // 2. changing elemment in html
// <script>
// var a = document.querySelector("h1")
// a.innerHTML = "Changed"
// </script>
//   // 3. changeing css

// var a = document.querySelector("h1")
// a.style.color = "red"
// a.style.backgroundColor = "yellow"

// // 4. adding event listener
// var btn = document.querySelector("#btn")
// btn.innerHTML = "Click Me"
// btn.addEventListener("click",function(){  //kun event hoo ani k function
//     console.log("Button Clicked")
//     btn.innerHTML = "Clicked"
//     btn.style.backgroundColor = "green"
// })
// var bulb = document.querySelector("#bulb");
// var btn = document.querySelector("button");

// var flag = 0;

// btn.addEventListener("click", function () {
//   if (flag == 0) {
//     bulb.style.backgroundColor = "yellow";
//     console.log("clicked");
//     flag = 1;
//   } else {
//     bulb.style.backgroundColor = "transparent";
//     console.log("again clicked");
//     flag = 0;
//   }
// });


var h = document.querySelectorAll("h1")
console.log(h)
h.forEach(function(e){
    console.log(e)
})
document.querySelectorAll("h1").forEach(function(e){
    e.style.color = "red"
})

var h1 = document.querySelectorAll("h1").forEach(function(e){
    e.style.color = "red"
})
document.getElementById("btn").addEventListener("click",function(){
    document.querySelectorAll("h1").forEach(function(e){
        e.style.color = "red"
    })
document.getElementsByClassName("btn")
document.querySelectorAll(".btn").innerHTML = "Clicked"

document.querySelector("h1").innerText = 'text changexd'