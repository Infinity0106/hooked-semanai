import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Home from "./Components/Home";
import Login from "./Components/Login";
import NotFound from "./Components/NotFound";

class App extends Component {
  componentWillMount() {}
  render() {
    return (
      <Router>
        <div style={{ height: "100%" }}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
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
