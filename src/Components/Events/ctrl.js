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
  this.props.dispatch(dispatch => {
    dispatch({
      type: "GET_EVENT_INITIAL",
      payload: Backend.getAllEvents(this.props.data)
    });
    dispatch({
      type: "GET_EVENTS_PAGES_INITIAL",
      payload: Backend.getAllEventoPages()
    });
  });
}

export function pageChange(e, data) {
  console.log("🛠🛠🛠🛠🛠");
  console.log(data);
  console.log("🛠🛠🛠🛠🛠");
  this.props.dispatch(dispatch => {
    dispatch({
      type: "SET_EVENTS_VALUE",
      page: data.activePage
    });
    dispatch({
      type: "GET_EVENTS_INITIAL",
      payload: Backend.getAllEvents(this.props.data)
    });
  });
}
