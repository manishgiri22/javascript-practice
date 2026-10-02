const numbers = [1,2,3,4,5,6,7]
numbers.forEach((item,index)=>{
    console.log(item+index)
})

const double = numbers.map((item,index)=>{   // it will return all the item in double
    return item*2
})
console.log(double)

// filter 2,4    just like a if else in return 
const doubled = numbers.filter((item,index)=>{      // it will return if the return condition is true
    return item%2===0
})
console.log(doubled)


// only give the age above 25

const students = [{name:'abc',age:20},{name:'bacd',age:30}]

const above = students.filter((item,index)=>{      // it will return if the return condition is true
    return item.age >= 25
})
console.log(above)