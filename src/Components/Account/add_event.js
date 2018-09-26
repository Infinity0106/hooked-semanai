import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment } from "semantic-ui-react";

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <Segment>
        <p />
      </Segment>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default connect(store => {
  return {
    data: store.nameElementStore
  };
})(AddEvent);
