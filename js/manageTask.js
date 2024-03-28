document.addEventListener("DOMContentLoaded", () => {
  // membuat instance dari objek task
  const myTasks = new Task();

  // membuat variable untuk mengambil seluruh tasks
  const exixstingTasks = myTasks.getTask();

  const taskWrapper = document.getElementById("taskWrapper");
  const taskWrapperEmpty = document.getElementById("taskWrapperEmpty");

  function displayAllTasks() {
    if (exixstingTasks.length === 0) {
      console.log("tidak ada task tersedia");
    } else {
      console.log("beberapa task tersedia dan siap ditampilkan");
    }
  }

  displayAllTasks();
});
