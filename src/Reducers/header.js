export default (
  state = {
    active: "landing",
    exchange: 0
  },
  action
) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET_EXCHANGE_RATE_FULFILLED":
      newState.exchange = action.payload.data.rates["USD"];
      break;
    case "SET_HEADER_VALUE":
      newState[action.key] = action.value;
      break;
  }
  return newState;
};
