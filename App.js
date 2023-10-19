import React, { useState } from "react";
import { nanoid } from "nanoid";
import Column from "./components/Column"; 
import "./App.css"; 

function App(props) {
  const initialTasks = {
    Todo: [],
    InProgress: [],
    Completed: [],
  };

  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (name, status) => {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks({
      ...tasks,
      [status]: [...tasks[status], newTask],
    });
  };

  const editTask = (id, name, status) => {
    const updatedTasks = tasks[status].map((task) =>
      task.id === id ? { ...task, name } : task
    );
    setTasks({
      ...tasks,
      [status]: updatedTasks,
    });
  };

  const deleteTask = (id, status) => {
    const updatedTasks = tasks[status].filter((task) => task.id !== id);
    setTasks({
      ...tasks,
      [status]: updatedTasks,
    });
  };

  return (
    <div className="kanban-board">
      {Object.keys(tasks).map((status) => (
        <Column
          key={status}
          status={status}
          tasks={tasks[status]}
          addTask={addTask}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default App;
