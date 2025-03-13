// const OlaUser = new object() --- singelton
// .assign({},) to add two or more object
// or simple use const obj3 = {...obj1,...obj2} to add 
const TinderUser = {
    name:"mobi",
    age:20,
    isLoggedin : "true"
}
// this is important
console.log(Object.keys(TinderUser)); // to make array of key
console.log(Object.values(TinderUser));// to make array of value
