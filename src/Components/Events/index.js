import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Header, Grid, Image, Pagination } from "semantic-ui-react";
import Event from "./event";
import moment from "moment";
import * as Ctrl from "./ctrl";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentWillMount() {
    Ctrl.getInitialInfo.bind(this)();
    setTimeout(() => {
      this.setState({ loading: false });
    }, 500);
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
        {(this.props.logged_in || this.props.show_recomendation) && (
          <div>
            <Header as="h1">Recomendados para ti</Header>
            <Grid padded centered columns={2}>
              <Event
                name={null}
                tags={"Ropa"}
                desc={"3634 Goldner Route, Maryland, Turkmenistan 11/10/2018"}
                image={null}
              />
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
