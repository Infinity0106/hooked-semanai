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
