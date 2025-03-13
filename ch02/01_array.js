const myArr = [1,2,3,5,6,7,8,9,0]; // this is how arr is declared

//array method

myArr.push(68) // add 68 to the array in last
myArr.pop() // delete last value of the array
myArr.unshift(9) // add 9 in starting of the array
myArr.shift() // delete starting value of array
myArr.includes(7) // gives answer in True or false
myArr.indexOf(8)  // gives the index of the element
const newArr = myArr.join() // convert arr to string
myArr.slice(1,4) // gives the copy of the section of array & 4 position is not included and no change in main array

myArr.splice(1,4) // cut the give the section of the array & include 4 position and main array is manipulated