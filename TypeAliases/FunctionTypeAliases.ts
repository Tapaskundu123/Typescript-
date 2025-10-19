type UserProfile = {
    username: string;
    email: string;
    age: number;
};

const user: UserProfile = {
    username: "Akshit Saxena",
    email: "akshit.saxena@geeksforgeeks.com",
    age: 24,
};

function greetUser(profile: UserProfile): string {
    return `Hello, ${profile.username}! 
    You are ${profile.age} years old. 
    Your email is ${profile.email}.`;
}

console.log(greetUser(user));

// Here’s what’s happening:

// The function greetUser accepts one parameter named profile.

// The type of that parameter is UserProfile.

// That means: when you call greetUser(...), you must pass an object that fits the UserProfile structure.

// 👉 So profile acts as a placeholder variable that holds the object you pass when calling the function.


// type UserProfile = {...} ->	A custom data type (type alias) describing what properties an object must have

// profile: UserProfile	->  The function parameter must be an object that follows that type

//user: UserProfile -> The actual object created using that type

//profile inside function -> The variable that represents the passed object (user) within the function


type product= {
    name: string;
    price: number;
    quantity:number 
}

const product1:product= {
   name: "Laptop",
   price: 1000,
   quantity: 5
}

function productCart(productName: product):product{
   return productName;
}

console.log(productCart(product1));

// product1 object productName parameter me pass hoga -> product ke andar

function TotalPrice(priceFromProduct: product):number{


    return priceFromProduct.price * priceFromProduct.quantity
}

console.log(TotalPrice(product1));