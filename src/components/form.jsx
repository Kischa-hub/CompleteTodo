import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";

function Form({ setInputText, setTodos, todos, inputText, setStatus }) {
  //Validation
  // var schema = Joi.object().keys({
  //   todotext: Joi.string().required(),
  // });

  // const {
  //   user: { todotext },
  //   errors,
  //   changeHandler,
  //   validateHandler,
  // } = this.props;

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
    // console.log(e.target.value);
    setStatus(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          value={inputText}
          type="text"
          onChange={inputTextHandler}
          placeholder="Add Todo ..."
          name="todotext"
          required=""
        />

        <button type="submit" className="addBtn" onClick={submitTodoHandler}>
          <FontAwesomeIcon icon={faCalendarPlus} />
        </button>
        <div className="select">
          <select
            name="todos"
            onChange={statusHandler}
            className="custom-select"
          >
            <option value="all">All</option>
            <option value="complet">complet</option>
            <option value="uncomplet">Uncomplet</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
