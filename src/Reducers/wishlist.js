export default (
  state = {
    products: []
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET_WISHLIST_VALUE":
      newState[action.key] = action.value;
      break;
  }
  return newState;
};
