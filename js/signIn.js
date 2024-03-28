// file ini untuk penghubung UI HTML dan model user

document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userManager = new User();

  userForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const usernameByInput = document.getElementById("username").value;

    const result = userManager.signInUser(usernameByInput);

    if (result.success) {
      alert("succes loggedin");
      // return (window.location.href = "../signin.html");
    } else {
      console.log(result.message);
    }
  });
});
