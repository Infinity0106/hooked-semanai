import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Grid, Header, Pagination } from "semantic-ui-react";
import Product from "./product";

import * as Ctrl from "./ctrl";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    Ctrl.getInitialInfo.bind(this)();
  }
  render() {
    return (
      <Container>
        {this.props.logged_in && <Header>Productos recomendados</Header>}
        <Header as="h1">Productos</Header>
        <Grid padded centered columns={3}>
          <Product
            name={"Xbox"}
            tags={"Tecnologia"}
            desc={"Newest gaming console from Microsoft"}
            image={
              "https://upload.wikimedia.org/wikipedia/commons/6/63/Microsoft-Xbox-One-S-Console-FL.jpg"
            }
          />
          <Product
            name={"T-Shirt"}
            tags={"Ropa"}
            desc={"Clasica camisa blanca"}
            image={
              "data:image/jpeg;base64,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"
            }
          />
          <Product
            name={"Balon de Soccer"}
            tags={"Deportes"}
            desc={"Balon redondo para jugar futbol soccer"}
            image={
              "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/willthenewwo.jpg"
            }
          />
          <Product
            name={"Guitarra"}
            tags={"Musica"}
            desc={"Guitarra acustica de 6 cuerdas"}
            image={
              "https://upload.wikimedia.org/wikipedia/commons/1/17/C.F._Martin_000-28EC_Eric_Clapton_model_Acoustic_Guitar.jpg"
            }
          />
          <Product
            name={"Audifonos"}
            tags={"Musica, Tecnologia"}
            desc={"Audifonos de nivel profesional"}
            image={
              "data:image/jpeg;base64,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"
            }
          />
          <Product
            name={"Camisa de Packers"}
            tags={"Deportes, Ropa"}
            desc={"Camisa de futbol americano de los Packers"}
            image={
              "https://c1.staticflickr.com/6/5026/5665255332_061f9e8a4f.jpg"
            }
          />
        </Grid>
        <Grid centered style={{ marginBottom: 60 }}>
          <Pagination
            defaultActivePage={this.props.data.page}
            firstItem={null}
            lastItem={null}
            pointing
            secondary
            totalPages={this.props.data.total_pages}
            onPageChange={Ctrl.pageChange.bind(this)}
          />
        </Grid>
        {this.props.logged_in && (
          <div>
            <Header as="h1">Recomendados para ti</Header>
            <Grid>
              <Product />
            </Grid>
          </div>
        )}
      </Container>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default connect(store => {
  return {
    // data: store.nameElementStore
    data: store.products,
    logged_in: store.login.token != null
  };
})(Products);
