const fruits = new Map()
fruits.set('mango',200) // declare the values in the map
fruits.set('mango',400) // to change the values of the existing items in the map
console.log(fruits.get('mango'))
console.log(fruits)

const cars = new Map([
    ['something','item2','item3'],
    ['something2','item4','item5'],
    ['something3','item6','item7']
])