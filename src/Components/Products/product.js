import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Image, Card, Icon, Label } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import * as Ctrl from "./ctrl";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { wishlisted: false };
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
              color: !this.props.logged_in
                ? null
                : this.state.wishlisted
                  ? "red"
                  : null,
              size: "big",
              onClick: Ctrl.addToWishList.bind(this)
            }}
          />
          <Card.Content>
            <Card.Header>
              <Label color="green" ribbon="right">
                $ {parseFloat(this.props.price).toFixed(2)}
              </Label>
              <p>{this.props.name}</p>
            </Card.Header>
            <Card.Meta>
              <span className="date">{this.props.tags}</span>
            </Card.Meta>
            <Card.Description>{this.props.desc}</Card.Description>
          </Card.Content>
          <Card.Content
            extra
            as="a"
            onClick={Ctrl.addToCart.bind(this)}
            textAlign="right"
          >
            Agregar al carrito
            <Icon name="plus cart" />
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
  })(Product)
);
