const marvel_heros = ["BlackPanther","captainAmerica","ironman","thor"];

const dc_heros = ["superMan","BlackAdam","WonderWomen","Flash"];

marvel_heros.push(dc_heros) // problem! take dc array as an object
const all_heros = marvel_heros.concat(dc_heros) // return new array by merging both array without changing the old array
 // instead of concat we can use

 const all_heros2 = [...marvel_heros,...dc_heros] // mostly used and easy and gives u the freedom to add as many arrays u want

//Array.from("mobasshir") convert this string to an array
// Array.of(s1,s2,s3) convert these var data into an array
