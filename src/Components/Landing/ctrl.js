import * as Backend from "../../backend";

export function getInitialValues() {
  this.props.dispatch(dispatch => {
    dispatch({
      type: "GET_RANDOM_BEER",
      payload: Backend.getBeerOfTheDay()
    });
    dispatch({
      type: "GET_LANDING_TOP_TAGS",
      payload: Backend.getTopTags()
    }).then(() => {
      dispatch({
        type: "GET_LANDING_PRODUCTS",
        payload: Backend.getLandingProducts()
      });
    });
  });
}

export function changeProducts(tag_name = undefined) {
  this.props.dispatch(dispatch => {
    dispatch({
      type: "GET_LANDING_PRODUCTS",
      payload: Backend.getLandingProducts(tag_name)
    });
  });
}
