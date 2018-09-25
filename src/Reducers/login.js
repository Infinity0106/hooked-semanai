export default (
  state = {
    email: "",
    password: "",
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET_VALUE":
      newState[action.key] = action.value;
      break;
  }
  return newState;
};
