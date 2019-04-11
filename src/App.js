import React from "react";
//import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Route,
  //Link,
  NavLink,
  Switch,
  Redirect
  //withRouter
} from "react-router-dom";

// src/pages/
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import NoMatchPage from "./pages/NoMatch";
import NetlifyAuth from "./components/NetlifyAuth.js";

// src/
import "./App.css";

// Global Variables
const netlifyIdentity = require("netlify-identity-widget");

function NavigationBar() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <ul className="navbar-nav">
            <NavLink to="/" className="normal" activeClassName="active" exact>
              <Header name="Home" className="nav-item active" />
            </NavLink>
            <NavLink
              to="/about"
              className="normal"
              activeClassName="active"
              exact
            >
              <Header name="About" className="nav-item active" />
            </NavLink>
          </ul>
        </nav>
      </div>

      <Switch>
        <Route exact path="/" render={props => <HomePage {...props} />} />
        <Route path="/about" render={props => <AboutPage {...props} />} />
        <Route render={NoMatchPage} />
      </Switch>
    </BrowserRouter>
  );
}

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <ul className="nav navbar-nav">
        <li>
          <NetlifyAuth />
        </li>
      </ul>
      <Footer />
    </div>
  );
}

export default App;
