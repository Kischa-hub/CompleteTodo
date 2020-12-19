import React, { useState, useEffect } from "react";
import Form from "./form";
import TodoList from "./todoList";

function TodoMain(props) {
  //Hooks State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterdTodo, setFilterdTodo] = useState([]);

  // Hooks Effect
  useEffect(() => {
    filterdHandeler();
  }, [todos, status]);

  //Functions & Events
  const filterdHandeler = () => {
    switch (status) {
      case "completed":
        setFilterdTodo(todos.filter((todo) => todo.completed === true));
        break;

      case "uncompleted":
        setFilterdTodo(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilterdTodo(todos);
        break;
    }
  };

  return (
    <div>
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
        setStatus={setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos} filterdTodo={filterdTodo} />
    </div>
  );
}

export default TodoMain;
