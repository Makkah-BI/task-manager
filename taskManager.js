function createTaskManager() {
  let tasks = [];

  return {
    addTask(task, priority = "normal") {
      tasks.push({ task, priority });
      console.log(`Added task: "${task}" with priority "${priority}"`);
    },
    addTasks(...items) {
      items.forEach((task) => {
        this.addTask(task);
      });
      console.log(`Added ${items.length} tasks in bulk.`);
    },
    listTasks() {
      return tasks.slice();
    },
    removeTask(index) {
      if (index >= 0 && index < tasks.length) {
        const removed = tasks.splice(index, 1)[0];
        console.log(`Removed task: "${removed.task}"`);
        return true;
      } else {
        console.log("Invalid index, no task removed.");
        return false;
      }
    },
    saveTasks(callback) {
      setTimeout(() => {
        callback(tasks.slice());
        console.log("Save completed.");
      }, 1000);
    },
  };
}
const manager = createTaskManager();
manager.addTask("Learn JavaScript");
manager.addTask("Mastering JavaScript", "Hard");
manager.addTasks("Watch Tutorials", "Understand Nothing", "Repeat it again");

console.log(manager.listTasks());

manager.removeTask(1);

manager.saveTasks(function (savedTasks) {
  console.log("Saved tasks:", savedTasks);
});
console.log("Saving happens after 1 second.");
