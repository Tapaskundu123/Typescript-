"use strict";
// 🎯 What is a Tuple?
Object.defineProperty(exports, "__esModule", { value: true });
// A tuple in TypeScript is a fixed-length array where each element has a specific type and position.
// Unlike normal arrays, tuples know exactly how many elements they have and what type each position holds.
// 🧠 Basic Example
let user = ["Riya", 20];
const user1 = ["Akshit", "akshit@gmail.com", 22, true];
// ⚙️ Optional Elements
// You can make some tuple elements optional:
let person;
person = ["Riya"];
person = ["Riya", 21];
// 🔁 Tuple with Rest Elements
// You can combine tuples with rest (...) for flexible patterns:
let scores;
scores = ["Riya", 90, 85, 88];
// Here:
// The first value must be a string (e.g., name).
// The rest can be any number of numeric values.
// 🧮 Example: Returning Multiple Values
// Tuples are great for returning multiple results from a function:
function getUser() {
    return ["Riya", 21];
}
const [name, age] = getUser();
console.log(name); // "Riya"
console.log(age); // 21
// Destructuring Tuples
// You can break up the structure of a tuple using destructuring.
// Example
let empTuple = ["Rohit Sharma", 25, "JavaTpoint"]; // tuple declaration
// let [name, age] = empTuple;//destructuring name and age from the tuple
// console.log(name);
// console.log(age);
// Output
// Rohit Sharma
// 25
// ⚠️ Note:
// If you tried to destructure more elements than exist, e.g. let [a, b, c, d] = empTuple;, TypeScript would not throw an error, but the extra variable(s) (d in this case) would be undefined.
// Passing Tuples to Functions
// Tuples can be passed as parameters to functions.
// Example
let emp1Tuple = ["GeeksforGeeks", 101, "Abhishek"];
function display(tuple_values) {
    for (let i = 0; i < tuple_values.length; i++) {
        console.log(tuple_values[i]);
    }
}
display(emp1Tuple);
// example of a Tuple
let studentTuple = [1, 'Aman', 'CSE', 2, 'Ram', 'CSE'];
console.log(studentTuple);
// Output
// [1, 'Aman', 'CSE', 2, 'Ram', 'CSE']
let emp2Tuple = ["Rohit Sharma", 25, "JavaTpoint"];
console.log(emp2Tuple);
// Trying to change a value
// empTuple[1] = 26; // ❌ Error: Index signature in type 'readonly [string, number, string]' only permits reading
// Trying to push a new value
// empTuple.push("Developer"); // ❌ Error: Property 'push' does not exist on type 'readonly [string, number, string]'
//# sourceMappingURL=Tuple.js.map