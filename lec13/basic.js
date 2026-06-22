function greet (name, callback){
    console.log(`Hello ${name}`);
    callback();
    
}

function goodbye(){
    console.log("Good Boy")
}

greet("Gaurav", goodbye);