import * as Backend from "./../../backend";

export function addToWishList() {
  if (this.props.logged_in) {
    this.props.dispatch(dispatch => {
      dispatch({
        type: this.state.wishlisted
          ? "ADD_PRODUCT_TO_WISHLIST"
          : "REMOVE_PRODUCT_TO_WISHLIST",
        value: this.props.id
      });
    });
    this.setState({ wishlisted: !this.state.wishlisted });
  } else {
    window.location.reload();
    this.props.history.push("/login");
  }
}

export function addToCart() {
  if (this.props.logged_in) {
    this.props.dispatch(dispatch => {
      dispatch({
        type: "ADD_PRODUCT_TO_CART",
        value: this.props.product
      });
    });
  } else {
    window.location.reload();
    this.props.history.push("/login");
  }
}

export function getInitialInfo() {
  this.props.dispatch(dispatch => {
    dispatch({
      type: "GET_PRODUCTS_INITIAL",
      payload: Backend.getAllProducts(this.props.data.page)
    });
    dispatch({
      type: "GET_PRODUCTS_PAGES_INITIAL",
      payload: Backend.getAllProductPages()
    });
  });
}

export function pageChange(e, data) {
  this.props.dispatch(dispatch => {
    dispatch({
      type: "SET_PRODUCTS_VALUE",
      page: data.activePage
    });
    dispatch({
      type: "GET_PRODUCTS_INITIAL",
      payload: Backend.getAllProducts(data.activePage)
    });
  });
}
