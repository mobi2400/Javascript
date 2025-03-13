// Immediately Invoked Function Expressions (IIFE)


(function UFC(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('mobi')

// iife -- function run immidietly after declaring and use to remove or control the global var pollution