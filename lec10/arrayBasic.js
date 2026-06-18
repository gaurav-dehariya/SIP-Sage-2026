// Using Array Literal
let fruit =["apple", "banana", "orange"];

// Using Array Constructor
let fruits = new Array("apple", "banana", "orange");
console.log(fruit);
console.log(fruits);

console.log(fruit.length); // 3


fruit.push("grape");
console.log(fruit); // ["apple", "banana", "orange", "grape"]

fruit.pop();
console.log(fruit); // ["apple", "banana", "orange"]

fruit.unshift("mango");
console.log(fruit); // ["mango", "apple", "banana", "orange"]

fruit.shift();
console.log(fruit); // ["apple", "banana", "orange"]

console.log(fruit.includes("banana")); // true. "includes" method checks if the specified element exists in the array and returns true or false accordingly.
console.log(fruit.includes("grape")); // false. 

console.log(fruit.indexOf("banana")); // 1. "indexOf" method returns the first index at which a given element can be found in the array, or -1 if it is not present.


console.log(fruit.join(", ")); // "apple, banana, orange". "join" method creates and returns a new string by concatenating all of the elements in an array, separated by the specified separator string.


console.log(fruit.slice(1, 3)); // ["banana", "orange"]. "slice" method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

console.log(fruit.splice(1, 1)); // ["banana"]. "splice" method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. In this case, it removes 1 element at index 1 (which is "banana") and returns it as a new array. The original array will be modified to ["apple", "orange"].


fruit =["apple", "banana", "orange"];

for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}
console.log("----");
console.log("For...of loop:");
for(let f of fruit) {
    console.log(f);
}

console.log("----");
console.log("forEach method:");
fruit.forEach(function(f) {
    console.log(f);
});


// Advanced Array Methods

// map method : Sare elements me conndition appy karta hai aur new array return karta hai
 numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 const doubled = numbers.map(function(num) {
     return num * 2;
 });
 console.log(doubled); // [2, 4, 6, 8, 10]

 const doubledArrow = numbers.map(num => num * 2);
 console.log(doubledArrow); // [2, 4, 6, 8, 10]


// filter method : Sare elements me condition apply karta hai aur new array return karta hai jisme sirf wo elements hote hai jo condition ko satisfy karte hai
 const evenNumbers = numbers.filter(function(num) {
     return num % 2 === 0;
 });
 console.log(evenNumbers);


 