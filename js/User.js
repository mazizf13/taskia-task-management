// file ini digunakan untuk meengurus business logic
// file ini digunakan untuk mengelola data seperti create, update, etc

class User {
  saveUser(userData) {
    const newUser = {
      id: Date.now(),
      ...userData,
    };
    console.log(userData);
  }
}
