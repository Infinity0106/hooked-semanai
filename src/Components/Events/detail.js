import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Grid,
  Image,
  Header,
  Dimmer,
  Loader,
  Button,
  Icon
} from "semantic-ui-react";
import moment from "moment";
import * as Ctrl from "./ctrl";
import Product from "./../Products/product";

class EventoDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentWillMount() {
    Ctrl.getOneEvent.bind(this)();
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 500);
  }
  render() {
    if (this.props.detail_loading) {
      return (
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
      );
    } else {
      return (
        <Container>
          <Button icon onClick={Ctrl.goBack.bind(this)}>
            <Icon name="arrow circle left" />
            BACK
          </Button>
          <Header>{this.props.data.nombre}</Header>
          <Grid>
            <Grid.Column width={6}>
              <Image src={this.props.data.imagen} avatar size={"massive"} />
            </Grid.Column>
            <Grid.Column width={10}>
              {this.props.data.ubicacion}
              <br />
              {moment(this.props.data.fecha).format("DD/MM/YYYY")}
            </Grid.Column>
          </Grid>
          <Header>Productos requeridos</Header>
          <Button positive onClick={Ctrl.addProductToEvent.bind(this)}>
            Aggregar producto
          </Button>
          <Grid padded centered columns={3}>
            {this.props.data.productos &&
              this.props.data.productos.map(item => (
                <Product
                  key={Math.floor(Math.random() * 1000 + 0)}
                  id={item.$id}
                  name={item.nombre}
                  tags={item.marca}
                  desc={item.modelo}
                  image={item.imagen}
                  price={item.precio}
                />
              ))}
          </Grid>
        </Container>
      );
    }
  }
  componentDidMount() {}
  componentWillUnmount() {}
}
export default connect(store => {
  return {
    data: store.eventos.evento_detallado,
    detail_loading: store.eventos.detail_loading
  };
})(EventoDetail);
