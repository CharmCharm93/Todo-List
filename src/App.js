import React, { useState } from "react";
import "./App.css";
import AddItems from "./components/AddItems";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn React Fundamental", status: false },
    { id: "task_2", title: "Code todo list", status: false },
  ]);
  const [showIncompletedTasks, setShowIncompletedTasks] = useState(false);
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: false,
      };

      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleInputNewTask = (e) => {
    setNewTask(e.target.value);
  };

  const setTaskStatus = (taskId, statusChange) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: statusChange };
        }
        return task;
      })
    );
  };

  return (
    <div className="container">
      <Header />
      <TaskList
        tasks={tasks}
        showIncompletedTasks={showIncompletedTasks}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
        setShowIncompletedTasks={setShowIncompletedTasks}
      />
      <AddItems
        handleSubmit={handleSubmit}
        newTask={newTask}
        handleInputNewTask={handleInputNewTask}
      />
    </div>
  );
}

export default App;
