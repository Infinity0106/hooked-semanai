import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Segment,
  Input,
  Icon,
  Image,
  Header,
  Button
} from "semantic-ui-react";
import Error from "./../Error";
import Ctrl from "./ctrl";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <div style={{ height: "100%" }}>
        <Error open={this.props.data.error}>
          <p>Error en login, usuario o contraseña vacía</p>
        </Error>
        <Grid
          style={{ height: "100%" }}
          verticalAlign="middle"
          textAlign="center"
        >
          <Grid.Column style={{ maxWidth: 500 }}>
            <Image src="/logo.svg" size="tiny" centered />
            <Header as="h2" style={{ marginTop: 0 }}>
              Hooked
              <Header.Subheader>
                Mejores sugerencias, mejores compras
              </Header.Subheader>
            </Header>
            <Segment raised>
              <Input
                style={{ marginBottom: 10 }}
                fluid
                iconPosition="left"
                placeholder="Email"
                type="email"
                autoFocus
                onChange={e => Ctrl.setValue.bind(this, e, "email")()}
              >
                <Icon name="at" />
                <input />
              </Input>
              <Input
                fluid
                iconPosition="left"
                placeholder="Password"
                type="password"
                style={{ marginBottom: 10 }}
                onChange={e => Ctrl.setValue.bind(this, e, "password")()}
              >
                <Icon name="lock" />
                <input />
              </Input>
              <Button positive fluid onClick={Ctrl.login.bind(this)}>
                Login
              </Button>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default connect(store => {
  return {
    data: store.login
  };
})(Login);
