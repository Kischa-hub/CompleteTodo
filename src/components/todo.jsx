import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function Todo({ text, todo, todos, setTodos }) {
  // Event Handler
  const deleteTodoHandler = () => {
    setTodos(todos.filter((elm) => elm.id !== todo.id));
  };

  const completeTodoHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) return { ...item, completed: !item.completed };
        return item;
      })
    );
  };

  return (
    <div>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeTodoHandler}>
        <FontAwesomeIcon icon={faCheckCircle} />
      </button>
      <button onClick={deleteTodoHandler}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}

export default Todo;
