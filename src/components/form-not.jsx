import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";

function Form({ setInputText, setTodos, todos, inputText, setStatus }) {
  //react-hook-form
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log("kareem", data);
  };
  console.log(errors);

  //event Handlers
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e, data) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
    console.log("kareem", data);
  };

  const statusHandler = (e) => {
    // console.log(e.target.value);
    setStatus(e.target.value);
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit(submitTodoHandler)}>
        <input
          type="text"
          onChange={inputTextHandler}
          placeholder="Add Todo"
          name="todoText"
          ref={register({ required: true })}
          autoFocus
        />
        {errors.todoText && <span>This field is required</span>}

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
            <option value="complet">completed</option>
            <option value="uncomplet">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Form;
