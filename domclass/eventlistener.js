// event handlers

function makeAlert(){
    alert('You clicked the heading!')
}
function keypress(){
    alert('You pressed a key!')
}
// onkeydown = when a key is pressed down
// onkeyup = when a key is released
// onkeypress = when a key is pressed down and released

// event listening


const myhead =document.querySelector('#heading');
myhead.addEventListener('click', function(){
    myhead.textContent = 'You clicked the heading!';
    myhead.style.color = 'red'
});

const mybutton = document.querySelector('#btn');

mybutton.addEventListener('click', function(){
mybutton.textContent = 'You clicked the button!';
});

mybutton.addEventListener('mouseover', function(){
mybutton.style.color = 'blue';
});

// decrement
let count = 0
const countmsg = document.querySelector('#countmsg')
function decrement(){
    count--;
    countmsg.textContent = count;
}

const addcounter = document.querySelector('#addcounter');
addcounter.addEventListener('click', function(){
    count++;
    countmsg.textContent = count
});
 
const setcounter = document.querySelector('#setcounter')
setcounter.addEventListener('click',function(){
    count = 0
    countmsg.textContent=count
})