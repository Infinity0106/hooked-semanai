import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Card,
  Image,
  Icon,
  Sidebar,
  Menu,
  Checkbox,
  Grid,
  Header
} from "semantic-ui-react";
import Slider from "react-slick";
import * as Ctrl from "./ctrl";
import Product from "../Products/product";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    Ctrl.getInitialValues.bind(this)();
  }
  render() {
    return (
      <div>
        <div
          style={{
            maxHeight: 600,
            verticalAlign: "center",
            overflow: "hidden"
          }}
        >
          <Slider
            dots
            infinite
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay
            autoplaySpeed={2000}
            cssEase={"ease-in"}
            adaptiveHeight
          >
            <div>
              <Image src="/banner_1.jpeg" fluid />
            </div>
            <div>
              <Image src="/banner_2.jpeg" fluid />
            </div>
            {this.props.beer && (
              <Grid centered inverted>
                <Container text>
                  <Image
                    src={this.props.beer.image_url}
                    floated="left"
                    style={{ maxHeight: 600 }}
                  />
                  <Header inverted>
                    {this.props.beer.name}

                    <Header.Subheader>
                      {this.props.beer.contributed_by}
                    </Header.Subheader>
                  </Header>
                  <p style={{ textAlign: "left" }}>
                    {this.props.beer.description}
                  </p>
                  <Header as="h4" inverted>
                    Tips:
                  </Header>
                  <p style={{ textAlign: "left" }}>
                    {this.props.beer.brewers_tips}
                  </p>
                </Container>
              </Grid>
            )}
          </Slider>
        </div>

        <Sidebar.Pushable>
          <Sidebar as={Menu} animation="push" vertical visible width={"wide"}>
            <Menu.Item style={{ textAlign: "left", paddingRight: 50 }}>
              Comprar por
            </Menu.Item>
            {this.props.tags.map(ele => (
              <Menu.Item style={{ textAlign: "left", paddingRight: 50 }}>
                <Checkbox
                  label={ele.name}
                  onClick={Ctrl.changeProducts.bind(this, ele.name)}
                />
              </Menu.Item>
            ))}
          </Sidebar>
          <Sidebar.Pusher
            as="div"
            style={{
              paddingTop: 10,
              paddingLeft: 10,
              paddingRight: 10
            }}
          >
            <Container>
              <Grid padded centered columns={3}>
                {this.props.products.map(item => (
                  <Product
                    key={item.$id}
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
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <Grid inverted padded>
          <Grid.Row color="black">
            <Grid.Column width={3}>
              <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
            </Grid.Column>
            <Grid.Column width={10}>
              <Grid columns="three" divided>
                <Grid.Row>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column width={3}>
              <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
  componentDidMount() {}
  componentWillUnmount() {}
}

export default connect(store => {
  return {
    // data: store.nameElementStore
    tags: store.landing.tags,
    beer: store.landing.beer,
    products: store.landing.products
  };
})(Landing);
