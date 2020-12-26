import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/imgs/logo.svg";
// import { useTranslation } from "react-i18next";

function Navbar(props) {
  // const { t, i18n, ready } = useTranslation(null, { useSuspense: false });

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/home">
          <img
            src={logo}
            className="App-logo"
            width="50px"
            height="50px"
            alt="logo"
          />
          Todo List
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link active" to="/home">
              Home <span className="sr-only">(current)</span>
            </NavLink>
            <NavLink className="nav-link" to="/todo">
              Todo List
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
            {/* <button className="eng-trans" onClick={changeLanguage("en")}>
              En
            </button>
            <button className="du-trans" onClick={changeLanguage("de")}>
              De
            </button> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
