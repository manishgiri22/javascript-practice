var myH = document.getElementById('hw')
console.log('myH')
myH.innerText = "changed h1 tag"

var myDiv = document.getElementById('bulb')
// myDiv.innerText = "changed text"
myDiv.innerhtml = "<button> adding inner html</button>"

// by class name  return in array
const mybox = document.getElementsByClassName('box')
mybox[0].innerText = 'box2 haina'
// mybox.style.backgroundColor = "aqua"; *mistake
for(let i=0; i<mybox.length; i++){
    mybox[i].style.backgroundColor = 'aqua';
    mybox[i].style.color = 'black';
}

//tag name
const btn = document.getElementsByTagName("button")
console.log(btn)
for(let i=0; i<=btn.length; i++){
    btn[i].style.backgroundColor = 'red'
}

// by queryselector
const hh = document.querySelector('h1')
hh.style.color = 'yellow'

//array return
const boxes = document.querySelectorAll('.box')
for(let i=0; i<=boxes.length; i++){
    boxes[i].style.backgroundColor = 'red'
}

// practice

const new = document.querySelectorAll('.box')
for(let i=0; i<=new.length; i++){
    new[i].style.backgroundColor = 'black'
   
}

const new1 = document.getElementById('#h1')
new1.innerText = "this is changed"

const newp = document.getElementsByTagName('p')
for(let i=0; i<=newp.length; i++){
    new[i].style.Color = 'black'
   
}

const myBox = document.querySelectorAll('.box')
myBox.forEach(function(nl){   //nodelist
    nl.style.color = "pink"
})




