class Task {
  constructor() {
    this.tasks = this.getTask();
  }

  getTask() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }

  saveTask(taskData) {
    const newTaskdata = {
      id: Date.now(),
      isCompleted: false,
      ...taskData,
    };

    this.tasks.push(newTaskdata);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));

    return {
      success: true,
    };
  }

  completeTask(taskId) {
    console.log(taskId);
    const index = this.tasks.findIndex((task) => task.id === taskId);

    if (index !== -1) {
      this.tasks[index].isCompleted = true;
      this.updateLocalStorage();
    }
  }

  deleteTask(taskId) {
    console.log(taskId);
    const index = this.tasks.findIndex((task) => task.id === taskId);

    if (index !== -1) {
    //   this.tasks[index].isCompleted = true;
      this.tasks.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  updateLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
}
