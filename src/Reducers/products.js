export default (
  state = {
    page: 1,
    total_pages: 1,
    products: []
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "GET_PRODUCTS_INITIAL_FULFILLED":
      console.log("🛠🛠🛠🛠🛠");
      console.log(action.payload[0].$id);
      console.log("🛠🛠🛠🛠🛠");
      newState.products = action.payload;
      break;
    case "GET_PRODUCTS_PAGES_INITIAL_FULFILLED":
      newState.total_pages = action.payload;
      break;
    case "SET_PRODUCTS_VALUE":
      newState[action.key] = action.value;
      break;
  }
  return newState;
};
