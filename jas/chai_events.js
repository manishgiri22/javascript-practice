//study
//types, timestamp , defaultPrevented , 
// target , to Element , srcElement, currentTarget
// clientX, clientY, offset , screenX,screenY
// altKey, ctrlKey, shiftKey,keyCode

var btn = document.querySelector("#btn")
btn.addEventListener('click',function(e){
console.log(e)
},true)
// event propagation event public = false ( inside to outside )
// event capturing = true (outside to inside)

document.querySelector(".btn1").addEventListener('click',function(e){
    console.log("div clicked")
    e.stopPropagation;
    e.preventDefault;
})


// attachEvent() 
// jQuery - on event
