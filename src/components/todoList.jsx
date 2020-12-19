import React from "react";
// Import Components
import Todo from "./todo";

function TodoList({ todos, setTodos, filterdTodo }) {
  // function liItems() {
  //   const mapItems = todos.map((todo) => <Todo />);
  //   return mapItems;
  // }
  return (
    <div>
      <ul>
        {filterdTodo.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            text={todo.text}
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
