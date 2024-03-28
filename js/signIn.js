// file ini untuk penghubung UI HTML dan model user

document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userManager = new User();

  userForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const usernameByInput = document.getElementById("username").value;

    const result = userManager.signInUser(usernameByInput);

    if (result.success) {
      localStorage.setItem("usernameLoggedIn", usernameByInput);
      return (window.location.href = "../tasks.html");
    } else {
      alert("Userename tidak ditemukan");
      console.log(result.message);
    }
  });
});
