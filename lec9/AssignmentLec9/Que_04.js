const employees = [
  { name: "A", salary: 50000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 60000 }
];

const salaries = employees.map(employee => employee.salary);

const totalSalary = salaries.reduce((sum, salary) => sum+ salary, 0);

console.log("Salaries:", salaries);
console.log("Total Salary:", totalSalary);
console.log("Done")