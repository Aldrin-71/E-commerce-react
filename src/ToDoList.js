import React, { useState } from "react";
import "./ToDoList.css";

function ToDoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  const addTask = () => {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };


  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  };


  const handleDragOver = (e) => {
    e.preventDefault();
  };


  const handleDrop = (index) => {
    const updatedTasks = [...tasks];
    const draggedItem = updatedTasks[draggedItemIndex];

    
    updatedTasks.splice(draggedItemIndex, 1);

    
    updatedTasks.splice(index, 0, draggedItem);

    setTasks(updatedTasks);
    setDraggedItemIndex(null);
  };

  return (
    <div className="container">
      <h1>To Do List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((t, index) => (
          <li
            key={t.id}
            className={t.completed ? "completed" : ""}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
          >
            <span onClick={() => toggleTask(t.id)}>
              {t.text}
            </span>
            <button onClick={() => deleteTask(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
