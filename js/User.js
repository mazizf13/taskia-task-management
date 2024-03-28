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

    // sebaiknya tidak melemparkan user ke halaman signin melalui file model, kita harus menggunakan controller (addUser) dan di model ini hanya khusus untuk memeriksa data, menyimpan data, dan akan memberikan value yang bisa dikembalikan

    // return (window.location.href = "../signin.html");

    return {
      success: true,
    };
  }

  signInUser(usernameByInput) {
    // proses pemeriksaan data username pada localStorage
    const userExists = this.users.some(
      (user) => user.username.toLowerCase() === usernameByInput.toLowerCase()
    );

    if (userExists) {
      // proses pengembalian data ke signIn.js controller
      return {
        success: true,
        username,
      };
    } else {
      return {
        success: false,
        message: "Data tidak ditemukan",
      };
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
}
