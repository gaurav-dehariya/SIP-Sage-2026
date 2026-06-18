const students = [
  {
    name: "Gaurav",
    marks: [80, 90, 85]
  },
  {
    name: "Diya",
    marks: [95, 92, 98]
  },
  {
    name: "Somya",
    marks: [60, 70, 65]
  }
];

const result = students
  .map(student => ({
    name: student.name,
    avg: student.marks.reduce((sum, mark) => sum + mark, 0) / student.marks.length
  }))
  .filter(student => student.avg >= 85)
  .sort((a, b) => b.avg - a.avg)
  .map(student => student.name);

console.log(result); // ["Diya"]



// Group Products By Category
const products = [
  { name: "Laptop", category: "Electronics" },
  { name: "Phone", category: "Electronics" },
  { name: "Shirt", category: "Clothing" }
];

const resultt = products.reduce(function (group, product) {
  if (!group[product.category]) {
    group[product.category] = [];
  }

  group[product.category].push(product.name);
  return group;
}, {});

console.log(resultt);