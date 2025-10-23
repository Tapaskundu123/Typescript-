"use strict";
// 🔹 What are Generics?
Object.defineProperty(exports, "__esModule", { value: true });
// Generics allow you to write reusable, type-safe functions, classes, and interfaces that can work with any data type — without losing type information.
// 👉 Think of it as a placeholder for a type — just like variables hold values, generics hold types.
// Basic syntax
// function identity<T>(value: T): T {
//   return value;
// }
// Explanation:
// <T> — generic type variable (can be anything, like a placeholder for a real type)
// value: T — input is of type T
// : T — output is also of the same type
// So, whatever you pass in, the function returns the same type.
// ✅ Example 1: Simple Generic Function
function identity(value) {
    return value;
}
console.log(identity("Hello")); // Hello  here <string> passes as a data type to 'T'
console.log(identity(42)); // 42
// 💡 TypeScript infers the type automatically, so you can also call:
// output
identity("Hello");
identity(42);
//Ex-2 : add two numbers
const add = (a, b) => {
    // we can't use here a:T, b:T bcz we use arithmetic operation on generics function where placeholder can behave any property like string or any which can make type safety error
    return a + b;
};
console.log(add(5, 3));
// ...existing code...
// Ex-2 : add two numbers using generics (type-safe)
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(5, 3)); // 8 (type inferred)
console.log(addNumbers(10, 20)); // 30 (explicit generic)
// ...existing code...
// 🔹 Example 3: Generic with Arrays
function getFirstElement(arr) {
    if (arr.length === 0) {
        throw new Error("Array is empty");
    }
    return arr;
}
console.log(getFirstElement([1, 2, 3])); // retrun same array
console.log(getFirstElement(["a", "b"])); //
// Here, the function works for both string[] and number[] — type-safe and reusable!
function printObject(obj) {
    console.log(obj);
}
printObject({ name: "Riya", age: 20 });
printObject({ title: "Engineer", salary: 50000 });
//# sourceMappingURL=Generics.js.map