import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <Container>
        <p>produc</p>
      </Container>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default connect(store => {
  return {
    // data: store.nameElementStore
    data: null
  };
})(Products);
