// if
if (condition) {
    //code
}
// if condition is true then it will it run, condition can be of any form either variable or equation or even direct true or false
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
// nested 

const balance = 1000

if (balance > 500) console.log("test"), console.log("test2");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");

} else if (balance < 900) {
    console.log("less than 750");

} else {
    console.log("less than 1200");

}
//syntax
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}
for (const element of object) {
    //console.log("")
} 
const map = new Map();
map.set("IN","india")
// map are known for thier unique value