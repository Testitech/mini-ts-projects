function generateReportCard(
  name: string,
  age: number,
  score: number,
  subjects: string[]
): string {
  const subjectLists = subjects.join(", ");
  return `The Result of ${name} has been released: 
  Name: ${name}, 
  Age: ${age}, 
  Score: ${score}, 
  Subjects: ${subjectLists}`;
}

// const randomScore = Math.ceil(Math.random() * 100) + 1;

console.log(
  generateReportCard("David", 19, Math.floor(Math.random() * 100), [
    "Mathematics",
    "Biology",
    "Physics",
    "Chemistry",
  ])
);
