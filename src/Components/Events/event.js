import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Image, Card, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import * as Ctrl from "./ctrl";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <Grid.Column>
        <Card>
          <Image
            src={this.props.image}
            label={{
              as: "a",
              corner: "left",
              icon: "heart",
              color: !this.props.logged_in ? null : "red",
              size: "big",
              onClick: Ctrl.addToWishList.bind(this)
            }}
          />
          <Card.Content>
            <Card.Header>{this.props.name}</Card.Header>
            <Card.Meta>
              <span className="date">{this.props.tags}</span>
            </Card.Meta>
            <Card.Description>{this.props.desc}</Card.Description>
          </Card.Content>
          <Card.Content
            extra
            as="a"
            onClick={Ctrl.goEventDetail.bind(this)}
            textAlign="right"
          >
            Ver detalles
            <Icon name="info" />
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}
export default withRouter(
  connect(store => {
    return {
      // data: store.nameElementStore
      logged_in: store.login.token != null
    };
  })(Event)
);
