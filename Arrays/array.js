// let mixed: (string | number | boolean)[] = [ 42,"hello", true,23]
// console.log(mixed);
// arr.map(callbackFn)
// callbackFn parameters:
// ts
// Copy code
// (element, index, array) => newValue
var arr = [1, 2, 3, 4, 5];
var double = arr.map(function (n) { return n * 2; });
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
var numbers = [1, 2, 3, 4];
var string = numbers.map(function (val) { return val.toString(); });
console.log(string);
