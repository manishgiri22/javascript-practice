// const user = {
//     username: "manish",
//     price: 999,
//     welcomeMessage: function(){
//         console.log('${this.username}, welcome to website')
//         console.log(this)
//     }
// }
// // this = current context

// function chai(){
//     console.log(this)
// }
// chai()   this lai object ko through batw matra use garnw sakinxw 


// const chai = () => {
//     let username  = "manish"
//     console.log(this)
// }
// chai()


// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(2,4))

// // implicit return
// const addThree = (n1,n2,n4) => {
//     return n1+n2+n4   // if curly barces use need to use return keyword
// }
// const addThree = (n1,n2,n3) => ( n1+n2+n3 )   // if paranthesis is their no need to use retrun
// console.log(addThree(1,2,3))

// const username = ()=>({username:"manishgiri"})  // object pass then need to use paranthesis
// console.log(username())


// const new = () => {
//     console.log("new line in javascript")
// }

const sum = (a,b) => {    
    return a + b
}
const sub = (a,b) => a-b   // return is only in curly braces 
const mul = (a,b) => a*b 
const div = (a,b) => a/b 
console.log(sum(3,2))
console.log(sub(3,2))
console.log(mul(3,2))
console.log(div(3,2))
