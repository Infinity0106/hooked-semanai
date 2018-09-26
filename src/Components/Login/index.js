import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Segment,
  Input,
  Icon,
  Image,
  Header,
  Button,
  Divider
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
            <Segment raised>{this.renderForm()}</Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }

  renderForm() {
    if (!this.props.data.signed) {
      return (
        <div>
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
          <Button secondary fluid onClick={Ctrl.login.bind(this)}>
            Login
          </Button>
          <Divider horizontal>OR</Divider>
          <Button positive fluid onClick={Ctrl.signup.bind(this)}>
            Signup
          </Button>
        </div>
      );
    } else {
      return (
        <div>
          <Input
            style={{ marginBottom: 10 }}
            fluid
            iconPosition="left"
            placeholder="Full name"
            type="text"
            autoFocus
          >
            <Icon name="user" />
            <input />
          </Input>
          <Input
            style={{ marginBottom: 10 }}
            fluid
            iconPosition="left"
            placeholder="Email"
            type="email"
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
          <Button secondary fluid onClick={Ctrl.login.bind(this)}>
            Signup
          </Button>
          <Divider horizontal>OR</Divider>
          <Button positive fluid onClick={Ctrl.signup.bind(this)}>
            Login
          </Button>
        </div>
      );
    }
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default connect(store => {
  return {
    data: store.login
  };
})(Login);
