// let fruits = ['manish','aron','lemon','simon']
// console.log(fruits)
// console.log(fruits.length)
// console.log(fruits[5])
// console.log(fruits[fruits.length-1])

// console.log(fruits.indexOf('manish'))



// let cars = new Array ('bmw','mercedes','toyata')
// console.log(typeof cars)
// console.log(cars.includes('bmw'))

// cars.push("tata")   // push to the last of the array
// console.log(cars)

// cars.pop()   // automatically pop the items from the last of the array
// console.log(cars)

// cars.unshift("lamborgini")
// console.log(cars)

// cars.shift()
// console.log(cars)

// let numbers = [0,1,2,12,23,3,4,5,6]
// let sum = 0
// console.log(numbers[1])
// for(let i in numbers){
//     sum+=numbers[i]
//     // console.log(i)
// }
// console.log(sum)

// let names = ['manish','aron','lemon','simon']
// console.log(names)
// let newname = names.slice(0,3)
// console.log(newname)

// let namee = names.splice(1,4)
// console.log(namee)

// console.log(names.reverse())


// delete names[0]


let cars = ['suzuki','bmw','toyata','marcedese','tata','vans']
console.log(cars[0])
for(let items in cars){
    console.log(cars[items])
}
cars.push("byd")
console.log(cars)  // to add items in the last of the array we use .push method

cars.pop()  // it will automatically remove the list from the last of the array 
console.log(cars)


let newcars=cars.slice(1,3)
console.log(newcars)

let carrs = cars.splice(1,3)
console.log(carrs)

cars.unshift("lamborgini")  // add to the begining of the array by using unshift method 
console.log(cars)

cars.shift("lamborgine")  // shift method is use to remove the element from the first of the array 
console.log(cars)

console.log(typeof carrs)   
console.log(typeof cars)   
console.log(cars.includes("newcar"))
console.log(cars)


cars.reverse()
console.log(cars)

cars.sort()   // but only use for thee string in the javascript, not for the numbers 
console.log(cars)


