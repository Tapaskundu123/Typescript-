var user = {
    username: "Akshit Saxena",
    email: "akshit.saxena@geeksforgeeks.com",
    age: 24,
};
function greetUser(profile) {
    return "Hello, ".concat(profile.username, "! \n    You are ").concat(profile.age, " years old. \n    Your email is ").concat(profile.email, ".");
}
console.log(greetUser(user));
var product1 = {
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
