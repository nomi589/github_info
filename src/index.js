import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Repos from "./components/Repos";
import User from "./components/User";

import "./index.css";

function NavLinks() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="navlink-active">
            User Info
          </NavLink>
        </li>
        <li>
          <NavLink to="/repos" activeClassName="navlink-active">
            Repos Info
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <h1 className="main-heading">Github Information</h1>
      <NavLinks />
      <Route path="/" exact component={User} />
      <Route path="/repos" component={Repos} />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
