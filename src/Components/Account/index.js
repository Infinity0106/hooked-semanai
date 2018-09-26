import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Grid, Menu, Header } from "semantic-ui-react";

import * as Ctrl from "./ctrl";

import WorkInfo from "./work_info";
import BasicInfo from "./basic_info";
import AddEvent from "./add_event";
import AddProduct from "./add_product";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <Container>
        <Header as="h1">Account</Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <Menu pointing secondary vertical>
                <Menu.Item
                  name="Informacion basica"
                  active={this.props.data.active === "basic"}
                  data_value="basic"
                  onClick={Ctrl.setValue.bind(this)}
                />
                <Menu.Item
                  name="Informacion trabajo"
                  active={this.props.data.active === "work"}
                  data_value="work"
                  onClick={Ctrl.setValue.bind(this)}
                />
                <Menu.Item
                  name="Mis eventos"
                  active={this.props.data.active === "events"}
                  data_value="events"
                  onClick={Ctrl.setValue.bind(this)}
                />
                <Menu.Item
                  name="Mis productos"
                  active={this.props.data.active === "products"}
                  data_value="products"
                  onClick={Ctrl.setValue.bind(this)}
                />
              </Menu>
            </Grid.Column>
            <Grid.Column width={13}>{this.renderBodyContent()}</Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
  renderBodyContent() {
    switch (this.props.data.active) {
      case "basic":
        return <BasicInfo />;
      case "work":
        return <WorkInfo />;
      case "events":
        return <AddEvent />;
      case "products":
        return <AddProduct />;
      default:
        return null;
    }
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default connect(store => {
  return {
    data: store.account
  };
})(Account);
