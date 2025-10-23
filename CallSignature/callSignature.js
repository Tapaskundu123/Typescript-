"use strict";
// In TypeScript, a call signature (also called a function signature) describes the parameter types and return type of a function — essentially defining how a function can be called.
Object.defineProperty(exports, "__esModule", { value: true });
// Here:
// (name: string, age: number) → parameters
// => string → return type
// So any function matching this call signature is valid:
const greet = (name, age) => {
    return `Hello ${name}, you are ${age} years old.`;
};
console.log(greet("Tapas", 20));
//# sourceMappingURL=callSignature.js.map