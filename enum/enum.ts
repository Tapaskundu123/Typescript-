// 🧠 What is an Enum?

// An enum (short for enumeration) in TypeScript is a way to define a set of named constants — making your code more readable and less error-prone.

// 💻 Example: UserRole Enum

// Let’s define roles for users in a login system:

// Define an Enum for user roles
enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

// ⚙️ Use Case in Login System
type User = {
  username: string;
  email: string;
  role: UserRole;  // role must be one of the enum values
};

// Example users
const adminUser: User = {
  username: "RiyaAdmin",
  email: "riya@website.com",
  role: UserRole.ADMIN,
};

const normalUser: User = {
  username: "RajUser",
  email: "raj@website.com",
  role: UserRole.USER,
};

// Function to check access
function checkAccess(user: User): void {
  if (user.role === UserRole.ADMIN) {
    console.log(`Welcome ${user.username}, you have full access.`);
  } else if (user.role === UserRole.USER) {
    console.log(`Welcome ${user.username}, you have limited access.`);
  }
}

// Testing the function
checkAccess(adminUser);
checkAccess(normalUser);
