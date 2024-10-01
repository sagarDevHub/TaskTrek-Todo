import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import TaskForm from "./Components/TaskForm";
import TaskColumn from "./Components/TaskColumn";
import todoIcon from "./assets/direct-hit.png";
import doingIcon from "./assets/glowing-star.png";
import doneIcon from "./assets/check-mark-button.png";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newTask = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTask);
  };
  return (
    <div className="app">
      <>
        <TaskForm setTasks={setTasks} />
        <main className="app_main">
          <TaskColumn
            title="To Do"
            icon={todoIcon}
            tasks={tasks}
            status="todo"
            handleDelete={handleDelete}
          />
          <TaskColumn
            title="Doing"
            icon={doingIcon}
            tasks={tasks}
            status="doing"
            handleDelete={handleDelete}
          />
          <TaskColumn
            title="Done"
            icon={doneIcon}
            tasks={tasks}
            status="done"
            handleDelete={handleDelete}
          />
        </main>
      </>
    </div>
  );
};

export default App;
