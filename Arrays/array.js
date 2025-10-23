"use strict";
// let mixed: (string | number | boolean)[] = [ 42,"hello", true,23]
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(mixed);
// arr.map(callbackFn)
// callbackFn parameters:
// ts
// Copy code
// (element, index, array) => newValue
let arr = [1, 2, 3, 4, 5];
const double = arr.map(n => n * 2);
console.log(double);
// const arr: number[] = [1, 2, 3, 4];
// const result = arr.map((val) => val * 2);
// console.log(result);
// const numbers: number[] = [1, 2, 3, 4];
// // Create a new array using map
// const doubled = numbers.map(val => val * 2);
// console.log(doubled);  // [2, 4, 6, 8]
// console.log(numbers);  // [1, 2, 3, 4]  <-- original array is unchanged
// number to string 
let numbers = [1, 2, 3, 4];
let string = numbers.map((val) => val.toString());
console.log(string);
let avg = 0;
const sum = numbers.map((num) => avg = avg + num);
avg = avg / numbers.length;
console.log(avg);
//# sourceMappingURL=array.js.map