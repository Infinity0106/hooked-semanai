import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Header, Grid, Image } from "semantic-ui-react";
import Event from "./event";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {}
  render() {
    console.log("🛠🛠🛠🛠🛠");
    console.log(this.props);
    console.log("🛠🛠🛠🛠🛠");
    return (
      <Container>
        <Header as="h1">Eventos</Header>
        <Grid padded centered columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Event
                name={"Palacio de Hierro Fashion Show"}
                tags={"Ropa"}
                desc={"5 de Octubre 2018"}
                image={
                  "/images/fashionShow.jpg"
                }
              />
            </Grid.Column>
            <Grid.Column>
              <Event
                name={"Concierto de The Killers"}
                tags={"Musica"}
                desc={"4 Noviembre 2018"}
                image={
                  "/images/TheKillers.jpg"
                }
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Event
                name={"Pal Norte Music Festival"}
                tags={"Musica"}
                desc={"20-21 de Abril 2019"}
                image={
                  "/images/musicFestival.jpg"
                }
              />
            </Grid.Column>
            <Grid.Column>
              <Event
                name={"TedX Tim Berners Lee TechTalk"}
                tags={"Tecnologia"}
                desc={"7 de Diciembre 2018"}
                image={
                  "/images/TedX.jpg"
                }
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Event
                name={"Concierto de Calvin Harris"}
                tags={"Musica"}
                desc={"15 de Octubre 2018"}
                image={
                  "/images/calvinHarris.jpg"
                }
              />
            </Grid.Column>
            <Grid.Column>
              <Event
                name={"Carrera 5k/10k Color Run"}
                tags={"Deportes"}
                desc={"20 de Octubre 2018"}
                image={
                  "/images/colorRun.jpg"
                }
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {this.props.logged_in && (
          <div>
            <Header as="h1">Recomendados para ti</Header>
            <Grid columns={2} divided>
              <Grid.Column>
                <Grid as="a">
                  <Grid.Column width={5}>
                    <Image
                      src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png"
                      avatar
                    />
                  </Grid.Column>
                  <Grid.Column width={11}>
                    <Header as="h4">titulo</Header>
                    <p>descripcion</p>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
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
    data: null,
    logged_in: store.login.token != null
  };
})(Events);
