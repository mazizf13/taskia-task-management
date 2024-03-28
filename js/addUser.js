// file ini untuk penghubung UI HTML dan model user

document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userManager = new User();

  userForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const userData = {
      username: document.getElementById("username").value,
    };

    userManager.saveUser(userData);
  });
});
