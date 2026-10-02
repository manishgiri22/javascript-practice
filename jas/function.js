// function myName(){
//     console.log("m")
//     console.log("a")
//     console.log("n")
//     console.log("i")
// }
// myName()

// function addTwoNumbers(num1,num2){
//     return num1+num2
// }
// let res = addTwoNumbers(2,4)
// console.log(res)



// function loginUserMessgae(username){
//     if (username === undefined){
//         console.log("please enter a Username")
//         return
//     }
//     return ' ${username} just logged in '
// }
// console.log(loginUserMessgae("manish"))


// calculator app

// function calculator(a,b){

//     if (a+b){
//         return a+b
//     }
//     else if(a-b){
//         return a-b
//     }
//     else if(a*b){
//         return a*b
//     }
//     else if(a/b){
//         return a/b
//     }
//     else{

//     }

// }
// console.log(calculator(2,3))

// function add(){
//     let a,b
//     return a + b
// }
// console.log(add(2,3))


// function sayName(nam){
//     console.log('hello js user, ${nam} ')
// }
// sayName("ram")
// sayName("manish")

// function add(a,b){
//     console.log(a+b)
// }
// add(3,5)

// function sub(a,b){
//     console.log(a-b)
// }
// function mul(a,b){
// console.log(a*b)
// }
// function div(a,b){
// console.log(a/b)     
// }

// sub(4,3)
// mul(3,2)
// let resuslt = div(2,4)     // false because their is console we can't hold console on variable no return 


// const sum = function add(a,b){   // we can write as in the variable 
//     return (a+b)
// }
// sum(499,599)

// const result = sum(499,599)
// console.log(result)

// function isOddEven(num){
//     if(num%2==0){
//         return "even"
//     }
//     return "odd"
// }
// const res = isOddEven(5)
// console.log("res")


// function fullName(f,s){
//     return f + ' ' + s
// }
// const name = fullName("manish","giri")
// console.log(name)


// function check(num){
//     if(num==0){
//         return "zero"
//     }
//     else if(num>=0){
//         return "positive"
//     }
//     else {
//         return "negative"
//     }
// }
// const res = check(80)
// console.log("given number is " + res)

// function multiple(num){
//     for(let i=1; i<=10; i++){
//         let res = 5*i
//         console.log("5 *",+i + "=",+ res)
       
//     }
// }
// multiple(5)

// function natural(num){
//     if(num>=0){
//         function oddEven(num){
//             if(num%2==0){
//                 return "even"
//             }
//             else{
//                 return "odd"
//             }
//         }
//         return oddEven(num)
//     }
//     else{
//         console.log("enter positive number")
//     }
// }
// const re = natural(23)
// console.log(re)

function checkOddEven(num){
    return num%2==0 ? "even":"odd"
}
const res = checkOddEven(5)
console.log(res)