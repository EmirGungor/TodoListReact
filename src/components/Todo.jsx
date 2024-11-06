/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import "../css/todo.css";

const Todo = ({ todo, onRemoveTodo, onUpdateTodo }) => {
  const { id, content } = todo; //destructing ile kolayca atadık böylece . ile belirtmek zorunda kalmıyoruz

  const [editable, setEditable] = useState(false);

  const [updatedTodo, setUpdatedTodo] = useState(content);

  const removeTodo = () => {
    onRemoveTodo(id);
  };

  const updateTodo = () => {
    const request = {
      id: id,
      content: updatedTodo,
    };
    onUpdateTodo(request);
    setEditable(false);
  };

  return (
    <div className="todos">
      <div>
        {editable ? (
          <input
            className="todo-input"
            value={updatedTodo}
            onChange={(e) => setUpdatedTodo(e.target.value)}
            type="text"
          />
        ) : (
          content
        )}
      </div>
      <div>
        <IoIosRemoveCircle className="todo-icons" onClick={removeTodo} />
        {editable ? (
          <FaCheck className="todo-icons" onClick={updateTodo} />
        ) : (
          <FaEdit className="todo-icons" onClick={() => setEditable(true)} />
        )}
      </div>
    </div>
  );
};

export default Todo;
