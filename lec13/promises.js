const promise = new Promise((res, rej)=>{
    let s=true;
    if(s){
        res("Fulfilled");
    }
    else{
        rej("Wrong Password");
    }
});
console.log(promise);

promise.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
})

.finally(()=>{
    console.log("Done!!!!!!");
})


