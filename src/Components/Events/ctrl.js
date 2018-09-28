import * as Backend from "./../../backend";

export function addToWishList() {
  this.props.dispatch(dispatch => {
    dispatch({
      type: "ADD_EVENT_TO_WISHLIST",
      value: "1"
    });
    dispatch({
      type: "SET_EVENT_WISHLISTED",
      value: !this.props.event.wishlisted
    });
  });
}

export function addToCart() {
  this.props.dispatch(dispatch => {
    dispatch({
      type: "ADD_EVENT_TO_CART",
      value: this.props.event
    });
  });
}

export function getInitialInfo() {
  let self = this;
  this.props.dispatch(dispatch => {
    dispatch({
      type: "GET_EVENT_INITIAL",
      payload: Backend.getAllEvents(this.props.data.page)
    });
    dispatch({
      type: "GET_EVENTS_PAGES_INITIAL",
      payload: Backend.getAllEventoPages()
    });
    if (self.props.logged_in) {
      dispatch({
        type: "GET_EVENT_RECOMMENDED",
        payload: Backend.getRecomendedEvents(self.props)
      });
    }
  });
}

export function pageChange(e, data) {
  this.props.dispatch(dispatch => {
    dispatch({
      type: "SET_EVENTS_VALUE",
      page: data.activePage
    });
    dispatch({
      type: "GET_EVENT_INITIAL",
      payload: Backend.getAllEvents(data.activePage)
    });
  });
}

export function goEventDetail() {
  let url = this.props.id.replace("https://db.itesm-03.carbonldp.com", "");
  this.props.history.push(url);
}

export function getOneEvent() {
  let self = this;
  this.props.dispatch(dispatch =>
    dispatch({
      type: "GET_DETAILED_EVENT",
      payload: Backend.getOneEvent(this.props.match.params.id)
    })
  );
  Backend.eventDetail(this.props.match.params.id, (payload, error) => {
    if (!error) {
      self.props.dispatch({
        type: "ADD_DETAILED_EVENT",
        value: payload
      });
    }
  });
}

export function addProductToEvent() {
  this.props.dispatch({
    type: "CLICK_ADD_PRODUCT_TO_EVENT",
    value: Backend.addProductToEvent(this.props.match.params.id)
  });
}
