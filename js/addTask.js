// file ini untuk penghubung UI HTML dan model user

document.addEventListener("DOMContentLoaded", () => {
  // membuat tanggal yang diharapkan berformat "yyyy-mm-dd"
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const taskForm = document.getElementById("taskForm");
  const taskManager = new Task();

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskData = {
      taskName: document.getElementById("taskName").value,
      taskPriority: document.getElementById("taskPriority").value,
      createdAt: `${year}-${month}-${day}`,
    };

    const result = taskManager.saveTask(taskData);

    if (result.success) {
      return (window.location.href = "../tasks.html");
      //   alert("berhasil tersimpan");
    } else {
      console.log("proses simpan data gagal");
    }
  });
});
