// file ini digunakan untuk meengurus business logic
// file ini digunakan untuk mengelola data seperti create, update, etc

class User {
  constructor() {
    this.users = this.getUsers() || [];
  }

  saveUser(userData) {
    const newUser = {
      id: Date.now(),
      ...userData,
    };

    // simpan data
    this.users.push(newUser);
    localStorage.setItem("users", JSON.stringify(this.users));

    return (window.location.href = "../signin.html");
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
}
