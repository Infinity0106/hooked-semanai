import * as Backend from "./../../backend";

export function addToWishList() {
  this.props.dispatch(dispatch => {
    dispatch({
      type: "ADD_PRODUCT_TO_WISHLIST",
      value: "1"
    });
    dispatch({
      type: "SET_PRODUCT_WISHLISTED",
      value: !this.props.product.wishlisted
    });
  });
}

export function addToCart() {
  this.props.dispatch(dispatch => {
    dispatch({
      type: "ADD_PRODUCT_TO_CART",
      value: this.props.product
    });
  });
}

export function getInitialInfo() {
  this.props.dispatch(dispatch => {
    dispatch({
      type: "GET_PRODUCTS_INITIAL",
      payload: Backend.getAllProducts(this.props.data)
    });
    dispatch({
      type: "GET_PRODUCTS_PAGES_INITIAL",
      payload: Backend.getAllProductPages()
    });
  });
}

export function pageChange(e, data) {
  console.log("🛠🛠🛠🛠🛠");
  console.log(data);
  console.log("🛠🛠🛠🛠🛠");
  this.props.dispatch(dispatch => {
    dispatch({
      type: "SET_PRODUCTS_VALUE",
      page: data.activePage
    });
    dispatch({
      type: "GET_PRODUCTS_INITIAL",
      payload: Backend.getAllProducts(this.props.data)
    });
  });
}
