

// syntax -> arr.filter((element, index, array) => condition);

//Parameter	Description
// element	Current element being processed
// index	(optional) Index of the current element
// array	(optional) The original array
// Returns	A new array with elements that make the condition true


const numbers: number[] = [1, 2, 3, 4, 5, 6];

const evenNumbers: number[] = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4, 6]


type User = { name: string; active: boolean };

const users: User[] = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Carol", active: true }
];

const activeUsers = users.filter(u => u.active);
console.log(activeUsers);
// [{ name: "Alice", active: true }, { name: "Carol", active: true }]


const mixed: (string | number)[] = [1, "hello", 2, "world"];

const onlyNumbers = mixed.filter((item): item is number => typeof item === "number");

console.log(onlyNumbers); // [1, 2]


type Student = {
  name: string;
  marks: number;
};

const students: Student[] = [
  { name: "Riya", marks: 85 },
  { name: "Raj", marks: 45 },
  { name: "Neha", marks: 72 },
];

const passedStudents: Student[] = students.filter(student => student.marks >= 50);

console.log(passedStudents);
// [{ name: "Riya", marks: 85 }, { name: "Neha", marks: 72 }]
