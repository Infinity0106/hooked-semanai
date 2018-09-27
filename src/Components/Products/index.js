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
    console.log("🛠🛠🛠🛠🛠");
    console.log(this.props.data.products);
    console.log("🛠🛠🛠🛠🛠");
    return (
      <Container>
        {this.props.logged_in && (
          <div>
            <Header as="h1">Recomendados para ti</Header>
            <Grid>
              <Product />
            </Grid>
          </div>
        )}
        <Header as="h1">Productos</Header>
        <Grid padded centered columns={3}>
          {this.props.data.products.map((item, i) => {
            return (
              <Product
                key={item.$id}
                id={item.$id}
                name={item.nombre}
                tags={item.marca}
                desc={item.modelo}
                image={item.imagen}
                price={item.precio}
              />
            );
          })}
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
