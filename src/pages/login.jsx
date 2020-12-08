import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import Joi from "joi-browser";

function login(props) {
  //Hook
  /*const [input, setInput] = useState({data:{username:"",password:""},errors:{}});

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };*/

  return (
    <div>
      <h1>Login</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="text" className="form-control" />
        </div>
      </form>
    </div>
  );
}

export default login;
