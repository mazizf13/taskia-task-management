// file ini untuk penghubung UI HTML dan model user

document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    const taskManager = new Task();
  
    taskForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const taskData = {
        taskName: document.getElementById("taskName").value,
        taskPriority: document.getElementById("taskPriority").value,
      };
  
      const result = taskManager.saveTask(taskData);
  
      if (result.success) {
        //   return (window.location.href = "../signin.html");
        alert("berhasil tersimpan");
      } else {
        console.log("proses simpan data gagal");
      }
    });
  });
  