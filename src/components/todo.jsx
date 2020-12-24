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
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={completeTodoHandler}>
        <FontAwesomeIcon className="fas fa-check" icon={faCheckCircle} />
      </button>
      <button className="trash-btn" onClick={deleteTodoHandler}>
        <FontAwesomeIcon className="fas fa-trash" icon={faTrash} />
      </button>
    </div>
  );
}

export default Todo;
