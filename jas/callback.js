// call back function 

function sum(a,b){
    return a+b
}
console.log(sum(2,4))

function sub(a,b){
    return a-b
}

function mul(a,b){
    return a*b
}

function div(a,b){
    return a/b
}

function calculate(a,b,result){  
    return result(a,b)
}
console.log(calculate(2,3,sum))   // add will go the the calculate variable name as result
console.log(calculate(3,2,sub))
console.log(calculate(3,4,mul))
console.log(calculate(4,2,div))


// call back function use in odd even 
function checkOddEven(num){
    return num%2==0 ? "even":"odd"
}

function processNumber(a,fn){
    return fn(a)
}
console.log(processNumber(5,checkOddEven))


// anonymous function

 console.log(calculate(2,3, (a,b)=>a+b,"focus here"))


 // set timeout function in javascript  setTimeout(,1000)
 setTimeout( ()=> {
    console.log("hello after 3 second")
 },3000);

 // call back hell

 // for each call back function in array 

 const fruits = ['apple','bannana','coconut','dragon fruit']
//  for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i])
//  }

 fruits.forEach((item,index) => {   //it takes item and index always  // never return
    console.log(item)
})

const numbers = [1,2,3,4,5,6,7]
numbers.forEach((item,index)=>{
    console.log(item+index)
})


const students = [{name:'abc',age:20},{name:'bacd',age:30}]
students.forEach((item,index) =>{
    console.log(item.age)
    console.log(item.name)
})


// map use to return  values to create new array 
const ages = students.map((item,index)=>{
    return (item.age)
})
console.log(ages)   

const double = numbers.map((item,index)=>{
    return item*2
})
console.log(double)



