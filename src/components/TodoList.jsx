/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Todo from "./Todo";
import "../css/todolist.css";

// eslint-disable-next-line react/prop-types
const TodoList = ({ todos, onRemoveTodo, onUpdateTodo }) => {
  return (
    <div className="todo-list">
      {todos &&
        todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} onUpdateTodo={onUpdateTodo} />
        ))}
    </div>
  );
};

export default TodoList;
