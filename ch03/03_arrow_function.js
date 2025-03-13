const user = {
    username : "mobi",
    price : 6969,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website`)
    }// this. ia used to acces current context values like usrname
}

console.log(this); // this is empty
// in browser global object is window
function UFC() {
    console.log(this);
    
}

// arrow function syntax

() => {} //function is replaced by =>
const MMA = () => {
   console.log("UFC is best MMA company");
   
}
// one way 
const addTwo = (num1,num2) => {
   return num1 + num2;
}
// another way, will use in react
const AddTwo = (num1,num2) => (num1 + num2) // when function is explicit
// use of () can be also ignore and when {} is remove dont write return
