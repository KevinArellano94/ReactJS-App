import React, { Component } from "react";
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
//const netlifyIdentity = require("netlify-identity-widget");

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

      <searchIcon toggleSearch={"toggleSearch"} />
      <ul className="nav navbar-nav">
        <li>
          <div data-netlify-identity-menu />
        </li>
      </ul>
    </BrowserRouter>
  );
}

class SlackMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, text: null, error: null, success: false };
  }
  handleText = e => {
    this.setState({ text: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    fetch("/.netlify/functions/slack", {
      method: "POST",
      body: JSON.stringify({
        text: this.state.text
      })
    })
      .then(response => {
        if (!response.ok) {
          return response.text().then(err => {
            throw err;
          });
        }
      })
      .then(() =>
        this.setState({
          loading: false,
          text: null,
          success: true,
          error: null
        })
      )
      .catch(err =>
        this.setState({ loading: false, success: false, error: err.toString() })
      );
  };
  render() {
    const { loading, text, error, success } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        {error && (
          <p>
            <strong>Error sending message: {error}</strong>
          </p>
        )}
        {success && (
          <p>
            <strong>Done! Message sent to Slack</strong>
          </p>
        )}
        <p>
          <label>
            Your Message: <br />
            <textarea onChange={this.handleText} value={text} />
          </label>
        </p>
        <p>
          <button type="submit" disabled={loading}>
            {loading ? "Sending Slack Message..." : "Send a Slack Message"}
          </button>
        </p>
      </form>
    );
  }
}

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <SlackMessage />
      <Footer />
    </div>
  );
}

export default App;
