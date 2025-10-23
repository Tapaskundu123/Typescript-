"use strict";
// 1️⃣ What is Inheritance?
Object.defineProperty(exports, "__esModule", { value: true });
// Inheritance is an OOP concept that allows a class (child/subclass) to reuse properties and methods from another class (parent/superclass).
// Parent class: has common properties and methods
// Child class: inherits from parent, can add new features or override existing ones
// Think of it like:
// A Car class has wheels and drive().
// A SportsCar class can inherit from Car but also has turboBoost().
//1st eg- here parent and child has its own property but after child access parents property using super(property)
class Parent1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Child1 extends Parent1 {
    grade; // new property of child added here 
    constructor(name, age, grade) {
        super(name, age); // ✅ parent initialization
        this.grade = grade; // ✅ child's own property
    }
    info() {
        console.log(`${this.name} is ${this.age} years old and in grade ${this.grade}.`);
    }
}
const student = new Child1("Riya", 21, "A");
student.info(); // calling  the function info() which is inside the child class
// 2nd examples- in this case child doesnt have any property all are accessed from its parent
class Parent {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Child extends Parent {
    constructor(name, age) {
        // ✅ You pass both arguments together
        super(name, age); // use super(property) when use constructor to use .this property after we have to first initialize that this data are coming from parent
    }
}
const child = new Child("Riya", 21);
console.log(child);
//
//# sourceMappingURL=inheritance.js.map