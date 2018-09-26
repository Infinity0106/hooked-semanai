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

export function renderWishlist(logged_in) {
  console.log("🛠🛠🛠🛠🛠");
  console.log(this);
  console.log("🛠🛠🛠🛠🛠");
  return logged_in
    ? {
        as: "a",
        corner: "left",
        icon: "heart",
        color: null,
        size: "big",
        onClick: addToWishList.bind(this)
      }
    : null;
}
