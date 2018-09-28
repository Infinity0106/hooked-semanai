import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  withRouter
} from "react-router-dom";
import "./style.css";

import Account from "./../Account";
import Landing from "./../Landing";
import Products from "./../Products";
import Events from "./../Events";
import Detail from "./../Events/detail";
import ShoppingBag from "./../ShoppingBag";
import WishList from "./../WishList";
import Header from "./../Header";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <Router>
        <div style={{ height: "100%" }}>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/eventos" component={Events} />
            <Route exact path="/eventos/:id" component={Detail} />
            <Route exact path="/shopping_bag" component={ShoppingBag} />
            <Route exact path="/wishlist" component={WishList} />
          </Switch>
        </div>
      </Router>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default withRouter(
  connect(store => {
    return {
      // data: store.home
      data: null
    };
  })(Home)
);
