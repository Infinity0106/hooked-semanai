export default (
  state = {
    active: "basic"
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET_ACCOUNT_VALUE":
      newState[action.key] = action.value;
      break;
  }
  return newState;
};
