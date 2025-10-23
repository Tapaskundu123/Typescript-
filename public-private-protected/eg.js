"use strict";
// 🧠 2️⃣ Example — All 3 Modifiers Together
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    name; // ✅ accessible everywhere
    email; // ⚠️ only inside this class(parent) + child
    password; // 🔒 only inside this class(parent)
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    displayUser() {
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }
    showPassword() {
        console.log(`Password: ${this.password}`);
    }
}
const user = new User("Riya", "riya@gmail.com", "12345");
console.log(user.name); // ✅ Works (public)
// console.log(user.email);  // ❌ Error (protected)
// console.log(user.password); // ❌ Error (private)
user.displayUser(); // ✅ Works
// user.showPassword();       // ❌ Error (private)
// 🧩 6️⃣ Shortcut Syntax (Optional Tip)
// You can declare and assign properties directly in the constructor:
class Student {
    name;
    rollNo;
    grade;
    constructor(name, rollNo, grade) {
        this.name = name;
        this.rollNo = rollNo;
        this.grade = grade;
    }
    info() {
        console.log(`Name: ${this.name}, Grade: ${this.grade}`);
    }
}
const s = new Student("Riya", 23, "A");
console.log(s.name); // ✅ public
// console.log(s.rollNo); // ❌ private
// console.log(s.grade);  // ❌ protected
console.log(s.info());
//# sourceMappingURL=eg.js.map