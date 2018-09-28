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
  Header,
  Inverted
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
    console.log("🛠🛠🛠🛠🛠");
    console.log(this.props.beer);
    console.log("🛠🛠🛠🛠🛠");
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
              <Image src='https://romti.com.mx/wp-content/uploads/2018/05/cmo-empezar-tu-negocio-en-el-e-commerce.jpg' size='medium' rounded/>
            </Grid.Column>
            <Grid.Column width={10}>
              <Grid columns="three" divided>
                <Grid.Row>
                  <Grid.Column>
                    <Header as='h2' inverted color='grey'>
                      <Icon name="contao" />
                        <Header.Content >
                          Mario's contact
                        <Header.Subheader>Phone 8120283127</Header.Subheader>
                      <Header.Subheader>Mail mrio@ecommerce.com</Header.Subheader>
                      </Header.Content>
                    </Header>
                  </Grid.Column>
                  <Grid.Column>
                     <Header as='h2' inverted color='grey'>
                      <Icon name='location arrow' />
                        <Header.Content>
                          Locate Mario
                          <Header.Subheader>Av Eugenio Garza Sada</Header.Subheader>
                        <Header.Subheader>2501 sur, Mty, Nuevo Leon</Header.Subheader>
                      </Header.Content>
                    </Header>
                  </Grid.Column>
                  <Grid.Column>
                    <Header as='h2' inverted color='grey'>
                      <Icon name='google play' />
                        <Header.Content>
                          Dowload the app
                        <Header.Subheader>For Play Store</Header.Subheader>
                        <Header.Subheader>Easiest way to buy</Header.Subheader>
                      </Header.Content>
                    </Header>
                  </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                  <Grid.Column>
                    <Header as='h2' inverted color='grey'>
                      <Icon name="contao" />
                        <Header.Content >
                          Ivan's contact
                        <Header.Subheader>Phone 8100113227</Header.Subheader>
                      <Header.Subheader>Mail ivan@ecommerce.com</Header.Subheader>
                      </Header.Content>
                    </Header>
                  </Grid.Column>
                  <Grid.Column>
                    <Header as='h2' inverted color='grey'>
                      <Icon name='location arrow' />
                        <Header.Content>
                          Locate Ivan
                          <Header.Subheader>Prol los soles #200</Header.Subheader>
                        <Header.Subheader>Torres Martel, 3 poniente</Header.Subheader>
                        <Header.Subheader>Piso 3, Valle Oriente</Header.Subheader>
                      </Header.Content>
                    </Header>
                  </Grid.Column>
                  <Grid.Column>
                    <Header as='h2' inverted color='grey'>
                      <Icon name='apple' />
                        <Header.Content>
                          Dowload the app
                        <Header.Subheader>For IOS</Header.Subheader>
                        <Header.Subheader>Keep it simple</Header.Subheader>
                      </Header.Content>
                    </Header>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column width={3}>
              <Image src='https://mglobalmarketing.es/wp-content/uploads/2017/11/eCommerce.jpg' size='medium' rounded/>
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
