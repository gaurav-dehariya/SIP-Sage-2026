function greet() {
    console.log("Hello World");
}
greet();

function greet2(name) {
    return "Hello " + name;
}

function add(a, b) {
    return a + b;
}

function user(value) {
    console.log(value);
}

user(add(100, 200));      
user(greet2("Gaurav"));  


// lambda function
let greet3 = (name) => {
    return "kese ho jee  " + name;
}

console.log(greet3("Gauravvvvvvvv"));


const thriee = (a) => {
    return a * a * a;
}

console.log(thriee(5));