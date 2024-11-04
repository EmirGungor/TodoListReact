/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };


  //burada silerken idsi sildiğimize eşit değilse yani geri kalan todolarsa bunlarıa ayrı bi dizide tutacağız
  const removeTodo = (todoId) => {
   const extractedArray = todos.filter((todo) => todo.id !== todoId);
   setTodos([...todos.filter((todo) => todo.id !== todoId)])
  };

  return (
    <div className="App">
      <div className="main">
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} onRemoveTodo={removeTodo} />
      </div>
    </div>
  );
}

export default App;
