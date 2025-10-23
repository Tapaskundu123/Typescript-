// ⚙️ What is Function Overloading in TypeScript?

// Function overloading means you can define multiple function signatures
// for the same function name, depending on the types or number of parameters.

// So, one function can behave differently based on input type


function add(a: number, b: number): number;       // overload 1
function add(a: string, b: string): string;       // overload 2

function add(a: any, b: any): any {               // implementation
  return a + b;
}

console.log(add(5, 3));          // 8   → number
console.log(add("Hello ", "TS")); // "Hello TS" → string

