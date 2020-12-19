import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTasks } from "@fortawesome/free-solid-svg-icons";

function Form({ setInputText, setTodos, todos, inputText, setStatus }) {
  //event Handlers
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  };

  return (
    <div>
      <form>
        <input value={inputText} type="text" onChange={inputTextHandler} />

        <button type="submit" onClick={submitTodoHandler}>
          <FontAwesomeIcon icon={faTasks} />
        </button>
        <div>
          <select name="todos" onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
