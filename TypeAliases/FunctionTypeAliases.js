"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    username: "Akshit Saxena",
    email: "akshit.saxena@geeksforgeeks.com",
    age: 24,
};
function greetUser(profile) {
    return `Hello, ${profile.username}! 
    You are ${profile.age} years old. 
    Your email is ${profile.email}.`;
}
console.log(greetUser(user));
const product1 = {
    name: "Laptop",
    price: 1000,
    quantity: 5
};
function productCart(productName) {
    return productName;
}
console.log(productCart(product1));
// product1 object productName parameter me pass hoga -> product ke andar
function TotalPrice(priceFromProduct) {
    return priceFromProduct.price * priceFromProduct.quantity;
}
console.log(TotalPrice(product1));
//# sourceMappingURL=FunctionTypeAliases.js.map