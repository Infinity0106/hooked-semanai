import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Grid, Image, Menu, Header } from "semantic-ui-react";

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
                  name="home"
                  active={false}
                  onClick={() => {
                    alert("hello");
                  }}
                />
                <Menu.Item
                  name="messages"
                  active={true}
                  onClick={() => {
                    alert("hello");
                  }}
                />
                <Menu.Item
                  name="friends"
                  active={false}
                  onClick={() => {
                    alert("hello");
                  }}
                />
              </Menu>
            </Grid.Column>
            <Grid.Column width={13}>
              <Image src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png" />
            </Grid.Column>
          </Grid.Row>
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
    data: null
  };
})(Account);
