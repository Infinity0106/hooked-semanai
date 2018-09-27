export default (
  state = {
    products: []
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET_SHOPPING_BAG_VALUE":
      newState[action.key] = action.value;
      break;
  }
  return newState;
};
