import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Segment, Container, Dropdown, Image } from "semantic-ui-react";
import * as Ctrl from "./ctrl";
import { withRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <Segment inverted attached={"top"}>
        <Menu inverted pointing secondary>
          <Container>
            <Menu.Item
              name="home"
              data_path="/"
              data_key="landing"
              active={this.props.active === "landing"}
              onClick={Ctrl.menuClick.bind(this)}
            />
            <Menu.Item
              name="messages"
              active={this.props.active === "landing"}
              onClick={Ctrl.menuClick.bind(this)}
            />
            <Menu.Item
              name="friends"
              active={this.props.active === "landing"}
              onClick={Ctrl.menuClick.bind(this)}
            />
            <Menu.Menu position="right">
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
                    {"juancho perez"}
                  </span>
                }
              >
                <Dropdown.Menu>
                  <Dropdown.Item>Mi perfil</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as="a" onClick={Ctrl.logOut.bind(this)}>
                    Log-out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
      active: store.header.active
    };
  })(Header)
);
