const { log } = require("console");

function MobiAsyncFunc(){
    let p = new Promise(
        (resolve) =>{
            setTimeout(()=>{
                resolve("hi mobi")
            },1000)

        }
    )
    return p;
}
async function main(){
    // await is only operates in async function
    // no callBack and no .then syntax
    let value = await MobiAsyncFunc()
    // system will wait value will run fast
    // work as sync but in a function only
    console.log(value);
    
}
main();