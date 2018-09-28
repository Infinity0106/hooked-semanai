import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Menu,
  Segment,
  Container,
  Dropdown,
  Image,
  Icon,
  Button,
  Label
} from "semantic-ui-react";
import * as Ctrl from "./ctrl";
import { withRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    Ctrl.getInitialInfo.bind(this)();
  }
  render() {
    return (
      <Segment inverted attached basic>
        <Menu inverted pointing secondary>
          <Container>
            <Menu.Item
              name="Home"
              data_path="/"
              data_key="landing"
              active={this.props.active === "landing"}
              onClick={Ctrl.menuClick.bind(this)}
            />
            <Menu.Item
              name="Eventos"
              data_path="/eventos"
              data_key="event"
              active={this.props.active === "event"}
              onClick={Ctrl.menuClick.bind(this)}
            />
            <Menu.Item
              name="Productos"
              data_path="/products"
              data_key="products"
              active={this.props.active === "products"}
              onClick={Ctrl.menuClick.bind(this)}
            />
            <Menu.Menu position="right">
              {this.props.exchange != 0 && (
                <Menu.Item>
                  <p>
                    $1 MXN = ${(1 / this.props.exchange).toFixed(2)}
                    USD
                  </p>
                </Menu.Item>
              )}
              {!this.props.logged_in && (
                <Button
                  basic
                  inverted
                  icon
                  labelPosition="left"
                  onClick={Ctrl.logIn.bind(this)}
                >
                  <Icon name="user circle outline" />
                  Login
                </Button>
              )}
              {this.props.logged_in && (
                <Menu.Item as="a">
                  <Icon name="heart" />
                  {this.props.has_wishlist && (
                    <Label color="green" circular floating empty />
                  )}
                </Menu.Item>
              )}
              {this.props.logged_in && (
                <Menu.Item as="a">
                  <Icon name="shop" />
                  {this.props.has_shopping_bag && (
                    <Label color="green" circular floating empty />
                  )}
                </Menu.Item>
              )}
              {this.props.logged_in && (
                <Dropdown
                  item
                  simple
                  style={{ padding: 5 }}
                  trigger={
                    <span>
                      <Image
                        avatar
                        src={
                          "https://s3.amazonaws.com/uifaces/faces/twitter/kuldarkalvik/128.jpg"
                        }
                      />{" "}
                      {this.props.name}
                    </span>
                  }
                >
                  <Dropdown.Menu>
                    <Dropdown.Item
                      as="a"
                      onClick={Ctrl.accountClick.bind(this)}
                    >
                      Mi perfil
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as="a" onClick={Ctrl.logOut.bind(this)}>
                      Log-out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </Menu.Menu>
          </Container>
        </Menu>
      </Segment>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default withRouter(
  connect(store => {
    return {
      // data: store.nameElementStore
      active: store.header.active,
      logged_in: store.login.token != null,
      name: store.login.nombre,
      has_shopping_bag: store.shopping_bag.products.length > 0,
      has_wishlist: store.wishlist.products.length > 0,
      exchange: store.header.exchange
    };
  })(Header)
);
