import React, { useState, useEffect } from "react";
import Form from "./form";
import TodoList from "./todoList";

function TodoMain(props) {
  //Hooks State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterdTodo, setFilterdTodo] = useState([]);

  //only run Ones
  useEffect(() => {
    getLocalTodo();
  }, []);

  // Hooks Effect
  useEffect(() => {
    filterdHandeler();
    saveLocalTodos();
  }, [todos, status]);

  //Functions & Events
  const filterdHandeler = () => {
    switch (status) {
      case "complet":
        setFilterdTodo(todos.filter((todo) => todo.completed === true));
        break;

      case "uncomplet":
        setFilterdTodo(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilterdTodo(todos);
        break;
    }
  };

  // Save local Todo
  const saveLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const getLocalTodo = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
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
