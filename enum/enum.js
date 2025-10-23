"use strict";
// 🧠 What is an Enum?
Object.defineProperty(exports, "__esModule", { value: true });
// An enum (short for enumeration) in TypeScript is a way to define a set of named constants — making your code more readable and less error-prone.
// 💻 Example: UserRole Enum
// Let’s define roles for users in a login system:
// Define an Enum for user roles
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["USER"] = "user";
})(UserRole || (UserRole = {}));
// Example users
const adminUser = {
    username: "RiyaAdmin",
    email: "riya@website.com",
    role: UserRole.ADMIN,
};
const normalUser = {
    username: "RajUser",
    email: "raj@website.com",
    role: UserRole.USER,
};
// Function to check access
function checkAccess(user) {
    if (user.role === UserRole.ADMIN) {
        console.log(`Welcome ${user.username}, you have full access.`);
    }
    else if (user.role === UserRole.USER) {
        console.log(`Welcome ${user.username}, you have limited access.`);
    }
}
// Testing the function
checkAccess(adminUser);
checkAccess(normalUser);
//# sourceMappingURL=enum.js.map