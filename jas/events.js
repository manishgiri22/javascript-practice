// // inline event handling    <div onclick=console.log("inline")>
// // handling event in the line of the html code 

// // event handling in js 
// Node.event = () => {
//     // handle here
// }

// let btn1 =  document.querySelector("#btn1")
// // btn1.onclick = (evt) =>{
// //     console.log(evt)
// //     console.log(evt.type)
// //     console.log(evt.clientX,evt.clientY)
// //     let a = 25 
// //     a++
// //     console.log(a)
// // }
// let box = document.querySelector("div")
// box.onmousehover =() =>{
//     console.log("you're inside the box")
// }

// // event object = details about the event (properties and methods)
// node.event = (e) =>{
//     //handle here
// }

// // event listeners 
// // node.addEventListener(event,callback);  callback will be the fucnction as a arguments


// btn1.addEventListener("dblclick",(evt)=>{
//     console.log("btn1 was doubled clicked")
//     console.log(evt)
// })


// // remove event listner

// btn1.removeEventListner("click",()=>{
//     console.log("call back should be same as main function to remove")
// })


let currMode = "Light";

let toggle = document.querySelector("#toggle")
toggle.addEventListener("click",function(){
    console.log("you're trying to change mode")
    if(currMode==="Light"){
        currMode="dark"
        document.querySelector("body").style.backgroundColor = "black";    }
        else{
            document.querySelector("body").style.backgroundColor = "White";    
            currMode="Light"
    }
})


