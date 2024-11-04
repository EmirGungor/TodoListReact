/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import "../css/todo.css";

const Todo = ({ todo, onRemoveTodo }) => {

  const {id,content} = todo; //destructing ile kolayca atadık böylece . ile belirtmek zorunda kalmıyoruz

  const removeTodo = () => {
    onRemoveTodo(id);
  }

  return (
    <div className="todos">
      <div>{content}</div>
      <div>
        <IoIosRemoveCircle className="todo-icons" onClick={removeTodo} />
        <FaEdit className="todo-icons" />
      </div>
    </div>
  );
};

export default Todo;
