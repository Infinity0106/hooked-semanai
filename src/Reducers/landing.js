export default (
  state = {
    active: "landing",
    tags: [],
    products: [],
    beer: null
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "GET_LANDING_TOP_TAGS_FULFILLED":
      newState.tags = action.payload.bindings.map(ele => {
        return { name: ele.tagName };
      });
      break;
    case "GET_LANDING_PRODUCTS_FULFILLED":
      newState.products = action.payload;
      break;
    case "GET_RANDOM_BEER_FULFILLED":
      newState.beer = action.payload.data[0];
      break;
    case "SET_LANDING_VALUE":
      newState[action.key] = action.value;
      break;
  }
  return newState;
};
