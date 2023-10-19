import React from "react";
import Form from "./components/Form"; 
import Task from "./Task"; 
import "./Column.css"; 

function Column({ status, tasks, addTask, editTask, deleteTask }) {
  return (
    <div className="kanban-column">
      <h2>{status}</h2>
      <Form addTask={(name) => addTask(name, status)} />
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            editTask={(name) => editTask(task.id, name, status)}
            deleteTask={() => deleteTask(task.id, status)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Column;
