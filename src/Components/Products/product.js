import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Image, Card, Icon } from "semantic-ui-react";
import * as Ctrl from "./ctrl";

class Product extends Component {
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
            src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            label={{
              as: "a",
              corner: "left",
              icon: "heart",
              color: "red",
              size: "big",
              onClick: Ctrl.addToWishList.bind(this)
            }}
          />
          <Card.Content>
            <Card.Header>{this.props.name}</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
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
export default connect(store => {
  return {
    // data: store.nameElementStore
    logged_in: store.login.token != null
  };
})(Product);
