import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Segment,
  Header,
  Button,
  Dropdown,
  Form,
  Divider
} from "semantic-ui-react";

class WorkInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <Segment raised>
        <Header>Informacion laboral</Header>
        <Form>
          <Form.Field>
            <label>Empresa</label>
            <Dropdown
              placeholder="Busca a tu empresa"
              fluid
              search
              selection
              options={[
                { key: "1", value: "1", text: "1" },
                { key: "2", value: "2", text: "2" },
                { key: "3", value: "3", text: "3" }
              ]}
            />
          </Form.Field>
          <Button positive type="submit">
            Guardar cambios
          </Button>
        </Form>
        <Divider horizontal>OR</Divider>
        <Form>
          <Form.Group widths="equal">
            <Form.Field>
              <label>Nombre</label>
              <input placeholder="Nombre" type="text" />
            </Form.Field>
            <Form.Field>
              <label>Fecha creacion</label>
              <input placeholder="Fecha de creacion" type="date" />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <label>Ubicacion</label>
            <input placeholder="Calle, Num, Estado, Ciudad" type="text" />
          </Form.Field>
          <Button positive type="submit">
            Crear empresa
          </Button>
        </Form>
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
})(WorkInfo);
