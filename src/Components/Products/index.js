import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Grid, Card, Icon, Image, Header } from "semantic-ui-react";
import * as Ctrl from "./ctrl";
import Product from "./product";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <Container>
        {this.props.logged_in && <Header>Productos recomendados</Header>}
        <Header as="h1">Productos</Header>
        <Grid padded centered columns={3}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </Grid>
      </Container>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default connect(store => {
  return {
    // data: store.nameElementStore
    logged_in: store.login.token != null
  };
})(Products);
