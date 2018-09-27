export default (
  state = {
    nombre: "",
    email: "",
    password: "",
    error: false,
    error_msg: "",
    token: null,
    signed: false
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET_BACKEND_LOGIN_VALUE_FULFILLED":
      newState.nombre = action.payload.nombre;
      newState.email = action.payload.email;
      newState.password = "";
      newState.token = action.payload.password;
      break;
    case "SET_BACKEND_LOGIN_VALUE_REJECTED":
      newState.error = true;
      newState.error_msg = action.payload;
      break;
    case "SET_BACKEND_SIGNUP_VALUE_FULFILLED":
      newState.token = action.payload;
      break;
    case "SET_BACKEND_SIGNUP_VALUE_REJECTED":
      newState.error = true;
      newState.error_msg = action.payload;
      break;
    case "SET_LOGIN_VALUE":
      newState[action.key] = action.value;
      break;
  }
  return newState;
};
