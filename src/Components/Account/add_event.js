import React, { Component } from "react";
import { connect } from "react-redux";
import { Segment, Form, Dropdown, Button } from "semantic-ui-react";

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Nombre del evento</label>
            <input placeholder="Nombre" type="text" />
          </Form.Field>
          <Form.Field>
            <label>Fecha nacimiento</label>
            <input placeholder="Dia del evento" type="date" />
          </Form.Field>
          <Form.Field>
            <label>Productos necesarios</label>
            <Dropdown
              placeholder="Productos"
              fluid
              search
              selection
              multiple
              options={[
                { key: "1", value: "1", text: "1" },
                { key: "2", value: "2", text: "2" },
                { key: "3", value: "3", text: "3" }
              ]}
            />
          </Form.Field>
          <Form.Field>
            <label>Edades dirigidas</label>
            <Dropdown
              placeholder="Edades"
              fluid
              search
              selection
              multiple
              options={[
                { key: "1", value: "1", text: "1" },
                { key: "2", value: "2", text: "2" },
                { key: "3", value: "3", text: "3" }
              ]}
            />
          </Form.Field>
          <Form.Field>
            <label>Ubicacion</label>
            <input placeholder="Calle, Num, Estado, Ciudad" type="text" />
          </Form.Field>
          <Button positive type="submit">
            Crear evento
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
})(AddEvent);
