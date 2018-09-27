import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Header, Grid, Image } from "semantic-ui-react";

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
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
            </Grid.Column>
            <Grid.Column>
              <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
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
