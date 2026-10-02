// var istatus = document.querySelector("h5")
// var btn = document.querySelector(".add")
// var check = 0
// // let removeFriend = document.querySelector("#remove")
// btn.addEventListener("click",function(){
//     if(check == 0){
//         istatus.innerHTML = "Friends"
//         istatus.style.color="green"
//         btn.innerHTML = "Remove Friend"
//         btn.style.backgroundColor = "red"
//         check = 1
//     }
//     else{
//         istatus.innerHTML = "Stranger"
//         istatus.style.color = "red"
//         btn.innerHTML = "Add Friend"
//         btn.style.backgroundColor = "green"
//         check = 0
//     }

// })
// // removeFriend.addEventListener("click",function(){
// //     istatus.innerHTML = "Stranger"
// //     istatus.style.color = "red"
// // })

/* practice code */
var istatus = document.querySelector("h5")
var btn = document.querySelector(".add")
check = 0
btn.addEventListener("click",function(){
    if(check == 0){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        btn.style.backgroundColor = "red"
        check = 1
    }
    else{
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        btn.style.backgroundColor = "green"
        check = 0
    }
})