import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";

import Home from "./Components/Home";
import Login from "./Components/Login";
// import NotFound from "./Components/NotFound";

class App extends Component {
  componentWillMount() {}
  render() {
    return (
      <Router>
        <div style={{ height: "100%" }}>
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/"
            component={() => {
              return this.props.data.token != null ? (
                <Home />
              ) : (
                <Redirect
                  to={{
                    pathname: "/login"
                  }}
                />
              );
            }}
          />
          {/* <Route component={NotFound} /> */}
        </div>
      </Router>
    );
  }
}

export default connect(store => {
  return {
    data: store.login
  };
})(App);
