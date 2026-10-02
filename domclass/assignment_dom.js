
// Create three buttons named Red, Green, and Blue.
//  Clicking a button should change a box to the corresponding background colour.

const btnGrn = document.querySelector("#grn")
btnGrn.addEventListener('click',()=>{
    btnGrn.style.backgroundColor = 'green'
})


const btnRd = document.querySelector("#re")
btnRd.addEventListener('click',()=>{
    btnRd.style.backgroundColor = 'red'
})

const btnBl = document.querySelector("#bl")
btnBl.addEventListener('click',()=>{
    btnBl.style.backgroundColor = 'blue'
})

// Create a heading and a button.
//  When the button is clicked, change the heading’s text, text colour, background colour, and font size.

const hd = document.querySelector('h2')
const cbtn = document.querySelector('#hd')
cbtn.addEventListener('click',()=>{
    hd.textContent = 'I am assignment no 2'
    hd.style.color = 'red'
    hd.style.backgroundColor= 'blue'
    hd.style.fontSize = '2vw'
    
})

// Create a box that changes its background colour and 
// size when the mouse hovers over it. Return it to its original design when the mouse leaves.

const box = document.querySelector('.box')
box.addEventListener('mouseover',function(){
    box.style.transform = 'scale(1.5)'
    box.style.background = 'linear-gradient(to right,red,blue)'

})
box.addEventListener('mouseout',function(){
    box.style.transform = 'scale(1)'
    box.style.background = 'white'
})

// Create two buttons named Increase and Decrease with a number displayed between them. 
// Increase or decrease the number when the corresponding button is clicked. Do not allow the number to go below zero.

const incBtn = document.querySelector("#inc")
const decBtn = document.querySelector("#dec")
const textHed = document.querySelector("h4")
let count = 0;
incBtn.addEventListener('click',function(){
    if(count => 0){
        count++;
        textHed.innerText = count;
    }
})

decBtn.addEventListener('click',function(){
    if(count > 0){
        count--;
        textHed.innerText = count;
    }
    else{
        count = 0
        textHed.textContent = count
    }
})
 

