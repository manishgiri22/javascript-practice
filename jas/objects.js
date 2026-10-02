let mySym = Symbol("key1")

// const user = {
//     name: "manish",
//     address: "arjundhara",
//     isLoggedIn: true,
//     [Symbol]: "key1",

//     showName: function(){
//         console.log("this is the function inside the object")
//     },
// }

// // change the items in the objects
// user.address = "bhadrapur"
// console.log(user.address) 

// // to freeze the object make it constant

// Object.freeze(user)

// // console.log(user)
// // console.log(user.address)
// // console.log(user["name"])  // objectname["key"]
// // console.log(user.address)  // dot notation
// // console.log(user[Symbol])  // to print the symbol 

// // add properties in object

// user.phnNmr = 9817956511
// // console.log(user)
// user.showName()

// user.greetings = function(){
//     console.log('hello js learner, ${this.name} you re inside the object function')
// }

// console.log(user.greetings())


// singleton object
const tinderusre = new Object()
console.log(tinderusre)

const tinderUser = {
    name: "manish",
    address: "btm",
    email: "manih123@gmail.com",
    code: 2345
}
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(Object.assign(tinderUser))

console.log(tinderUser[1].name)



  



