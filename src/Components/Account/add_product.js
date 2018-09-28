import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Segment,
  Form,
  Dropdown,
  Input,
  Label,
  Button
} from "semantic-ui-react";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    return (
      <Segment raise>
        <Form>
          <Form.Field>
            <label>Nombre del producto</label>
            <input placeholder="Nombre" type="text" />
          </Form.Field>
          <Form.Field>
            <label>Imagen url</label>
            <input placeholder="Imagen url" type="text" />
          </Form.Field>
          <Form.Field>
            <label>Categorias</label>
            <Dropdown
              placeholder="Categorias"
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
            <label>Precio</label>
            <Input labelPosition="right" type="text" placeholder="Costo">
              <Label basic>$</Label>
              <input />
              <Label>.00</Label>
            </Input>
          </Form.Field>
          <Form.Field>
            <label>Marca</label>
            <Dropdown
              placeholder="Agrega la marca"
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
          <Form.Field>
            <label>Modelo</label>
            <Dropdown
              placeholder="Agrega el modelo"
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
            Crear producto
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
})(AddProduct);
