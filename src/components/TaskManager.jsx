import { useState, useEffect } from "react";
import Button from "./Button";

function TaskManager() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Task Manager</h2>

      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="flex-grow px-2 py-1 border rounded focus:outline-none"
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="flex space-x-2 mb-4">
        <Button onClick={() => setFilter("all")} variant={filter === "all" ? "primary" : "secondary"}>All</Button>
        <Button onClick={() => setFilter("active")} variant={filter === "active" ? "primary" : "secondary"}>Active</Button>
        <Button onClick={() => setFilter("completed")} variant={filter === "completed" ? "primary" : "secondary"}>Completed</Button>
      </div>

      <ul>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-2 border-b ${
              task.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <span
              onClick={() => toggleComplete(task.id)}
              className="cursor-pointer"
            >
              {task.text}
            </span>
            <Button onClick={() => deleteTask(task.id)} variant="danger">
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
