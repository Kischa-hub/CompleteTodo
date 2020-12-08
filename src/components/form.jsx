import React from "react";

function Form(props) {
  return (
    <div>
      <form>
        <input type="text" className="todo-input" />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completes">completes</option>
          <option value=""></option>
        </select>
      </div>
    </div>
  );
}

export default Form;
