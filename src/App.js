//lib
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

//components
import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import TodoMain from "./components/todoMain";
import NotFound from "./pages/notFound";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main role="main" className="container">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/home" component={Home} />
          <Route path="/todo" component={TodoMain} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
