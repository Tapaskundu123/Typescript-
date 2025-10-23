
// 1️⃣ What is a Class?

// A class is a blueprint (template) for creating objects.
// It defines what properties (data) and methods (functions) an object will have.

// Think of a class like a “design plan” —
// for example, a Car class defines what every car should have (brand, color, speed) and what it can do (drive, stop).


// 🧠 2️⃣ What is a Constructor?
// A constructor is a special function inside a class that runs automatically whenever a new object is created using that class.

// It is used to initialize (set) the values of properties when the object is created


class User {
  name: string;
  password: string;
  role: string;

  constructor(names: string, passwords: string, roles: string) {
    this.name = names;
    this.password = passwords;
    this.role = roles;
  }

  greet(): void {
    console.log(`Hello ${this.name}! You are logged in as ${this.role}.`);
  }
}

const user = new User("Riya", "12345", "Admin");
user.greet();

// 👉 Let’s break it:

// new User(...) → creates a new object of the class User.

// "Riya", "12345", "Admin" → are the arguments passed to the class constructor.

// const user = ... → stores that object inside a variable named user.

// So when you call this line, internally TypeScript does this:

// Calls the class User.

// Runs the constructor function with the provided arguments.

// Creates a new object that contains all properties and methods of the class.


// 🧾 What happens step by step:

// 1️⃣ new User("Riya", "12345", "Admin")

// Creates a new object of the User class.

// Constructor runs and assigns:

// this.name = "Riya"

// this.password = "12345"

// this.role = "Admin"


// 2️⃣ Now, user becomes:

// {
//   name: "Riya",
//   password: "12345",
//   role: "Admin"
// }


// 3️⃣ When you call:

// user.greet();


// → Output:

// Hello Riya! You are logged in as Admin.



// 🪄 5️⃣ What is greet() function?

// It’s just a method (a function inside a class) that performs some action.

// greet() here displays a message using the object’s properties.

// Inside it, this.name and this.role refer to the current object’s values.



// ⚙️ Summary
// Concept                	Description	                                                          Example
// Class	            Blueprint for creating objects	                                        class User { }
// Constructor	       Special method that runs automatically when an object is created   constructor(name:string){this.name=name}
// Object	           An actual instance created from the class 	                        const user = new User("Riya")
// Method (like greet)	Function inside a class	greet() { ... }
// this	               Refers to the current object          	                              this.name