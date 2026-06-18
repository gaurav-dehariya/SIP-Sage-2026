const students = [
  { name: "John", marks: [80, 90, 85] },
  { name: "Emma", marks: [95, 92, 98] }
];

const result = students.map(student => {
  const total = student.marks.reduce((sum, mark) => sum + mark, 0);
  const average = total / student.marks.length;

  return {
    name: student.name,
    average: average
  };
});

console.log(result);