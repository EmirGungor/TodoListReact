/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../App.css";

const TodoCreate = ({ onCreateTodo }) => {
  const [newTodo, setNewTodo] = useState("");


  const clearInput = () => {  //ekledikten sonra inputu temizler
    setNewTodo('');
  }

  const createTodo = () => {
    if (!newTodo) return;
    const request = {
      id: Math.floor(Math.random() * 9999),
      content: newTodo,
    };

    onCreateTodo(request);
    clearInput();
  };

  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo-input"
        type="text"
        placeholder="Enter Todo"
      />
      <button onClick={createTodo} className="todo-create-button">
        Create Todo 
      </button>
    </div>
  );
};

export default TodoCreate;
