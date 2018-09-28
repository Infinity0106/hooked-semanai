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
        {this.props.logged_in ||
          (this.props.show_recomendation && (
            <div>
              <Header as="h1">Recomendados para ti</Header>
              <Grid>
                <Product 
                  name={"Danny & Nicole® Sleeveless Mesh Shantung Polka Dot Fit-and-Flare Dress - Petite"}
                  tags={"Danny & Nicole"}
                  desc={"fit and flare"}
                  image={"http://s7d9.scene7.com/is/image/JCPenney/DP1215201517063080M.tif?hei=380&amp;wid=380&op_usm=.4,.8,0,0&resmode=sharp2&op_usm=1.5,.8,0,0&resmode=sharp"}
                  price={"42.29"}
                />
              </Grid>
            </div>
        ))}
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
