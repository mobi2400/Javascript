//singelton 
// object literals
//Object.create
const mysym = Symbol("key1")
const JUsers = {
    name : "Mobasshir",
    age : 20,
    [mysym] : "mykey1", //syntax to deeclare symbol remember
    location : "bhopal",
    email : "mobi2400@gmail.com"
}
console.log(JUsers["name"]) // best way to access
Object.freeze(JUsers) //so that no one can change the value