const text = "The fox is quick. The fox is smart.";

const lowerText = text.toLowerCase();

const words = lowerText.split(/\W+/);

let count = 0;

for (let word of words) {
  if (word === "fox") {
    count++;
  }
}

console.log("Number of times 'fox' appears:", count);