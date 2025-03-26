const promisesOne = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        console.log("async function is completed");
        resolve();
        
    },1000)
})
promisesOne.then(()=>{
    console.log("promises consumed");
    
})
// short code
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("async task 2");
        resolve();
    },1000)
}).then(()=>{
    console.log("Aync 2 is resolved");   
})