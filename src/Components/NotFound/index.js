import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Container, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <Container>
        <Segment raised inverted>
          <Header>
            404 - NotFound
            <Link to="/">
              <Header.Subheader>
                Esto no existe, regresa a login
              </Header.Subheader>
            </Link>
          </Header>
        </Segment>
      </Container>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default connect(store => {
  return {
    // data: store.nameElementStore
  };
})(NotFound);
