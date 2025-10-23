// 🧠 2️⃣ Example — All 3 Modifiers Together

class User {
  public name: string;        // ✅ accessible everywhere
  protected email: string;    // ⚠️ only inside this class(parent) + child
  private password: string;   // 🔒 only inside this class(parent)

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  public displayUser() {
    console.log(`Name: ${this.name}, Email: ${this.email}`);
  }

  private showPassword() {
    console.log(`Password: ${this.password}`);
  }
}

const user = new User("Riya", "riya@gmail.com", "12345");

console.log(user.name);     // ✅ Works (public)
// console.log(user.email);  // ❌ Error (protected)
// console.log(user.password); // ❌ Error (private)
user.displayUser();          // ✅ Works
// user.showPassword();       // ❌ Error (private)



// 🧩 6️⃣ Shortcut Syntax (Optional Tip)

// You can declare and assign properties directly in the constructor:

class Student {
  constructor(
    public name: string,
    private rollNo: number,
    protected grade: string
  ) {}

  info() {
    console.log(`Name: ${this.name}, Grade: ${this.grade}`);
  }
}

const s = new Student("Riya", 23, "A");
console.log(s.name); // ✅ public
// console.log(s.rollNo); // ❌ private
// console.log(s.grade);  // ❌ protected

s.info();// this can be access grade bcz we function call and used it inside the class but not outside the class like s.grade->error