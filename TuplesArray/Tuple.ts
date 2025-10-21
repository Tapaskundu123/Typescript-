// 🎯 What is a Tuple?

// A tuple in TypeScript is a fixed-length array where each element has a specific type and position.
// Unlike normal arrays, tuples know exactly how many elements they have and what type each position holds.

// 🧠 Basic Example
let user: [string, number] = ["Riya", 20];


// ✅ Explanation:

// The tuple has 2 elements.

// First element → must be a string.

// Second element → must be a number.

// If you try to change the order:

// user = [20, "Riya"]; // ❌ Error: Type 'number' is not assignable to type 'string'

// 🧩 Accessing Tuple Elements
// console.log(user[0]); // "Riya"
// console.log(user[1]); // 20


// You can use array methods too:

// user.push(25); // ✅ Allowed, but not recommended (tuple becomes longer)
// console.log(user); // ["Riya", 20, 25]

// 💼 Example in a Real Use Case

// You can use tuples when you need a fixed set of different data types, like:

type UserData = [string, string, number, boolean];

const user1: UserData = ["Akshit", "akshit@gmail.com", 22, true];

// ⚙️ Optional Elements

// You can make some tuple elements optional:

let person: [string, number?];
person = ["Riya"];
person = ["Riya", 21];

// 🔁 Tuple with Rest Elements

// You can combine tuples with rest (...) for flexible patterns:

let scores: [string, ...number[]];

scores = ["Riya", 90, 85, 88];


// Here:

// The first value must be a string (e.g., name).

// The rest can be any number of numeric values.

// 🧮 Example: Returning Multiple Values

// Tuples are great for returning multiple results from a function:

function getUser(): [string, number] {
  return ["Riya", 21];
}

const [name, age] = getUser();
console.log(name); // "Riya"
console.log(age);  // 21

