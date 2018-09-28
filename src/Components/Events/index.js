import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Header, Grid, Image, Pagination } from "semantic-ui-react";
import Event from "./event";
import moment from "moment";
import * as Ctrl from "./ctrl";

class Events extends Component {
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
        <Header as="h1">Eventos</Header>
        <Grid padded centered columns={2}>
          {this.props.data.eventos.map((ele, index) => {
            return (
              <Event
                key={ele.$id}
                id={ele.$id}
                name={ele.name}
                tags={"Ropa"}
                desc={`${ele.ubicacion} ${moment(ele.fecha).format(
                  "DD/MM/YYYY"
                )}`}
                image={ele.imagen}
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
    data: store.eventos,
    logged_in: store.login.token != null
  };
})(Events);
