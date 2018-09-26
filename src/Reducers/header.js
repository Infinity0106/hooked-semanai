export default (
  state = {
    active: "landing"
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET_HEADER_VALUE":
      newState[action.key] = action.value;
      break;
  }
  return newState;
};
