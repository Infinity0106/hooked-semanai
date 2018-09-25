export default (
  state = {
    email: "",
    password: "",
    error: false,
    token: null
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET_LOGIN_VALUE":
      newState[action.key] = action.value;
      break;
  }
  return newState;
};
