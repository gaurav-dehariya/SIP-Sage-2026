const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 }
];

const updatedPrices = products.map(
  product => product.price - product.price * 0.10
);

console.log(updatedPrices);