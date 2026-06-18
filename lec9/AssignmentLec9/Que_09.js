const transactions = [
  { type: "credit", amount: 1000 },
  { type: "debit", amount: 300 },
  { type: "credit", amount: 500 }
];

const totalCredit = transactions
  .filter(transaction => transaction.type === "credit")
  .reduce((sum, transaction) => sum + transaction.amount, 0);

console.log("Total Credit:", totalCredit);