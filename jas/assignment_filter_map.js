//syntax for the call back function 
/*
array.map((item,index)=>{
    return condition,CSSLayerStatementRule;  // it need to pass or return all of the array list 
})
array.filter((item,index)=>{  
    return condition ;  // it will only return the value which is true in the given condition 
})

array.filter((item,index)=>{return pass}).map((item,index)=>{return pass})   //<-- single line call back using both filter and then after thee map condition 

*/



// // Given the array numbers = [2, 4, 6, 8, 10], use map() to create a new array containing the square of every number.
numbers = [2, 4, 6, 8, 10]
const r1= numbers.map((item,index)=>{
    return item*item
})
console.log(r1)


// // Given the array students = [{ name: "Ram", marks: 75 }, { name: "Sita", marks: 35 }, { name: "Hari", marks: 60 }],
// //  use map() to create a new array containing only the students’ names.
students = [{ name: "Ram", marks: 75 }, { name: "Sita", marks: 35 }, { name: "Hari", marks: 60 }]
const r2 = students.map((item,index)=>{
    return item.name
})
console.log(r2)

// // Given the array products = [{ name: "Mouse", price: 800 }, { name: "Keyboard", price: 1500 }, { name: "Monitor", price: 18000 }],
// //  use map() to create a new array containing each product’s price after a 10% discount.

products = [{ name: "Mouse", price: 800 }, { name: "Keyboard", price: 1500 }, { name: "Monitor", price: 18000 }]
 const r3 = products.map((item,index)=>{
    item.price= item.price-item.price*0.1
    return item.price
})
console.log(r3)


// // Given the array numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use filter() to create a new array containing only the even numbers.
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const r4 = numbers.filter((item)=>{
    return item%2==0
})
console.log(r4)

// Given the array students = [{ name: "Ram", marks: 75 }, { name: "Sita", marks: 32 }, { name: "Hari", marks: 60 }, { name: "Gita", marks: 25 }], 
// use filter() to find all students who scored 40 or higher.
students = [{ name: "Ram", marks: 75 }, { name: "Sita", marks: 32 }, { name: "Hari", marks: 60 }, { name: "Gita", marks: 25 }]
const r5 = students.filter((item,index)=>item.marks>= 40).map((item,index)=>item)
console.log(r5)

 // Given the array products = [{ name: "Mouse", price: 800 }, { name: "Keyboard", price: 1500 }, { name: "Monitor", price: 18000 }, { name: "Laptop", price: 75000 }],
 //  use filter() to find products costing below Rs. 5,000, and then use map() to create an array containing only their names.

products = [{ name: "Mouse", price: 800 }, { name: "Keyboard", price: 1500 }, { name: "Monitor", price: 18000 }, { name: "Laptop", price: 75000 }]
const r6 = products.filter((item,index)=>item.price<5000).map((item,index)=>item.name)
console.log(r6)

// Given the array numbers = [15, 60, 25, 80, 45, 90], use filter() to create a new array containing numbers greater than 50.
numbers = [15, 60, 25, 80, 45, 90]
console.log(numbers.filter((item)=>item>50))

// Given the array temperatures = [10, 20, 30, 40], use map() to convert each temperature from Celsius to Fahrenheit using the formula (Celsius × 9/5) + 32.
temperatures = [10, 20, 30, 40]
console.log(temperatures.map((item)=>item*1.8+32))

// Given the array employees = [{ name: "Ram", active: true }, { name: "Sita", active: false }, { name: "Hari", active: true }],
//  use filter() to select active employees and map() to create an array containing only their names.


employees = [{ name: "Ram", active: true }, { name: "Sita", active: false }, { name: "Hari", active: true }]
console.log(employees.filter((item)=>item.active==true).map((item)=>item.name))
